# WCAG 2.2 AA Audit and Heading Outline - WADEPS Reporting Tool Training Manual

**Date:** May 13, 2026  
**HTML:** `WADEPS-RTTM/WADEP-TM.html`  
**CSS:** `WADEPS-RTTM/styles.css`  
**JavaScript:** `WADEPS-RTTM/manual.js`

## Summary

This remediation pass prioritized the semantic heading outline first, then tightened the supporting accessibility patterns around focus handling, text-size controls, and chapter/task structure. The manual now uses one page-level `h1`, chapter-level `h2` headings, task-level `h3` headings, and instructional `h4` headings for repeated blocks such as `Purpose`, `Important`, `Reminder`, `Scenario`, and `Knowledge Check` content.

## What Changed

- Audited the entire document heading outline and removed heading-level skips.
- Demoted fake section headings such as `Purpose`, `Important`, `Note`, `Reminder`, `Example`, metric labels, and PDF-style sublabels from `h3` to `h4` so they no longer interrupt screen-reader heading navigation.
- Kept chapter titles at `h2` and major task sections at `h3` to match the training flow more closely.
- Normalized several section labels so they read more clearly in the web manual, including `Review Supervisor Dashboard Metrics`, `Complete the Batch Upload Template`, `Upload the Batch Upload Template`, and `Review and Approve Reports`.
- Corrected FAQ heading text and other wording issues so headings are more descriptive and easier to scan.
- Strengthened shared focus treatment in CSS with `:focus-visible` support and kept the text-size control state validation in JavaScript resilient to invalid saved values.

## Final Heading Outline

