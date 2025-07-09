import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test.describe('Contact Form', () => {
  test('should submit successfully with valid data', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.fillContactForm('John Doe', 'john@example.com', '1234567890', 'Test Subject', 'Test message');
    await contactPage.submitForm();
    expect(await contactPage.isSuccessMessageVisible()).toBeTruthy();
  });

  test.fixme('should show errors for empty required fields', async ({ page }) => {
    // Known bug: error messages are not displayed for empty fields
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.submitForm();
    const errorMessages = await contactPage.messageError.allTextContents();
    console.log('Error messages found (should not be empty if validation works):', errorMessages);
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test.fixme('should show error for invalid email', async ({ page }) => {
    // Known bug: error messages are not displayed for invalid email
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.fillContactForm('John Doe', 'invalid-email', '1234567890', 'Test Subject', 'Test message');
    await contactPage.submitForm();
    const errorMessages = await contactPage.messageError.allTextContents();
    console.log('Error messages found (should not be empty if validation works):', errorMessages);
    expect(errorMessages.length).toBeGreaterThan(0);
  });
});
