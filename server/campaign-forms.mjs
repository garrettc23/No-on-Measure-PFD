import { createHash } from 'node:crypto';

export const RECIPIENT = 'matt@klinkcampaigns.com';
const LIMIT = 16_384;
const TOPICS = new Set(['General question', 'Volunteer', 'Media', 'Endorsement']);
const unavailable = 'We couldn’t send this right now. Your entries are still here. Please try again or email matt@klinkcampaigns.com.';

function validate(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid submission.');
  const field = (name, max, required = true) => {
    const value = body[name];
    if (value === undefined && !required) return '';
    if (typeof value !== 'string' || value.length > max || (required && !value.trim()) || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)) throw new Error(`Please check the ${name} field.`);
    return value.trim();
  };
  const kind = field('kind', 10);
  if (!['signup', 'contact'].includes(kind)) throw new Error('Invalid form.');
  const submissionId = field('submissionId', 36);
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(submissionId)) throw new Error('Please reload the page and try again.');
  const email = field('email', 254);
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) throw new Error('Enter a valid email address.');
  const phone = field('phone', 30, false);
  if (phone && (phone.replace(/\D/g, '').length < 10 || phone.replace(/\D/g, '').length > 15)) throw new Error('Enter a phone number with 10 to 15 digits.');
  const data = { kind, submissionId, email, phone, website: field('website', 200, false) };
  if (kind === 'signup') {
    data.firstName = field('firstName', 80);
    data.lastName = field('lastName', 80);
    data.zip = field('zip', 10);
    if (!/^\d{5}(-\d{4})?$/.test(data.zip)) throw new Error('Enter a 5-digit ZIP code or ZIP+4.');
  } else {
    data.name = field('name', 160);
    data.topic = field('topic', 30);
    if (!TOPICS.has(data.topic)) throw new Error('Choose a valid topic.');
    data.message = field('message', 5000);
  }
  return data;
}

async function readBody(req) {
  if (Number(req.headers['content-length']) > LIMIT) throw new Error('Submission is too large.');
  // Vercel parses JSON before calling /api handlers; Astro's dev middleware supplies a stream.
  if (req.body !== undefined) {
    const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    if (Buffer.byteLength(raw) > LIMIT) throw new Error('Submission is too large.');
    return JSON.parse(raw);
  }
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += Buffer.byteLength(chunk);
    if (size > LIMIT) throw new Error('Submission is too large.');
    chunks.push(Buffer.from(chunk));
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export function createCampaignHandler({ env = process.env, send = fetch, now = Date.now } = {}) {
  // A best-effort per-instance limit, not a distributed rate limiter.
  const attempts = new Map();
  return async (req, res) => {
    const reply = (status, body) => {
      res.statusCode = status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.end(JSON.stringify(body));
    };
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return reply(405, { error: 'Use the signup or contact form to submit.' });
    }
    const origins = new Set([new URL(env.PUBLIC_SITE_URL || 'https://www.pfdno.com').origin, 'https://pfdno.com']);
    if (env.VERCEL_URL) origins.add(`https://${env.VERCEL_URL}`);
    if (!env.VERCEL) {
      origins.add('http://localhost:4321');
      origins.add('http://127.0.0.1:4321');
    }
    if (!origins.has(req.headers.origin)) return reply(403, { error: 'Please submit using the form on this website.' });
    if (!req.headers['content-type']?.toLowerCase().startsWith('application/json')) return reply(415, { error: 'Invalid submission format.' });
    let data;
    try { data = validate(await readBody(req)); }
    catch (error) { return reply(400, { error: error instanceof SyntaxError ? 'Invalid submission.' : error.message }); }
    if (data.website) return reply(400, { error: 'Unable to submit this form.' });
    if (!env.RESEND_API_KEY || !env.CAMPAIGN_FROM_EMAIL) return reply(503, { error: unavailable });

    const ip = env.VERCEL ? req.headers['x-vercel-forwarded-for'] : req.socket?.remoteAddress;
    const key = createHash('sha256').update(String(ip || 'unknown')).digest('hex');
    const time = now();
    for (const [entry, state] of attempts) if (state.until <= time) attempts.delete(entry);
    const bucket = attempts.get(key) || { count: 0, until: time + 600_000 };
    if (bucket.count >= 5) {
      res.setHeader('Retry-After', String(Math.ceil((bucket.until - time) / 1000)));
      return reply(429, { error: 'Too many attempts. Please wait a few minutes or email matt@klinkcampaigns.com.' });
    }
    if (attempts.size >= 5000 && !attempts.has(key)) attempts.delete(attempts.keys().next().value);
    bucket.count++;
    attempts.set(key, bucket);

    const signup = data.kind === 'signup';
    const text = signup
      ? `New campaign signup\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nZIP code: ${data.zip}`
      : `New campaign message\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nTopic: ${data.topic}\n\nMessage:\n${data.message}`;
    try {
      const response = await send('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `campaign/${data.submissionId}` },
        body: JSON.stringify({ from: env.CAMPAIGN_FROM_EMAIL, to: [RECIPIENT], reply_to: data.email, subject: signup ? 'Measure PFD: new campaign signup' : `Measure PFD: ${data.topic}`, text }),
        signal: AbortSignal.timeout(10_000),
      });
      const result = await response.json();
      if (!response.ok || !result.id) return reply(502, { error: unavailable });
      return reply(200, { ok: true, message: signup ? 'Thank you. Your signup has been sent to Matt at the campaign.' : 'Your message has been sent to Matt at the campaign.' });
    } catch {
      // Never log submitted personal information, provider responses, or credentials.
      return reply(502, { error: unavailable });
    }
  };
}
