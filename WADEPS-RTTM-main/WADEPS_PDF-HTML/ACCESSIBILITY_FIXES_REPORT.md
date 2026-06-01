# WCAG 2.2 Checklist - WADEPS Reporting Tool Training Manual

**Date:** May 13, 2026  
**HTML:** `C:\Users\arab2\Downloads\WADEPS_PDF-HTML\WADEP-TM.html`  
**CSS:** `C:\Users\arab2\Downloads\WADEPS_PDF-HTML\styles.css`  
**JavaScript:** `C:\Users\arab2\Downloads\WADEPS_PDF-HTML\manual.js`

## Summary

This pass refactored the manual into a chapter-based training roadmap, tightened duplicate anchor and heading issues, and improved the visual hierarchy so the web version reads like a task-based training guide instead of a PDF-style index.

## What Changed

- Rebuilt the table of contents as a semantic chapter roadmap with nested ordered lists and descriptive internal links.
- Added chapter-intro scaffolding so each major section starts with a training-focused summary and an "In This Chapter" learning box.
- Added accessible reading tools with `Default`, `Large`, and `Extra Large` text-size buttons that save the visitor preference in `localStorage`.
- Added a persistent `Back to Top` button that appears after scrolling, uses a real `button`, and returns users to the TOC heading.
- Improved the TOC, chapter cards, and task blocks so chapters are easier to scan and section types such as `Scenario Practice`, `Common Mistakes`, and `Knowledge Check` are visually distinct without relying on color alone.
- Added target highlighting and spacing improvements so chapter links, task links, and deep links are easier to follow after navigation.
- Cleaned up duplicate IDs created during the PDF-to-web rebuild so every internal link now resolves to one unique target.
- Renamed the Chapter 10 overview subsection to `CAD Data Overview` so `CAD Data Upload` points to the actual upload task.
- Kept PDF page metadata visually secondary in the TOC. Current labels remain placeholders and still need final PDF page confirmation.
- Preserved the skip link, responsive layout, focus styling, print rules, and landmark structure.

## WCAG 2.2 Checklist

| Check | Status | Notes |
|---|---|---|
| One `h1` only | PASS | Single page title retained. |
| Chapter headings use `h2` | PASS | Chapter sections are introduced with `h2` headings. |
| Task headings use `h3` | PASS | Major task sections remain at `h3`. |
| No heading-level skips | PASS | Local structure audit found `0` heading skips. |
| Landmark structure | PASS | `header`, `nav`, `main`, `section`, and `footer` are present. |
| Skip link present | PASS | First focusable element links to `#main-content`. |
| TOC uses semantic `nav` | PASS | TOC is a labeled `nav` with nested ordered lists. |
| TOC links resolve to real IDs | PASS | Local audit found `0` missing internal targets. |
| Duplicate IDs removed | PASS | Local audit found `0` duplicate IDs. |
| Positive `tabindex` removed | PASS | Local audit found `0` positive `tabindex` values. |
| Empty links removed | PASS | Local audit found `0` empty links. |
| Missing `alt` attributes | PASS | Local audit found `0` missing `alt` attributes. |
| Generic "click here" links | PASS | Local audit found `0` generic "click here" links. |
| Reading tools use real buttons | PASS | Buttons use `aria-pressed` and work with keyboard or pointer input. |
| Text-size preference persists | PASS | `manual.js` stores the selection in `localStorage`. |
| Back to Top button appears after scrolling | PASS | Button becomes visible after the page is scrolled more than 400 pixels. |
| Back to Top button works with keyboard and mouse | PASS | Uses a real `button` element with a click handler. |
| Back to Top button has an accessible name | PASS | Button uses `aria-label="Back to top"` and visible text. |
| Back to Top respects reduced motion | PASS | Smooth scrolling falls back to auto when `prefers-reduced-motion` is enabled. |
| Back to Top hidden in print | PASS | Print CSS hides the control. |
| Focus visibility | PASS | Shared high-contrast focus styles remain in place. |
| Mobile TOC readability | PASS | TOC stacks without horizontal scrolling in the current CSS structure. |
| Print support | PASS | Print CSS keeps the TOC readable and hides interactive controls. |
| PDF page labels finalized | NEEDS REVIEW | TOC still shows placeholder page metadata pending PDF confirmation. |
| 200% zoom manual check | NEEDS REVIEW | Not manually verified in a browser during this pass. |
| 320px viewport manual check | NEEDS REVIEW | Not manually verified in a browser during this pass. |
| Keyboard-only walkthrough | NEEDS REVIEW | Structural checks passed, but browser testing is still recommended. |
| Axe / WAVE / Lighthouse scan | NEEDS REVIEW | Not run from this terminal-only pass. |
| Screen reader review | NEEDS REVIEW | NVDA, JAWS, or VoiceOver review is still recommended. |

## Recommended Final Validation

1. Confirm the final PDF page numbers and replace the current placeholder TOC metadata.
2. Run a keyboard-only pass from the skip link through the TOC, reading tools, and all chapter links.
3. Review the page at 200% zoom and at a `320px` mobile viewport.
4. Run Axe, WAVE, and Lighthouse in a browser.
5. Do a manual screen-reader pass to confirm chapter flow, reading order, and knowledge-check usability.
