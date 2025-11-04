# FI Collective Design Guidelines - Vintage Botanical Edition

## Design Approach: Modern Botanical Archive

**Reference Inspiration**: Artisanal packaging design + Scientific botanical illustration + Editorial magazine layouts + Herbarium specimen cards. Create a sophisticated environment where vintage scientific precision meets contemporary community values.

**Core Principle**: Hand-crafted elegance through botanical line art, strategic illustration placement, and refined typography that honors historical scientific drawings while maintaining modern professionalism.

## Typography Hierarchy

**Primary Font**: 'Crimson Text' via Google Fonts (elegant serif with vintage editorial feel)
**Accent Font**: 'Space Grotesk' via Google Fonts for labels and UI elements (modern sans-serif contrast)

- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight, italic for emphasis (Crimson Text)
- Section Headers: text-4xl md:text-5xl, font-bold (Crimson Text)
- Subheadings: text-xl md:text-2xl, font-medium (Crimson Text)
- Body Text: text-base md:text-lg, leading-loose (Crimson Text)
- Labels/UI: text-sm md:text-base, font-medium, tracking-wide uppercase (Space Grotesk)
- Captions: text-sm, italic (Crimson Text)

## Layout System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24, 32 for consistent botanical rhythm

**Container Strategy**:
- Content sections: max-w-7xl mx-auto px-8 md:px-16
- Text blocks: max-w-4xl mx-auto
- Gallery layouts: max-w-[1600px]
- Vertical rhythm: py-20 md:py-32 lg:py-40 for major sections

**Border Styling**: Botanical specimen card aesthetic
- Cards: rounded-sm with fine border (border-2)
- Buttons: rounded-md
- Images: rounded-none (scientific precision)
- Decorative elements: delicate corner ornaments using botanical line art

## Component Library

### Hero Section
- 85vh height featuring full-width vintage botanical illustration overlay: detailed line drawings of olive branches, fig leaves, and lavender stems creating organic border frame
- Central composition with specimen card aesthetic
- Headline with italic flourish emphasizing "Financial Independence Through Community"
- Descriptive subtitle in refined serif: "A living archive of collaboration—weekly gatherings, expert dialogues, artisanal skill-building, and collective impact"
- Two CTAs with backdrop-blur-lg treatment: "Join Our Collection" + "Schedule Private Viewing"
- Botanical corner ornaments framing content
- Vintage label treatment: "Est. [YEAR] • [CITY] Collection"

### Value Proposition Specimen Cards
- Four-column grid (lg:grid-cols-4, md:grid-cols-2) gap-8
- Each card: specimen card layout with fine border-2, p-8, slight off-white background
- Custom hand-drawn botanical icon (Heroicons as base, styled as ink drawings): olive branch, wheat stem, herb sprig, bloom
- Latin-style label in uppercase (Space Grotesk): "CENA HEBDOMADA" (Weekly Dinners) with English subtitle
- Delicate corner bracket ornaments
- Detailed description in italic serif
- Vintage catalog number: "No. 01" etc.

### Mission Statement Archive Page
- Two-column layout (lg:grid-cols-5) with 3-column text, 2-column ornamental illustration
- Left: Vintage botanical illustration (fig tree or olive grove) with scientific annotation style
- Right: Mission text formatted as archival document
- Hand-drawn divider lines between sections
- Key metrics in vintage label boxes: "Since 20XX" | "150+ Specimens (Members)" | "Annual Gatherings: 50+"
- Decorative initial capital letter for first paragraph

### Program Gallery - Triptych Layout
- Three full-width sections with alternating image placements
- Section headers with botanical illustration headers (vine borders)
- Each section: Professional photography overlaid with delicate botanical line art borders
- Community Events: Dinner photo with hand-drawn ivy border
- Speaker Series: Presentation photo with laurel leaf frame
- Community Impact: Volunteer activity with wheat stem corners
- Text blocks formatted as specimen labels with vintage numbering
- Decorative botanical dividers between sections (horizontal branch illustrations)

### Space Archive - Herbarium Grid
- Masonry grid layout (three-column on desktop: lg:grid-cols-3) with varying heights
- Space photos treated as pressed specimens: fine border-2, subtle shadow
- Each "specimen": Photo + hand-drawn botanical accent (corner branch)
- Latin-style labels: "FOCUS SANCTUARIUM" (Focus Rooms), "COLLABORATIO SPATIUM"
- Vintage catalog descriptions in small italic serif
- Pin/attachment illustration detail in corner

