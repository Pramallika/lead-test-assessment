# ✅ Automation Coverage – Shady Meadows B&B

This document outlines the current state of automated test coverage for the Shady Meadows B&B web application. It includes implemented tests, skipped tests (with rationale), and a roadmap for future automation expansion.

---

## 🎯 Test Coverage Summary

| Feature / Area         | Coverage Type     | Status       | Notes                                                              |
|------------------------|-------------------|--------------|--------------------------------------------------------------------|
| Homepage Load          | UI Smoke Test     | ✅ Automated | Verified branding, hero header, and navigation to booking section |
| Book Now (CTA)         | UI Interaction    | ✅ Automated | Scrolls correctly to booking form section                          |
| Contact Form – Valid   | UI Functional     | ✅ Automated | Filled with sample data; success message asserted                  |
| Contact Form – Invalid | UI Validation     | ✅ Automated | Empty fields, invalid email, short message tested                  |
| Admin Login – Invalid  | UI Negative Flow  | ✅ Automated | Invalid credentials show proper error message                      |
| Amenities Anchor Link  | UI Navigation     | ⚠️ Skipped   | Test marked with `test.fixme`; inconsistent scroll behavior        |

---

## 🧪 Tests Skipped or Deferred

| Feature / Reason               | Action Taken            | Rationale                                                       |
|--------------------------------|--------------------------|-----------------------------------------------------------------|
| Admin Login (Positive)         | ❌ Not tested            | No valid credentials available                                  |
| Booking Calendar / Date Picker| ❌ Not testable          | Component broken; cannot select any valid date                  |
| Booking Form Validation        | ⚠️ Deferred              | Fields not clearly mapped; inconsistent error messages          |
| Responsive Layout              | ⚠️ Not yet automated     | Verified manually in DevTools; automation planned                |
| Social Media Footer Links      | ❌ Out of Scope          | External redirection not prioritized in current test plan       |

---

## 📂 Automated Test Files

| Spec File             | Description                                     |
|-----------------------|-------------------------------------------------|
| `homepage.spec.ts`    | Verifies home page load, Book Now scroll        |
| `contact.spec.ts`     | Validates form with both positive & negative flows |
| `admin.spec.ts`       | Tests admin login with invalid credentials only |
| `amenities.spec.ts`   | Contains `test.fixme` for amenities scroll bug  |

---

## 🧰 Coverage by Page Object

| Page File              | Elements Covered                                |
|------------------------|--------------------------------------------------|
| `homepage.page.ts`     | Header, Book Now, Amenities link                |
| `contact.page.ts`      | Name, Email, Message fields; Submit button     |
| `admin.page.ts`        | Username, Password, Login button, Error message|

---

## 🔁 Future Automation Targets

| Area                    | Suggested Test(s)                            |
|-------------------------|---------------------------------------------|
| Booking Flow (End-to-End) | Once date-picker is fixed                   |
| Admin Login (Valid Case)  | With credentials (if made available)        |
| Responsive Viewports      | Playwright device emulation                 |
| Accessibility Scan        | Using `@axe-core/playwright`                |
| API Flow Coverage         | Contact/Booking form endpoints (if exposed) |
| Visual Regression         | Snapshot comparison or Percy integration    |

---

## ⚠️ Known Automation Challenges

- ❗ **Date Picker**: React-datepicker component currently blocks date selection
- ❗ **Missing Test IDs**: Lack of stable selectors or test-friendly attributes
- ❗ **Inconsistent Error Messages**: Makes precise assertion difficult for form validation
- ❗ **No API Exposure**: Limits ability to seed/clean test data dynamically

---

## 📊 Current Test Status

| Metric                | Value               |
|-----------------------|---------------------|
| Total Spec Files      | 4                   |
| Tests Passing         | 5                   |
| Tests Skipped (`fixme`)| 1                  |
| Failures in CI        | 0                   |
| Execution Time        | ~10–12 seconds local|

---

> This automation suite provides strong coverage of stable areas and ensures CI remains green by marking unstable flows with `test.fixme`. The foundation is modular and extensible — ready to scale as the product evolves.

