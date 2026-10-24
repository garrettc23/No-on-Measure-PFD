import { estimateParcelTax } from './parcelTax.mjs';

/** Full pass-through for the entered area, not a prediction or permitted rent.
 * @param {string} squareFeet
 */
export function estimateRentScenario(squareFeet) {
  const tax = estimateParcelTax(squareFeet);
  if (!tax) return null;
  return { annual: tax.annual, monthly: tax.monthly };
}
