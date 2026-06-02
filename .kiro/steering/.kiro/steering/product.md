---
inclusion: always
---
# Product Steering — WADEPS Training Manual Web Transition

## Core purpose

This project transitions the completed **WADEPS Reporting Tool Training Manual** from an accessible PDF and Word document into a readable, digitally accessible web version for the WADEPS website.

This is a faithful web transition project.

This is not a rewrite project.

This is not a content modernization project.

This is not a marketing redesign.

The primary goal is to preserve the completed training manual while making it easier to read, navigate, and use on the WADEPS website.

## Product definition

**WADEPS** stands for **Washington State Data Exchange for Public Safety**.

The WADEPS Reporting Tool Training Manual supports law enforcement agencies and agency personnel who need to understand how to use the WADEPS Reporting Tool.

The web version should preserve the same information already provided in the completed accessible PDF and Word document, including:

* Manual title
* Version information
* Revision date
* Revision notes
* Table of contents
* Heading hierarchy
* Subsection order
* Training steps
* Screenshots
* Captions
* Alt text
* Callouts
* Tables
* Lists
* Workflow order
* Reading order
* Page-level structure where useful

## Authoritative source

The completed accessible PDF and Word document are the source of truth.

Use these source files as the authoritative reference:

```text
WADEPS_26_WCAG_Main.pdf
WADEPS_26_WCAG_Main.docx
```

The PDF version is already accessible and has correct reading order.

Do not rewrite, paraphrase, summarize, simplify, modernize, reorder, or change the training manual wording unless the user explicitly requests a content edit.

Do not invent new guidance, legal interpretation, workflow steps, system behavior, policy language, or training content.

## Product version

Preserve the manual version details:

```text
Version 2.4
Revised February 6, 2026
```

Preserve the revision notes unless the user explicitly requests removal:

```text
Added Out of State option to County.
Clarification on when to use other type of force.
```

## Primary users

The web version must support:

1. Law enforcement officers using the manual to complete WADEPS reporting tasks.
2. Supervisors reviewing use-of-force records.
3. Agency administrators managing users, batch upload, CAD upload, and administrative follow-up.
4. Training coordinators using the manual as a reference.
5. Users relying on screen readers, keyboard navigation, zoom, reflow, high-contrast settings, or assistive technology.
6. Users who need a simple web version instead of navigating a long PDF.

## Product goal

The finished website version should make the manual:

* Easier to read
* Easier to navigate
* Easier to search
* Easier to use on different screen sizes
* Easier to maintain in WordPress
* Accessible to users with disabilities
* Faithful to the completed accessible PDF and Word document

The web version should copy the structure and format of the completed manual closely enough that users can move between the PDF, Word document, and website without confusion.

## Content preservation rule

Kiro must preserve the completed manual’s wording and structure.

Kiro may improve only the web implementation layer.

Kiro must not change the manual wording or meaning.

Kiro must preserve:

* Manual wording
* Heading hierarchy
* Subsection order
* Reading order
* Screenshots
* Alt text
* Captions
* Tables
* Lists
* Callout labels
* Callout content
* Version and revision information

Kiro may improve only:

* Semantic HTML
* WordPress block structure
* Accessible heading markup
* Readable content width
* Responsive layout
* Navigation and table of contents behavior
* Focus states
* Accessible callout markup
* Image, caption, and alt text preservation
* Table accessibility
* Keyboard accessibility

## What Kiro should preserve

When converting or preparing content for WordPress, preserve:

* Existing wording
* Existing headings
* Existing heading order
* Existing subsection order
* Existing lists
* Existing tables
* Existing screenshots
* Existing alt text
* Existing captions
* Existing callout labels
* Existing callout wording
* Existing “Important,” “Important Note,” “Reminder,” “Note,” “Troubleshooting Tip,” “Need Help?,” “Example,” “Tips,” “Next Step,” “Status,” “Decision,” and “Guidance for Verification” blocks
* Existing visual hierarchy where practical
* Existing WADEPS dark green styling direction
* Existing training-manual structure

## WordPress implementation direction

The preferred workflow is:

1. Use the completed accessible Word document as the main content source.
2. Copy from the properly formatted Word document into WordPress where appropriate.
3. Preserve heading blocks, paragraph blocks, list blocks, image blocks, captions, and alt text.
4. Use stock WordPress blocks whenever possible.
5. Avoid broken custom heading blocks.
6. Avoid unnecessary custom HTML unless needed for specific accessible layout or callout patterns.
7. If Kiro produces HTML, provide body content only.
8. Do not include `DOCTYPE`, `<html>`, `<head>`, or full-page wrapper markup when content is being pasted into WordPress.

## WordPress block rules

Use standard WordPress blocks where possible:

* Heading block
* Paragraph block
* List block
* Image block
* Table block
* Group block
* Column block only when needed
* Details/Summary block or accessible accordion only when approved
* Custom HTML block only for carefully controlled snippets

Do not use custom WADEPS/Nexter heading blocks if they create incorrect heading levels.

Do not use broken patterns.

If creating reusable patterns, create them from clean stock blocks.

## Navigation direction

The manual has many sections and subsections.

Use navigation that helps users move through the content without flattening the manual structure.

Preferred navigation direction:

* Vertical left-hand navigation for site or manual sections
* Breadcrumbs directly under the page title where available
* Table of contents or chapter navigation for long manual sections
* Anchor links for major sections and subsections where useful

Do not remove subsections to shorten navigation.

Do not flatten the document structure.

Do not create navigation labels that change the meaning of the source headings.

## Heading and subsection preservation

The manual contains many subsections. Preserve the existing heading hierarchy so the web version is easy to follow.

Do not flatten all content into large sections.

Do not remove subsection headings.

Do not skip heading levels for visual styling.

Use CSS or WordPress styles to adjust appearance without changing semantic heading levels.

## WADEPS tone

The tone should remain:

* Clear
* Formal
* Neutral
* Factual
* Instructional
* Public-sector appropriate
* Accessibility-forward

Do not make the manual sound promotional, casual, or sales-focused.

Do not rewrite manual content to make it sound more like marketing copy.

## WADEPS.org alignment

The web version should visually align with WADEPS.org:

* Dark green identity
* Public-sector layout
* Plain-language information
* Minimal visual clutter
* Strong readability
* Accessible interaction
* Clear navigation

Use WADEPS.org as visual and tonal guidance, but do not rewrite the manual to match website marketing language.

## Decision priority

When there is a conflict, follow this order:

1. Preserve the completed PDF and Word manual content.
2. Preserve accessibility and reading order.
3. Preserve heading hierarchy and subsection structure.
4. Preserve screenshots, alt text, captions, and callouts.
5. Improve web readability and navigation.
6. Align visual styling with WADEPS.org.
7. Add visual polish only if it does not interfere with the above.

## Hard rule

Do not change training manual wording unless the user explicitly requests a wording change.

This project is a faithful, accessible web transition of the completed manual.
