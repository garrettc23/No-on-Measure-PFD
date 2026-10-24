import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const binary = process.env.BROWSE_BIN || `${process.env.HOME}/.codex/skills/gstack/browse/dist/browse`;
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4392';
const run = (...args) => execFileSync(binary, args, { encoding: 'utf8', maxBuffer: 5_000_000 }).trim();
const passed = [];
function assert(label, expression) {
  if (run('js', expression.startsWith('await ') ? expression : `Boolean(${expression})`) !== 'true') throw new Error(label);
  passed.push(label);
}
run('viewport', '390x844');
run('goto', `${origin}/measure-pfd-calculator/`);
assert('Calculator initializes', '!document.querySelector("#parcel-calculator button").disabled');
run('js', 'window.__resourceEvents=[];window.va=(type,event)=>window.__resourceEvents.push({type,event})');
for (const input of ['', '-100', 'NaN', 'Infinity', '1600abc', '1e3', '1,60', '0']) {
  if (input) run('fill', '#square-feet', input);
  run('click', '#parcel-calculator button');
  assert(`Invalid input: ${input || 'empty'}`, 'document.querySelector("#square-feet").getAttribute("aria-invalid")==="true" && !document.querySelector("#calculator-error").hidden && document.querySelector("#calculator-results").hidden && document.activeElement.id==="square-feet"');
}
assert('Invalid inputs produce no analytics', 'window.__resourceEvents.length===0');
for (const [input, annual, total] of [['1600','$304.00','$4,256.00'],['1,600','$304.00','$4,256.00'],['2000','$380.00','$5,320.00'],['20000','$3,800.00','$53,200.00']]) {
  run('fill', '#square-feet', input);
  run('press', 'Enter');
  assert(`Keyboard calculation: ${input}`, `document.querySelector('#annual-cost').textContent===${JSON.stringify(annual)} && document.querySelector('#total-cost').textContent===${JSON.stringify(total)} && !document.querySelector('#calculator-results').hidden && document.querySelector('#calculator-announcement').textContent.includes(${JSON.stringify(annual)})`);
}
assert('Inputs stay out of URL and storage', '!location.search && !location.hash && localStorage.length===0 && sessionStorage.length===0');
const production = process.env.EXPECT_EVENTS === 'true';
assert('Analytics mode and input privacy', production
  ? 'window.__resourceEvents.length===4 && window.__resourceEvents.every(({event})=>event.name==="calculator_completed" && JSON.stringify(event.data)==="{\\"page\\":\\"/measure-pfd-calculator/\\"}")'
  : 'window.__resourceEvents.length===0');
