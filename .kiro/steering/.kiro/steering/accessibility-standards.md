---
inclusion: always
---
# Accessibility Standards — WADEPS Training Manual Web Version

## Core accessibility principle

The completed WADEPS Training Manual PDF and Word document are already accessible and have correct reading order.

The web version must preserve that accessibility work.

Do not undo completed accessibility decisions during conversion to WordPress or HTML.

## Accessibility goal

The website version must be readable, navigable, and understandable for users who rely on:

* Screen readers
* Keyboard-only navigation
* Browser zoom
* Reflow
* High-contrast settings
* Voice control
* Clear headings
* Consistent layout
* Assistive technology

## Preserve source accessibility

Preserve the existing:

* Reading order
* Heading order
* Alt text
* Captions
* List structure
* Table structure
* Callout labels
* Callout content
* Screenshot placement
* Section order
* Subsection order

Do not remove alt text or captions.

Do not replace accessible text with images of text.

Do not convert structured content into unstructured visual blocks.

Do not change manual wording unless the user explicitly requests a content edit.

## Semantic HTML rules

Use semantic HTML where custom HTML is needed:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<figure>
<figcaption>
<footer>
```

Use WordPress stock blocks when they produce clean semantic output.

Do not use generic `<div>` markup when a semantic element is more appropriate.

Do not create clickable `<div>` or `<span>` elements.

Use real buttons for actions.

Use real links for navigation.

## Heading rules

The manual has many subsections. Preserve them.

Use headings for structure, not for visual size.

Recommended pattern:

```text
H1: Page or manual title
H2: Major manual sections
H3: Subsections
H4: Deeper subsections
H5-H6: Only when required by the existing manual structure
```

Do not skip heading levels to make text look larger or smaller.

If a heading needs a different visual size, change the style, not the semantic level.

## WordPress heading rules

Use standard WordPress Heading blocks.

Do not use broken custom WADEPS/Nexter heading blocks if they output the wrong heading level.

After pasting content into WordPress:

* Check the List View.
* Confirm heading levels are correct.
* Confirm there is only one H1 for the page.
* Confirm subsections remain nested correctly.
* Confirm headings are not being used as decorative text.
* Confirm the visual style does not override semantic structure.

## Links

Links must clearly describe the destination or action.

Avoid vague link text:

```text
Click here
Read more
Learn more
Here
```

Use descriptive link text:

```text
Open the WADEPS Reporting Tool
View the WADEPS dashboard
Contact the WADEPS training team
Review the Supervisor Dashboard section
```

If a link opens in a new tab or window, include a screen-reader-only notice when possible.

Example:

```html
<a href="https://example.gov" target="_blank" rel="noopener">
  View the WADEPS dashboard
  <span class="sr-only">opens in a new window</span>
</a>
```

## Images and screenshots

Screenshots are instructional content.

Each meaningful screenshot must preserve:

* Alt text
* Caption
* Placement near the related instruction
* Reading order
* Context

Use `<figure>` and `<figcaption>` when writing HTML manually.

Example:

```html
<figure>
  <img src="..." alt="WADEPS Officer Dashboard showing the Create a Record button highlighted." />
  <figcaption>Officer Dashboard with the Create a Record button highlighted.</figcaption>
</figure>
```

Do not use screenshots as the only way to communicate required steps.

If a screenshot contains important information, make sure the surrounding text also explains the task.

## Decorative images

Decorative images must use empty alt text.

Example:

```html
<img src="..." alt="" role="presentation">
```

Do not add unnecessary descriptions to decorative images.

## Tables

Use real table structure for tables.

Do not use images of tables unless the table is also provided as accessible text.

Tables should include:

* Table headers
* Clear column labels
* Row labels where needed
* Captions when helpful
* Logical reading order

Example:

```html
<table>
  <caption>Table of Contents</caption>
  <thead>
    <tr>
      <th scope="col">Section</th>
      <th scope="col">Page</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Introduction</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
```

## Lists

Preserve list structure from the source manual.

Use real ordered and unordered lists.

Do not use manual symbols, spaces, or line breaks to fake lists.

Use ordered lists for step sequences when the order matters.

Use unordered lists when the order does not matter.

## Callout accessibility

The manual uses repeated callout types such as:

* Important
* Important Note
* Troubleshooting Tip
* Reminder
* Note
* Need Help?
* Example
* Guidance for Verification
* Tips
* Next Step
* Status
* Decision

Preserve these callout labels exactly unless the user requests a wording change.

Each callout must have a visible text label.

Do not rely on color alone to communicate the callout type.

Callout structure should be accessible as a grouped aside.

Recommended HTML:

```html
<aside class="wadeps-callout wadeps-callout--important">
  <p class="wadeps-callout__title"><strong>Important</strong></p>
  <p>Preserve the original callout text from the manual.</p>
</aside>
```

If a heading inside the callout would disrupt the page heading hierarchy, use a paragraph or strong label instead of an H2, H3, H4, H5, or H6.

## Keyboard accessibility

All interactive elements must be reachable and usable by keyboard.

This includes:

* Navigation
* Table of contents links
* Accordions
* Details/Summary blocks
* Back-to-top button
* Buttons
* Forms
* Sidebar navigation

Do not create keyboard traps.

Do not hide focused elements.

## Focus states

Every interactive element must have a visible focus state.

Recommended CSS:

```css
a:focus-visible,
button:focus-visible,
summary:focus-visible,
[tabindex]:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}
```

Do not remove browser focus outlines unless replacing them with an equally visible accessible style.

## Responsive and zoom requirements

The web version must remain usable at:

* Desktop width
* Tablet width
* Mobile width
* 200% browser zoom
* Narrow viewport widths

Avoid full-width text lines that are difficult to read.

Use a readable content width.

Recommended range:

```css
--content-max-width: 760px;
```

Screenshots may be wider when needed, but text should remain readable.

## Reduced motion

If smooth scrolling or animated interactions are added, respect reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## WordPress import checklist

After importing content into WordPress, verify:

* Heading levels are correct.
* Subsections are preserved.
* Lists remain lists.
* Tables remain tables.
* Images have alt text.
* Captions are present.
* Callouts are visually and semantically preserved.
* Links are descriptive.
* Focus states are visible.
* Content width is readable.
* The page works at 200% zoom.
* The page can be navigated by keyboard.
* The table of contents or sidebar navigation works.
* No manual wording was changed.

## Hard rule

Accessibility improvements may change markup and layout.

Accessibility improvements must not change the meaning or wording of the manual unless the user explicitly asks.
