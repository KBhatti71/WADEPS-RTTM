---
inclusion: always
---

# Technology Steering — WADEPS WordPress Site

## Core technology direction

This project uses **WordPress** to publish the WADEPS Training Manual as a readable, digitally accessible web version.

The implementation should prioritize:

* WordPress stock blocks
* Semantic HTML
* CSS-first styling
* Minimal JavaScript
* WCAG 2.2 alignment
* Responsive layouts
* Keyboard accessibility
* Screen reader clarity
* WADEPS.org visual consistency
* Faithful transition from the completed accessible Word/PDF manual

Do not suggest rebuilding this project in React, Vue, Next.js, Tailwind, or another frontend framework unless the user explicitly requests it.

This is a WordPress implementation project, not a custom app build.

---

# Platform

Use:

```text
WordPress
2025 WordPress theme
Nexter plugin where helpful
Stock WordPress blocks whenever possible
Semantic HTML
Accessible CSS
Minimal JavaScript
```

The site should remain easy for WADEPS/WSU staff to maintain without requiring a developer for every content update.

---

# WordPress theme rule

Stay on the **2025 WordPress theme**.

Do not recommend changing themes unless the user explicitly asks.

Do not recommend premium themes.

Do not recommend annual theme replacement.

Do not recommend upgrading to a newer default theme just because it exists.

The current direction is to use a stable, supported, free WordPress theme and avoid unnecessary lock-in.

---

# Nexter plugin rule

The Nexter plugin may be used where it supports the existing WADEPS site structure, especially:

* Nested page navigation
* Existing layout containers
* Site-level navigation structures
* Existing site organization controlled by WADEPS/WSU

However:

* Do not rely on broken custom Nexter/WADEPS heading blocks.
* Do not use Nexter heading blocks if they output incorrect semantic heading levels.
* Do not use broken Nexter accordion patterns.
* Do not use broken Nexter list patterns.
* Do not use plugin blocks when a stock WordPress block is cleaner and more accessible.
* Do not force Nexter into the training manual content if standard WordPress blocks can do the job.

Nexter should support structure and site navigation, not control the manual’s semantic meaning.

---

# Stock WordPress blocks first

Use stock WordPress blocks before custom HTML or plugin-specific blocks.

Preferred blocks:

```text
Heading block
Paragraph block
List block
Image block
Table block
Group block
Columns block only when needed
Details/Summary block where appropriate
Buttons block when needed
Breadcrumbs block where available
Custom HTML block only for controlled snippets
```

Avoid:

```text
Broken custom heading blocks
Broken accordion patterns
Broken list patterns
Plugin blocks that create invalid heading order
Layout blocks that create inaccessible reading order
JavaScript-heavy components when HTML/CSS can solve the problem
```

---

# Semantic HTML rule

When custom HTML is needed, use semantic HTML.

Use:

```html
<main>
  <section aria-labelledby="section-title">
    <h2 id="section-title">Section Title</h2>
    <p>Section content.</p>
  </section>
</main>
```

Use structural elements when appropriate:

```html
<nav aria-label="Training manual navigation"></nav>
<article></article>
<section></section>
<aside></aside>
<figure></figure>
<figcaption></figcaption>
<table></table>
<button type="button"></button>
<a href=""></a>
```

Avoid:

```html
<div onclick="doSomething()">Click</div>
<span onclick="doSomething()">Click</span>
<div role="button">Click</div>
<table>
  <!-- layout-only table -->
</table>
```

Only use ARIA when native HTML cannot provide the needed meaning.

Native semantic HTML is preferred over ARIA-heavy custom components.

---

# CSS-first implementation

Use CSS for visual presentation and layout.

Prefer CSS for:

* Content width
* Spacing
* Typography
* Colors
* Callout styling
* Table styling
* Screenshot and figure styling
* Focus states
* Responsive behavior
* Sticky or fixed positioning where appropriate
* Print-friendly adjustments if needed

Do not use JavaScript for styling changes that CSS can handle.

---

# Minimal JavaScript rule

Use little to no JavaScript.

JavaScript is allowed only when it provides clear functionality that cannot be handled by WordPress blocks, semantic HTML, or CSS.

Acceptable JavaScript use cases:

* Progressive enhancement for a back-to-top button
* Progressive enhancement for table of contents highlighting
* Small accessibility-safe enhancements
* Controlled behavior that does not block content access if JavaScript fails

Avoid JavaScript for:

* Basic layout
* Basic navigation
* Basic show/hide content when native `<details>` can work
* Styling
* Heading behavior
* Content generation
* Replacing real links or buttons
* Any feature that creates a keyboard trap
* Any feature required to read the manual

If JavaScript is used, the page must still remain readable and navigable without it.

