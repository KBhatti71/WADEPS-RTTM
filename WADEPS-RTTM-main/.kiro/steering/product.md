# Product

This project converts the **WADEPS Reporting Tool Training Manual** from PDF to accessible HTML.

**WADEPS** = Washington State Data Exchange for Public Safety — a state-mandated system for law enforcement agencies to report use-of-force incidents.

The HTML output is a self-contained, accessible training document that:
- Covers the full WADEPS portal workflow: login, data entry, supervisor review, batch upload, CAD data upload, and administrative follow-up
- Targets law enforcement officers and supervisors in Washington State
- Embeds all screenshots as base64-encoded inline images (no external assets)
- Is versioned (current: v2.4, revised February 6, 2026)

There are two HTML variants in this repo:
- `WADEPS-21-MK1-DSBEdit.html` — blue/navy color scheme 
- `tm..html` — green color scheme (`--color-accent: #1B5027`), wider max-width (1000px), uses Montserrat font, includes additional subtitle detail

The source PDF (`WADEPS-21 MK1-DSBEdit.pdf`) is the authoritative reference document.
I don’t see a public “official style guide” document on the WADEPS site, so this is a **practical style guide inferred from the live website**.

## WADEPS Website Style Guide — Inferred

### 1. Brand personality

The site feels **public-sector, institutional, data-focused, and accessibility-forward**. The messaging emphasizes transparency, community trust, evidence-based decision-making, statewide reporting, and public access to use-of-force data. ([wadeps.org][1])

The tone should stay:

**Clear, formal, neutral, factual, trustworthy, and civic-minded.**

Avoid overly salesy language. This is not a marketing-heavy site; it reads more like a public information and data transparency platform.

---

## 2. Primary colors

### Main brand color: dark WADEPS green

Used in the WADEPS logo and iconography. The page references the WADEPS logo as a **solid dark green outline of Washington state with white WADEPS letters**, plus dark green text. ([wadeps.org][1])

Approximate use:

```css
--wadeps-green-dark: #1f4f3a;
--wadeps-green: #2f6f4e;
--wadeps-green-light: #5f9f6e;
```

### Supporting colors

The site also includes official partner branding, including the Washington State seal and WSU logo. The WSU logo brings in crimson/black as a partner mark, not necessarily a site-wide design color. ([wadeps.org][1])

Suggested support palette:

```css
--white: #ffffff;
--off-white: #f7f7f4;
--text-dark: #1f252b;
--text-muted: #4b5563;
--border-light: #d9ded8;
--link-blue: #005ea8;
--wsu-crimson-accent: #981e32;
```

Use crimson sparingly only when referencing WSU or partner branding.

---

## 3. Typography

The site appears to use a clean, government-style sans-serif structure. Based on the visual hierarchy and public-sector feel, the typography should be simple and readable.

Recommended CSS stack:

```css
font-family: Montserrat, Helvetica, sans-serif;
```

or:

```css
font-family: "Open Sans", Arial, sans-serif;
```

### Heading structure

The page uses a clear heading hierarchy:

```text
H1 / page title: Welcome to WADEPS
H2: Washington State Data Exchange for Public Safety
H3: Uniform data collection
H3: Community-police relations
H3: Informed decision-making
H3: Analytical resources and tools
H2: Statewide Resources
H2: Washington by the Numbers
H2: View the Dashboard
```

That structure is visible in the page content. ([wadeps.org][1])

Recommended sizes:

```css
h1 {
  font-size: 40px;
  font-weight: 700;
}

h2 {
  font-size: 28px;
  font-weight: 700;
}

h3 {
  font-size: 20px;
  font-weight: 700;
}

body {
  font-size: 16px;
  line-height: 1.6;
}
```

---

## 4. Layout style

The site uses a traditional public-information layout:

**Header navigation → hero/banner → intro text → feature/value cards → resource section → statistics section → dashboard call-to-action → footer partner logos.**

