import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const origin = new URL(process.env.PUBLIC_SITE_URL || 'https://www.pfdno.com').origin;
const indexable = !['preview', 'development'].includes(process.env.VERCEL_ENV);
const paths = ['/', '/facts/', '/resources/', '/vote/', '/bill-paparian/', '/pasadena-star-news/', '/join/', '/privacy/', '/measure-pfd-calculator/', '/measure-pfd-exemptions/', '/measure-pfd-vs-measure-i/', '/measure-pfd-fire-station-funding/', '/pasadena-property-tax-guide/', '/measure-pfd-pass-or-fail/', '/pasadena-city-limits/', '/measure-pfd-renters/'];
const results = JSON.parse(await readFile('src/data/election-results.json', 'utf8'));
if (results.reports.length) paths.push('/measure-pfd-results/');
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
  assert.ok(!/<(?:p|span|div)\b[^>]*class="[^"]*\b(?:eyebrow|reference-kicker|editorial-byline|reference-meta|paparian-position-note|editorial-earlier-heading)\b/.test(html), `${path}: no decorative labels or attribution notes`);
  assert.ok(!html.includes('These are Paparian’s published views, not a campaign endorsement.') && !html.includes('Excerpts published here by No on Measure PFD.'), `${path}: removed attribution notes`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = meta(html, 'description');
  assert.ok(title && description, `${path}: title and description required`);
  assert.ok(!titles.has(title) && !descriptions.has(description), `${path}: metadata must be unique`);
  titles.add(title); descriptions.add(description);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one main heading`);
  assert.equal(html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1], `${origin}${path}`);
  assert.equal(meta(html, 'robots')?.startsWith('index,'), indexable, `${path}: indexing policy`);
  assert.equal(html.includes('data-resource-analytics="enabled"'), indexable && process.env.PUBLIC_RESOURCE_ANALYTICS_ENABLED === 'true', `${path}: analytics environment and capability guard`);
  assert.ok(html.includes('name="twitter:image:alt"'), `${path}: accessible social preview`);
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, `${path}: one structured-data graph`);
  const schema = JSON.parse(scripts[0][1]);
  assert.ok(schema['@graph'].some(item => item['@type'] === 'Organization'));
  const page = schema['@graph'].find(item => ['WebPage', 'FAQPage', 'Article', 'CollectionPage'].includes(item['@type']));
  assert.equal(page.url, `${origin}${path}`);
  const videos = schema['@graph'].filter(item => item['@type'] === 'VideoObject');
  assert.equal(videos.length, path === '/' ? 2 : path === '/bill-paparian/' ? 1 : 0);
  for (const video of videos) {
    assert.ok(video.name && video.description && video.thumbnailUrl && video.contentUrl);
    assert.equal(video.duration, 'PT30.016S');
    assert.equal(video.uploadDate, '2026-10-22T15:30:54Z');
    assert.ok(!('transcript' in video), 'Removed transcript blocks are not duplicated in metadata');
    assert.ok(html.includes(new URL(video.contentUrl).pathname.replace('.mp4', '.en.vtt')), 'Video captions remain available');
    assert.ok(html.includes(new URL(video.contentUrl).pathname), 'Structured video is present on page');
  }
  if (path === '/') {
    assert.ok(html.indexOf('id="paparian-feature-title"') < html.indexOf('id="reference-title"'));
    assert.ok(html.indexOf('id="reference-title"') < html.indexOf('class="neighborhood-section'));
  }
  if (path.startsWith('/measure-pfd-') || path === '/pasadena-property-tax-guide/' || path === '/pasadena-city-limits/') {
    assert.equal(page['@type'], 'Article');
    assert.ok(page.dateModified && Number.isFinite(Date.parse(page.dateModified)));
    assert.ok(Array.isArray(page.citation) && page.citation.length, 'Articles cite their sources');
    for (const citation of page.citation) assert.ok(html.includes(`href="${citation}"`), 'Every schema citation is visibly linked');
    assert.equal(page.image, `${origin}/vote-no-pasadena-city-hall.png`);
    assert.ok(html.includes('property="article:modified_time"'));
    assert.ok(!html.includes('id="sources"'), 'Resource guides omit source sections');

    assert.ok(!html.includes('href="#sources"'), 'No removed source-section links');
    assert.ok(!html.includes('aria-label="Breadcrumb"'), 'Guide pages should not display breadcrumbs');
    assert.ok(html.includes('/facts/'));
  }
  if (path === '/resources/') {
    assert.equal(page['@type'], 'CollectionPage');
    assert.equal(page.mainEntity['@type'], 'ItemList');
    const tiles = html.match(/<nav\b[^>]*class="[^"]*resource-directory[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(tiles, 'Visible resource directory exists');
    const tileUrls = [...tiles.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(match => new URL(match[1], origin).href);
    assert.deepEqual(page.mainEntity.itemListElement.map(item => item.url), tileUrls, 'Structured resource order matches the visible tiles');
    assert.equal(page.mainEntity.numberOfItems, tileUrls.length);
  }
  if (path === '/facts/') {
    assert.ok(html.indexOf('id="overview"') < html.indexOf('id="questions"'));
    assert.ok(html.indexOf('id="questions"') < html.indexOf('id="measure"'));

    assert.equal(page['@type'], 'FAQPage');
    assert.equal(page.mainEntity.length, 13);
    const exemption = page.mainEntity.find(item => item.name === 'Who is exempt from Measure PFD?');
    assert.ok(exemption?.acceptedAnswer.text.includes('qualifying low-income owners'));
    assert.ok(!html.includes('Only qualifying low-income seniors receive an exemption.'), 'Approved exemption correction applies throughout the facts page');
    assert.equal((html.match(/<details\b/g) || []).length, page.mainEntity.length);
    // Compare plain content after the same HTML-entity decoding used for visible text.
    const decode = text => text.replace(/&amp;/g, '&').replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const visible = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<\/(?:p|blockquote|div|summary|details|h[1-6]|section|article)>/g, ' ').replace(/<[^>]+>/g, ''));
    const printHtml = await read('print/faq/index.html');
    const printText = decode(printHtml.replace(/<\/(?:p|blockquote|h[1-6]|article)>/g, ' ').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ');
    const readingGuide = await read('llms.txt');
    for (const question of page.mainEntity) {
      assert.ok(printText.includes(question.acceptedAnswer.text.replace(/\s+/g, ' ')), `Printable answer differs: ${question.name}`);
      assert.ok(readingGuide.includes(question.acceptedAnswer.text), `Reading guide answer differs: ${question.name}`);
      assert.ok(visible.includes(question.name), `FAQ question missing from HTML: ${question.name}`);
      assert.ok(visible.replace(/\s+/g, ' ').includes(question.acceptedAnswer.text.replace(/\s+/g, ' ')), `FAQ answer differs from visible content: ${question.name}`);
    }
  }
}

for (const file of ['404.html', 'credits/index.html', 'print/faq/index.html', 'print/social/index.html']) {
  assert.ok(meta(await read(file), 'robots')?.includes('noindex'), `${file}: excluded from indexing`);
}
const credits = await read('credits/index.html');
assert.ok(!/<link\b[^>]*rel="canonical"/.test(credits), 'Unindexed credits omit a canonical');
assert.ok(!credits.includes('application/ld+json'), 'Unindexed credits omit search structured data');
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
// Approved corrections must stay consistent across visible and machine-readable copy.
for (const file of ['index.html', 'facts/index.html', 'print/faq/index.html', 'llms.txt']) {
  const content = await read(file);
  for (const phrase of ['$1,700', 'Every station stays open', 'every 911 call still gets answered', 'investigators determined that electrical arcing', 'no strings attached', 'Voters paid for the upgrades once']) {
    assert.ok(!content.toLowerCase().includes(phrase.toLowerCase()), `${file}: superseded campaign claim remains: ${phrase}`);
  }
}
const reviewedFacts = await read('facts/index.html');
assert.ok(reviewedFacts.includes('reconstruction of Stations 33 and 37 within the first ten years'));
assert.ok(reviewedFacts.includes('annual independent audits and public reports'));
assert.ok(reviewedFacts.includes('A No vote would not itself enact that alternative.'));
assert.ok(reviewedFacts.includes('href="/measure-pfd-vs-measure-i/#funding-timeline"'));
assert.ok((await read('index.html')).includes('1,600 taxable square feet × $0.19 = $304 annually.'));
const print = await read('print/faq/index.html');
checkFaviconHead(print, '/print/faq/');
assert.ok(print.includes('Committee for Responsible Property Taxation'));
assert.ok(!print.includes('Campaign contact:') && !print.includes('matt@klinkcampaigns.com') && !print.includes('310-283-6267'));
console.log(`SEO audit passed: ${paths.length} canonical pages, 13 visible FAQ answers, structured data, crawler files, printable FAQ, and ${indexable ? 'production' : 'preview'} indexing policy.`);
