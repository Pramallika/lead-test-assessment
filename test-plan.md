# 🗂️ Test Plan – Shady Meadows B&B Automation Assessment

## 1. Objective

To define a structured QA approach for validating both **functional** and **non-functional** aspects of the Shady Meadows B&B website using Playwright and supporting tools. This test plan outlines the scope, timelines, test environments, assumptions, risks, and deliverables for the automation solution.

---

## 2. Scope

### ✅ In-Scope
- UI validation of key guest flows (homepage, contact form, admin login)
- Form validations (positive and negative)
- Anchor link/navigation behavior
- Basic accessibility and responsiveness checks
- Exploratory testing to inform automation coverage

### ⛔ Out-of-Scope (for this phase)
- Booking flow (due to date picker bug)
- API testing (planned for future scope)
- Authenticated admin scenarios (no valid credentials)
- Backend validation or database assertions

---

## 3. Test Objectives

| Objective                                              | Type             |
|--------------------------------------------------------|------------------|
| Validate homepage and core branding elements           | Functional       |
| Test contact form with valid and invalid inputs        | Functional       |
| Confirm admin login fails gracefully with wrong creds  | Functional       |
| Assess UI responsiveness on mobile and desktop         | Non-functional   |
| Identify UI accessibility and validation gaps          | Non-functional   |
| Log bugs with reproducible steps and severity          | Functional/UX    |

---

## 4. Timelines

| Phase                   | Dates                      |
|-------------------------|----------------------------|
| Project start           | July 7                     |
| Exploratory testing     | July 7–8                   |
| Automation implementation | July 8–11                |
| Documentation & wrap-up | July 12–13                 |
| Final submission        | By EOD July 13             |

---

## 5. Environment & Tools

| Area              | Tool / Platform                      |
|-------------------|--------------------------------------|
| Automation        | Playwright + TypeScript              |
| Reporting         | Playwright HTML Report               |
| Version Control   | Git + GitHub                         |
| CI Readiness      | GitHub Actions (planned)             |
| Exploratory Notes | Markdown (`exploratory-testing.md`)  |

> Note: Site is assumed to be stateless (no persistent test data or backend control).

---

## 6. Roles & Ownership

| Responsibility              | Owner                     |
|-----------------------------|----------------------------|
| Test authoring              | [Your Name]               |
| Exploratory testing         | [Your Name]               |
| Strategy and planning       | [Your Name]               |
| Documentation & submission  | [Your Name]               |

---

## 7. Risks & Mitigations

| Risk                                         | Mitigation                                                      |
|----------------------------------------------|------------------------------------------------------------------|
| Unstable date picker blocks booking flow     | De-prioritize booking tests; document as known issue            |
| Admin login inaccessible for positive testing| Limit to negative path only; note in scope                      |
| UI selectors may change without notice       | Use robust locators; add retry/wait logic                      |
| Non-functional areas (accessibility, perf)   | Basic coverage; mark advanced checks as future scope            |

---

## 8. Entry & Exit Criteria

### Entry
- Site is publicly accessible
- Key pages (home, contact, admin) render correctly
- Environment is testable without login for majority of flows

### Exit
- All critical tests automated and pass consistently
- Known bugs documented in `bug-report.md`
- Test artifacts reviewed and committed to GitHub
- CI readiness confirmed for future pipeline setup

---

## 9. Deliverables

| File                      | Purpose                                      |
|---------------------------|----------------------------------------------|
| `README.md`               | High-level overview                          |
| `test-strategy.md`        | Strategy for test coverage and tooling       |
| `exploratory-testing.md`  | Manual test insights                         |
| `test-plan.md`            | This document – scope, risks, timelines      |
| `leadership-actions.md`   | Team enablement and knowledge sharing        |
| `bug-report.md`           | Bug log with reproducible steps              |
| `automation-coverage.md`  | Summary of what’s tested and pending         |

---

## 10. Test Completion Criteria

- All stable flows automated and verified across Chromium
- Bugs logged for unstable/blocked paths
- All documentation complete and aligned with project structure
- GitHub repo structured and self-explanatory
- Test results reproducible via local or CI setup

---

## ✅ Summary

This test plan ensures a focused, time-boxed delivery of a maintainable, lead-level automation framework. Risks are acknowledged transparently, and future scope areas are highlighted for continuous improvement.
