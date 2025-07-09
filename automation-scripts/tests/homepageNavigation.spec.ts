
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Homepage loads and displays the welcome heading', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.verifyWelcomeHeading('Welcome to Shady Meadows B&B');
});
