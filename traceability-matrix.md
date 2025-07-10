# 📊 Traceability Matrix – Shady Meadows B&B

This matrix maps key functional areas of the Shady Meadows B&B website to their corresponding test coverage — both manual and automated. It ensures visibility across the test lifecycle and highlights any gaps or future scope.

---

## ✅ Matrix

| Requirement / Feature           | Manual Test | Automated Test | Notes / Bugs / Gaps                    |
|----------------------------------|-------------|----------------|----------------------------------------|
| Homepage Load & Branding         | ✅ Yes      | ✅ Yes         | Stable; validated branding + nav       |
| "Book Now" CTA                   | ✅ Yes      | ✅ Yes         | Scroll verified                        |
| Date Picker (Booking Form)       | ✅ Yes      | ⚠️ Skipped     | Broken date selection → test.fixme     |
| Room Listings                    | ✅ Yes      | ⛔ No          | Images missing / data duplicated       |
| Room Booking Flow (Nav only)     | ✅ Yes      | ⚠️ Skipped     | Field-level errors; flow unstable      |
| Contact Form – Positive          | ✅ Yes      | ✅ Yes         | Successful submission validated        |
| Contact Form – Negative Cases    | ✅ Yes      | ✅ Yes         | Edge cases covered (missing, invalid)  |
| Amenities Link Scroll            | ✅ Yes      | ⚠️ Skipped     | Scroll anchor fails → test.fixme       |
| Admin Login – Invalid Credentials| ✅ Yes      | ✅ Yes         | Negative flow covered                  |
| Admin Login – Positive Flow      | ⛔ No       | ⛔ No          | No credentials provided                |
| Responsiveness Check             | ✅ Basic    | ⛔ No          | Only visual check done manually        |
| Accessibility Check              | ✅ Basic    | ✅ Yes         | Axe-core integrated (Playwright)       |

---

## 🔎 Legend

- ✅ Yes → Covered and tested
- ⚠️ Skipped → Test exists but skipped due to bugs/unpredictable behavior
- ⛔ No → Not testable yet or deferred to future scope

---

## 🧠 Notes

- Known issues documented in `bug-report.md`
- Unstable flows isolated using `test.fixme()` to maintain CI stability
- API and performance tests are deferred until backend endpoints are available
- This matrix aligns with `test-strategy.md` and `automation-coverage.md`

---
