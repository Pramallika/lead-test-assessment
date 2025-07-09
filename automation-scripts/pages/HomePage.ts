import { Page, Locator } from '@playwright/test';

export class HomePage {
  // TIP: Prefer data-testid selectors for stability if available.
  // Example: this.bookNowButton = page.getByTestId('book-now-btn');
  // If not available, use robust role/text selectors as fallback.
  readonly page: Page;
  readonly heading: Locator;
  readonly headingDescription: Locator;
  readonly bookNowButton: Locator;
  readonly amenitiesLink: Locator;
  readonly checkInDateInput: Locator;
  readonly checkOutDateInput: Locator;
  readonly checkAvailabilityButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.headingDescription = page.locator('h1 + p');
    this.bookNowButton = page.locator('h1 + p + button');
    this.amenitiesLink = page.locator('a[href="#amenities"]');
    // Updated selectors based on actual HTML:
    this.checkInDateInput = page.locator('label[for="checkin"] ~ .react-datepicker-wrapper input');
    this.checkOutDateInput = page.locator('label[for="checkout"] ~ .react-datepicker-wrapper input.form-control');
    this.checkAvailabilityButton = page.locator('button.btn.btn-primary.w-100.py-2');
  }

  /**
   * Selects a check-in date by clicking the input and then the day in the calendar.
   * @param ariaLabel The aria-label of the day to select, e.g. 'Choose Tuesday, 8 July 2025'
   */
  async selectCheckInDate(ariaLabel: string) {
    await this.checkInDateInput.scrollIntoViewIfNeeded();
    await this.checkInDateInput.waitFor({ state: 'visible' });
    await this.checkInDateInput.click();
    const day = this.page.locator(`.react-datepicker__day[aria-label="${ariaLabel}"]`);
    await day.click();
  }

  /**
   * Selects a check-out date by clicking the input and then the day in the calendar.
   * @param ariaLabel The aria-label of the day to select, e.g. 'Choose Thursday, 10 July 2025'
   */
  async selectCheckOutDate(ariaLabel: string) {
    await this.checkOutDateInput.click();
    const day = this.page.locator(`.react-datepicker__day[aria-label="${ariaLabel}"]`);
    await day.click();
  }

  async clickCheckAvailability() {
    await this.checkAvailabilityButton.click();
  }

  async clickAmenitiesLink() {
    await this.amenitiesLink.click();
  }

  // Optional helper to expect scroll to amenities section
  async expectScrollToAmenities() {
    const amenitiesSection = this.page.locator('#amenities');
    await amenitiesSection.waitFor({ state: 'visible' });
    // Optionally, check if it's in viewport (advanced)
    // const box = await amenitiesSection.boundingBox();
    // expect(box).not.toBeNull();
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/');
  }

  async getHeadingText(): Promise<string> {
    return (await this.heading.textContent()) ?? '';
  }

  async verifyWelcomeHeading(expectedText: string, customMessage?: string) {
    await this.heading.waitFor({ state: 'visible' });
    const actualText = await this.getHeadingText();
    if (actualText !== expectedText) {
      const message = customMessage || `Expected heading to be '${expectedText}', but got '${actualText}'`;
      throw new Error(message);
    }
  }

  async clickBookNow() {
    await this.bookNowButton.click();
  }
}
