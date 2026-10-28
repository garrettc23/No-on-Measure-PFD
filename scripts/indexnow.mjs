import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function submission(config, urls) {
  if (config.host !== 'www.pfdno.com' || !/^[a-f0-9]{32}$/.test(config.key)) throw new Error('Invalid production host or public verification key.');
  const urlList = [...new Set(urls)];
  if (!urlList.length || urlList.length > 10000) throw new Error('Provide 1 to 10000 canonical URLs.');
  for (const url of urlList) {
    const parsed = new URL(url);
    if (parsed.origin !== 'https://www.pfdno.com' || parsed.search || parsed.hash || parsed.username || parsed.password || !parsed.pathname.endsWith('/') || /^\/(credits|print|api|downloads)(\/|$)/.test(parsed.pathname)) throw new Error(`Not a public canonical URL: ${url}`);
  }
  return { host: config.host, key: config.key, keyLocation: `https://${config.host}/${config.key}.txt`, urlList };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) return console.log('Build production, then run npm run seo:indexnow -- [canonical URLs]. Dry run by default; --submit verifies the live key and indexable canonicals before notifying IndexNow. With no URLs, uses dist/sitemap.xml. Submit only after meaningful production updates.');
  if (args.some(arg => arg.startsWith('--') && arg !== '--submit')) throw new Error('Unknown option.');
  const config = JSON.parse(await readFile(new URL('./lib/indexnow-config.json', import.meta.url), 'utf8'));
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const publicUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  const requested = args.filter(arg => !arg.startsWith('--'));
  const body = submission(config, requested.length ? requested : publicUrls);
  if (body.urlList.some(url => !publicUrls.includes(url))) throw new Error('Every URL must be in the production sitemap.');
  if (!args.includes('--submit')) return console.log(JSON.stringify({dryRun: true, ...body}, null, 2));
  const get = url => fetch(url, {redirect: 'error', signal: AbortSignal.timeout(30000)});
  const key = await get(body.keyLocation);
  if (!key.ok || (await key.text()).trim() !== body.key) throw new Error('Live verification key is unavailable or differs. Deploy first.');
  for (const url of body.urlList) {
    const response = await get(url);
    const html = await response.text();
    const robots = html.match(/<meta\b[^>]*name="robots"[^>]*content="([^"]+)"/)?.[1] || '';
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    if (!response.ok || !robots.startsWith('index,') || /noindex/i.test(response.headers.get('x-robots-tag') || '') || canonical !== url) throw new Error(`Live URL is not indexable and canonical: ${url}`);
  }
  const response = await fetch('https://api.indexnow.org/indexnow', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body), signal: AbortSignal.timeout(30000)});
  const report = {submittedAt: new Date().toISOString(), status: response.status, accepted: [200,202].includes(response.status), ...body};
  await mkdir('.context/indexnow', {recursive: true});
  await writeFile(`.context/indexnow/${Date.now()}.json`, JSON.stringify(report,null,2));
  if (!report.accepted) throw new Error(`IndexNow returned HTTP ${response.status}. No indexing claim can be made.`);
  console.log(`IndexNow accepted ${body.urlList.length} URLs (HTTP ${response.status}). Acceptance does not confirm crawling, indexing, or rankings.`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch(error => {console.error(error.message); process.exitCode=1;});
