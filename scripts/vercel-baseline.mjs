import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, writeFile } from 'node:fs/promises';
const exec = promisify(execFile);
const since = process.env.MEASUREMENT_SINCE;
const until = process.env.MEASUREMENT_UNTIL;
if (!since || !until || !Number.isFinite(Date.parse(since)) || !Number.isFinite(Date.parse(until)) || Date.parse(since) >= Date.parse(until)) throw new Error('Set MEASUREMENT_SINCE and MEASUREMENT_UNTIL to ISO timestamps, oldest first.');
const projectId = 'prj_3LUsNvV8FRva34LvapW0yd1DSPT1';
const aiHosts = ['chatgpt.com', 'chat.openai.com', 'www.perplexity.ai', 'perplexity.ai', 'claude.ai', 'gemini.google.com', 'copilot.microsoft.com'];
const requests = {
  totals: ['visits/count', {}],
  pages: ['visits/aggregate', {by:'requestPath',limit:'100'}],
  referrers: ['visits/aggregate', {by:'referrerHostname',limit:'100'}],
  devices: ['visits/aggregate', {by:'deviceType',limit:'100'}],
  daily: ['visits/aggregate', {by:'day',limit:'100'}],
  events: ['events/aggregate', {by:'eventName',limit:'100'}],
  observedAiReferrals: ['visits/aggregate', {by:'referrerHostname',limit:'100',filter:`environment eq 'production' and referrerHostname in (${aiHosts.map(host=>`'${host}'`).join(',')})`}],
};
const reports = await Promise.all(Object.entries(requests).map(async ([name,[endpoint,options]]) => {
  const query = new URLSearchParams({projectId,since,until,filter:"environment eq 'production'",...options});
  try {
    const {stdout} = await exec('vercel',['api',`/v1/query/web-analytics/${endpoint}?${query}`,'--scope','firebay-studios','--raw'],{timeout:60000,maxBuffer:5_000_000});
    return [name, {status:'collected',response:JSON.parse(stdout)}];
  } catch { return [name,{status:'unavailable',note:'Authenticated API query failed; no values inferred.'}]; }
}));
const data = Object.fromEntries(reports);
const report = {collectedAt:new Date().toISOString(),projectId,scope:'firebay-studios',requested:{since,until,environment:'production'},aiHosts,reports:data};
const directory = `.context/vercel-baseline/${report.collectedAt.replace(/[:.]/g,'-')}`;
await mkdir(directory,{recursive:true,mode:0o700});
await writeFile(`${directory}/baseline.json`,JSON.stringify(report,null,2),{mode:0o600});
const totals = data.totals.response?.data;
const table = (name,dimension) => data[name].status !== 'collected' ? ['Not obtained.'] : [
  '| Source | Visitors | Page views / events |','| --- | --- | --- |',
  ...data[name].response.data.map(row => `| ${String(row[dimension] || '(no referrer)').replace(/[|\r\n]/g,' ')} | ${row.visitors ?? 'Not returned'} | ${row.pageviews ?? row.events ?? row.count ?? 'Not returned'} |`),
];
const markdown = ['# Vercel measurement baseline',`Collected ${report.collectedAt}. Requested ${since} through ${until}. Production only.`,
  `API date boundaries: ${JSON.stringify(data.totals.response?.query || null)}.`,
  `Reported visitors: ${totals?.visitors ?? 'Not obtained'}. Page views: ${totals?.pageviews ?? 'Not obtained'}.`,
  '', '## Landing paths',...table('pages','requestPath'),'', '## Named AI referrers',...table('observedAiReferrals','referrerHostname'),
  '', '## Custom events',...table('events','eventName'),
  '', 'The private JSON also preserves referrers, devices, and daily counts. Grouped visitor counts are not additive. Blank referrers are unattributed, not necessarily direct traffic; Google/Bing referrers alone do not establish organic search attribution. Advertising, previews of ads, automated traffic, and missing referrers can affect these counts. An empty named-AI-referrer result does not prove no AI-driven visits or no citations. “Others” and row limits can hide individual entries; the explicit AI-host query avoids relying only on the top-referrer table. Custom-event receipt must be verified after release. No raw calculator inputs are requested or stored.',
].join('\n');
await writeFile(`${directory}/report.md`,markdown,{mode:0o600});
console.log(`Saved ${reports.filter(([,r])=>r.status==='collected').length}/${reports.length} reports to ${directory}.`);
console.log(JSON.stringify({totals, observedAiReferrals:data.observedAiReferrals.response?.data, events:data.events.response?.data}));
if (reports.some(([,r])=>r.status!=='collected')) process.exitCode=1;
