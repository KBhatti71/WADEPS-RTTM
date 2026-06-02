---
inclusion: always
---
# Design System — WADEPS Training Manual Web Version

## Design purpose

The design system should support a faithful web version of the completed WADEPS Training Manual.

The goal is to make the manual:

* Readable
* Accessible
* Easy to navigate
* Easy to follow
* Visually aligned with WADEPS.org
* Consistent with the completed PDF format

Do not redesign the manual into a marketing page.

Do not over-style the manual.

The design should feel like a public-sector training document.

## WADEPS visual direction

Use a dark green WADEPS visual identity.

The manual and WADEPS.org both rely on dark green as the primary identity color.

Use dark green for:

* Headings
* Links
* Left borders on callouts
* Primary buttons
* Active navigation
* Section accents
* Table of contents links
* Sidebar navigation accents

## Color tokens

Use this token system:

```css
:root {
  /* WADEPS greens */
  --color-wadeps-green-dark: #1B5027;
  --color-wadeps-green: #1f4f3a;
  --color-wadeps-green-muted: #2f6f4e;
  --color-wadeps-green-light: #dcefe3;

  /* Text */
  --color-text: #1f252b;
  --color-text-muted: #555f5b;
  --color-heading: #1B5027;
  --color-text-on-dark: #ffffff;

  /* Surfaces */
  --color-white: #ffffff;
  --color-off-white: #f7f7f4;
  --color-surface: #ffffff;
  --color-surface-muted: #f3f7f4;
  --color-callout-bg: #ffffff;

  /* Borders */
  --color-border-subtle: #cfd8d1;
  --color-border-strong: #1B5027;
  --color-callout-border-left: #1B5027;

  /* Links */
  --color-link: #1B5027;
  --color-link-hover: #12391c;

  /* Focus */
  --color-focus: #1f4f3a;

  /* Partner accent */
  --color-wsu-crimson: #981e32;
}
```

## Link and border correction

Do not use blue as the default link color.

Do not use pale gray as the main callout border.

Replace this direction:

```css
--border-light: #d9ded8;
--link-blue: #005ea8;
```

With this direction:

```css
--color-link: #1B5027;
--color-border-strong: #1B5027;
--color-border-subtle: #cfd8d1;
```

Use dark green for links and meaningful borders.

Use subtle green-gray borders only for quiet separation, tables, or light dividers.

## Typography

Use a clean sans-serif font.

Preferred:

```css
font-family: Montserrat, Helvetica, Arial, sans-serif;
```

Acceptable fallback:

```css
font-family: "Open Sans", Arial, sans-serif;
```

Text should be readable and not overly compressed.

Recommended base:

```css
body {
  color: var(--color-text);
  font-size: 16px;
  line-height: 1.6;
}
```

## Heading style

Headings should follow the PDF’s dark green visual direction.

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color-heading);
  font-weight: 700;
  line-height: 1.25;
}
```

Use semantic heading levels based on structure.

Do not change heading levels only for visual size.

## Readable content width

Long manual text should not stretch across the full browser width.

Recommended content width:

```css
.wadeps-manual-content {
  max-width: 760px;
  margin-inline: auto;
  padding-inline: 24px;
}
```

For pages with sidebar navigation:

```css
.wadeps-manual-layout {
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 760px);
  gap: 32px;
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
    padding-inline: 16px;
  }
}
```

## Table of contents and navigation

The manual has many sections and subsections.

Use navigation that helps users follow the structure.

Recommended:

* Left-hand navigation for the site or manual sections
* Page table of contents for long manual pages
* Anchor links for major sections
* Breadcrumbs directly under the page title when available

Navigation should preserve the manual’s hierarchy.

Do not flatten nested subsections.

## Callout design

The manual uses callouts such as:

* Troubleshooting Tip
* Important
* Important Note
* Guidance for Verification
* Reminder
* Note
* Need Help?
* Example
* Tips
* Next Step
* Status
* Decision

All callouts should use the same base style.

The only required visible emphasis border should be the dark green border on the left side.

Do not place a dark green border around all four sides.

Do not rely on color alone to communicate the callout type. Preserve the visible text label.

Recommended CSS:

```css
.wadeps-callout {
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  background: var(--color-callout-bg);
  border: none;
  border-left: 8px solid var(--color-wadeps-green-dark);
  border-radius: 0;
}

.wadeps-callout__title {
  margin: 0 0 0.5rem;
  color: var(--color-text-muted);
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
}

.wadeps-callout p:last-child,
.wadeps-callout ul:last-child,
.wadeps-callout ol:last-child {
  margin-bottom: 0;
}
```

Example HTML:

```html
<aside class="wadeps-callout wadeps-callout--important">
  <p class="wadeps-callout__title"><strong>Important</strong></p>
  <p>Preserve the original callout text from the manual.</p>
</aside>
```

Example for troubleshooting:

```html
<aside class="wadeps-callout wadeps-callout--troubleshooting">
  <p class="wadeps-callout__title"><strong>Troubleshooting Tip</strong></p>
  <p>Preserve the original troubleshooting text from the manual.</p>
</aside>
```

Example for verification guidance:

```html
<aside class="wadeps-callout wadeps-callout--verification">
  <p class="wadeps-callout__title"><strong>Guidance for Verification</strong></p>
  <p>Preserve the original verification guidance from the manual.</p>
</aside>
```

## Callout layout rules

Callouts may be full width or side by side only when the viewport allows it.

Side-by-side callouts must stack on mobile.

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

Do not force two-column callouts on mobile.

## Figure and screenshot styling

Screenshots should be grouped clearly.

```css
figure {
  margin: 2rem 0;
}

