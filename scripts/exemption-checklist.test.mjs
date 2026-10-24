import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exemptionNextSteps } from '../src/utils/exemptionChecklist.mjs';
test('owner answers identify categories to review, not an eligibility verdict', () => {
  const both = exemptionNextSteps({ property: 'owner', utility: 'yes', income: 'yes' });
  assert.equal(both.length, 2);
  assert.ok(both[0].text.includes('Confirm your current exemption status'));
  assert.ok(both[1].text.includes('calendar year'));
  assert.equal(exemptionNextSteps({ property: 'owner', utility: 'no', income: 'yes' }).length, 1);
  assert.equal(exemptionNextSteps({ property: 'owner', utility: 'yes', income: 'no' }).length, 1);
});
test('uncertain answers keep possible categories available', () => {
  assert.equal(exemptionNextSteps({ property: 'owner', utility: 'unsure', income: 'unsure' }).length, 2);
  assert.equal(exemptionNextSteps({ property: 'unsure' }).length, 2);
});
test('negative answers do not declare the visitor ineligible', () => {
  const steps = exemptionNextSteps({ property: 'owner', utility: 'no', income: 'no' });
  assert.equal(steps.length, 1);
  assert.ok(steps[0].text.includes('not a decision that you must pay'));
});
test('government and organization branches do not inherit owner answers', () => {
  const government = exemptionNextSteps({ property: 'government', utility: 'yes', income: 'yes' });
  assert.equal(government.length, 1);
  assert.equal(government[0].href, '#organizations');
  for (const organization of ['yes', 'no', 'unsure']) {
    const steps = exemptionNextSteps({ property: 'organization', organization, utility: 'yes', income: 'yes' });
    assert.equal(steps.length, 1);
    assert.equal(steps[0].href, '#organizations');
    assert.ok(steps[0].text.includes(organization === 'yes' ? 'Confirm' : 'Nonprofit status alone'));
  }
});
