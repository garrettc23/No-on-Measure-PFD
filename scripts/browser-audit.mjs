import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
const binary = process.env.BROWSE_BIN || `${process.env.HOME}/.agents/skills/gstack/browse/dist/browse`;
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const run = (...args) => execFileSync(binary, args, { encoding: 'utf8', maxBuffer: 5_000_000 }).trim();
mkdirSync('.context/screenshots', { recursive: true });
const results = [];
for (const [page, path] of [['home','/'],['facts','/facts/'],['join','/join/'],['privacy','/privacy/'],['credits','/credits/'],['not-found','/404/']]) {
  for (const [size, viewport] of [['mobile','390x844'],['tablet','768x1024'],['desktop','1440x1000']]) {
    run('viewport', viewport);
    run('goto', origin + path);
    run('js', 'document.fonts.ready.then(()=>true)');
    if (page === 'home') {
      run('js', 'document.querySelector(".neighborhood-photo").scrollIntoView({behavior:"instant"})');
      run('js', 'Promise.all([...document.images].map(i=>i.decode())).then(()=>true)');
      run('js', 'window.scrollTo({top:0,behavior:"instant"})');
    }
    const state = JSON.parse(run('js', `JSON.stringify({title:document.title,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length,unlabeledFields:[...document.querySelectorAll('input:not([type=hidden]),select,textarea')].filter(i=>!i.labels?.length).length,emptyLinks:[...document.querySelectorAll('a')].filter(a=>!a.getAttribute('href')||a.getAttribute('href')==='#').length})`));
    if (state.width !== state.scrollWidth || state.h1 !== 1 || state.brokenImages || state.unlabeledFields || state.emptyLinks) throw new Error(`${page} ${size}: ${JSON.stringify(state)}`);
    run('screenshot', `.context/screenshots/${page}-${size}.png`);
    results.push({ page, size, ...state });
  }
}
writeFileSync('.context/browser-audit.json', JSON.stringify(results, null, 2));
console.log(`Passed ${results.length} page/viewport checks; screenshots saved in .context/screenshots/.`);
