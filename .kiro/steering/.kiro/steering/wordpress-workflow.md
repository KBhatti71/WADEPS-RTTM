---
inclusion: auto
---

inclusion: auto
name: wordpress-workflow
description: Use when importing, editing, formatting, styling, troubleshooting, or reviewing the WADEPS Training Manual in WordPress.
-------------------------------------------------------------------------------------------------------------------------------------

# WordPress Workflow — WADEPS Training Manual

## Workflow purpose

This file guides Kiro when helping with the WADEPS Training Manual inside WordPress.

The goal is to move the completed accessible Word/PDF manual into WordPress while preserving:

* Wording
* Heading hierarchy
* Reading order
* Screenshots
* Alt text
* Captions
* Tables
* Lists
* Callouts
* Version information
* Subsection structure

This is a faithful web transition, not a rewrite.

---

# Primary import workflow

Use the completed accessible Word document as the main import source.

Preferred workflow:

1. Open the completed accessible Word document.
2. Copy one logical manual section at a time.
3. Paste directly into the WordPress editor.
4. Confirm headings became stock Heading blocks.
5. Confirm paragraphs became Paragraph blocks.
6. Confirm lists became List blocks.
7. Confirm images carried over.
8. Confirm alt text carried over.
9. Confirm captions carried over.
10. Confirm tables remained tables.
11. Open WordPress List View.
12. Confirm heading order.
13. Check the HTML view for junk markup.
14. Clean only what needs to be cleaned.
15. Do not rewrite the content.

Use clean paste only if normal paste creates excessive formatting issues.

Clean paste shortcut:

```text
Shift + Ctrl + V
```

Use clean paste carefully because it may remove formatting that needs to be rebuilt manually.

---

# Recommended section-by-section import process

Do not paste the entire manual at once unless specifically testing import behavior.

Recommended workflow:

1. Create or open the target WordPress page.
2. Confirm the page title is correct.
3. Add breadcrumbs under the page title if available.
4. Copy one section from the Word document.
5. Paste into WordPress.
6. Check the block structure.
7. Fix heading levels using stock Heading blocks.
8. Confirm lists are actual List blocks.
9. Confirm images and captions are present.
10. Confirm alt text is present.
11. Confirm callouts are visually and semantically preserved.
12. Save draft.
13. Preview the page.
14. Test keyboard navigation.
15. Test mobile preview.
16. Continue with the next section.

This reduces the risk of breaking the entire page and makes QA easier.

---

# WordPress theme

Use the 2025 WordPress theme.

Do not recommend changing themes unless the user explicitly asks.

Do not recommend premium themes.

Do not upgrade the theme just because a newer version exists.

Prioritize stability, maintainability, and accessibility.

---

# Nexter plugin workflow

The Nexter plugin may remain part of the site.

Use Nexter only when it supports the existing site structure, such as:

* Nested page navigation
* Existing layout containers
* Site-level navigation structures

Do not use Nexter for manual headings if the Nexter heading blocks output incorrect semantic levels.

Do not use broken custom WADEPS/Nexter heading blocks.

Do not use broken Nexter list or accordion patterns.

If a Nexter pattern is broken, replace it with stock WordPress blocks instead of trying to repair the broken pattern.

Semantic accuracy is more important than matching a broken visual pattern.

---

# Stock block replacement rule

Replace broken custom blocks with stock WordPress blocks.

Use:

* Stock Heading blocks
* Stock Paragraph blocks
* Stock List blocks
* Stock Image blocks
* Stock Table blocks
* Stock Group blocks
* Stock Details/Summary blocks where appropriate
* Stock Breadcrumbs block where available
* Stock Buttons block where needed

Do not use custom WADEPS heading blocks if they open as the wrong heading level.

Do not use a custom H3 pattern if it opens as H1.

Do not use custom list patterns if they do not render correctly.

Do not use custom accordion patterns if they do not work.

---

# HTML import rule

If Kiro creates HTML for WordPress, output snippet/body content only.

Do not include:

