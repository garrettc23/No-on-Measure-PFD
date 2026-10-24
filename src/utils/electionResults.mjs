export function validateElectionReports(reports, now = Date.now()) {
  if (!Array.isArray(reports)) throw new Error('Election reports must be an array.');
  const pollsClose = Date.parse('2026-11-04T04:00:00Z');
  let previous = 0;
  for (const report of reports) {
    if (now < pollsClose) throw new Error('Do not publish results before polls close.');
    const reviewed = Date.parse(report.reviewedAt);
    const updated = Date.parse(report.sourceUpdatedAt);
    if (!Number.isFinite(reviewed) || !Number.isFinite(updated) || updated < pollsClose || updated > reviewed || reviewed > now || reviewed <= previous) throw new Error('Results need chronological, genuine source and review timestamps.');
    previous = reviewed;
    const source = new URL(report.sourceUrl);
    if (source.protocol !== 'https:' || !['results.lavote.gov', 'www.lavote.gov', 'www.cityofpasadena.net'].includes(source.hostname) || source.username || source.password) throw new Error('Results require an official County or City source.');
    if (!['preliminary', 'certified'].includes(report.status)) throw new Error('Label results preliminary or certified.');
    if (![report.yesVotes, report.noVotes].every(n => Number.isSafeInteger(n) && n >= 0) || !Number.isSafeInteger(report.yesVotes + report.noVotes)) throw new Error('Vote totals must be safe non-negative integers.');
    if (report.status === 'preliminary' && report.outcome != null) throw new Error('Do not declare an outcome from preliminary results.');
    if (report.status === 'certified' && !['passed', 'failed'].includes(report.outcome)) throw new Error('Copy the certified outcome from the official source.');
    if (typeof report.sourceLabel !== 'string' || !report.sourceLabel.trim()) throw new Error('Name the official results source.');
  }
}
