# 🧪 Playwright Tests – Shady Meadows B&B

This folder contains all automated end-to-end UI tests for the Shady Meadows B&B demo site, implemented using Playwright and TypeScript.

---

## 📂 Folder Structure

- `homepageNavigation.spec.ts` – Tests homepage navigation and key links
- `contactForm.spec.ts` – Validates contact form (positive and negative scenarios)
- `adminLogin.spec.ts` – Covers admin login (negative scenarios only)
- `datePicker.spec.ts` – Checks date picker functionality and selectors
- `amenitiesNavigation.spec.ts` – Verifies amenities navigation and content

> **Note:** Page object files are located in the `/pages` directory at the project root.

---

## 🚀 How to Run the Tests

1. **Install dependencies** (from project root):
   ```sh
   npm install
   ```

2. **Run all tests** (from project root):
   ```sh
   npx playwright test
   ```

3. **Run a specific test file**:
   ```sh
   npx playwright test tests/contactForm.spec.ts
   ```

4. **View HTML test report**:
   ```sh
   npx playwright show-report
   ```

---


## 📝 Important Notes

- **Test Skipping:**
  - Some negative scenarios are marked with `test.fixme` due to known application bugs (see `bug-report.md`).
- **Selectors:**
  - Prefer `data-testid` or similar attributes for stable selectors. If not available, use robust role/text selectors. See page object comments for examples.
  - Some selectors (e.g., date picker fields) may be fragile due to lack of unique IDs.
- **Test Data:**
  - No persistent data is created; all tests use dummy data and are safe to re-run.
  - For future persistent data or API support, see `testDataUtils.ts` for setup/teardown utilities.
- **Admin Login:**
  - Only negative login scenarios are tested, as valid credentials are not available.
- **Test Results:**
  - Test run results and reports are saved in the `/test-results` and `/playwright-report` folders.
- **Accessibility:**
  - Accessibility checks are included (see `accessibility.spec.ts`). Install Axe with `npm install --save-dev @axe-core/playwright`.
- **Performance:**
  - For performance checks, run [Lighthouse](https://developers.google.com/web/tools/lighthouse) manually or integrate in CI as needed.
- **Coverage:**
  - To collect code coverage, run:
    ```sh
    npx playwright test --coverage
    ```
    and view the report in the generated `coverage/` folder.
- **CI/CD:**
  - See `.github/workflows/playwright.yml` for a sample GitHub Actions workflow.
- **Advanced Reporting:**
  - For richer reports, consider integrating [Allure](https://docs.qameta.io/allure/) or Playwright dashboard.
- **Exploratory Testing:**
  - See `exploratory-charter.md` for a sample exploratory test session template.

---

## 🛠️ Troubleshooting

- If tests fail due to timeouts, try increasing the Playwright timeout or check your network connection.
- Ensure you are running the latest version of dependencies (`npm install`).
- For selector issues, inspect the DOM and update selectors in the relevant page object files under `/pages`.

---

## 📚 References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- Project-level README and `bug-report.md` for more details on setup, known issues, and test strategy.