```html
<!DOCTYPE html>
<html>
<head>
<body>
```

Do not paste a full HTML document into the WordPress content editor.

Do not override the WordPress page title.

Do not break WordPress page hierarchy.

Use the Custom HTML block only for controlled snippets such as:

* Accessible callouts
* Custom table of contents
* Carefully scoped navigation
* Specialized semantic sections that stock blocks cannot handle cleanly

---

# CSS workflow

Use global styles for approved site-wide decisions.

Use scoped CSS for manual-specific styling.

Preferred selectors:

```css
.wadeps-manual-content { }
.wadeps-manual-layout { }
.wadeps-sidebar-nav { }
.wadeps-toc { }
.wadeps-callout { }
.wadeps-callout__title { }
.wadeps-figure { }
.wadeps-table-wrap { }
```

Avoid broad selectors that may break the whole WADEPS site.

Do not make major CSS changes until the dev site is available and plugins are updated.

Before applying real CSS fixes, test with a harmless throwaway style to confirm the stylesheet is loading correctly.

Example throwaway test:

```css
/* Temporary test only. Remove after confirming stylesheet loads. */
.wadeps-css-test {
  outline: 3px solid red;
}
```

---

# Where CSS should go

Prefer this order:

1. WordPress global styles for approved site-wide colors, fonts, and base typography.
2. Theme/customizer CSS area for site-wide safe CSS.
3. Manual-specific CSS scoped to `.wadeps-manual-content` or `.wadeps-manual-layout`.
4. Custom HTML block styles only when absolutely necessary and scoped.
5. Avoid inline styles unless used temporarily for testing.

Do not add one-off inline styling to each block.

Do not style every block manually.

Consistency should come from global or scoped CSS.

---

# JavaScript workflow

Use little to no JavaScript.

Before adding JavaScript, check whether the need can be met with:

* WordPress stock blocks
* Semantic HTML
* CSS
* Native browser behavior
* Anchor links
* `<details>` and `<summary>`

JavaScript may be used only for progressive enhancement.

If JavaScript fails, the manual content must still be readable and navigable.

Do not use JavaScript for basic content access.

Do not use JavaScript-heavy accordions for required manual content unless the user explicitly approves.

---

# Manual content rule

Do not rewrite manual text during WordPress import.

Do not paraphrase.

Do not summarize.

Do not modernize.

Do not simplify.

Do not remove text.

Do not change terminology.

Only fix formatting, structure, markup, and accessibility implementation unless the user explicitly asks for a content edit.

---

# Heading workflow

After pasting into WordPress:

1. Open List View.
2. Confirm there is only one H1 for the page.
3. Confirm major sections are H2.
4. Confirm subsections are H3.
5. Confirm deeper subsections use H4-H6 only when needed.
6. Replace any broken custom heading blocks with stock Heading blocks.
7. Adjust visual size in Styles, not by changing semantic level.

Do not use heading levels for appearance only.

---

# Paragraph workflow

After pasting:

1. Confirm body content became Paragraph blocks.
2. Confirm paragraphs are not inside broken containers.
3. Confirm paragraph text is not full browser width.
4. Confirm spacing is readable.
5. Confirm no paragraph was converted into an image.
6. Confirm manual wording is unchanged.

---

# List workflow

After pasting:

1. Confirm steps became ordered lists where order matters.
2. Confirm grouped items became unordered lists.
3. Confirm nested lists are preserved.
4. Confirm bullets are not typed manually.
5. Confirm list indentation is readable.
6. Confirm list structure is logical in List View.

Do not fake lists with line breaks or symbols.

---

# Callout workflow

Preserve callout labels and text from the manual.

Callout labels include:

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

Preferred HTML structure:

```html
<aside class="wadeps-callout">
  <p class="wadeps-callout__title"><strong>Important</strong></p>
  <p>Preserve the original callout text from the manual.</p>
</aside>
```

Preferred CSS:

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

Use only the dark green left border for emphasis.

Do not add a dark green border around all four sides.

Do not convert callout labels into page headings if that disrupts the heading hierarchy.

