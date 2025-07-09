import { test, expect } from '@playwright/test';
import { AdminPage } from '../pages/AdminPage';

test.describe('Admin Login', () => {


  test('should show error with invalid credentials', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.goto();
    await adminPage.login('wronguser', 'wrongpass');
    const errorMsg = await adminPage.getErrorMessage();
    console.log('Error message:', errorMsg);
    expect(errorMsg).not.toBeNull();
    // Optionally check for specific error text if known
    // expect(errorMsg).toContain('Invalid username or password');
  });
});
