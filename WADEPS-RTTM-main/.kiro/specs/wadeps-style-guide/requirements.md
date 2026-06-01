# Requirements Document

## Introduction

The WADEPS Style Guide formalizes the inferred design patterns from the WADEPS Reporting Tool Training Manual project into a reusable, accessible reference document. It ensures visual and structural consistency across all WADEPS HTML outputs (WADEP-TM.html, WADEPS-21-MK1-DSBEdit.html, and future variants) while enforcing WCAG 2.1 AA compliance, semantic HTML correctness, consistent naming conventions, and production-ready code quality. The style guide also serves as a code audit reference for flagging accessibility violations, performance issues, security vulnerabilities, and inconsistent patterns across the codebase.

## Glossary

- **Style_Guide**: The formal reference document that defines all visual, structural, and code quality rules for WADEPS HTML outputs
- **Design_Token_System**: The centralized set of CSS custom properties defined in `:root` that serve as the single source of truth for all color, typography, spacing, and effect values
- **Validator**: The automated or manual process that checks HTML, CSS, and JavaScript against style guide rules and reports violations
- **Training_Manual**: The WADEPS Reporting Tool Training Manual HTML document (WADEP-TM.html)
- **Color_Token**: A CSS custom property in `:root` that stores a color value and is referenced via `var()` throughout component styles
- **Typography_System**: The set of font families, sizes, weights, and line heights defined as design tokens and applied to headings and body text
- **Layout_System**: The container, grid, spacing, and responsive breakpoint rules that control page structure
- **Accessibility_Layer**: The collection of CSS rules, HTML patterns, and ARIA attributes that ensure WCAG 2.1 AA compliance
- **Component_Style**: A reusable CSS class pattern (cards, buttons, figures, callouts) that references design tokens
- **Code_Audit_Checklist**: The set of rules for evaluating HTML, CSS, and JavaScript files against accessibility, performance, security, naming, and error-handling standards

## Requirements

### Requirement 1: Design Token System

**User Story:** As a developer, I want all visual values centralized as CSS custom properties in `:root`, so that I can maintain consistency and make global changes from a single location.

#### Acceptance Criteria

1. THE Design_Token_System SHALL define a minimum of 8 brand color values as named CSS custom properties in the `:root` selector, each using the naming prefix `--` followed by a descriptive category and role identifier (e.g., `--wadeps-green`, `--link`, `--focus`)
2. THE Design_Token_System SHALL define typography values as named CSS custom properties in the `:root` selector, including at minimum: 1 font-family token, 1 base font-size token, and 1 base line-height token
3. THE Design_Token_System SHALL define a minimum of 5 spacing values as named CSS custom properties following an 8px-based scale (where each step is a multiple of 8px or its sub-unit 4px), using a sequential naming convention (e.g., `--space-1`, `--space-2`)
4. THE Design_Token_System SHALL define layout values as named CSS custom properties including at minimum: 1 container max-width token, 1 border-radius token, and 1 grid gap token
5. THE Design_Token_System SHALL define effect values as named CSS custom properties including at minimum: 1 box-shadow token and 1 transition or animation-related token
6. WHEN a component style rule (any CSS rule outside the `:root` selector and CSS resets) references a color, typography, spacing, or effect value, THE Design_Token_System SHALL require the use of a `var()` reference to a defined custom property rather than a hard-coded literal value, with the exception of `0`, `none`, `inherit`, `initial`, `unset`, `currentColor`, and unit-less line-height values
7. THE Design_Token_System SHALL ensure that every custom property defined in `:root` uses a descriptive name consisting of lowercase alphanumeric characters and hyphens, with a maximum length of 40 characters

### Requirement 2: Color Palette Specification

**User Story:** As a developer, I want a documented color palette with defined usage contexts, so that I apply the correct colors for each UI element.

#### Acceptance Criteria

