// accessibility.spec.ts
// Sample accessibility test using Playwright and Axe

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Install axe-core/playwright: npm install --save-dev @axe-core/playwright

test.describe('Accessibility', () => {
  test('Homepage should have no critical accessibility violations', async ({ page }) => {
    await page.goto('https://automationintesting.online/');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    // Only fail on critical issues
    const critical = accessibilityScanResults.violations.filter(v => v.impact === 'critical');
    expect(critical, `Critical accessibility issues: ${JSON.stringify(critical, null, 2)}`).toHaveLength(0);
  });
});
