import { execFileSync } from 'node:child_process';
import { copyFileSync } from 'node:fs';
const binary = process.env.BROWSE_BIN || `${process.env.HOME}/.agents/skills/gstack/browse/dist/browse`;
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const run = (...args) => execFileSync(binary, args, { encoding: 'utf8', stdio: 'pipe' }).trim();
// Campaign PDFs are supplied originals. Generate only social images here.
run('goto', `${origin}/print/social/`);
run('viewport', '1200x630');
run('js', 'document.fonts.ready.then(()=>true)');
run('js', 'Promise.all([...document.images].map(image => image.decode())).then(()=>true)');
console.log(run('screenshot', '--viewport', 'public/vote-no-pasadena-city-hall.png'));
// Keep the previous image URL usable while new shares request the fresh URL.
copyFileSync('public/vote-no-pasadena-city-hall.png', 'public/social-card.png');
copyFileSync('public/vote-no-pasadena-city-hall.png', 'public/vote-no-measure-pfd-social.png');
