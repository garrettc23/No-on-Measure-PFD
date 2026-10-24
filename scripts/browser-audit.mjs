import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
const binary = process.env.BROWSE_BIN || `${process.env.HOME}/.agents/skills/gstack/browse/dist/browse`;
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const run = (...args) => execFileSync(binary, args, { encoding: 'utf8', maxBuffer: 5_000_000 }).trim();
mkdirSync('.context/screenshots', { recursive: true });
const results = [];
for (const [page, path] of [['home','/'],['paparian','/bill-paparian/'],['facts','/facts/'],['resources','/resources/'],['vote','/vote/'],['join','/join/'],['privacy','/privacy/'],['credits','/credits/'],['calculator','/measure-pfd-calculator/'],['exemptions','/measure-pfd-exemptions/'],['comparison','/measure-pfd-vs-measure-i/'],['funding','/measure-pfd-fire-station-funding/'],['property-tax','/pasadena-property-tax-guide/'],['outcomes','/measure-pfd-pass-or-fail/'],['city-limits','/pasadena-city-limits/'],['renters','/measure-pfd-renters/'],['star-news','/pasadena-star-news/'],['not-found','/404.html']]) {
  for (const [size, viewport] of [['mobile','390x844'],['tablet','768x1024'],['desktop','1440x1000'],['wide','1920x1080']]) {
    run('viewport', viewport);
    run('goto', origin + path);
    run('js', 'document.fonts.ready.then(()=>true)');
    if (page === 'home') {
      run('js', 'document.querySelector(".neighborhood-photo").scrollIntoView({behavior:"instant"})');
      run('js', 'Promise.all([...document.images].map(i=>i.decode())).then(()=>true)');
      run('js', 'window.scrollTo({top:0,behavior:"instant"})');
    }
    run('js', 'Promise.all([...document.images].map(i=>{i.loading="eager";return i.decode().catch(()=>null)})).then(()=>true)');
    const state = JSON.parse(run('js', `JSON.stringify({title:document.title,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length,unlabeledFields:[...document.querySelectorAll('input:not([type=hidden]),select,textarea')].filter(i=>!i.labels?.length&&!i.getAttribute('aria-label')&&!i.getAttribute('aria-labelledby')).length,emptyLinks:[...document.querySelectorAll('a')].filter(a=>!a.getAttribute('href')||a.getAttribute('href')==='#').length})`));
    if (state.width !== state.scrollWidth || state.h1 !== 1 || state.brokenImages || state.unlabeledFields || state.emptyLinks) throw new Error(`${page} ${size}: ${JSON.stringify(state)}`);
    const margins = JSON.parse(run('js', `JSON.stringify((()=>{
      const header=document.querySelector('.header-inner');
      const edge=el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return {left:r.left+parseFloat(s.paddingLeft),right:r.right-parseFloat(s.paddingRight)}};
      const expected=edge(header);
      const containers=[...document.querySelectorAll('main .container')].map(el=>({element:el.className,...edge(el)}));
      const panels=[...document.querySelectorAll('.star-news-excerpt,.editorial-conclusion,.editorial-context,.editorial-intro,.reference-header,.reference-page > section,.facts-overview .reference-answer,.intro-bottom > p,.home-guides > p,.resource-hub > p')].map(el=>({element:el.className||el.id,left:el.getBoundingClientRect().left,right:el.getBoundingClientRect().right}));
      const failures=[...containers,...panels].filter(el=>Math.abs(el.left-expected.left)>1||Math.abs(el.right-expected.right)>1);
      return {expected,containers,panels,failures};
    })())`));
    if (margins.failures.length) throw new Error(`${page} ${size}: margin mismatch ${JSON.stringify(margins)}`);
    state.margins = margins;
    run('screenshot', `.context/screenshots/${page}-${size}.png`);
    results.push({ page, size, ...state });
  }
}
writeFileSync('.context/browser-audit.json', JSON.stringify(results, null, 2));
console.log(`Passed ${results.length} page/viewport checks; screenshots saved in .context/screenshots/.`);
