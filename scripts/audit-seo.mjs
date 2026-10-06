import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const origin = new URL(process.env.PUBLIC_SITE_URL || 'https://www.pfdno.com').origin;
const indexable = !['preview', 'development'].includes(process.env.VERCEL_ENV);
const paths = ['/', '/facts/', '/vote/', '/bill-paparian/', '/pasadena-star-news/', '/join/', '/privacy/', '/credits/'];
const titles = new Set();
const descriptions = new Set();
const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const meta = (html, name) => html.match(new RegExp(`<meta\\b[^>]*name="${escape(name)}"[^>]*content="([^"]*)"`))?.[1];
const buildDir = process.env.SEO_BUILD_DIR || 'dist';
const read = path => readFile(`${buildDir}/${path}`, 'utf8');
const checkFaviconHead = (html, path) => {
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/)?.[1];
  assert.ok(head && /<link\b[^>]*rel="icon"/.test(head), `${path}: favicon links belong in the head`);
  // This custom element makes browsers end the head early, ignoring later favicon links.
  assert.ok(!head.includes('<vercel-analytics'), `${path}: analytics must render in the body, not the head`);
};

for (const path of paths) {
  const html = await read(path === '/' ? 'index.html' : `${path.slice(1)}index.html`);
  checkFaviconHead(html, path);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = meta(html, 'description');
  assert.ok(title && description, `${path}: title and description required`);
  assert.ok(!titles.has(title) && !descriptions.has(description), `${path}: metadata must be unique`);
  titles.add(title); descriptions.add(description);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one main heading`);
  assert.equal(html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1], `${origin}${path}`);
  assert.equal(meta(html, 'robots')?.startsWith('index,'), indexable, `${path}: indexing policy`);
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, `${path}: one structured-data graph`);
  const schema = JSON.parse(scripts[0][1]);
  assert.ok(schema['@graph'].some(item => item['@type'] === 'Organization'));
  const page = schema['@graph'].find(item => ['WebPage', 'FAQPage'].includes(item['@type']));
  assert.equal(page.url, `${origin}${path}`);
  if (path === '/facts/') {
    assert.equal(page['@type'], 'FAQPage');
    assert.equal(page.mainEntity.length, 19);
    assert.equal((html.match(/<details\b/g) || []).length, page.mainEntity.length);
    // Compare plain content after the same HTML-entity decoding used for visible text.
    const decode = text => text.replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const visible = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' '));
    for (const question of page.mainEntity) {
      assert.ok(visible.includes(question.name), `FAQ question missing from HTML: ${question.name}`);
      assert.ok(visible.replace(/\s+/g, ' ').includes(question.acceptedAnswer.text.replace(/\s+/g, ' ')), `FAQ answer differs from visible content: ${question.name}`);
    }
  }
}

for (const file of ['404.html', 'print/faq/index.html', 'print/social/index.html']) {
  assert.ok(meta(await read(file), 'robots')?.includes('noindex'), `${file}: excluded from indexing`);
}
const robots = await read('robots.txt');
assert.ok(robots.includes('User-agent: *'));
assert.ok(robots.includes(indexable ? 'Allow: /' : 'Disallow: /'));
assert.equal(robots.includes(`Sitemap: ${origin}/sitemap.xml`), indexable);
const sitemap = await read('sitemap.xml');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(locations, indexable ? paths.map(path => origin + path) : []);
const guide = await read('llms.txt');
assert.ok(guide.includes(`${origin}/facts/`) && guide.includes('not an official election authority'));
assert.ok(!sitemap.includes('localhost') && !guide.includes('localhost'));
const print = await read('print/faq/index.html');
checkFaviconHead(print, '/print/faq/');
assert.ok(print.includes('Committee for Responsible Property Taxation'));
assert.ok(!print.includes('Campaign contact:') && !print.includes('matt@klinkcampaigns.com') && !print.includes('310-283-6267'));
console.log(`SEO audit passed: ${paths.length} canonical pages, 19 visible FAQ answers, structured data, crawler files, PDF source, and ${indexable ? 'production' : 'preview'} indexing policy.`);
