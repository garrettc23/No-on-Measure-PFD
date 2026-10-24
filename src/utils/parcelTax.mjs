export const RATE_CENTS = 19;
export const TERM_YEARS = 14;
/** @param {string} raw */
export function parseAmount(raw) {
  const input = raw.trim();
  if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(input)) return null;
  const value = Number(input.replaceAll(',', ''));
  return Number.isFinite(value) && Number.isSafeInteger(Math.round(value * 100)) ? value : null;
}
/** @param {string} raw */
export function estimateParcelTax(raw) {
  const squareFeet = parseAmount(raw);
  if (squareFeet === null) return null;
  const annualCents = Math.round(squareFeet * RATE_CENTS);
  if (!Number.isFinite(squareFeet) || squareFeet <= 0 || !Number.isSafeInteger(annualCents * TERM_YEARS)) return null;
  return { annual: annualCents / 100, monthly: annualCents / 1200, total: annualCents * TERM_YEARS / 100 };
}
/** @param {string} currentBill @param {number} annualAddedTax */
export function compareTaxBill(currentBill, annualAddedTax) {
  const current = parseAmount(currentBill);
  if (current === null || !Number.isFinite(annualAddedTax) || annualAddedTax < 0) return null;
  const currentCents = Math.round(current * 100);
  const addedCents = Math.round(annualAddedTax * 100);
  if (!Number.isSafeInteger(currentCents + addedCents)) return null;
  return { current: currentCents / 100, added: addedCents / 100, combined: (currentCents + addedCents) / 100 };
}
/** @param {number} value */
export const currency = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