The main navigation includes sections like Dashboard, The Data, How It Works, About WADEPS, FAQ/Help, and For Agencies. ([wadeps.org][1])

Recommended layout rules:

```css
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 48px 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
```

For responsive design:

```css
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 5. Icon style

The homepage uses **green line/flat icons** for the four key concepts:

1. Uniform data collection
2. Community-police relations
3. Informed decision-making
4. Analytical resources and tools

These are described in the page image alt text as green icons representing data collection, community-police relations, informed decision-making, and analytical tools. ([wadeps.org][1])

Icon rules:

```text
Style: simple, flat, public-sector friendly
Color: WADEPS green
Avoid: cartoonish icons, overly decorative graphics, gradients
Use icons only when they support comprehension
```

---

## 6. Buttons and links

The site uses action-oriented links such as “Click here or on the image below to view the WADEPS dashboard.” ([wadeps.org][1])

Recommended button style:

```css
.button-primary {
  background: #1f4f3a;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: 700;
  text-decoration: none;
}

.button-primary:hover,
.button-primary:focus {
  background: #163b2b;
  outline: 3px solid #ffbf47;
  outline-offset: 2px;
}
```

For accessibility, links should clearly describe the destination. Instead of:

```text
Click here
```

Use:

```text
View the WADEPS Dashboard
```

---

## 7. Accessibility style rules

The site already shows accessibility-aware patterns, including descriptive image alt text and external-link warnings like “opens a new window.” ([wadeps.org][1])

Recommended accessibility rules:

```text
Use semantic headings in order: H1 → H2 → H3.
Do not skip heading levels unless the page structure requires it.
Use descriptive alt text for meaningful images.
Mark decorative images as decorative or empty alt.
Avoid “click here” as standalone link text.
Indicate when links open in a new tab/window.
Maintain strong color contrast.
Make all navigation keyboard accessible.
Use visible focus states.
```

For external links:

```html
<a href="https://example.gov" target="_blank" rel="noopener">
  Statewide police use-of-force reporting requirements
  <span class="sr-only">opens in a new window</span>
</a>
```

---

## 8. Content style

The writing style should be:

```text
Public-facing
Plain language
Policy-aware
Evidence-based
Neutral
Nonpartisan
Data-focused
```

Good WADEPS-style sentence:

> WADEPS provides standardized data collection tools to support transparency, community trust, and evidence-based decision-making.

Avoid:

> WADEPS is revolutionizing public safety analytics with cutting-edge innovation.

That sounds too promotional for this site.

---

## 9. Data and dashboard style

The site presents “Washington by the Numbers” with simple large-number stats such as law enforcement agencies, commissioned officers, statewide population, and square miles. ([wadeps.org][1])

Dashboard/data style should be:

```text
Clear labels
Plain explanations
Minimal visual clutter
Neutral colors
Consistent legends
Accessible chart contrast
No unexplained acronyms
Context before numbers
```

For charts or embedded dashboards, include:

```text
Title
Plain-language summary
Legend or language key
Source/date note
Keyboard-accessible embed controls where possible
Alternative text or summary for key data visualizations
```

---

## 10. Footer and partner branding

The footer includes the WADEPS logo, Washington State seal, and Washington State University logo. ([wadeps.org][1])

Footer style:

```text
Use official logos consistently.
Do not recolor partner logos.
Keep footer simple.
Include copyright and accessibility/translation notes.
```

The site also notes that on-demand translation is provided by GTranslate. ([wadeps.org][1])

---

## Simple internal style guide summary

Use this version when explaining it at work:

> The WADEPS website style is a public-sector, accessibility-forward design system built around dark green branding, clean sans-serif typography, simple iconography, structured navigation, plain-language public information, and data transparency. The design should feel official, calm, trustworthy, and easy to navigate, with strong heading structure, accessible links, descriptive alt text, and clear dashboard/data explanations.

[1]: https://wadeps.org/ "Home - WADEPS: Washington State Data Exchange for Public Safety"
