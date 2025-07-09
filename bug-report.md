# 🐞 Bug Report Log – Shady Meadows B&B

This document logs critical and major bugs found during exploratory testing. Each bug includes reproducible steps, expected vs actual behavior, and impact notes.

See `known-issues.md` for summarized view, and `test-strategy.md` for how these bugs shaped automation coverage.

---

## Bug #001 – 📅 Date Picker Not Functional

- **Area**: Booking section (homepage)
- **Severity**: 🚨 Critical
- **Priority**: High
- **Steps to Reproduce**:
  1. Navigate to homepage
  2. Scroll to availability checker section
  3. Click on check-in or check-out calendar
  4. Try to select any date
- **Expected**: Calendar allows selection of valid dates
- **Actual**: UI opens calendar, but all dates are blocked
- **Impact**: Booking cannot proceed → conversion blocker

---

## Bug #002 – 🖼️ Room Images Missing

- **Area**: Room listing section
- **Severity**: ⚠️ Major
- **Priority**: Medium
- **Steps to Reproduce**:
  1. Open homepage
  2. Scroll to "Our Rooms"
- **Expected**: Each room card shows image
- **Actual**: Some cards show broken image icons
- **Impact**: Reduces trust, breaks visual continuity

---

## Bug #003 – 📝 Contact Form Accepts Special Characters

- **Area**: Contact Us form
- **Severity**: ⚠️ Major
- **Priority**: High
- **Steps to Reproduce**:
  1. Go to `/contact`
  2. Enter `@#$%^&*()` in the **Name** field
  3. Submit form
- **Expected**: Validation prevents invalid characters
- **Actual**: Form accepts and submits special characters
- **Impact**: Data integrity and validation concern

---

## Bug #004 – 🔄 Error Messages Shift on Re-Submit

- **Area**: Contact Us form
- **Severity**: 🟡 Minor
- **Priority**: Low
- **Steps to Reproduce**:
  1. Submit form with empty fields
  2. Submit again without changes
- **Expected**: Errors persist in consistent order
- **Actual**: Order of messages changes, flickers
- **Impact**: Poor UX, confusing for keyboard/screen reader users

---

## Bug #005 – 📏 Booking Form Error Message Not Field-Specific

- **Area**: Room booking form
- **Severity**: ⚠️ Major
- **Priority**: Medium
- **Steps to Reproduce**:
  1. Visit booking page for any room
  2. Leave size field blank or use out-of-range value
- **Expected**: Field-specific error message (inline)
- **Actual**: Generic message at top: “Size must be 11–21”
- **Impact**: Unclear which field caused failure

---

## Bug #006 – 🔗 Amenities Link Does Not Scroll

- **Area**: Homepage top nav → Amenities
- **Severity**: 🟡 Minor
- **Priority**: Low
- **Steps to Reproduce**:
  1. Click "Amenities" in header navigation
- **Expected**: Scrolls to amenities section
- **Actual**: No scroll or feedback
- **Impact**: Users confused whether link worked

---

## Bug #007 – 🌀 Duplicate Room Cards on Back Navigation

- **Area**: Room Listing / Routing
- **Severity**: ⚠️ Major
- **Priority**: Medium
- **Steps to Reproduce**:
  1. Navigate to a room booking page
  2. Click browser back
- **Expected**: Return to original room listing
- **Actual**: Page shows repeated “Single Room” cards
- **Impact**: Perceived instability or content duplication

---

## Bug #008 – 🧱 Missing Automation-Friendly Attributes

- **Area**: Overall site (forms, buttons, sections)
- **Severity**: 🟡 Minor
- **Priority**: Medium
- **Observation**: 
  - No `data-testid` or semantic labels for key elements
  - Heavy reliance on long CSS/XPath selectors
- **Impact**: Test automation brittle and harder to maintain

---

## Bug #009 – 🌐 No API Layer for Test Data Setup/Cleanup

- **Area**: System architecture
- **Severity**: 🟠 Design Gap
- **Priority**: Medium
- **Observation**:
  - Forms do not expose APIs for mocking or cleanup
  - Manual test data entry required each time
- **Impact**: Slower test setup, not scalable for CI

---

## Bug #010 – 💫 Occasional UI Flakiness (Rendering)

- **Area**: Room listing & dynamic components
- **Severity**: ⚠️ Major (intermittent)
- **Priority**: Medium
- **Observation**:
  - Layout occasionally shifts or breaks on reloads
  - Room cards load differently on browser back or refresh
- **Impact**: Leads to non-deterministic test failures

---

> ✅ Automation coverage decisions were influenced by the above bugs. Tests that relied on flaky features (e.g., amenities scroll) were marked `test.fixme` to avoid CI noise.

> 🛠️ Future enhancements (e.g., stable locators, backend APIs) are recommended for enabling full end-to-end test coverage.
