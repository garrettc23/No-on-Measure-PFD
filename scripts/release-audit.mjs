import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

// Read-only checks against a deployed host, through the required gstack browser.
// Build production first so the local sitemap describes the intended release.
if (!process.env.SITE_UNDER_TEST) throw new Error('Set SITE_UNDER_TEST to the deployed origin. This check does not deploy or request indexing.');
const origin = new URL(process.env.SITE_UNDER_TEST).origin;
if (!origin.startsWith('https://') && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) throw new Error('Use HTTPS or a local test server.');
const binary = process.env.BROWSE_BIN || `${process.env.HOME}/.codex/skills/gstack/browse/dist/browse`;
const run = (...args) => execFileSync(binary, args, { encoding: 'utf8', maxBuffer: 5_000_000 }).trim();
const expectedSitemap = readFileSync(`${process.env.SEO_BUILD_DIR || 'dist'}/sitemap.xml`, 'utf8');
const canonicalUrls = [...expectedSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (!canonicalUrls.length) throw new Error('Build production before checking a release; the expected sitemap is empty.');
run('goto', origin);
const results = [];
const check = (name, code) => {
  try {
    const observed = JSON.parse(run('js', `await (async()=>{${code}})()`));
    results.push({ name, ...observed });
  } catch { results.push({ name, pass: false, error: 'Browser check failed; inspect the target before retrying.' }); }
};
for (const canonical of canonicalUrls) {
  const path = new URL(canonical).pathname;
  check(path, `
    const r=await fetch(${JSON.stringify(path)},{cache:'no-store'});
    const doc=new DOMParser().parseFromString(await r.text(),'text/html');
    const robots=doc.querySelector('meta[name="robots"]')?.content||'';
    const header=r.headers.get('x-robots-tag')||'';
    const canonical=doc.querySelector('link[rel="canonical"]')?.href;
    const graph=JSON.parse(doc.querySelector('script[type="application/ld+json"]')?.textContent||'{}');
    return {pass:r.status===200 && canonical===${JSON.stringify(canonical)} && robots.startsWith('index,') && !header.includes('noindex') && !!doc.title && !!graph['@graph'] && doc.querySelectorAll('h1').length===1,status:r.status,canonical,robots,header};
  `);
}
check('Sitemap contains exactly the intended public URLs', `
  const r=await fetch('/sitemap.xml',{cache:'no-store'});const xml=await r.text();
  const doc=new DOMParser().parseFromString(xml,'application/xml');
  const urls=[...doc.querySelectorAll('loc')].map(n=>n.textContent);
  return {pass:r.status===200 && JSON.stringify(urls)===${JSON.stringify(JSON.stringify(canonicalUrls))},count:urls.length};
`);
check('Public crawler policy', `
  const r=await fetch('/robots.txt',{cache:'no-store'});const body=await r.text();
  return {pass:r.status===200 && /^User-agent: \\*$/m.test(body) && /^Allow: \\/$/m.test(body) && !/^Disallow: \\/\\s*$/m.test(body) && body.includes(${JSON.stringify(`Sitemap: ${new URL(canonicalUrls[0]).origin}/sitemap.xml`)})};
`);
for (const path of ['/home', '/home/']) check(`${path} redirects and preserves ad parameters`, `
  const r=await fetch(${JSON.stringify(path + '?utm_source=release-check&gclid=synthetic-check')},{cache:'no-store'});const url=new URL(r.url);
  return {pass:r.status===200 && r.redirected && url.origin===location.origin && url.pathname==='/' && url.searchParams.get('gclid')==='synthetic-check' && url.searchParams.get('utm_source')==='release-check'};
`);
for (const path of ['/downloads/measure-pfd-faq.pdf','/downloads/measure-pfd-fact-sheet.pdf']) check(`${path} stays downloadable and excluded from indexing`, `
  const r=await fetch(${JSON.stringify(path)},{method:'HEAD',cache:'no-store'});
  return {pass:r.status===200 && (r.headers.get('content-type')||'').includes('application/pdf') && (r.headers.get('x-robots-tag')||'').includes('noindex'),status:r.status,robots:r.headers.get('x-robots-tag')};
`);
for (const path of ['/print/faq/','/print/social/']) check(`${path} excluded from indexing`, `
  const r=await fetch(${JSON.stringify(path)},{cache:'no-store'});const doc=new DOMParser().parseFromString(await r.text(),'text/html');
  return {pass:r.status===200 && (doc.querySelector('meta[name="robots"]')?.content||'').includes('noindex')};
`);
mkdirSync('.context', {recursive:true});
const report = { checkedAt: new Date().toISOString(), origin, results };
writeFileSync('.context/release-audit.json', JSON.stringify(report,null,2));
console.log(`${results.filter(r=>r.pass).length}/${results.length} release checks passed. Evidence: .context/release-audit.json`);
for (const result of results.filter(r=>!r.pass)) console.error(`Failed: ${result.name}`);
if (results.some(r=>!r.pass)) process.exitCode=1;
