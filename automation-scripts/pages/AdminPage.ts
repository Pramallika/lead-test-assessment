import { Page, Locator } from '@playwright/test';

export class AdminPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly dashboardHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#doLogin');
    this.errorMessage = page.locator('div.alert.alert-danger[role="alert"]');
    this.dashboardHeading = page.locator('h2', { hasText: 'Admin panel' });
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/admin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isDashboardVisible(): Promise<boolean> {
    return await this.dashboardHeading.isVisible();
  }

  async getErrorMessage(): Promise<string | null> {
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      return await this.errorMessage.textContent();
    } catch {
      return null;
    }
  }
}
