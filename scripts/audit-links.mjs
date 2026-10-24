import assert from 'node:assert/strict';
import { readdir, readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { resolve, relative, extname } from 'node:path';
import vercel from '../vercel.json' with { type: 'json' };

const build = resolve(process.env.SEO_BUILD_DIR || 'dist');
const origin = new URL(process.env.PUBLIC_SITE_URL || 'https://www.pfdno.com').origin;
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(resolve(dir, entry.name)) : resolve(dir, entry.name)))).flat();
}
const files = (await walk(build)).filter(file => file.endsWith('.html'));
const decode = value => value.replace(/&amp;/g, '&').replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, decimal) => String.fromCodePoint(parseInt(hex || decimal, hex ? 16 : 10))).replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(([, name, double, single]) => [name, decode(double ?? single)]));
const pages = new Map();
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const path = '/' + relative(build, file).replace(/index\.html$/, '');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => decode(match[1]));
  assert.equal(new Set(ids).size, ids.length, `${path}: duplicate element IDs`);
  pages.set(path, { file, html, ids: new Set(ids), links: [] });
}
let links = 0, assets = 0;
const errors = [];
async function check(raw, from, fragment = false) {
  if (!raw || /^(mailto:|tel:|data:|javascript:)/i.test(raw)) return;
  const url = new URL(raw, origin + from);
  if (url.origin !== origin) return;
  const redirect = vercel.redirects.find(rule => rule.source === url.pathname);
  if (redirect) url.pathname = redirect.destination;
  let path;
  try { path = decodeURIComponent(url.pathname); } catch { errors.push(`${from}: malformed URL ${raw}`); return; }
  const target = path.endsWith('/') ? path + 'index.html' : extname(path) ? path : path + '/index.html';
  const file = resolve(build, '.' + target);
  if (!file.startsWith(build + '/')) { errors.push(`${from}: invalid local path ${raw}`); return; }
  try { if (!(await stat(file)).isFile()) throw new Error(); }
  catch { errors.push(`${from}: missing destination ${raw}`); return; }
  const pagePath = '/' + relative(build, file).replace(/index\.html$/, '');
  if (fragment && pages.has(pagePath)) {
    pages.get(from).links.push(pagePath);
    const hash = decodeURIComponent(url.hash.slice(1).split(':~:text=')[0]);
    if (hash && !pages.get(pagePath).ids.has(hash)) errors.push(`${from}: missing fragment ${raw}`);
  }
}
for (const [path, page] of pages) {
  for (const tag of page.html.match(/<a\b[^>]*>/g) || []) {
    const a = attrs(tag); links++;
    if (!a.href || a.href === '#') errors.push(`${path}: empty link destination`);
    else await check(a.href, path, true);
  }
  for (const tag of page.html.match(/<(?:img|script|source|video|audio|track|link)\b[^>]*>/g) || []) {
    const a = attrs(tag);
    const paths = [a.src, a.poster, ...(a.srcset || '').split(',').map(part => part.trim().split(/\s+/)[0])].filter(Boolean);
    if (/^<link\b/.test(tag) && /^(stylesheet|icon|apple-touch-icon|preload|modulepreload)$/.test(a.rel || '') && a.href) paths.push(a.href);
    if (/^<img\b/.test(tag) && !('alt' in a)) errors.push(`${path}: image missing alt attribute`);
    for (const asset of paths) { assets++; await check(asset, path); }
  }
}
const reached = new Set(['/']);
const queue = ['/'];
while (queue.length) for (const target of pages.get(queue.shift())?.links || []) if (!reached.has(target)) { reached.add(target); queue.push(target); }
const sitemap = await readFile(resolve(build, 'sitemap.xml'), 'utf8');
const publicPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
// Credits remain accessible by URL, but the user explicitly removed their navigation link.
const intentionalOrphans = ['/credits/'];
for (const path of publicPaths) if (!reached.has(path) && !intentionalOrphans.includes(path)) errors.push(`${path}: unreachable from the homepage`);
await mkdir('.context', { recursive: true });
await writeFile('.context/link-audit.json', JSON.stringify({ pages: pages.size, links, assets, reachablePages: [...reached], intentionalOrphans, errors }, null, 2));
assert.deepEqual(errors, [], 'Broken destinations, missing assets, or orphaned resources');
console.log(`Link audit passed: ${pages.size} HTML pages, ${links} links, ${assets} asset references; all public resources reachable. Credits intentionally outside navigation.`);