---

# HTML output rule for Kiro

When Kiro generates HTML for WordPress, output **body content only**.

Do not output:

```html
<!DOCTYPE html>
<html>
<head>
<body>
```

Do not include full-page document wrappers when content is meant to be pasted into WordPress.

Do not override the WordPress page title or page hierarchy.

For WordPress Custom HTML blocks, provide only the needed snippet.

Good WordPress-safe snippet:

```html
<aside class="wadeps-callout">
  <p class="wadeps-callout__title"><strong>Important</strong></p>
  <p>Preserve the original callout text from the manual.</p>
</aside>
```

Bad WordPress snippet:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>WADEPS Training Manual</title>
</head>
<body>
  <main>Manual content</main>
</body>
</html>
```

---

# CSS output rule for Kiro

When Kiro generates CSS, it should be scoped, readable, and safe.

Prefer scoped manual selectors:

```css
.wadeps-manual-content { }
.wadeps-manual-layout { }
.wadeps-sidebar-nav { }
.wadeps-toc { }
.wadeps-callout { }
.wadeps-callout__title { }
```

Avoid broad CSS that may accidentally break the whole site:

```css
div { }
span { }
* { }
body * { }
.wp-block-group { }
```

Use global styles only for approved site-wide decisions such as:

* WADEPS dark green links
* Heading color
* Body font
* Focus states
* Content width

Test broad CSS on a dev site or with a throwaway style before applying real changes.

---

# WADEPS color system

Use dark WADEPS green as the primary color.

Recommended tokens:

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

  /* Links and borders */
  --color-link: #1B5027;
  --color-link-hover: #12391c;
  --color-border-subtle: #cfd8d1;
  --color-border-strong: #1B5027;

  /* Focus */
  --color-focus: #ffbf47;
}
```

Do not use blue as the default link color.

Use dark green for:

* Links
* Headings
* Active navigation
* Buttons
* Callout left borders
* Section accents

---

# Accessible link styling

Links must be visually identifiable and keyboard accessible.

Recommended CSS:

```css
.wadeps-manual-content a {
  color: var(--color-link);
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.wadeps-manual-content a:hover {
  color: var(--color-link-hover);
  text-decoration-thickness: 2px;
}

.wadeps-manual-content a:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}
```

Do not rely on color alone to identify body links.

---

# Accessibility technology rules

All implementation must support:

* Keyboard navigation
* Screen readers
* Visible focus states
* Correct heading order
* Descriptive links
* Valid list markup
* Valid table markup
* Responsive layout
* 200% browser zoom
* Reduced motion preferences
* Captions and alt text preservation

Focus state pattern:

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

Do not remove focus outlines unless replacing them with an equally visible accessible focus style.

---

# Responsive layout rule

Use responsive CSS that works on desktop, tablet, mobile, and 200% zoom.

Recommended manual content width:

```css
.wadeps-manual-content {
  max-width: 760px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

@media (max-width: 768px) {
  .wadeps-manual-content {
    padding-inline: 1rem;
  }
}
```

For sidebar layouts:

```css
.wadeps-manual-layout {
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 760px);
  gap: 2rem;
  align-items: start;
}

@media (max-width: 900px) {
  .wadeps-manual-layout {
    display: block;
  }
}
```

Do not allow long manual text to span the full browser width.

---

# Reduced motion rule

If smooth scrolling, transitions, or animations are added, respect reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Avoid decorative animations.

---

# Performance and maintainability

The manual includes many screenshots and long sections.

Prioritize:

* Clean block structure
* Reasonable image sizing
* Responsive images
* Simple CSS
* Minimal JavaScript
* Avoiding unnecessary plugin dependencies
* Avoiding duplicated custom styles
* Avoiding one-off inline styles

Do not create a complex custom system when stock WordPress blocks and CSS can accomplish the goal.

---

# Prohibited recommendations

Do not recommend:

* Rebuilding the site in React, Next.js, Vue, or another framework
* Using Tailwind unless the user explicitly asks
* Using heavy JavaScript libraries
* Using animation libraries
* Using plugin-heavy solutions for basic layout
* Using custom heading blocks that break semantics
* Rewriting the manual content
* Replacing structured text with images
* Removing subsections for visual simplicity
* Hiding important manual content inside unnecessary accordions

---

# Final technology rule

Use WordPress as the publishing platform, Nexter only where helpful, stock blocks first, semantic HTML for structure, CSS for presentation, and JavaScript only when absolutely necessary.

<!------------------------------------------------------------------------------------
   Add rules to this file or a short description and have Kiro refine them for you.
   
   Learn about inclusion modes: https://kiro.dev/docs/steering/#inclusion-modes
-------------------------------------------------------------------------------------> 