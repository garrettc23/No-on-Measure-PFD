import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function reportingPeriods(end, days = 28) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(end) || !Number.isInteger(days) || days < 1 || days > 180) throw new Error('Use YYYY-MM-DD and 1–180 days.');
  const date = new Date(`${end}T12:00:00Z`);
  if (!Number.isFinite(+date) || date.toISOString().slice(0, 10) !== end) throw new Error('Invalid end date.');
  const offset = n => new Date(+date + n * 86400000).toISOString().slice(0, 10);
  return { current: { startDate: offset(1 - days), endDate: end }, previous: { startDate: offset(1 - days * 2), endDate: offset(-days) } };
}

export function queryGroup(query) {
  return /pfdno|pfd\s*no\s*\.\s*com|no\s+on\s+(?:measure\s+)?pfd|committee for responsible property taxation/i.test(query)
    ? 'campaign_or_navigation' : 'informational_or_other';
}

export function summarize(rows) {
  if (!rows?.length) return null;
  const clicks = rows.reduce((n, row) => n + row.clicks, 0);
  const impressions = rows.reduce((n, row) => n + row.impressions, 0);
  return { clicks, impressions, ctr: impressions ? clicks / impressions : null,
    position: impressions ? rows.reduce((n, row) => n + row.position * row.impressions, 0) / impressions : null };
}

export async function queryRows(request, body, pageSize = 25000, maxRows = 100000) {
  const rows = [];
  for (let startRow = 0; startRow < maxRows; startRow += pageSize) {
    const data = await request({ ...body, rowLimit: pageSize, startRow });
    rows.push(...(data.rows || []));
    if (!data.rows || data.rows.length < pageSize) return { rows, capped: false };
  }
  return { rows, capped: true };
}

async function main() {
  if (process.argv.includes('--help')) {
    console.log('Read-only Search Console export. Set GSC_ACCESS_TOKEN using a secure OAuth credential source, GSC_END_DATE=YYYY-MM-DD, optional GSC_DAYS=28 and GSC_SITE_URL=sc-domain:pfdno.com. Writes private data only under .context/search-baseline/. Never place tokens in command arguments or commit exports.');
    return;
  }
  const token = process.env.GSC_ACCESS_TOKEN;
  if (!token) throw new Error('Search Console authorization is required. No baseline was collected. See docs/seo-measurement.md.');
  const periods = reportingPeriods(process.env.GSC_END_DATE || '', Number(process.env.GSC_DAYS || 28));
  const siteUrl = process.env.GSC_SITE_URL || 'sc-domain:pfdno.com';
  if (siteUrl !== 'sc-domain:pfdno.com' && siteUrl !== 'https://www.pfdno.com/') throw new Error('Use the existing pfdno.com domain or HTTPS www property.');
  const api = async (url, body) => {
    const response = await fetch(url, { method: body ? 'POST' : 'GET',
      headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`Search Console request failed (HTTP ${response.status}); no response body or credentials logged.`);
    return response.json();
  };
  const siteEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}`;
  const report = { collectedAt: new Date().toISOString(), siteUrl, searchType: 'web', dataState: 'final', reportingTimezone: 'America/Los_Angeles', periods: {}, sitemaps: null, inspections: [] };
  for (const [name, period] of Object.entries(periods)) {
    const tables = {};
    for (const [label, dimensions] of Object.entries({ total: [], dates: ['date'], pages: ['page'], queries: ['query'], devices: ['device'] })) {
      tables[label] = await queryRows(body => api(`${siteEndpoint}/searchAnalytics/query`, body), { ...period, dimensions, type: 'web', dataState: 'final' });
    }
    const queries = tables.queries.rows.map(row => ({ ...row, group: queryGroup(row.keys[0]) }));
    report.periods[name] = { ...period, ...tables, queries: { ...tables.queries, rows: queries },
      observedQueryGroups: Object.fromEntries(['campaign_or_navigation', 'informational_or_other'].map(group => [group, summarize(queries.filter(row => row.group === group))])) };
  }
  report.sitemaps = await api(`${siteEndpoint}/sitemaps`);
  // Inspect existing public pages; inspection reports Google's indexed copy, not a live test.
  for (const path of ['/', '/facts/']) {
    const inspectionUrl = `https://www.pfdno.com${path}`;
    report.inspections.push({ inspectionUrl, ...await api('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', { inspectionUrl, siteUrl, languageCode: 'en-US' }) });
  }
  const directory = `.context/search-baseline/${report.collectedAt.replace(/[:.]/g, '-')}`;
  await mkdir(directory, { recursive: true, mode: 0o700 });
  await writeFile(`${directory}/baseline.json`, JSON.stringify(report, null, 2), { mode: 0o600 });
  const current = report.periods.current.total.rows[0];
  const previous = report.periods.previous.total.rows[0];
  const value = (row, metric) => row?.[metric] == null ? 'Not returned' : metric === 'ctr' ? `${(row[metric] * 100).toFixed(2)}%` : String(row[metric]);
  const markdown = [
    '# Search Console baseline', `Collected ${report.collectedAt}. Property: ${siteUrl}. Finalized Web-search data, Pacific reporting dates.`,
    `Current: ${periods.current.startDate} to ${periods.current.endDate}. Previous: ${periods.previous.startDate} to ${periods.previous.endDate}.`,
    '', '| Metric | Current | Previous |', '| --- | --- | --- |',
    ...['clicks', 'impressions', 'ctr', 'position'].map(metric => `| ${metric} | ${value(current, metric)} | ${value(previous, metric)} |`),
    '', 'The JSON contains page, query, device, daily, sitemap, and indexed-URL reports. Query groups cover returned query rows only: anonymized queries and API row limits mean their totals need not equal property totals. “Measure PFD” alone is informational; campaign-name/domain searches are classified as navigation. Empty responses remain unknown rather than invented zeroes.',
    '', 'Check every capped flag. Search Console can return top rows rather than an exhaustive dataset even below the local cap. These observations do not establish causation, field performance, Bing traffic, or AI citation frequency.',
  ].join('\n');
  await writeFile(`${directory}/report.md`, markdown, { mode: 0o600 });
  console.log(`Saved private baseline and summary in ${directory}.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch(error => { console.error(error.message); process.exitCode = 1; });