figure img {
  display: block;
  max-width: 100%;
  height: auto;
}

figcaption {
  margin-top: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}
```

Do not apply heavy decoration to screenshots.

Do not crop screenshots in a way that removes instructional context.

## Tables

Use a restrained table style similar to the manual’s table of contents and data tables.

```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

th {
  color: var(--color-wadeps-green-dark);
  font-weight: 700;
  text-align: left;
}

th,
td {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border-subtle);
  vertical-align: top;
}

tbody tr:nth-child(odd) {
  background: var(--color-surface-muted);
}
```

Only use tables for tabular content.

Do not use tables for layout.

## Buttons

Primary buttons should use dark WADEPS green.

```css
.wp-block-button__link,
.button-primary {
  background: var(--color-wadeps-green-dark);
  color: var(--color-text-on-dark);
  border: 2px solid var(--color-wadeps-green-dark);
  border-radius: 4px;
  font-weight: 700;
  text-decoration: none;
}

.wp-block-button__link:hover,
.button-primary:hover {
  background: var(--color-link-hover);
  border-color: var(--color-link-hover);
}
```

## Focus states

Focus states must be visible and consistent.

```css
a:focus-visible,
button:focus-visible,
summary:focus-visible,
.wp-block-button__link:focus-visible,
[tabindex]:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}
```

Do not remove focus outlines.

## Back-to-top button

If used, the back-to-top button should be simple and accessible.

```css
.back-to-top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 20;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: var(--color-wadeps-green-dark);
  color: var(--color-text-on-dark);
  border: 2px solid var(--color-wadeps-green-dark);
  font-weight: 700;
}

.back-to-top:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}
```
## Reusable Content Patterns

### Definition Cards

Use definition cards for repeated term-and-definition content throughout the WADEPS Reporting Tool Training Manual.

Definition cards are required when the manual lists a term followed by a bold “Definition:” label, especially in sections such as Contact Reason, Response Type, Location options, Initial Incident Type, Indoor Location, Outdoor Location, and other repeated data-entry option lists.

Do not convert repeated definitions into accordions or dropdowns. Definitions must remain visible by default because users need to compare options quickly while using the training manual.

Definition cards must preserve the original manual wording and content order. Do not rewrite, simplify, summarize, or reinterpret the training manual content unless explicitly asked. The source PDF/Word manual remains the authoritative reference.

Each definition card should include:

* A prominent term title, such as “Public Request for Service”
* The original definition text
* A bold “Definition:” label
* A dark WADEPS green left border only
* A light neutral/off-white background
* Clear spacing and readable line height
* Accessible semantic HTML
* Mobile-friendly layout

For sections that include both “Definition:” and “Legal Implication:”, keep both labels bold inside the same definition card.

Example structure:

```html
<section class="definition-group" aria-labelledby="contact-reason-heading">
  <h3 id="contact-reason-heading">Contact Reason</h3>
  <p>Select one of four reasons for the initial contact that led to the use of force event.</p>

  <div class="definition-card">
    <h4 class="definition-card__term">Public Request for Service</h4>
    <p class="definition-card__body"><strong>Definition:</strong> The contact originated from a member of the public requesting assistance or reporting an incident (typically by phone or in-person).</p>
  </div>
</section>
```

Recommended CSS:

```css
.definition-group {
  margin: 2rem 0;
}

.definition-card {
  border-left: 6px solid var(--wadeps-green-dark, #1f4f3a);
  background: var(--wadeps-surface-light, #f7f7f4);
  border-radius: 4px;
  padding: 1rem 1.25rem;
  margin: 1rem 0;
}

.definition-card__term {
  color: var(--wadeps-green-dark, #1f4f3a);
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.definition-card p {
  margin-top: 0;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.definition-card p:last-child {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .definition-card {
    padding: 0.875rem 1rem;
    border-left-width: 5px;
  }
}
```

Accessibility requirements:

* Keep all definitions visible by default.
* Do not use dropdowns or accordions for repeated definitions.
* Do not skip heading levels.
* Match the term heading level to the surrounding page hierarchy.
* Do not use headings only for visual styling.
* Maintain WCAG 2.2 AA color contrast.
* Ensure the layout works at 320px mobile width.
* Do not remove existing alt text, captions, headings, IDs, anchors, or navigation structure.

Definition cards are separate from callout boxes. Continue using callout boxes for “Important,” “Reminder,” “Example,” “Troubleshooting Tip,” “Guidance for Verification,” and “Need Help?” content.


```

The button must not cover important content.

## WordPress styling rules

Use global styles for color and font.

Avoid per-block styling unless needed for a specific exception.

Use stock WordPress blocks first.

Create reusable patterns only after the base blocks are styled correctly.

Do not use broken custom heading patterns.

Do not use custom Nexter heading blocks if they create semantic errors.

## Visual restraint

Avoid:

* Blue default links
* Full dark green borders around callouts
* Gradients
* Decorative animations
* Excessive shadows
* Overly rounded cards
* Marketing-style hero sections
* Rewriting content for style
* Removing subsections to simplify layout

Prefer:

* Dark green headings
* Dark green links
* Dark green left callout borders
* Simple readable tables
* Clean spacing
* Clear subsections
* Plain instructional layout
* Faithful manual formatting
* Accessible WordPress blocks

## Final design rule

The web version should feel like the completed WADEPS Training Manual translated into an accessible website.

It should not feel like a new document.
