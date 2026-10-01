import test from 'node:test';
import assert from 'node:assert/strict';
import { Readable } from 'node:stream';
import { createCampaignHandler, RECIPIENT } from './campaign-forms.mjs';

const env = { RESEND_API_KEY: 'test-key-not-real', CAMPAIGN_FROM_EMAIL: 'Campaign <forms@example.invalid>' };
const signup = { kind: 'signup', submissionId: '11223344-5566-4788-99aa-bbccddeeff00', firstName: 'Test', lastName: 'Supporter', email: 'test@example.invalid', zip: '91101', phone: '', website: '' };
const contact = { kind: 'contact', submissionId: '11223344-5566-4788-99aa-bbccddeeff11', name: 'Test Sender', email: 'sender@example.invalid', topic: 'Volunteer', message: 'A test question.\nSecond line.', phone: '2025550100', website: '' };
async function invoke(handler, body = signup, { method = 'POST', origin = 'http://localhost:4321', headers = {}, stream = false } = {}) {
  const req = stream ? Readable.from([JSON.stringify(body)]) : { body };
  Object.assign(req, { method, headers: { origin, 'content-type': 'application/json', ...headers }, socket: { remoteAddress: '127.0.0.1' } });
  const res = { headers: {}, setHeader(name, value) { this.headers[name] = value; }, end(value) { this.body = JSON.parse(value); } };
  await handler(req, res);
  return res;
}
function recorder(response = () => new Response(JSON.stringify({ id: 'mock-email-id' }), { status: 200 })) {
  const calls = [];
  const handler = createCampaignHandler({ env, send: async (url, options) => { calls.push({ url, options, body: JSON.parse(options.body) }); return response(); } });
  return { calls, handler };
}

test('both forms email only Matt, preserve fields, and use visitor reply-to', async () => {
  for (const data of [signup, contact]) {
    const { calls, handler } = recorder();
    const result = await invoke(handler, { ...data, to: 'attacker@example.invalid' }, { stream: true });
    assert.equal(result.statusCode, 200);
    assert.equal(result.body.ok, true);
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, 'https://api.resend.com/emails');
    assert.deepEqual(calls[0].body.to, [RECIPIENT]);
    assert.equal(calls[0].body.reply_to, data.email);
    assert.ok(calls[0].body.text.includes(data.kind === 'signup' ? data.zip : data.message));
    assert.equal(calls[0].body.html, undefined);
    assert.equal(result.headers['Cache-Control'], 'no-store');
  }
});
test('rejects invalid fields, unsupported forms, honeypot, and email header injection without sending', async () => {
  const { calls, handler } = recorder();
  for (const patch of [{ email: 'invalid' }, { email: 'test@example.com\r\nBcc: other@example.com' }, { zip: '12' }, { firstName: '' }, { firstName: 'x'.repeat(81) }, { phone: '123' }, { kind: 'other' }, { submissionId: 'bad' }, { website: 'bot' }]) {
    assert.equal((await invoke(handler, { ...signup, ...patch })).statusCode, 400);
  }
  for (const patch of [{ topic: 'Other' }, { message: '' }, { message: 'x'.repeat(5001) }]) assert.equal((await invoke(handler, { ...contact, ...patch })).statusCode, 400);
  assert.equal(calls.length, 0);
});
test('rejects foreign origins, unsafe methods, wrong content types and oversized payloads', async () => {
  const { calls, handler } = recorder();
  assert.equal((await invoke(handler, signup, { origin: 'https://other.example' })).statusCode, 403);
  assert.equal((await invoke(handler, signup, { method: 'GET' })).statusCode, 405);
  assert.equal((await invoke(handler, signup, { headers: { 'content-type': 'text/plain' } })).statusCode, 415);
  assert.equal((await invoke(handler, { ...signup, extra: 'x'.repeat(17000) }, { stream: true })).statusCode, 400);
  assert.equal(calls.length, 0);
});
test('missing credentials fail closed and do not call a provider', async () => {
  let sent = false;
  const handler = createCampaignHandler({ env: {}, send: async () => { sent = true; } });
  const result = await invoke(handler);
  assert.equal(result.statusCode, 503);
  assert.equal(result.body.ok, undefined);
  assert.equal(sent, false);
});
test('provider errors and timeouts never produce a success confirmation', async () => {
  for (const send of [async () => new Response('{"error":"rejected"}', { status: 403 }), async () => new Response('{}', { status: 200 }), async () => { throw new Error('timeout'); }]) {
    const result = await invoke(createCampaignHandler({ env, send }));
    assert.equal(result.statusCode, 502);
    assert.equal(result.body.ok, undefined);
    assert.ok(!JSON.stringify(result.body).includes('test-key'));
  }
});
test('retry uses the same provider idempotency key', async () => {
  const { calls, handler } = recorder();
  await invoke(handler);
  await invoke(handler);
  assert.equal(calls[0].options.headers['Idempotency-Key'], calls[1].options.headers['Idempotency-Key']);
});
test('rate limit rejects repeated attempts and expires after ten minutes', async () => {
  let time = 0;
  let sent = 0;
  const handler = createCampaignHandler({ env, now: () => time, send: async () => { sent++; return new Response('{"id":"mock"}'); } });
  for (let i = 0; i < 5; i++) assert.equal((await invoke(handler)).statusCode, 200);
  assert.equal((await invoke(handler)).statusCode, 429);
  assert.equal(sent, 5);
  time = 600001;
  assert.equal((await invoke(handler)).statusCode, 200);
});
test('production ignores local origins', async () => {
  const handler = createCampaignHandler({ env: { ...env, VERCEL: '1' }, send: async () => new Response('{"id":"mock"}') });
  assert.equal((await invoke(handler)).statusCode, 403);
  assert.equal((await invoke(handler, signup, { origin: 'https://www.pfdno.com' })).statusCode, 200);
});
