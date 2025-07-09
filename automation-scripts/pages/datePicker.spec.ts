import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('should allow selecting check-in and check-out dates and check availability', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Use aria-labels for the days you want to select
  await homePage.selectCheckInDate('Choose Tuesday, 8 July 2025');
  await homePage.selectCheckOutDate('Choose Thursday, 10 July 2025');

  await homePage.clickCheckAvailability();

  // Add assertions here as needed, e.g. check for results, error messages, etc.
  // expect(await page.locator('selector-for-results').isVisible()).toBeTruthy();
});
