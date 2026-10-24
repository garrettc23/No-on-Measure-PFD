import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimateRentScenario } from '../src/utils/rentScenario.mjs';
import { currency } from '../src/utils/parcelTax.mjs';
test('uses one area input and the 1200-square-foot example', () => {
  assert.deepEqual(estimateRentScenario('1,200'), { annual: 228, monthly: 19 });
  assert.deepEqual(estimateRentScenario('1200'), estimateRentScenario('1,200'));
  assert.equal(currency(estimateRentScenario('1100').monthly), '$17.42');
});
test('rejects missing, non-positive, malformed, non-finite, or unsafe area', () => {
  for (const area of ['', ' ', '0', '-5', 'Infinity', 'NaN', '1e3', '1,20', '1200 sq ft', '999999999999999999']) assert.equal(estimateRentScenario(area), null, area);
});
test('keeps currency rounding consistent with the property tax calculator', () => {
  assert.deepEqual(estimateRentScenario('1600.5'), { annual: 304.1, monthly: 30410 / 1200 });
});
