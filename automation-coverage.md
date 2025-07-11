# ✅ Automation Coverage – Shady Meadows B&B

This document outlines the current state of automated test coverage for the Shady Meadows B&B web application. It includes implemented tests, skipped tests (with rationale), and a roadmap for future automation expansion.

---

## 🎯 Test Coverage Summary

| Feature / Area            | Coverage Type       | Status       | Notes                                                               |
|---------------------------|---------------------|--------------|---------------------------------------------------------------------|
| Homepage Load             | UI Smoke Test       | ✅ Automated | Branding, header, and smooth scroll to booking section              |
| Book Now (CTA)            | UI Interaction      | ✅ Automated | Verifies CTA scroll functionality                                   |
| Contact Form – Valid      | UI Functional       | ✅ Automated | All valid inputs; checks for success message                        |
| Contact Form – Invalid    | UI Validation       | ✅ Automated | Empty/invalid inputs; verifies validation messages                  |
| Admin Login – Invalid     | UI Negative Flow    | ✅ Automated | Validates error for incorrect credentials                           |
| Amenities Anchor Link     | UI Navigation       | ⚠️ Skipped   | Test marked with `test.fixme` due to unreliable scroll behavior     |
| Date Picker (Booking)     | UI Element Behavior | ✅ Automated | Verifies component presence and broken behavior for awareness       |
| Accessibility Sanity Check| Non-Functional      | ✅ Automated | Checks for basic WCAG violations using Axe + Playwright             |

---

## 📂 Automated Test Files

| Spec File                    | Description                                                |
|------------------------------|------------------------------------------------------------|
| `accessibility.spec.ts`      | Basic accessibility audit using Axe-core                  |
| `adminlogin.spec.ts`         | Admin login with invalid credentials                      |
| `amenitiesnavigation.spec.ts`| Anchor link scroll (marked fixme)                         |
| `contactform.spec.ts`        | Contact form with valid and invalid input flows           |
| `datepicker.spec.ts`         | Date picker component presence + known issue validation   |
| `homenavigation.spec.ts`     | Homepage load and CTA interaction                         |
| `testdatautils.ts`           | Utility for managing dynamic test input (name/email/etc.) |

---

## 🧰 Coverage by Page Object

| Page File           | Elements Covered                                            |
|---------------------|-------------------------------------------------------------|
| `homepage.ts`       | Header, CTA, amenities link                                 |
| `contactpage.ts`    | Name, email, message fields, validation messages, submit    |
| `adminpage.ts`      | Username, password, login button, error messaging           |

---

## 🔁 Tests Skipped or Deferred

| Feature / Reason               | Action Taken            | Rationale                                                        |
|--------------------------------|--------------------------|------------------------------------------------------------------|
| Admin Login (Positive)         | ❌ Not tested            | No valid credentials provided                                    |
| Booking Flow (Full)            | ❌ Deferred              | Date picker is broken; full booking test not possible            |
| Amenities Scroll               | ⚠️ Skipped               | Inconsistent behavior; test marked with `test.fixme`             |
| Responsive Layout              | ⚠️ Manual Only           | Verified in DevTools; no device emulation added yet              |
| Social Media Links (Footer)    | ❌ Out of Scope          | External redirects not prioritized in this round                 |

---

## 🧭 Future Automation Targets

| Area                        | Suggested Test(s)                                   |
|-----------------------------|-----------------------------------------------------|
| Booking Flow (E2E)          | Once calendar/date-picker is fixed                  |
| Responsive Viewports        | Use Playwright’s mobile device emulation           |
| Admin Login (Positive Case) | Once credentials are available                      |
| Visual Regression Testing   | Optional: Integrate Percy or Playwright snapshot    |
| API Testing (if exposed)    | Postman or Karate tests for contact/booking forms   |

---

## ⚠️ Known Automation Challenges

- ❗ **Broken Date Picker**: React component doesn’t allow any valid date range
- ❗ **Unstable Selectors**: Missing `data-testid` or stable locators across pages
- ❗ **No API Exposure**: No backend API to programmatically seed/clean test data
- ❗ **Amenities Link**: Scroll behavior inconsistent across browsers/viewports

---

## 📊 Current Test Status

| Metric                | Value                   |
|-----------------------|-------------------------|
| Total Spec Files      | 6                       |
| Utilities / Helpers   | 1                       |
| Tests Passing         | ✅ All (except fixme)    |
| Tests Skipped         | 1 (`test.fixme`)        |
| Known Bugs Covered    | 3+ scenarios            |
| Local Execution Time  | ~12–15 seconds total    |

---

> This automation suite demonstrates real-world readiness by covering critical paths, isolating flaky flows, and laying a modular foundation for scalability and CI integration.