### Membership Collection Tiers
- Three vertical cards (lg:grid-cols-3, gap-12, max-w-6xl)
- Each tier as vintage specimen card with ornate border treatment
- Tier names in decorative capitals: "COLLECTOR" | "CURATOR" | "BOTANIST"
- Pricing in large serif numerals with vintage "per annum" label
- Feature lists with hand-drawn checkbox botanical icons (leaf checkmarks)
- Decorative botanical illustration unique to each tier (simple herb, flowering plant, tree)
- Featured tier: double border treatment with ribbon banner "PRAECIPUA SELECTIO"

### Testimonial Herbarium
- Two-column grid (lg:grid-cols-2, gap-16, max-w-6xl)
- Each testimonial as pressed flower card: border-2, p-10
- Member photo in vintage oval frame treatment (clip-path or border overlay)
- Quote in italic serif with opening/closing botanical quotation marks (custom illustrated)
- Attribution with hand-drawn underline flourish
- Small botanical illustration accent per card (different herb/flower per testimonial)

### Events Timeline Catalog
- Horizontal scrolling timeline with vintage catalog card treatment
- Event cards: specimen label aesthetic, border-2, p-6
- Date in vintage typeset style with decorative botanical date icon
- Event type badges: illustrated labels ("Workshop Specimen" | "Dining Collection")
- Hand-drawn connector lines between events (vine illustration)
- "View Complete Archives" CTA with botanical arrow

### Location Archive Entry
- Split layout: 50% map with vintage overlay frame | 50% details as specimen card
- Address formatted as archival location entry
- Small gallery: Four photos in vintage frame treatments with botanical corner ornaments
- Visiting hours in vintage label format
- Hand-drawn compass rose decoration
- "Schedule Specimen Viewing" CTA

### Navigation
- Desktop: Sticky header with delicate botanical border bottom (hand-drawn vine)
- Logo: vintage specimen label treatment or botanical wordmark
- Menu items in Space Grotesk uppercase with small botanical dividers
- Right-side CTAs: "Private Tour" link + "Join Collection" button (rounded-md)
- Subtle botanical icon accent on hover (small leaf appears)

**Mobile**: Full overlay with botanical border frame
- Large menu items with decorative botanical bullets
- Vintage catalog numbering per item ("01. ABOUT" etc.)

### Footer Archive
- Four-column layout (lg:grid-cols-4) with botanical divider lines
- Column headers in vintage label style (uppercase Space Grotesk)
- Newsletter: vintage subscription card aesthetic, "Join Our Mailing List - Receive Monthly Field Notes"
- Hand-drawn botanical border separating footer sections
- Social icons styled as vintage botanical catalog markers
- Legal text in small italic serif with decorative end flourish

## Images Strategy

**Primary Hero**: Full-width featuring organic botanical illustration overlay—delicate line drawings of olive branches, fig leaves, lavender creating frame. Professional photo of coworking space visible through illustration (members collaborating), creating layered vintage catalog aesthetic.

**Throughout Site**:
- Professional event photography with vintage botanical border overlays (hand-drawn frames)
- Space photography: clean shots with subtle botanical corner ornaments added
- Each major section: unique botanical illustration (herbs, leaves, flowers) as decorative element
- Detail shots: equipment/furniture framed as specimen cards
- Consistent vintage scientific illustration style throughout
- All photos maintain professional quality with botanical art overlay treatment

## Decorative Elements

- Hand-drawn botanical corner brackets for cards
- Delicate vine dividers between sections
- Scientific annotation style labels (Latin names, specimen numbers)
- Vintage rubber stamp effects for CTAs and badges
- Decorative initial capitals for major text blocks
- Small botanical spot illustrations (herbs, leaves) as visual rhythm breaks
- Fine hatching/cross-hatching texture backgrounds for cards

## Interactions

- Smooth transitions (duration-300)
- Cards: subtle shadow lift on hover
- Buttons: gentle scale-[1.02] with botanical icon accent appearance
- Botanical illustrations: subtle parallax scroll (very gentle)
- No aggressive animations—maintain vintage refinement
- Focus states: delicate botanical border outline (ring-2)

## Accessibility

- High contrast text on backgrounds (AA minimum)
- Descriptive alt text emphasizing botanical aesthetic
- Visible form labels in vintage label style
- Semantic HTML with proper hierarchy
- 44x44px minimum touch targets
- Skip navigation link styled as vintage catalog tab