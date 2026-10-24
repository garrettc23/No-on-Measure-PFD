import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reportingPeriods, queryGroup, summarize, queryRows } from './search-baseline.mjs';

test('reporting windows are inclusive, consecutive, and handle month boundaries', () => {
  assert.deepEqual(reportingPeriods('2026-03-01', 2), { current: { startDate: '2026-02-28', endDate: '2026-03-01' }, previous: { startDate: '2026-02-26', endDate: '2026-02-27' } });
  for (const invalid of ['2026-02-30', '', '2026-1-01']) assert.throws(() => reportingPeriods(invalid));
  assert.throws(() => reportingPeriods('2026-10-24', 0));
});
test('campaign searches are distinct from measure information', () => {
  for (const term of ['pfdno.com', 'No on Measure PFD', 'NO ON PFD']) assert.equal(queryGroup(term), 'campaign_or_navigation');
  for (const term of ['Measure PFD', 'PFD exemptions', 'Pasadena parcel tax']) assert.equal(queryGroup(term), 'informational_or_other');
});
test('empty results remain unknown; CTR and position use impression weights', () => {
  assert.equal(summarize([]), null);
  assert.deepEqual(summarize([{clicks: 1, impressions: 10, position: 2}, {clicks: 3, impressions: 30, position: 6}]), {clicks: 4, impressions: 40, ctr: 0.1, position: 5});
});
test('pagination retains all rows and reports a cap instead of claiming completeness', async () => {
  const calls = [];
  const result = await queryRows(async body => { calls.push(body.startRow); return {rows: body.startRow === 0 ? [1,2] : [3]}; }, {type:'web'}, 2, 6);
  assert.deepEqual(calls, [0,2]); assert.deepEqual(result, {rows:[1,2,3], capped:false});
  assert.deepEqual(await queryRows(async () => ({rows:[1,2]}), {}, 2, 4), {rows:[1,2,1,2], capped:true});
});
