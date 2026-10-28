import { readFile, writeFile } from 'node:fs/promises';
import { validateElectionReports } from '../src/utils/electionResults.mjs';
const args = process.argv.slice(2);
if (!args[0] || args.includes('--help')) {
  console.log('node scripts/election-results-import.mjs path/to/verified-report.json [--write]\nValidate a single manually verified official report; dry run by default. --write appends it locally. Does not publish or retrieve vote counts.');
} else {
  if (args.length > 2 || (args[1] && args[1] !== '--write')) throw new Error('Unknown option.');
  const file = 'src/data/election-results.json';
  const current = JSON.parse(await readFile(file,'utf8'));
  const report = JSON.parse(await readFile(args[0],'utf8'));
  const next = {reports:[...current.reports,report]};
  validateElectionReports(next.reports);
  console.log(JSON.stringify(report,null,2));
  if (args.includes('--write')) {
    await writeFile(file,JSON.stringify(next,null,2)+'\n');
    console.log('Appended locally. Review the source, diff, build, and preview before publishing.');
  } else console.log('Valid report. Dry run: no files changed.');
}
