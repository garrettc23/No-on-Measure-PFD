import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name)))).flat();
}
const files = (await walk('dist')).filter(path => path.endsWith('.html'));
if (!files.length) throw new Error('Run npm run build before auditing public copy.');
const patterns = [/\bjust\b/gi, /\bquietly\b/gi, /[\u2014\u2013]/g, /\bnot (?:just|only|merely)\b/gi, /\b(?:delve|tapestry|pivotal|testament)\b/gi];
const failures = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const text = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, ' ');
  for (const pattern of patterns) {
    pattern.lastIndex = 0;
    const matches = [...text.matchAll(pattern)];
    if (matches.length) failures.push(`${file}: ${matches.map(match => match[0]).join(', ')}`);
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`Copy audit passed for ${files.length} rendered pages. Manual Humanizer review is also required.`);
