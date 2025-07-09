import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly messageError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.subjectInput = page.locator('#subject');
    this.messageInput = page.locator('#description');
    this.submitButton = page.locator('button.btn.btn-primary', { hasText: 'Submit' });
    this.successMessage = page.locator('#contact h3.h4');
    this.messageError = page.locator('.alert.alert-danger p');
  }

  async validateErrors(expectedMessages: string | string[]) {
    const errorMessages = await this.messageError.allTextContents();
    const expectedList = Array.isArray(expectedMessages) ? expectedMessages : [expectedMessages];
    for (const expectedMsg of expectedList) {
      if (!errorMessages.some(msg => msg.trim() === expectedMsg)) {
        throw new Error(`Message error: expected to find '${expectedMsg}' in [${errorMessages.join(', ')}]`);
      }
    }
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/#/contact');
  }

  async fillContactForm(name: string, email: string, phone: string, subject: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async isSuccessMessageVisible(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }
}
