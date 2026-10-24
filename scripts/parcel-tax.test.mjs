import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimateParcelTax, compareTaxBill, currency } from '../src/utils/parcelTax.mjs';
test('published property examples agree with the proposed rate and term', () => {
  assert.deepEqual(estimateParcelTax('1600'), { annual: 304, monthly: 304 / 12, total: 4256 });
  assert.equal(estimateParcelTax('2000').annual, 380);
  assert.equal(estimateParcelTax('20000').annual, 3800);
  assert.equal(currency(estimateParcelTax('1600').monthly), '$25.33');
});
test('rejects missing, malformed, non-positive and unsafe input without partial parsing', () => {
  for (const raw of ['', ' ', '-100', '0', '0.00', 'NaN', 'Infinity', '1e3', '1600abc', '1,60', '1,,600', ',1600', '1600,', '1,600.5,0', '12.345', '1.2.3', '99999999999999999999999']) assert.equal(estimateParcelTax(raw), null, raw);
});
test('accepts correctly grouped thousands separators', () => {
  for (const raw of ['1,600', '20,000', '1,000,000', ' 1,600.50 ']) {
    assert.deepEqual(estimateParcelTax(raw), estimateParcelTax(raw.replaceAll(',', '')));
  }
});
test('allows surrounding whitespace and two-place decimals with currency rounding', () => {
  assert.equal(estimateParcelTax(' 1600 ').annual, 304);
  assert.equal(estimateParcelTax('1600.50').annual, 304.1);
  assert.equal(estimateParcelTax('1600.50').total, 4257.4);
});
test('compares the current annual bill with only the proposed PFD charge added', () => {
  assert.deepEqual(compareTaxBill('8,000', 304), { current: 8000, added: 304, combined: 8304 });
  assert.deepEqual(compareTaxBill('8000.50', 304.10), { current: 8000.50, added: 304.10, combined: 8304.60 });
  assert.deepEqual(compareTaxBill('0', 304), { current: 0, added: 304, combined: 304 });
});
test('rejects invalid or unsafe bill comparisons', () => {
  for (const raw of ['', '-1', '8,00', '$8000', 'NaN', 'Infinity', '1e3', '90071992547410']) assert.equal(compareTaxBill(raw, 304), null, raw);
  for (const added of [-1, Infinity, NaN]) assert.equal(compareTaxBill('8000', added), null);
});
