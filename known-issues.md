# ⚠️ Known Issues – Shady Meadows B&B

This document outlines current bugs, limitations, and UI inconsistencies discovered during exploratory and automated testing. These issues were considered during test design and are either skipped in automation or noted for future follow-up.

---

## ❌ Functional Bugs

| ID     | Area               | Description                                                                 | Severity   | Workaround/Test Fixme |
|--------|--------------------|-----------------------------------------------------------------------------|------------|------------------------|
| #001   | Date Picker         | Calendar does not allow date selection; booking flow blocked               | High       | Booking tests deferred |
| #002   | Contact Form        | “Name” accepts special characters without validation                       | Medium     | Logged for UX fix      |
| #003   | Contact Form        | Error messages change order randomly on repeated invalid submits           | Medium     | `test.fixme` added     |
| #004   | Booking Page        | Validation message “Size must be 11–21” not tied to any specific field     | High       | Test skipped           |
| #005   | Amenities Link      | Homepage "Amenities" anchor doesn't scroll or navigate to target section   | Medium     | Test skipped           |
| #006   | Room Cards          | Sometimes only “Single Room” appears repeatedly after navigating back      | Medium     | Flaky rendering noted  |

---

## 🚫 Out-of-Scope or Blocked Areas

| Area             | Limitation                                                             | Notes                           |
|------------------|------------------------------------------------------------------------|----------------------------------|
| Admin Login      | No valid credentials available                                         | Only negative scenario tested    |
| Booking Flow     | Date picker completely non-functional                                  | Skipped for now                  |
| API Testing      | No public API or backend exposure                                      | Deferred to future scope         |
| Data Persistence | Test data does not persist across sessions (stateless)                | Cleanup not required             |

---

## 🧪 Test Suite Adjustments

- Problematic tests are marked with `test.fixme()` in Playwright
- Non-critical flows are documented but not automated until fixed
- Console logs used for debugging failed selectors or flaky flows

---

## ✅ Next Steps / Recommendations

- Resolve date picker logic for booking automation readiness
- Tighten form validations (e.g., reject special characters in names)
- Map validation errors to specific fields for better UX
- Stabilize room listing rendering logic
- Anchor links should trigger scroll/focus for accessibility and usability

---

> For reproducible steps and screenshots, see: `bug-report.md`