1. THE Style_Guide SHALL specify the primary brand color as WADEPS dark green (#1f4f3a) for heading elements (h1–h4), primary button backgrounds, and the site header background gradient
2. THE Style_Guide SHALL specify a secondary brand green (#2f6f4e) for interactive element hover states (back-to-top button, header gradient endpoint) and decorative accents (border-top on figcaptions, learning-box left borders)
3. THE Style_Guide SHALL specify neutral colors for body text (#1f252b), muted/secondary text (#4b5563), component borders (#d9ded8), and page surface backgrounds (#f7f7f4)
4. THE Style_Guide SHALL specify semantic surface colors for informational content blocks (#eef5fb), warning/common-mistakes blocks (#fcf2ec), success/knowledge-check blocks (#eef6ef), and scenario blocks (#fff8e8)
5. THE Style_Guide SHALL specify the link color as #005ea8 for inline hyperlinks and the focus ring color as #ffbf47 rendered as a 3px solid outline with 3px offset on all interactive elements receiving focus
6. THE Style_Guide SHALL specify that WSU crimson (#981e32) is used only for the WSU partner logo and associated partner attribution text in the site footer
7. WHEN any foreground text color is paired with its intended background color, THE Style_Guide SHALL require a minimum contrast ratio of 4.5:1 for normal text (below 18pt regular or below 14pt bold) and 3:1 for large text (at or above 18pt regular or at or above 14pt bold) per WCAG 2.1 AA
8. THE Style_Guide SHALL specify the primary button hover/active state background as dark green (#163b2b) to ensure a visible state change from the default primary button background (#1f4f3a)

### Requirement 3: Typography System

**User Story:** As a developer, I want defined font families, sizes, and hierarchy rules, so that all text renders consistently and maintains readability.

#### Acceptance Criteria

1. THE Typography_System SHALL specify Montserrat (with Helvetica and sans-serif fallbacks) as the heading font family
2. THE Typography_System SHALL specify Open Sans (with Arial and sans-serif fallbacks) as the body font family
3. THE Typography_System SHALL define heading sizes using responsive `clamp()` values: h1 (2rem–2.75rem), h2 (1.5rem–2rem), h3 (1.2rem–1.5rem), h4 (1rem)
4. THE Typography_System SHALL specify a base body font size of 1rem (16px) with a line height of 1.6
5. THE Typography_System SHALL limit paragraph and list item line lengths to a maximum of 72 characters
6. THE Typography_System SHALL specify a heading line height of 1.25 and a font weight of 700 for all heading levels (h1–h4)
7. WHEN a user selects a text size preference, THE Typography_System SHALL scale the base font size to 1rem (default), 1.125rem (large), or 1.25rem (extra-large) with corresponding line heights of 1.6, 1.7, and 1.8 respectively
8. IF the specified heading font (Montserrat) or body font (Open Sans) fails to load, THEN THE Typography_System SHALL render text using the declared fallback fonts in order (Helvetica then sans-serif for headings, Arial then sans-serif for body) without layout shift or loss of readability

### Requirement 4: Heading Hierarchy Rules

**User Story:** As a content author, I want clear heading hierarchy rules, so that the document structure is accessible to screen readers and maintains logical flow.

#### Acceptance Criteria

1. THE Style_Guide SHALL require that heading levels descend sequentially without skipping levels (e.g., h1 followed by h2, h2 followed by h3) and SHALL permit ascending to any higher level (e.g., h3 followed by h2) when closing a subsection
2. THE Style_Guide SHALL require exactly one h1 element per page representing the document title
3. THE Style_Guide SHALL restrict heading depth to a maximum of 4 levels (h1 through h4)
4. THE Style_Guide SHALL require all headings within the main content area to use the `--wadeps-green-dark` color token
5. IF a heading is contained within the `.site-header` element, THEN THE Style_Guide SHALL require that heading to use white (`#ffffff`) color instead of `--wadeps-green-dark`
6. IF a heading level is skipped when descending in the document (e.g., h2 followed by h4 with no intervening h3), THEN THE Validator SHALL report the violation identifying the specific heading element and the skipped level numbers

### Requirement 5: Layout System

**User Story:** As a developer, I want defined layout rules for containers, grids, and responsive breakpoints, so that page structure is consistent across all viewports.

#### Acceptance Criteria

1. THE Layout_System SHALL define a maximum content width of 1140px with automatic horizontal centering and horizontal padding of 24px on each side
2. THE Layout_System SHALL define responsive breakpoints at 480px, 768px, and 900px
3. WHEN the viewport width is 900px or wider, THE Layout_System SHALL display grid layouts in multi-column configurations of 2 or 3 columns with a gap of 24px between grid items
4. WHEN the viewport width is below 768px, THE Layout_System SHALL collapse all multi-column grid layouts to a single-column stack
5. WHEN the viewport width is below 480px, THE Layout_System SHALL reduce container horizontal padding to 8px on each side and reduce internal component padding by at least 25% relative to the default values
6. THE Layout_System SHALL prevent horizontal scrollbars at any viewport width from 320px to 1920px by ensuring no element exceeds the viewport width
7. WHILE the viewport width is between 480px and 899px inclusive, THE Layout_System SHALL maintain single-column grid layouts with default container padding of 24px

### Requirement 6: Button and Link Patterns

**User Story:** As a developer, I want standardized button and link patterns, so that all interactive elements are visually consistent and accessible.

#### Acceptance Criteria

1. THE Style_Guide SHALL specify primary buttons with #1f4f3a background, #ffffff text, 700 font weight, 12px 20px padding, 4px border-radius, and minimum 44x44px touch target
2. THE Style_Guide SHALL specify link styling with #005ea8 color, underline decoration, 0.08em underline thickness, and 0.16em underline offset
3. WHEN a user hovers over a primary button, THE button SHALL display the #2f6f4e background while maintaining #ffffff text color
4. WHEN a user focuses any interactive element, THE element SHALL display a 3px solid #ffbf47 outline with 3px offset
5. THE Style_Guide SHALL require all link text to be descriptive of the destination (prohibiting standalone "click here", "here", "link", or "read more")
6. IF a link has a target="_blank" attribute, THEN THE link SHALL include a visually hidden text announcement (using the sr-only CSS pattern) indicating it opens in a new window and a `rel="noopener"` attribute
7. WHEN a user hovers over a link, THE link SHALL increase underline thickness to 0.12em

### Requirement 7: Accessibility Compliance

**User Story:** As a developer, I want enforceable accessibility rules documented in the style guide, so that all WADEPS HTML outputs meet WCAG 2.1 AA standards.

#### Acceptance Criteria

1. THE Accessibility_Layer SHALL require a skip-to-content link as the first focusable element on every page, targeting the main content landmark
2. THE Accessibility_Layer SHALL require visible focus indicators with a minimum 3px outline and a contrast ratio of at least 3:1 between the focus indicator color and adjacent background colors on all focusable elements
3. THE Accessibility_Layer SHALL require alt text on all meaningful images that identifies the subject and purpose of the image in 150 characters or fewer, and empty alt attributes on decorative images
4. THE Accessibility_Layer SHALL require that all interactive elements have a minimum touch target size of 44x44px
5. THE Accessibility_Layer SHALL require support for `prefers-reduced-motion: reduce` by disabling smooth scrolling and suppressing all CSS transitions and animations
6. THE Accessibility_Layer SHALL require support for `forced-colors: active` (Windows High Contrast) by providing border overrides using system colors
7. THE Accessibility_Layer SHALL require that all form controls have programmatically associated labels via the `for` attribute or by nesting the control within a `label` element
8. WHEN content is added, removed, or updated in the table of contents, knowledge-check feedback areas, or status notifications without a full page reload, THE Accessibility_Layer SHALL require screen-reader announcements via ARIA live regions with `aria-live="polite"` for non-urgent updates and `aria-live="assertive"` for error notifications
9. THE Accessibility_Layer SHALL require a color contrast ratio of at least 4.5:1 for normal text (below 18pt or 14pt bold) and at least 3:1 for large text (18pt and above, or 14pt bold and above) against their background colors
10. THE Accessibility_Layer SHALL require that keyboard focus order follows the visual reading order of the page (top to bottom, left to right) and that all interactive elements are reachable and operable via keyboard alone without a trap

### Requirement 8: Component Style Patterns

**User Story:** As a developer, I want documented component patterns (cards, callouts, figures), so that I build new content sections consistently.

#### Acceptance Criteria

1. THE Style_Guide SHALL document the card component pattern specifying: 1px solid border using `--border` token, border-radius using `--radius` token, box-shadow using `--shadow` token, and a 6px top accent border using `--wadeps-green` token
2. THE Style_Guide SHALL document callout variants with the following left-border color and surface background mappings: informational (left-border: `--wadeps-green`, surface: `--info-surface`), warning (left-border: #b35c1e, surface: `--warning-surface`), success (left-border: `--wadeps-green`, surface: `--success-surface`), and scenario (left-border: #8a6d1d, surface: `--scenario-surface`), each with a 6px left-border width
3. THE Style_Guide SHALL document the figure component pattern specifying: a flex-column layout containing a full-width image, 1px solid border using `--border` token, border-radius using `--radius` token, and a figcaption with a CSS-generated "Figure: " prefix (via `::before` pseudo-element) in bold using `--wadeps-green-dark` color, separated from the image by a 3px top border using `--wadeps-green` token
4. THE Style_Guide SHALL document the table of contents component specifying: a card container with 6px top accent border, chapter rows displayed as flex rows with chapter link and page reference aligned to opposite ends, and nested sublists indented with a 3px left border using `--surface-strong` token
5. THE Style_Guide SHALL document the reading tools component specifying: three text-size toggle buttons (default at 1rem, large at 1.125rem, extra-large at 1.25rem) each using `aria-pressed` state, with a minimum touch target of 44×44 pixels, and the active button visually distinguished using `--wadeps-green-dark` background with white text

### Requirement 9: Code Audit Checklist

**User Story:** As a developer, I want a code audit checklist in the style guide, so that I can systematically review WADEPS HTML files for quality issues.

#### Acceptance Criteria

1. THE Code_Audit_Checklist SHALL define rules for detecting accessibility violations including missing alt text on non-decorative images, skipped heading levels (e.g., h2 followed by h4 with no h3), contrast ratios below 4.5:1 for normal text or below 3:1 for large text (18px bold or 24px regular), missing visible focus states on interactive elements (links, buttons, inputs), and link text that relies solely on generic phrases such as "click here", "read more", or "learn more" without surrounding context identifying the destination
2. THE Code_Audit_Checklist SHALL define rules for detecting performance issues including missing `loading="lazy"` on images that are not within the first visible viewport (i.e., not the site header logo or first content image), missing `decoding="async"` on `<img>` elements, and render-blocking resources defined as stylesheets or scripts in `<head>` that lack `defer`, `async`, or `media` attributes and are not required for above-the-fold content
3. THE Code_Audit_Checklist SHALL define rules for detecting security vulnerabilities including missing `rel="noopener"` on links with `target="_blank"`, and inline event handler attributes (e.g., `onclick`, `onload`, `onerror`) used directly in HTML markup instead of JavaScript event listeners
4. THE Code_Audit_Checklist SHALL define rules for detecting inconsistent naming including raw hex color values (e.g., `#1f4f3a`) used in any CSS rule outside the `:root` declaration block, class names that describe visual presentation rather than purpose (e.g., `.blue-box`, `.left-column` instead of `.info-surface`, `.sidebar`), and class names that mix naming conventions within the same file (e.g., combining BEM syntax `.block__element` with utility syntax `.mt-4` without a documented convention boundary)
5. THE Code_Audit_Checklist SHALL define rules for detecting missing error handling including JavaScript functions that query DOM elements without null-checking the result before use, JavaScript functions that access `localStorage` or `sessionStorage` without try/catch for environments where storage is unavailable, and CSS `@font-face` declarations that omit the `font-display` property (expected value: `swap`)
6. THE Code_Audit_Checklist SHALL present each rule as a discrete checklist item containing a category label, a pass/fail detection condition stated as a single verifiable assertion, and the severity level (critical, major, or minor) so that two independent reviewers produce identical audit results for the same file

### Requirement 10: Content and Tone Guidelines

**User Story:** As a content author, I want documented writing style rules, so that all WADEPS content maintains a consistent public-sector voice.

#### Acceptance Criteria

1. THE Style_Guide SHALL specify that content uses plain language targeting a maximum 8th-grade reading level (Flesch-Kincaid), active voice in at least 80% of sentences, and terminology drawn from applicable Washington State legislation (RCW 10.118) and WADEPS glossary definitions
2. THE Style_Guide SHALL specify that tone remains clear, formal, neutral, factual, trustworthy, and civic-minded, demonstrated by the absence of first-person opinion statements, emotional appeals, and partisan framing
3. THE Style_Guide SHALL prohibit promotional or marketing language, including superlatives (e.g., "best", "leading"), hyperbole (e.g., "revolutionary", "cutting-edge"), and sales-oriented phrasing (e.g., "unlock", "supercharge", "game-changing")
4. THE Style_Guide SHALL require that all acronyms are defined in their fully expanded form on first use within each HTML page, and that a consolidated acronym glossary is provided for documents exceeding 5 pages
5. THE Style_Guide SHALL require that data visualizations include a descriptive title of no more than 100 characters, a plain-language summary of no more than 150 words, a legend identifying all visual encodings, a source attribution with publication date, and alternative text of no more than 250 characters describing the key finding

### Requirement 11: Print and Media Adaptation

**User Story:** As a user, I want the training manual to render correctly when printed or viewed in specialized display modes, so that content remains accessible in all contexts.

#### Acceptance Criteria

1. WHEN the document is printed, THE Style_Guide SHALL require that interactive elements (reading tools, skip link, back-to-top button) are hidden using `display: none !important` so they produce no visible output and occupy no space in the printed layout
2. WHEN the document is printed, THE Style_Guide SHALL require that all text elements — including body text, headings, links, muted text, and chapter labels — render as black (#000000) on a white (#ffffff) background, and that decorative box shadows and background gradients are removed
3. WHEN the document is printed, THE Style_Guide SHALL require that each `.manual-chapter` element starts on a new page using `break-before: page`
4. WHEN the document is printed, THE Style_Guide SHALL require that callout elements (`.chapter-learning-box`, `.training-block`, `.knowledge-check`, `.scenario`, `.common-mistakes`, `.warning`) and `.manual-figure` elements avoid page breaks within them using `break-inside: avoid`
5. WHEN the document is printed, THE Style_Guide SHALL require that hyperlinks display their destination URL after the link text (e.g., via `a[href]::after`) so that printed readers can identify link targets, except for internal anchor links (those beginning with `#`) which SHALL NOT display a URL suffix

### Requirement 12: Responsive Image Handling

**User Story:** As a developer, I want documented image handling rules, so that screenshots display correctly across all viewports without layout shifts.

#### Acceptance Criteria

1. THE Style_Guide SHALL require all images to have explicit `width` and `height` attributes matching the image's intrinsic dimensions to prevent cumulative layout shift, targeting a CLS contribution of 0 from image elements
2. THE Style_Guide SHALL require all images to use `max-width: 100%` and `height: auto` CSS rules so that images scale proportionally and never overflow their containing element at any viewport width
3. THE Style_Guide SHALL require images that are not within the first visible viewport (i.e., images positioned beyond the initial 100vh) to use `loading="lazy"` and `decoding="async"` attributes, while images within the first viewport SHALL omit `loading="lazy"` to avoid delaying initial render
4. THE Style_Guide SHALL require images within figures to use the `.manual-figure` component pattern consisting of a `<figure>` element containing an `<img>` followed by a `<figcaption>`, styled with a 1px solid border, border-radius matching the design system token (`var(--radius)`), and a top-bordered figcaption area
5. THE Style_Guide SHALL require all images to have a descriptive `alt` attribute that conveys the image's informational content in 150 characters or fewer, or an empty `alt=""` attribute if the image is purely decorative

### Requirement 13: Footer and Partner Branding

**User Story:** As a developer, I want documented footer and partner branding rules, so that official logos and attributions are displayed consistently.

#### Acceptance Criteria

1. THE Style_Guide SHALL specify that the footer uses the `--wadeps-green-dark` design token as its background color and `--white` as its text color
2. THE Style_Guide SHALL specify that partner logos (Washington State seal, WSU logo) are displayed preserving their intrinsic aspect ratio, without recoloring or filters applied, and rendered at a maximum height of 60px
3. THE Style_Guide SHALL require the footer to contain a copyright notice including the current year and organization name, and an accessibility statement indicating the document meets WCAG 2.1 AA conformance
4. THE Style_Guide SHALL specify that footer padding uses the `--space-4` design token for vertical padding and that the footer layout uses flexbox alignment with items centered vertically, wrapping to a single-column stack at viewports 768px or narrower
5. IF a partner logo fails to load, THEN THE Style_Guide SHALL specify that the logo element is hidden and a text-only fallback displaying the partner name is shown in its place
