---
inclusion: always
---

# Structure Steering — WADEPS Training Manual Site

## Core structure purpose

This project transitions the completed WADEPS Training Manual into a readable, accessible WordPress web structure.

The structure must preserve the completed manual’s:

* Section order
* Subsection order
* Heading hierarchy
* Reading order
* Table of contents logic
* Screenshot placement
* Callout placement
* Tables
* Lists
* Captions
* Alt text
* Version and revision information

Do not flatten the manual.

Do not remove subsections to make the web page shorter.

Do not reorganize the manual unless the user explicitly requests a structural change.

---

# Source structure rule

The completed accessible PDF and Word document are the source of truth.

Use the existing manual structure as the foundation for the web version.

The manual includes major sections such as:

* Introduction
* WADEPS Courses and Modules
* Logging in to WADEPS
* WADEPS Portal Overview
* Reportable Uses of Force
* Completing Use of Force Reports in WADEPS: 3 Stages
* Initial Data Entry
* Create a Record
* Batch Upload
* Supervisor Review
* Administrative Follow-Up Items
* CAD Data in WADEPS
* Frequently Asked Questions

Preserve this overall order.

---

# WordPress page hierarchy

Use WordPress page hierarchy to support navigation and breadcrumbs.

Preferred multi-page structure:

```text
Training Manual
├── Introduction
├── WADEPS Courses and Modules
├── Logging in to WADEPS
├── WADEPS Portal Overview
├── Reportable Uses of Force
├── Completing Use of Force Reports in WADEPS
│   ├── Initial Data Entry
│   ├── Create a Record
│   ├── Batch Upload
│   ├── Supervisor Review
│   └── Administrative Follow-Up Items
├── CAD Data in WADEPS
└── Frequently Asked Questions
```

This structure may be adjusted only if the user asks for a single-page manual, chapter-based manual, or another specific publishing format.

---

# Single-page versus multi-page structure

If the manual is published as a single long page:

* Use a page table of contents.
* Use anchor links for major sections.
* Use clear H2 and H3 headings.
* Use a back-to-top button or anchor.
* Keep content width readable.
* Preserve subsection hierarchy.
* Ensure navigation works without JavaScript.

If the manual is published as multiple pages:

* Use parent/child WordPress pages.
* Use breadcrumbs under each page title.
* Use left-hand navigation.
* Use previous/next navigation where helpful.
* Preserve the manual’s source order.
* Do not duplicate conflicting content across pages.
* Do not change wording to fit page breaks.

---

# Navigation direction

Use vertical navigation where possible.

Preferred navigation patterns:

* Left-hand navigation for main manual sections
* Breadcrumbs directly under the page title
* Page table of contents for long content
* Anchor links for major sections and subsections
* Previous/next chapter links if the manual is split into pages

Avoid relying only on horizontal navigation for the full manual because the manual has many sections and subsections.

Navigation must be keyboard accessible and must not depend entirely on JavaScript.

---

# Breadcrumbs

Use the built-in WordPress Breadcrumbs block where available.

Breadcrumbs should appear:

* Directly under the page title
* Consistently on manual pages
* Based on the WordPress parent/child page hierarchy

Do not manually fake breadcrumbs if WordPress can generate them from page hierarchy.

Do not create breadcrumb labels that differ from the page titles unless the user explicitly asks.

Accessible breadcrumb pattern if custom HTML is needed:

```html
<nav class="wadeps-breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/training-manual/">Training Manual</a></li>
    <li aria-current="page">Logging in to WADEPS</li>
  </ol>
</nav>
```

---

# Heading hierarchy

Use headings to represent structure, not visual size.

Recommended pattern:

```text
H1: Manual title or page title
H2: Major manual section
H3: Subsection
H4: Deeper subsection
H5-H6: Only if the source manual requires that depth
```

Rules:

* Use only one H1 per page.
* Do not skip heading levels for visual styling.
* Do not use heading blocks for decorative emphasis.
* Do not use paragraph text styled visually as a heading when it should be a real heading.
* Do not use custom Nexter/WADEPS heading blocks if they output incorrect heading levels.
* Use stock WordPress Heading blocks.

If the heading looks wrong visually, change the style, not the semantic heading level.

---

# Manual table of contents

The source manual has a nested table of contents.

Preserve the table of contents logic in the web version.

If using a page table of contents:

* Include major sections.
* Include important subsections where useful.
* Use anchor links.
* Keep labels faithful to the source headings.
* Do not rename headings for style.
* Do not include so many nested items that the table of contents becomes unusable.

Accessible table of contents pattern:

```html
<nav class="wadeps-toc" aria-labelledby="wadeps-toc-title">
  <h2 id="wadeps-toc-title">On this page</h2>
  <ul>
    <li><a href="#logging-in-to-wadeps">Logging in to WADEPS</a></li>
    <li><a href="#first-time-login">First time Login &amp; Two-Factor Authentication (2FA) Setup</a></li>
  </ul>
</nav>
```

If using a sidebar table of contents:

* Keep it keyboard accessible.
* Use real links.
* Ensure focus states are visible.
* Avoid JavaScript-only navigation.
* Ensure it works on mobile or stacks accessibly.

---

# Content width and layout

Long manual text should be readable.

Recommended content width:

```css
.wadeps-manual-content {
  max-width: 760px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}
```

For a sidebar layout:

```css
.wadeps-manual-layout {
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 760px);
  gap: 2rem;
  align-items: start;
}
```

On smaller screens:

```css
@media (max-width: 900px) {
  .wadeps-manual-layout {
    display: block;
  }

  .wadeps-manual-content {
    padding-inline: 1rem;
  }
}
```

Do not let manual paragraphs span the full browser width.

---

# Responsive sidebar navigation

