# FI Collective Design Guidelines

## Design Approach: ASCII Art Brutalism

The user has specified ASCII art as the core design language - this will be our primary design direction, creating a bold, distinctive, and memorable brand identity that stands apart from typical co-working space aesthetics.

## Typography Hierarchy

**Primary Font**: `'Courier New', 'Courier', monospace` (authentic ASCII aesthetic)
**Secondary Font**: `'IBM Plex Mono', monospace` via Google Fonts for improved readability in body text

- Hero Headlines: text-4xl md:text-6xl lg:text-7xl, font-bold, uppercase
- Section Headers: text-2xl md:text-4xl, font-bold, uppercase
- Subheadings: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Captions/Small: text-sm, uppercase, tracking-wide

All type should embrace the monospaced character, with ASCII decorative elements (borders, dividers, icons) integrated directly into text layouts.

## Layout System

**Spacing Units**: Use Tailwind's 4, 8, 12, 16, 24 units consistently (p-4, m-8, gap-12, etc.)

**Container Strategy**:
- Max width: max-w-6xl for content sections
- Full-width: w-full for ASCII art backgrounds and decorative elements
- Padding: px-4 md:px-8 lg:px-12 for consistent gutters

**Grid Patterns**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns where appropriate (md:grid-cols-2)
- Desktop: 3 columns for feature grids (lg:grid-cols-3)

## ASCII Art Integration

**Navigation**: ASCII art logo using text characters (e.g., stylized "FI" in block letters)

**Decorative Elements**:
- Border frames around sections using characters like `─`, `│`, `┌`, `┐`, `└`, `┘`
- Dividers between sections using repeated characters: `═══`, `───`, `···`
- Bullet points as ASCII symbols: `▸`, `►`, `•`, `→`
- Icons represented as ASCII art: dollar signs for pricing, buildings for location, people for community

**Section Backgrounds**: Subtle ASCII patterns (dots, dashes, crosses) as textured backgrounds with reduced opacity

## Component Library

**Hero Section** (Home Page):
- Full viewport height section with large ASCII art "FI COLLECTIVE" text art
- Monospaced tagline explaining financial independence community
- ASCII-bordered CTA button
- Subtle animated ASCII rain/matrix effect background (minimal, not distracting)

**Feature Cards**:
- Bordered boxes using ASCII line characters
- Icon area with ASCII art symbols
- Title in uppercase monospace
- Description in readable mono font
- Hover state: slight border thickness increase

**FAQ Accordion**:
- Collapsible sections with ASCII arrow indicators (`▸` closed, `▾` open)
- Bordered question panels
- Monospaced answers with adequate line height

**Join/Membership Section**:
- Pricing tiers in ASCII-bordered cards
- Dollar signs as decorative elements
- Feature lists with ASCII checkmarks (`✓` or `[✓]`)
- CTA buttons with ASCII brackets: `[ JOIN NOW ]`

**Map Integration**:
- Embedded Google Maps with custom ASCII-styled marker
- Border frame around map using ASCII art
- Location details in monospaced text
- Address formatted with ASCII dividers

**Footer**:
- ASCII art divider line
- Contact info, social links with ASCII icons
- Copyright in small mono font
- Possible ASCII art mountain range or geometric pattern

## Navigation

**Desktop**: Horizontal menu with ASCII dividers between items (`|` or `//`)
**Mobile**: Hamburger menu using ASCII art (`≡` or stacked `─` lines)
**Active State**: ASCII underline or brackets around current page `[ HOME ]`

## Images

This design is primarily ASCII art-based with minimal photographic imagery to maintain the bold, distinctive aesthetic.

**Hero Section**: No large hero image - instead, use large-scale ASCII art text treatment with subtle animated background pattern

**Location Map**: Required - embed Google Maps iframe showing Longmont Main Street location with custom ASCII-styled map marker if possible

**Optional Supporting Images**: 
- Small thumbnail photos of the physical space in bordered frames (ASCII art borders)
- Team photos in ASCII-bordered containers if needed
- All images should have monochrome or duotone treatment to match ASCII aesthetic

## Page-Specific Layouts

**Home Page** (5-6 sections):
1. Hero with ASCII art headline and mission statement
2. What is FI? section with ASCII-bordered explanation
3. Community benefits in 3-column grid with ASCII icons
4. Space features showcase
5. Location with embedded map
6. CTA to join

**FAQ Page**:
- ASCII art page header
- Collapsible accordion sections grouped by category
- ASCII decorative elements between categories
- Footer CTA to join page

**Join Page**:
- Membership tier comparison in bordered cards
- Benefits checklist with ASCII checkmarks
- Application/contact form with ASCII-styled inputs
- Clear pricing display with ASCII dollar art

## Interactions

**Minimal Animation Strategy**:
- Subtle ASCII character rotation on logo
- Smooth accordion expand/collapse
- Gentle hover states on cards (border glow or thickness change)
- NO parallax, NO scroll-triggered animations
- Button hover: slight background change within ASCII borders

## Accessibility

- Maintain AA contrast ratios despite monospace aesthetic
- Ensure ASCII art is decorative only (use aria-hidden)
- Provide semantic HTML structure beneath visual ASCII treatment
- Form inputs with clear labels, not just ASCII placeholders
- Focus states visible with ASCII-bordered highlights

## Brand Personality

Bold, unconventional, transparent, community-focused, tech-savvy, rebellious against corporate co-working aesthetics. The ASCII art approach signals: "We're different, we're honest, we're for people who think differently about money and community."