- WADEPS Reporting Tool Training Manual
  - Table of Contents
  - Reading Tools
  - Training Manual Overview
  - Getting Started
    - In This Chapter
    - Introduction
      - Purpose
      - Overview of WADEPS
      - How to Use This Manual
    - WADEPS Courses and Modules
      - Course 1: Washington State Data Exchange for Public Safety Overview and Requirements
      - Content Includes:
      - Course 2: Washington State Data Exchange for Public Safety Data Entry
      - Content Includes:
    - WADEPS Additional Training Opportunities for Law Enforcement Agencies
  - Logging In and Account Setup
    - In This Chapter
    - Logging in to WADEPS
    - Step-by-Step: First-Time Login
      - Troubleshooting Tip
      - Important
    - Law Enforcement Officers' WADEPS Confidential Linking ID
      - Account Activation
      - Purpose
      - Access
  - WADEPS Portal Overview
    - In This Chapter
    - Portal Navigation
    - Officer Dashboard
    - WADEPS Profile
      - First-Time Users:
    - Supervisor Dashboard
      - The Supervisor Dashboard provides access to the following:
    - Create a Record
      - Access 'Create a Record' from any WADEPS screen:
    - Batch Upload
    - Notifications
    - CAD Data Upload
      - Access 'CAD Data Upload' from any WADEPS screen:
    - Training
    - Help
  - Understanding Reportable Uses of Force
    - In This Chapter
    - What Counts as a Reportable Use of Force
      - Question 1
      - Question 2
      - Important
    - WADEPS Reporting Decision Tree
  - Completing Use-of-Force Reports in WADEPS
    - In This Chapter
    - Completing Use-of-Force Reports in WADEPS
    - Stage 1: Initial Data Entry
    - Stage 2: Supervisor Review
    - Stage 3: Administrative Follow-Up
  - Creating a New Use-of-Force Record
    - In This Chapter
    - Stage 2: Create a Record
    - Access to Data Entry Features
      - Important
      - Check Your Permissions
      - Create a Record:
      - Important
    - Internal Investigation or Referred for Independent Investigation by OII or an IIT
      - If you select 'Internal Investigation', 'OII', or 'IIT':
      - If you select 'No":
      - Important
      - Submit
      - Important
    - Create a New UOF Record
      - Important:
      - Reminder
      - Section: Location
      - Important
      - Example
      - Important Note
      - Section: Arrest Information
      - Important Note
      - Section: Domestic Violence
      - Section: Persons Present
      - Important:
      - Reminder
      - Reminder:
      - Important:
      - Excludes:
      - Important
      - Excludes:
      - Impact:
      - Excludes:
      - Important:
      - Important
      - Note:
      - Important
      - EXAMPLE:
      - Proceeding to the Subject Information Section
    - Subject Information
      - Guidance for Verification:
      - Important:
      - Guidance for Verification:
      - Select all that apply from the following options:
      - Important:
      - Important:
      - Important:
      - Section: Subject Armed
      - Important:
      - Important:
      - Important:
      - Important:
      - Important:
      - Important
      - Proceeding to the Officer Information Section
    - Officer Information
      - Note:
      - Section: Basic Officer Information
      - Proceeding to the Submit for Supervisor Review Section
    - Submit for Supervisor Review
  - Batch Upload Process
    - In This Chapter
    - Batch Upload
    - Download the Batch Upload Template
    - Download the Batch Upload Template
    - Complete the Batch Upload Template
    - Incident Information
      - Note:
      - TIPS:
      - Important:
      - Example:
      - Instruction:
      - Instruction:
      - Important Note
      - Important:
      - Reminder:
      - Reminder:
    - Type of Force
      - Excludes:
      - Important
      - Excludes:
      - impact:
      - Excludes:
      - Important:
      - Important:
      - Note:
      - Important
      - EXAMPLE:
    - Subject Information
      - Important:
      - Guidance for Verification:
      - Important:
      - Instruction:
      - Guidance for Verification:
      - Instruction:
      - Important:
      - Instruction:
      - Guidance for Verification:
      - Important:
      - Instruction:
      - Important:
      - Instruction:
      - Important:
      - Important:
      - Important:
      - Important:
      - Important:
      - Important
    - Officer Information
      - Instruction:
      - Important:
    - Upload the Batch Upload Template
    - Submit Batch Upload Records for Supervisor Approval
  - Supervisor Review
    - In This Chapter
    - Access the Supervisor Dashboard
      - The Supervisor Dashboard
      - Need Help
      - Open the Supervisor Dashboard
    - Review Supervisor Dashboard Metrics
      - Pending Approvals (tab and tile)
      - Awaiting Final Review
      - Archived Records
    - Manage Users
      - Key Agency Statistics:
    - Report No Reportable Use-of-Force Events for the Month
    - Understanding Dashboard Metrics
      - Pending Approvals
      - Approved Records
      - Records in Archive
      - Average Days to Record Reported Compliance
      - Average Days to Administrative Follow-Up
      - Active Users in Your Agency
      - User Management
      - Permission Levels:
      - Admin - User has full permissions, including:
      - Assigning Permissions:
    - Adding New Users
      - Important
    - Report No Reportable Use-of-Force Events for the Month
    - Review and Approve Reports
      - Pending Approvals
      - Accessing Pending Approvals
      - Reviewing Records Pending Approval
      - Important:
      - Reviewing the Record:
      - This format mirrors the Create a Record process, detailed on:
  - Administrative Follow-Up
    - In This Chapter
    - Access Administrative Follow-Up
      - Accessing Administrative Follow-Up
      - Reminder:
    - Completing Administrative Follow-Up Items
      - UOF Review
      - Administrative Review
      - Internal Investigation
      - External Investigation
      - Submit Administrative Follow-Up
  - CAD Data in WADEPS
    - In This Chapter
    - CAD Data Overview
    - CAD Mapping
      - CAD Mapping Resources
    - CAD Data Upload
      - Important
    - Download the CAD Data Template
    - Complete the CAD Data Template
      - Important
      - CAD Reporting Requirement
      - Example:
    - Upload the CAD Data Template
  - Frequently Asked Questions
    - In This Chapter
    - Frequently Asked Questions
    - How to report a use-of-force event that is currently under internal investigation
    - How to report a use-of-force event that has been referred for independent investigation by the Office of Independent Investigations (OII) or the Independent Investigation Team (IIT)
    - How do we report a use-of-force event if the subject is unknown
    - How do we report a use-of-force event when a chemical agent is deployed during crowd control
    - What if the under-investigation status is not known at the time of reporting, or an investigation starts days or weeks after the use-of-force event
      - Remember there are two processes:

