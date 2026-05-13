# WCAG 2.2 Checklist - WADEPS Reporting Tool Training Manual

**Date:** May 13, 2026  
**File:** `WADEP-TM.html`  
**Stylesheet:** `styles.css`

## Summary

This pass re-checked the heading hierarchy against the PDF's major reading order, tightened chapter-level structure, and aligned both the table of contents and body headings to the same chapter flow.

## What Changed

- Re-ran the heading audit and corrected chapter/subsection levels where the previous pass was too flat.
- Kept the manual's high-level sequence aligned to the PDF: introduction, courses, login/setup, portal overview, reportable uses of force, reporting workflow, CAD guidance, and FAQs.
- Reworked the "3 Stages" section into explicit stage headings for Initial Data Entry, Supervisor Review, and Administrative Follow-Up.
- Converted the table of contents into chapter navigation with nested subsection links instead of listing every "Important" note as a top-level item.
- Updated the body `h2` headings so the visible content flow now uses the same chapter naming pattern as the table of contents.
- Preserved the semantic landmarks, skip link, responsive layout, and figure accessibility from the earlier rebuild.

## WCAG 2.2 Checklist

| Check | Status | Notes |
|---|---|---|
| One `h1` only | PASS | Single page title retained. |
| Landmark structure | PASS | `header`, `nav`, `main`, `section`, `article`, and `footer` remain in place. |
| Skip link present | PASS | First focusable element links to `#main-content`. |
| Heading order | PASS | Structural heading-level skips were removed in the local audit. |
| PDF reading order preserved | PASS | Chapter order now follows the manual's PDF-style sequence. |
| Chapter-based table of contents | PASS | TOC now groups content into chapters with nested section links. |
| Chapter-based body flow | PASS | Primary content headings now mirror the same chapter sequence used in the TOC. |
| Positive `tabindex` removed | PASS | No positive `tabindex` values found. |
| Empty links or buttons | PASS | No empty links found in local checks. |
| Clickable `div` controls | PASS | None found. |
| Missing `alt` attributes | PASS | No missing `alt` attributes found on images. |
| Inline styles removed | PASS | Styles are in `styles.css`. |
| Responsive layout | PASS | Fluid container and mobile-safe layout remain in place. |
| Horizontal page scrolling | PASS | No page-level horizontal scrolling introduced. |
| Link purpose clarity | PASS | TOC links are now shorter and more descriptive. |
| Focus visibility | PASS | Shared high-contrast focus styling remains in place. |
| WAVE / axe automated scan | NEEDS REVIEW | Not run from this terminal-only pass. |
| Lighthouse accessibility audit | NEEDS REVIEW | Not run from this terminal-only pass. |
| Manual screen reader test | NEEDS REVIEW | Still recommended before publishing. |

## Recommended Final Validation

1. Run keyboard-only navigation from skip link through the full TOC and chapter content.
2. Review at 200% zoom.
3. Review at 320px width.
4. Run axe, WAVE, and Lighthouse in a browser.
5. Do a manual heading-outline and screen-reader pass in NVDA, JAWS, or VoiceOver.
