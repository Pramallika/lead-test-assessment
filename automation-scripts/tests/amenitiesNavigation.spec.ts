import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.fixme('should navigate to amenities section when amenities link is clicked', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.clickAmenitiesLink();
  // Optionally, check scroll/visibility
  await homePage.expectScrollToAmenities();
  // You can add more assertions here if needed
});
