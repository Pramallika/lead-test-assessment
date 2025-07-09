# Exploratory Testing Report – Shady Meadows B&B

## Objective
To explore the Shady Meadows B&B website from both a user and engineering perspective, identifying key functional flows, UI behavior, non-functional characteristics, and potential bugs. The aim is to inform automation coverage and provide a baseline quality assessment.

---

## Website Overview

- **Type**: Hotel Booking Website
- **Tech Stack**:
  - HTML5
  - JavaScript-based frontend (likely React, based on class names like react-datepicker__* and component structure)
  - CSS Framework: Bootstrap (evident from classes like btn btn-primary, form-control)
  - Form-based navigation and UI
  - Date Picker: react-datepicker library
  - No visible backend/API details from the UI  
- **Target User**: Guests booking a room or contacting the B&B  
- **Main Modules**:
  - Homepage with branding and CTAs
  - Room listings with dynamic booking
  - Availability search (calendar/date-picker)
  - Contact form
  - Admin login page

---

## Functional Flows Explored

| Flow                             | Functionality                          | Status       | Notes                                                                 |
|----------------------------------|----------------------------------------|--------------|-----------------------------------------------------------------------|
| Homepage load                    | Branding, header, intro                | ✅ Working    | “Welcome to Shady Meadows B&B” header visible                        |
| Book Now CTA                     | Scrolls to booking section             | ✅ Working    | Smooth scroll to availability widget                                  |
| Date Picker (Booking Form)       | Check-in/Check-out calendar            | ⚠️ Broken     | Dates cannot be selected; logic blocked for any range or date        |
| Room Listings                    | Single, Double, Suite                  | ⚠️ Partially | Room cards show; images missing for some; "Book Now" functional      |
| Room Booking Flow                | Navigates to reservation page         | ⚠️ Buggy      | Error messages like "Size must be 11–21" not linked to field         |
| Contact Form (Positive Case)     | Submit valid data                      | ✅ Working    | Success message displayed                                             |
| Contact Form (Negative Cases)    | Missing/invalid fields                 | ⚠️ Buggy      | Inconsistent validation; e.g., name accepts special characters        |
| Amenities Link (Homepage)        | Scrolls to section                     | ⚠️ Broken     | Clicking link has no visible scroll or feedback                      |
| Admin Login Page                 | Opens login form                       | ✅ Working    | Opens correctly; throws error for invalid creds                      |
| Social Links (Footer)            | External redirects                     | ⛔ Untested   | Not clicked due to test scoping                                      |

---

## Non-Functional Observations

| Category          | Observation                                                                 | Status       | Notes                                                                 |
|------------------|------------------------------------------------------------------------------|--------------|-----------------------------------------------------------------------|
| **Performance**   | Page load speed generally acceptable on broadband                           | ✅ Acceptable | No major blocking or stalling; images slow to load due to missing assets |
| **Accessibility** | No visible ARIA roles, skip links, or focus indicators                     | ⚠️ Poor       | Needs improvement for screen readers and keyboard-only navigation. TODO: Add automated accessibility checks (e.g., axe-core) to test suite for future coverage. |
| **Responsiveness**| Layout visually breaks on mobile preview                                   | ⚠️ Partial    | Basic responsiveness tested via Chrome DevTools (mobile mode); layout breaks on smaller screens. Full responsive testing pending. |
| **User Feedback** | Lack of visual feedback for link clicks (e.g., amenities)                  | ⚠️ Incomplete | Buttons clickable but give no indication (e.g., highlight/scroll)     |
| **Error Handling**| Error messages in booking/contact not field-specific or user-friendly      | ⚠️ Inconsistent | Fails to guide user to the cause of error                             |
| **Stability**     | Navigating back sometimes shows duplicated room cards                      | ⚠️ Flaky      | Suspected rendering bug or data reload issue                          |
| **Security (UI)** | Admin page open to public route                                            | ⚠️ Exposed    | No access restriction, though login required                          |

---

## Responsiveness & UI Notes

| Area                  | Result       | Notes                                                                  |
|-----------------------|--------------|------------------------------------------------------------------------|
| Desktop View          | ✅ Stable     | Layout clean and legible                                               |
| Mobile View           | ⚠️ Partial    | Basic responsiveness tested via Chrome DevTools (mobile mode); layout breaks on smaller screens. Full responsive testing pending. |
| Image Loading         | ⚠️ Broken     | Several room and recommended images do not render                      |
| Navigation Header     | ✅ Functional | Scrolls within same page; Admin opens new route                        |

---

## Key Bugs Identified

| ID    | Area                 | Description                                                                 |
|-------|----------------------|-----------------------------------------------------------------------------|
| #001  | Date Picker          | Calendar doesn’t allow date selection; critical blocker for booking         |
| #002  | Room Images          | Missing on main and suggested room cards                                    |
| #003  | Contact Form         | Name accepts special characters; no validation message                      |
| #004  | Contact Form Errors  | Error messages shift order on multiple submissions without changes          |
| #005  | Booking Validation   | “Size must be 11–21” errors not mapped to specific fields                   |
| #006  | Amenities Link       | Clicking does not result in visible scroll or section focus                 |
| #007  | Room Listing Refresh | Sometimes shows only “Single Room” repeated after navigating back from a room page |

(📎 See `bug-report.md` for reproducible steps and screenshots)

---

## Automation Strategy Insights

| Priority | Area             | Rationale                                                                 |
|----------|------------------|---------------------------------------------------------------------------|
| High     | Homepage          | Stable, brand-critical, and a good smoke test base                        |
| High     | Contact Form      | Positive + negative paths; essential for customer communication           |
| Medium   | Admin Login       | Negative case covered; no valid creds for full scenario                   |
| Medium   | Navigation Links  | Amenity link needs scroll verification                                    |
| Low      | Booking Flow      | Currently too buggy for automation; revisit post-UX fix                    |

---

## 🔎 Assumptions & Scope Limitations

- The "Admin" page requires valid credentials that were not provided, so only negative login scenarios were explored.
- No backend validation or data persistence testing could be performed due to the stateless demo site setup.
- Booking functionality is not fully functional for any selectable dates, so deep booking flows could not be covered.

---

## Summary

- ✅ Core functional and non-functional flows explored
- ✅ Bugs documented and linked to feature impact
- ✅ Mobile and accessibility issues noted for future non-functional test coverage
- ✅ Identified high-value automation candidates based on stability and priority
- ✅ Insights used to create automation test plan and scenarios

> This exploration directly shaped the test automation approach documented in `test-plan.md` and implemented in the `tests/` directory. Non-functional gaps (e.g., accessibility, responsiveness, stability) are acknowledged and highlighted for future roadmap consideration.