## Audit Pass 2 — May 14, 2026

### What Changed

- Removed 11 `<span class="toc-page">PDF page reference pending confirmation</span>` placeholder elements from the TOC. These were incomplete migration markers from the source PDF with no confirmed page numbers. The TOC intro text was updated to remove the reference to PDF page numbers.
- Removed the now-orphaned `.toc-page` CSS rule (main and print media query) from `styles.css`.
- Fixed `h4` visual styling: bumped `font-size` from `1rem` to `1.05rem` and added explicit `font-weight: 700` so H4 headings are visually distinct from body text.
- Verified color contrast for borderline values: `.eyebrow` (`#4b5563` on white, ~5.9:1, PASS); `.site-subtitle` (`rgba(255,255,255,0.92)` on `#1f4f3a`, >14:1, PASS).
- Verified `manual.js` (57 lines): `aria-pressed` syncs correctly on all text-size buttons; back-to-top uses CSS class toggle with no focus interference; reduced-motion respected for scroll behavior. No changes needed.
- Confirmed the single `grep` match for `anchor-target` is a false positive inside base64 image data — no actual `.anchor-target` elements exist in the document.

## WCAG 2.2 AA Checklist

| Check | Status | Notes |
|---|---|---|
| One `h1` only | PASS | Local audit found `1` page title heading. |
| Chapter headings use `h2` | PASS | Major manual chapters remain at `h2`. |
| Task headings use `h3` | PASS | Major task sections remain at `h3`. |
| Instructional blocks use `h4` | FIXED | Repeated PDF-style instructional labels were demoted to `h4`; H4 now has distinct `font-size: 1.05rem` and explicit `font-weight: 700`. |
| No heading-level skips | PASS | Local audit found `0` heading skips. |
| Landmark structure | PASS | Local audit found `1` `main`, `1` `nav`, and `1` `footer`. |
| Skip link present | PASS | First focusable element links to `#main-content`. |
| TOC uses semantic `nav` | PASS | Table of contents remains a labeled `nav` with nested ordered lists. |
| TOC links resolve to real IDs | PASS | Local audit found `0` missing internal targets. |
| Positive `tabindex` removed | PASS | Local audit found `0` positive `tabindex` values. |
| Empty links removed | PASS | Local audit found `0` empty links. |
| Missing `alt` attributes | PASS | Local audit found `0` missing `alt` attributes. |
| Focus visibility | FIXED | Shared focus treatment now includes `:focus-visible` with a high-contrast outline. |
| Text-size controls use real buttons | PASS | Buttons still use `aria-pressed` and `localStorage`. |
| Text-size preference validation | FIXED | JavaScript now falls back to `default` if a saved value is invalid. |
| Back to Top button accessibility | PASS | The button remains a real `button` with visible text and reduced-motion support. |
| Keyboard-only navigation | NEEDS MANUAL REVIEW | Structural checks pass, but a browser walkthrough is still required. |
| 200% zoom | NEEDS MANUAL REVIEW | Not manually verified in a browser during this pass. |
| 320px viewport | NEEDS MANUAL REVIEW | Not manually verified in a browser during this pass. |
| Axe / WAVE / Lighthouse scan | NEEDS MANUAL REVIEW | Not run from this terminal-only pass. |
| Screen reader heading navigation | NEEDS MANUAL REVIEW | The outline is corrected, but NVDA, JAWS, or VoiceOver testing is still recommended. |
| Print / PDF preview | NEEDS MANUAL REVIEW | Print rules remain in place, but a live print preview should still be checked. |

## Recommended Final Validation

1. Run a keyboard-only pass from the skip link through the TOC, reading tools, chapter links, form controls, and Back to Top button.
2. Review the manual at `200%` browser zoom and at a `320px` mobile viewport.
3. Run Axe, WAVE, and Lighthouse in a browser.
4. Confirm the heading experience with NVDA, JAWS, or VoiceOver using heading and landmark navigation.
5. Review print preview so chapter breaks, knowledge checks, and TOC page labels remain readable.
