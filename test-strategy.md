# 🧪 Test Strategy – Shady Meadows B&B Automation

## 1. Scope

### ✅ Functional Testing
- Homepage navigation and rendering
- Contact form submission (positive and negative cases)
- Admin login (negative scenario)
- Amenities and internal anchor link behavior
- Room booking page accessibility

### ✅ Non-Functional Testing
- UI responsiveness across screen sizes
- Basic accessibility (form labels, focus handling)
- Stability of UI locators
- Bug isolation using `test.fixme`
- 📌 Future Scope: Performance testing via JMeter or Playwright tracing

---

## 2. Manual vs Automation

| Type           | Status        | Approach                        |
|----------------|---------------|----------------------------------|
| Manual Testing | ✅ Completed  | Exploratory testing and bug documentation |
| Automation     | ✅ Implemented | Playwright + TypeScript (modular POM) |
| API Testing    | ⏳ Planned     | To be added via Postman/Karate  |
| Performance    | ⏳ Planned     | Proposed via JMeter             |

---

## 3. Tools and Technologies

| Layer         | Tool(s) Used                            | Purpose                         |
|---------------|------------------------------------------|----------------------------------|
| UI Automation | Playwright + TypeScript                  | Fast, modern test runner         |
| Assertions    | Playwright Test built-in assertions      | Stability and visibility         |
| Reporting     | Playwright HTML Report                   | Local debugging and CI readiness |
| Version Control | Git + GitHub                          | Collaborative repo management    |
| Bug Tracking  | Markdown file (`bug-report.md`)          | Transparent, triaged bug log     |
| CI/CD (Planned) | GitHub Actions                        | Trigger tests on push/PR         |

---

## 4. Folder Structure

lead-assessment/
├── pages/ # Page object model
│ ├── homepage.page.ts
│ ├── contact.page.ts
│ └── admin.page.ts
├── tests/ # Automation test specs
│ ├── homepage.spec.ts
│ ├── contact.spec.ts
│ └── admin.spec.ts
├── exploratory-testing.md # Manual test observations
├── test-strategy.md # Functional + non-functional strategy
├── bug-report.md # Triaged bugs with status
├── known-issues.md # Persistent limitations/workarounds
├── automation-coverage.md # Automation scope tracker
├── test-plan.md # Project scope, timeline, risks
├── leadership-actions.md # What was done beyond test writing
├── playwright.config.ts
├── README.md


---

## 5. Test Coverage & Prioritization

| Feature              | Type | Status | Notes |
|----------------------|------|--------|-------|
| Homepage             | UI   | ✅ Done | Header, CTA, navigation          |
| Contact Form         | UI   | ✅ Done | Positive & negative paths        |
| Admin Login          | UI   | ✅ Done | Negative scenario only           |
| Amenities Anchor     | UI   | ⚠️ Skipped | Marked `test.fixme` due to erratic behavior |
| Booking Flow         | UI   | ⏳ Blocked | Due to date picker bug           |

> Coverage prioritization based on risk, visibility, and stability of feature.

---

## 6. Regression Strategy

- All critical happy paths automated and modular
- Flaky or broken flows marked `test.fixme` to keep CI green
- Tests follow a page-object model to allow quick regression expansion
- Headless execution ready for GitHub Actions CI

---

## 7. API vs UI Testing Plan

| Area                 | Testing Approach | Status |
|----------------------|------------------|--------|
| Contact Form         | UI only (no API exposed) | ✅ Done |
| Admin Login          | UI only           | ✅ Done |
| Booking              | ⏳ Future API tests once endpoints known |
| Site Health          | ⏳ Add monitoring if applicable |

---

## 8. Bug Reporting Process

- Issues logged in `bug-report.md`
- Each entry includes severity, reproducibility, area, and expected behavior
- Bug triage tags suggested:
  - `Critical`: Blocks core flows
  - `Major`: Impacts UX or validation
  - `Minor`: Cosmetic or non-blocking
- Bugs are isolated in automation using `test.fixme` where appropriate

---

## 9. Test Data Strategy

- Inputs are static, non-sensitive, and reset per run
- Randomized data generators to avoid collisions
- No DB/backend hooks → teardown not required currently
- 📌 Future: Data factories or seed hooks for persistent tests

---

## 10. CI/CD (Planned)

- GitHub Actions setup to:
  - Run tests on PR and push to `main`
  - Store and archive HTML reports
- Config not committed due to assessment scope
- Can be extended to parallel execution for scale

---

## 11. Accessibility & Responsiveness

| Area              | Observation                                   | Status        |
|-------------------|-----------------------------------------------|---------------|
| Accessibility     | Basic form labels and tab handling covered    | ⚠️ Needs improvement |
|                   | 📌 TODO: Integrate `axe-core` checks          | Planned       |
| Responsiveness    | Tested via Chrome DevTools mobile preview     | ⚠️ Layout issues on small viewports |
|                   | Full responsive automation pending            | Planned       |

---

## 12. Known Limitations

- No valid admin credentials → only negative tests possible
- Date picker non-functional → booking test deferred
- Some error messages inconsistent → affects contact form test assertions
- Anchor scrolling behavior erratic → test skipped

---

## 13. Suggestions for Enhancement

- ✅ Add Axe-powered accessibility tests to catch basic a11y gaps
- ✅ Extend tests across viewports (e.g., tablet, mobile)
- ✅ Integrate GitHub Actions with branch-specific triggers
- ✅ Propose usability improvements based on test observations
- ✅ Add Postman test collections for contact/booking flows
- ✅ Introduce performance checks with JMeter or Playwright trace viewer

---

## ✅ Summary

This test strategy reflects a lead-level approach covering:
- Functional + non-functional aspects
- Exploratory-to-automation transition
- Stable CI-ready setup
- Clear documentation of limitations and future plans

> All decisions were made balancing impact, scope, and maturity — ensuring the solution is practical, maintainable, and extensible.