assert('Analytics URL sanitization', 'window.webAnalyticsBeforeSend({type:"event",url:location.origin+"/measure-pfd-calculator/?square-feet=1600#result"}).url===location.origin+"/measure-pfd-calculator/"');
run('fill', '#square-feet', '1000');
assert('Editing hides outdated result', 'document.querySelector("#calculator-results").hidden && !document.querySelector("#calculator-announcement").textContent');
run('viewport', '320x800');
assert('Calculator fits narrow screen', 'document.documentElement.scrollWidth===innerWidth');
run('fill', '#square-feet', '1,600');
run('click', '#bill-comparison-options summary');
run('fill', '#current-tax-bill', '8,000');
run('press', 'Enter');
assert('Optional annual bill comparison includes only the added PFD charge', '!document.querySelector("#bill-comparison").hidden && document.querySelector("#current-bill-cost").textContent==="$8,000.00" && document.querySelector("#combined-bill-cost").textContent==="$8,304.00" && document.querySelector("#calculator-announcement").textContent.includes("$8,304.00")');
run('fill', '#current-tax-bill', '8,00');
assert('Editing annual bill hides stale comparison', 'document.querySelector("#bill-comparison").hidden');
run('press', 'Enter');
assert('Bad optional bill preserves the base estimate and explains the error', 'document.querySelector("#bill-comparison").hidden && !document.querySelector("#calculator-results").hidden && document.activeElement.id==="current-tax-bill" && document.querySelector("#current-tax-bill").getAttribute("aria-invalid")==="true"');
run('fill', '#current-tax-bill', '0');
run('press', 'Enter');
assert('Zero annual bill is valid', 'document.querySelector("#combined-bill-cost").textContent==="$304.00" && !document.querySelector("#bill-comparison").hidden');
run('click', '#current-tax-bill');
run('press', 'ControlOrMeta+A');
run('press', 'Backspace');
run('press', 'Enter');
assert('Clearing optional bill returns to the simple estimate', 'document.querySelector("#bill-comparison").hidden && !document.querySelector("#calculator-results").hidden');
run('click', '.square-footage-help summary');
assert('Square footage walkthrough is readable without leaving the calculator', 'document.querySelector(".square-footage-help").open && document.querySelectorAll(".lookup-steps > li").length===3 && document.querySelector(".record-example").textContent.includes("Building SqFt") && document.documentElement.scrollWidth===innerWidth');
assert('Annual bill stays out of URL and browser storage', '!location.search && !location.hash && localStorage.length===0 && sessionStorage.length===0');
run('goto', `${origin}/measure-pfd-exemptions/`);
run('click', '#exemption-checklist button');
assert('Checklist requires a property type', 'document.activeElement.id==="property-kind" && document.querySelector("#property-kind").getAttribute("aria-invalid")==="true"');
run('select', '#property-kind', 'owner');
assert('Owner questions appear; organization questions stay inactive', '!document.querySelector("#owner-questions").hidden && !document.querySelector("#owner-questions").disabled && document.querySelector("#organization-questions").disabled');
run('select', '#utility-exemption', 'yes');
run('select', '#income-exemption', 'unsure');
run('click', '#exemption-checklist button');
assert('Checklist recommends utility and income categories', 'document.querySelectorAll("#checklist-recommendations li").length===2 && !document.querySelector("#checklist-result").hidden && document.querySelector("#checklist-announcement").textContent.includes("household income")');
run('select', '#utility-exemption', 'no');
run('select', '#income-exemption', 'no');
assert('Changing checklist answers clears stale recommendations', 'document.querySelector("#checklist-result").hidden && document.querySelectorAll("#checklist-recommendations li").length===0');
run('click', '#exemption-checklist button');
assert('Checklist never equates no match with ineligibility', 'document.querySelector("#checklist-result").textContent.includes("not a decision that you must pay")');
for (const property of ['government', 'organization', 'unsure']) {
  run('select', '#property-kind', property);
  run('click', '#exemption-checklist button');
  assert(`Checklist branch: ${property}`, '!document.querySelector("#checklist-result").hidden && document.querySelector("#owner-questions").disabled && document.documentElement.scrollWidth===innerWidth');
}
assert('Checklist answers stay out of URL and browser storage', '!location.search && !location.hash && localStorage.length===0 && sessionStorage.length===0');
assert('Checklist fallback is present in initial HTML', `await (async()=>{ const html=await (await fetch('/measure-pfd-exemptions/')).text(); const doc=new DOMParser().parseFromString(html,'text/html'); return doc.querySelector('#exemption-checklist button').disabled && html.includes('Read the exemption categories below'); })()`);
run('goto', `${origin}/measure-pfd-pass-or-fail/`);
assert('Outcomes guide covers both branches without breadcrumbs or shortcut menus', 'document.querySelectorAll(".outcome-card").length===2 && !!document.querySelector("#first-bill") && !document.querySelector(".breadcrumbs,.reference-toc")');
run('goto', `${origin}/pasadena-city-limits/`);
assert('Location guide offers official lookup and a fallback without collecting addresses', `!!document.querySelector('a[href="https://www.cityofpasadena.net/find-my-district/"]') && !!document.querySelector('a[href="tel:+16267447311"]') && !document.querySelector("main input, .breadcrumbs, .reference-toc")`);
run('goto', `${origin}/measure-pfd-renters/`);
assert('Renter guide offers registry and counselor tools alongside a conditional estimate', `!!document.querySelector('a[href="https://www.cityofpasadena.net/rentalregistry"]') && !!document.querySelector('a[href="https://www.cityofpasadena.net/rent-stabilization/contact-housing-counselor/"]') && !document.querySelector(".breadcrumbs, .reference-toc") && !!document.querySelector("#rent-calculator")`);
assert('Rent calculator initializes', '!document.querySelector("#rent-calculator button").disabled');
run('click', '#rent-calculator button');
assert('Empty rent input focuses building area with an accessible error', 'document.activeElement.id==="rental-area" && document.querySelector("#rental-area").getAttribute("aria-invalid")==="true" && !document.querySelector("#rent-error").hidden');
assert('Rent calculator asks only for building size with a 1200-square-foot placeholder', 'document.querySelectorAll("#rent-calculator input").length===1 && document.querySelector("#rental-area").placeholder==="1,200"');
for (const value of ['0', '-1', 'NaN', 'Infinity', '1e2', '1,20']) {
  run('fill', '#rental-area', value); run('press', 'Enter');
  assert(`Invalid rental area: ${value}`, 'document.activeElement.id==="rental-area" && document.querySelector("#rental-area").getAttribute("aria-invalid")==="true" && document.querySelector("#rent-results").hidden');
}
run('fill', '#rental-area', '1,200'); run('press', 'Enter');
assert('Rent scenario shows annual first and the correct full-tax amount', 'document.querySelector("#rent-monthly").textContent==="$19.00" && document.querySelector("#rent-annual").textContent==="$228.00" && document.querySelector("#rent-results dd").id==="rent-annual" && !document.querySelector("#rent-results").hidden && document.querySelector("#rent-announcement").textContent.includes("If the full tax for this space is passed on")');
assert('Rent inputs stay out of URLs and storage', '!location.search && !location.hash && localStorage.length===0 && sessionStorage.length===0');
run('fill', '#rental-area', '1100');
assert('Editing rent inputs clears old results', 'document.querySelector("#rent-results").hidden && document.querySelector("#rent-announcement").textContent===""');
run('press', 'Enter');
assert('Another building size works on mobile', 'document.querySelector("#rent-monthly").textContent==="$17.42" && document.documentElement.scrollWidth===innerWidth');
assert('Rent formula and fallback are server rendered', `await (async()=>{ const html=await (await fetch('/measure-pfd-renters/')).text(); const doc=new DOMParser().parseFromString(html,'text/html'); return doc.querySelector('#rent-calculator button').disabled && html.includes('that is $228 a year or $19 a month') && html.includes('building square feet × $0.19 ÷ 12'); })()`);
run('goto', `${origin}/measure-pfd-vs-measure-i/`);
assert('Comparison table scrolls within page', 'document.documentElement.scrollWidth===innerWidth && document.querySelector(".reference-table-wrap").scrollWidth>document.querySelector(".reference-table-wrap").clientWidth');
run('goto', `${origin}/facts/`);
assert('Answers precede campaign documents', 'document.querySelector("#overview").compareDocumentPosition(document.querySelector("#questions")) & Node.DOCUMENT_POSITION_FOLLOWING');
assert('Facts page omits jump navigation and source blocks', '!document.querySelector(".reference-toc, .reference-citation, #sources")');
run('goto', `${origin}/bill-paparian/`);
assert('Video captions remain without an underneath transcript block', '!document.querySelector(".video-transcript") && !!document.querySelector("video track[kind=captions]")');
run('goto', `${origin}/`);
assert('Homepage features only the calculator and property tax guide, in order', 'JSON.stringify([...document.querySelectorAll(".home-guides nav a")].map(a=>a.getAttribute("href")))===JSON.stringify(["/measure-pfd-calculator/","/pasadena-property-tax-guide/"]) && !document.querySelector(".video-transcript")');
run('click', '.home-guides-heading > .button');
assert('Learn more reaches the resource library', 'location.pathname==="/resources/" && document.querySelectorAll("#resources .resource-card").length===9');
assert('Campaign PDFs follow the primary resource tiles', '[...document.querySelectorAll(".resource-directory a")].some(a=>a.getAttribute("href")==="/vote/") && ![...document.querySelectorAll(".resource-directory a")].some(a=>["/facts/","/bill-paparian/","/pasadena-star-news/"].includes(a.getAttribute("href"))) && document.querySelectorAll(".resource-directory a[download]").length===0 && document.querySelectorAll(".campaign-downloads a[download]").length===2 && !!(document.querySelector(".resource-directory").compareDocumentPosition(document.querySelector(".campaign-downloads")) & Node.DOCUMENT_POSITION_FOLLOWING)');
assert('Resource library is linked in the footer', '[...document.querySelectorAll(".footer-nav a")].some(a=>a.getAttribute("href")==="/resources/")');
// Verify the initial HTML independently of hydration. The browse CDP allowlist
// does not expose script disabling, so this is a static fallback check.
assert('Formula, examples, and fallback exist in initial HTML', `await (async()=>{
  const html=await (await fetch('/measure-pfd-calculator/')).text();
  const doc=new DOMParser().parseFromString(html,'text/html');
  return doc.querySelector('#parcel-calculator button').disabled
    && doc.querySelector('.reference-table').textContent.includes('$304.00')
    && doc.querySelector('.reference-table').textContent.includes('$4,256.00')
    && html.includes('interactive calculator needs JavaScript');
})()`);
writeFileSync(`.context/reference-browser-audit-${new URL(origin).port}.json`, JSON.stringify({origin, passed}, null, 2));
console.log(`Passed ${passed.length} reference-resource browser checks.`);
