import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateElectionReports } from '../src/utils/electionResults.mjs';
const now = Date.parse('2026-11-05T16:00:00Z');
const fixture = {status:'preliminary', yesVotes:123, noVotes:234, sourceUrl:'https://results.lavote.gov/', sourceLabel:'County results (test fixture)', sourceUpdatedAt:'2026-11-04T06:00:00Z', reviewedAt:'2026-11-04T07:00:00Z'};
test('empty data is safe; no results can be published before polls close', () => {
  assert.doesNotThrow(() => validateElectionReports([]));
  assert.throws(() => validateElectionReports([fixture], Date.parse('2026-10-24T00:00:00Z')));
  assert.doesNotThrow(() => validateElectionReports([fixture], now));
});
test('results require official sources, timestamps, valid counts, and certification before an outcome', () => {
  for (const invalid of [{sourceUrl:'https://example.com/'},{yesVotes:-1},{noVotes:1.5},{outcome:'passed'},{status:'certified'},{reviewedAt:'2026-11-06T00:00:00Z'},{sourceUpdatedAt:'2026-11-04T08:00:00Z'}]) assert.throws(() => validateElectionReports([{...fixture,...invalid}], now));
  assert.doesNotThrow(() => validateElectionReports([{...fixture,status:'certified',outcome:'failed'}], now));
  assert.throws(() => validateElectionReports([fixture, fixture], now));
});