Sidebar navigation should be useful on desktop and not harmful on mobile.

Recommended CSS:

```css
.wadeps-sidebar-nav {
  position: sticky;
  top: 1rem;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}

@media (max-width: 900px) {
  .wadeps-sidebar-nav {
    position: static;
    max-height: none;
    overflow: visible;
    margin-bottom: 2rem;
  }
}
```

Do not use sticky sidebars if they hide content, overlap content, or create keyboard traps.

---

# Screenshots and figures

Screenshots should remain near the instructions they support.

Use this structure when custom HTML is needed:

```html
<figure class="wadeps-figure">
  <img src="..." alt="Preserve the existing alt text from the source manual." />
  <figcaption>Preserve the existing caption from the source manual.</figcaption>
</figure>
```

Recommended CSS:

```css
.wadeps-figure {
  margin-block: 2rem;
}

.wadeps-figure img {
  display: block;
  max-width: 100%;
  height: auto;
}

.wadeps-figure figcaption {
  margin-top: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}
```

Rules:

* Preserve screenshot order.
* Preserve alt text.
* Preserve captions.
* Do not crop screenshots in a way that removes instructional context.
* Do not use screenshots as the only explanation for a task.
* Keep screenshots responsive.

---

# Callout structure

Preserve callouts in the location they appear in the source manual.

Callout examples include:

* Important
* Important Note
* Reminder
* Note
* Troubleshooting Tip
* Need Help?
* Example
* Guidance for Verification
* Tips
* Next Step
* Status
* Decision

Do not convert callouts into headings that disrupt the page outline.

Preferred structure:

```html
<aside class="wadeps-callout">
  <p class="wadeps-callout__title"><strong>Important</strong></p>
  <p>Preserve the original callout text from the source manual.</p>
</aside>
```

Callouts should use a dark green left border only.

Recommended CSS:

```css
.wadeps-callout {
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  background: #ffffff;
  border: none;
  border-left: 8px solid #1B5027;
  border-radius: 0;
}

.wadeps-callout__title {
  margin: 0 0 0.5rem;
  color: #555f5b;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
}
```

Do not add a dark green border around all four sides.

Do not rely on color alone. Preserve the visible callout label.

---

# Responsive callout grids

If two callouts appear side by side, they must stack on mobile.

```css
.wadeps-callout-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

@media (max-width: 700px) {
  .wadeps-callout-grid {
    grid-template-columns: 1fr;
  }
}
```

Do not force side-by-side callouts on narrow screens.

---

# Tables

Preserve real table structure.

Use tables only for tabular content.

Do not use tables for layout.

For tables:

* Use `<table>`.
* Use `<caption>` when helpful.
* Use `<thead>` and `<tbody>` where appropriate.
* Use `<th>` for headers.
* Use `scope="col"` and `scope="row"` where appropriate.
* Preserve source table meaning.
* Keep tables responsive without destroying structure.

Accessible table pattern:

```html
<div class="wadeps-table-wrap">
  <table>
    <caption>Table of Contents</caption>
    <thead>
      <tr>
        <th scope="col">Section</th>
        <th scope="col">Page #</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Introduction</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
</div>
```

Responsive table wrapper:

```css
.wadeps-table-wrap {
  overflow-x: auto;
  margin-block: 1.5rem;
}

.wadeps-table-wrap table {
  width: 100%;
  border-collapse: collapse;
}

.wadeps-table-wrap th,
.wadeps-table-wrap td {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border-subtle);
  text-align: left;
  vertical-align: top;
}
```

---

# Lists

Preserve list structure.

Use:

* Ordered lists for step-by-step instructions.
* Unordered lists for grouped items.
* Nested lists only where the source structure requires them.

Do not fake lists with line breaks, dashes, bullets typed as text, or spacing.

---

# WordPress block structure

Use stock WordPress blocks for content structure.

Preferred:

```text
Heading block
Paragraph block
List block
Image block
Table block
Group block
Buttons block
Breadcrumbs block
Custom HTML block only for controlled snippets
```

Avoid:

```text
Broken Nexter heading blocks
Broken accordion patterns
Broken bulleted list patterns
Broken numbered list patterns
Plugin blocks that change heading levels
Layout blocks that create confusing reading order
```

---

# Sidebar and chapter navigation

For long manual sections, use sidebar or chapter navigation if helpful.

Sidebar navigation should:

* Use real anchor links.
* Be keyboard accessible.
* Have visible focus states.
* Reflect the manual’s structure.
* Collapse or stack cleanly on mobile.
* Not depend entirely on JavaScript.

Do not use sidebar navigation to replace actual headings in the page content.

---

# Mobile structure

On mobile:

* Left-hand navigation should stack above content or become an accessible menu.
* Callout grids should become one column.
* Tables should remain readable.
* Images should scale to viewport width.
* Back-to-top button must not cover content.
* Text width should remain readable.
* Heading hierarchy must remain unchanged.

---

# Structure anti-patterns

Do not:

* Flatten all content into one H2 section.
* Remove subsections.
* Rename headings without approval.
* Use visual text instead of semantic headings.
* Use full-width paragraphs.
* Use plugin blocks that break the reading order.
* Put important content only in screenshots.
* Hide required content in unnecessary accordions.
* Duplicate the same manual content in multiple places without a clear reason.
* Paste full HTML documents into WordPress pages.
* Override WordPress page title or hierarchy.

---

# Final structure rule

The web structure should feel like the completed WADEPS Training Manual translated into an accessible website.

It should not feel like a new document, a landing page, or a simplified rewrite.

<!------------------------------------------------------------------------------------
   Add rules to this file or a short description and have Kiro refine them for you.
   
   Learn about inclusion modes: https://kiro.dev/docs/steering/#inclusion-modes
-------------------------------------------------------------------------------------> 