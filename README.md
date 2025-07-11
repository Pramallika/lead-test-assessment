# 🏨 Shady Meadows B&B – Lead Test Engineer Assessment

This project represents a functional and non-functional test automation solution for the **Shady Meadows B&B** website, designed as part of a Lead Test Engineer assessment.

It showcases a complete QA strategy, exploratory testing documentation, modular Playwright automation framework, and professional engineering leadership practices.

---

## 📌 Project Objectives

- ✅ Define and implement a scalable automation solution using Playwright + TypeScript
- ✅ Cover both **functional** and **non-functional** aspects of testing
- ✅ Demonstrate **leadership** through test strategy, documentation, and sustainable practices
- ✅ Align with industry standards in CI/CD readiness, bug reporting, and test design
- ✅ Deliver clean, modular, and maintainable code and artifacts

---

## 📂 Folder Overview

| File/Folder                | Purpose                                                        |
|---------------------------|----------------------------------------------------------------|
| `pages/`                  | Page Object Model files (`homepage.page.ts`, etc.)             |
| `tests/`                  | Test specs for each page or scenario                           |
| `exploratory-testing.md`  | Manual exploration notes, UI observations, non-functional checks |
| `test-strategy.md`        | Comprehensive test approach: scope, tools, priorities          |
| `test-plan.md`            | Milestones, scope, risks, and scheduling overview              |
| `known-issues.md`         | Running log of bugs or limitations                             |
| `bug-report.md`           | Reproducible issues with steps, severity, and notes            |
| `bug-report-template.md`  | Standard format for future bug logging                         |
| `leadership-actions.md`   | Ownership activities, collaboration practices, confluence planning |
| `future-improvements.md`  | Ideas for scaling, improving CI/CD, coverage, and tooling      |
| `automation-coverage.md`  | Summary of what's automated, what’s pending, and why           |
| `playwright.config.ts`    | Configuration file for Playwright test runner                  |
| `README.md`               | This file                                                      |

---

## 🧪 Automation Overview

- ✅ Framework: [Playwright](https://playwright.dev/) with TypeScript  
- ✅ Structure: Page Object Model (POM)  
- ✅ Status: 
    - Core flows automated (homepage, contact form (positive and negative) , admin login (negative))
    - Accessibility checks added via 'axe-core' integration
    - Amenities and Date Picker tested and marked with 'test-fixme' due to instability  
- ⚠️ Known Bugs: Some flows skipped using `test.fixme()` to avoid flaky CI results  
- 📊 Report: Playwright HTML report generated after each test run  
- 📦 CI/CD: GitHub Actions integration ready (planned)

---

## 📑 Key Highlights

- 📘 Exploratory testing backed by structured documentation  
- ⚙️ Scalable, modular codebase using best practices in test design  
- 🔍 Functional and non-functional testing scope clearly defined  
- 🚧 Known issues documented transparently  
- 📈 Clear future roadmap: accessibility checks, API and performance testing  
- 🧭 Leadership mindset: onboarding guides, Confluence structure, collaboration actions

---

## 🚀 How to Run Tests

See [`readme.md` under automation scripts/tests]) for detailed instructions on:

- Setting up the project
- Running all or specific tests
- Skipping known bugs
- Viewing test reports
- Contributing to the test suite

---

## 🙌 Assessment Statement

This repository is part of a **technical assessment** for a Lead Test Engineer role and was built from scratch, showcasing not only test coverage but strategic thinking, leadership readiness, and documentation quality.

All automation was designed based on manual exploration, analysis, and prioritization — aligning with industry best practices for sustainable QA.

---