---

# Image workflow

After pasting images from Word into WordPress:

1. Confirm each image is present.
2. Confirm alt text carried over.
3. Confirm captions carried over.
4. Confirm images are near the related instructions.
5. Confirm screenshots are responsive.
6. Confirm images are not replacing text that should remain text.
7. Confirm decorative images, if any, have empty alt text.
8. Confirm image dimensions do not create horizontal scrolling.
9. Confirm images are not blurry or cropped incorrectly.

Do not remove captions unless the user explicitly requests it.

---

# Table workflow

After pasting tables:

1. Confirm tables remain actual tables.
2. Confirm headers are correct.
3. Confirm the table reads logically.
4. Confirm the table did not become an image.
5. Confirm the table is usable on mobile.
6. Confirm table styling is restrained and readable.
7. Confirm tables are not used for page layout.

If custom HTML is needed:

```html
<div class="wadeps-table-wrap">
  <table>
    <caption>Table title or purpose</caption>
    <thead>
      <tr>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell content</td>
        <td>Cell content</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

# Navigation workflow

Use vertical navigation when possible.

For manual pages:

* Use breadcrumbs under the page title.
* Use a left-hand navigation structure for main sections where appropriate.
* Use a table of contents for long pages.
* Use anchor links for major sections.
* Use previous/next navigation if the manual is split into chapters.

Do not depend on JavaScript-only navigation.

Do not flatten the manual’s nested structure for navigation convenience.

---

# Content width workflow

Manual content should not span the full site width.

Preferred CSS:

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

If CSS is not ready, use a temporary WordPress single-column block to improve readability.

---

# Mobile and responsive review

Before publishing or sharing:

1. Preview desktop.
2. Preview tablet.
3. Preview mobile.
4. Check 200% browser zoom.
5. Confirm no horizontal scrolling.
6. Confirm screenshots scale.
7. Confirm tables can be read.
8. Confirm callouts stack properly.
9. Confirm navigation is usable.
10. Confirm the back-to-top button, if present, does not cover content.

---

# Keyboard review

Before publishing or sharing:

1. Use Tab to move through the page.
2. Confirm all links receive focus.
3. Confirm all buttons receive focus.
4. Confirm focus order matches reading order.
5. Confirm focus indicators are visible.
6. Confirm there are no keyboard traps.
7. Confirm skip links, breadcrumbs, navigation, and table of contents links work.
8. Confirm content can be accessed without a mouse.

---

# Screen reader structure review

Before publishing or sharing:

1. Confirm the page has one H1.
2. Confirm headings are in order.
3. Confirm images have useful alt text.
4. Confirm decorative images have empty alt text.
5. Confirm tables have headers.
6. Confirm links are descriptive.
7. Confirm callouts have visible labels.
8. Confirm reading order matches the source manual.
9. Confirm no content is only available visually.

---

# Final review checklist

Before considering a WordPress manual page complete, verify:

* Manual wording is unchanged.
* Heading hierarchy is correct.
* Stock heading blocks are used.
* Broken Nexter heading blocks are removed.
* Paragraphs are readable.
* Lists are real lists.
* Tables are real tables.
* Images are present.
* Alt text is present.
* Captions are present.
* Callouts preserve their labels and content.
* Callouts use a dark green left border only.
* Links are descriptive.
* Breadcrumbs appear where needed.
* Left-hand navigation or table of contents works.
* Focus states are visible.
* Page works at 200% zoom.
* Page works on mobile.
* JavaScript is not required to read core content.
* No full HTML document wrapper was pasted into WordPress.
* No source content was rewritten.

---

# Final workflow rule

Use WordPress as the publishing tool, Nexter only where it helps, stock blocks for content, semantic HTML for structure, CSS for presentation, and JavaScript only when absolutely necessary.

<!------------------------------------------------------------------------------------
   Add rules to this file or a short description and have Kiro refine them for you.
   
   Learn about inclusion modes: https://kiro.dev/docs/steering/#inclusion-modes
-------------------------------------------------------------------------------------> 