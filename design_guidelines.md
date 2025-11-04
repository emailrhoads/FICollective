# FI Collective Design Guidelines

## Design Approach: Sophisticated Community Hub

**Reference Inspiration**: Linear's precision + Stripe's credibility + Notion's approachability. Create a professional environment that inspires trust while fostering genuine connection.

**Core Principle**: Every element should communicate value and credibility while maintaining human warmth. Use refined typography, strategic white space, and professional imagery to establish authority in financial independence and community building.

## Typography Hierarchy

**Primary Font**: 'Inter' via Google Fonts (professional, highly readable)
**Accent Font**: 'DM Sans' via Google Fonts for headlines (modern, clean, sophisticated)

- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight (DM Sans)
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold, tracking-tight (DM Sans)
- Subheadings: text-xl md:text-2xl, font-semibold (Inter)
- Body Text: text-base md:text-lg, leading-relaxed (Inter)
- Captions: text-sm, font-medium, tracking-wide uppercase for labels

Maintain professionalism through tight tracking on headlines and generous leading on body text for comfortable readability.

## Layout System

**Spacing Units**: Tailwind 6, 8, 12, 16, 24, 32, 48 (e.g., p-8, gap-16, py-32)

**Container Strategy**:
- Content sections: max-w-7xl mx-auto px-6 md:px-12
- Text-focused areas: max-w-3xl mx-auto
- Wide layouts: max-w-[1400px] for photo grids
- Vertical rhythm: py-24 md:py-32 for major sections

**Border Radius**: Professional refinement:
- Cards/Containers: rounded-xl
- Buttons: rounded-lg
- Images: rounded-lg
- Small elements: rounded-md

## Component Library

### Hero Section
- 90vh height with professional high-quality image: members collaborating in modern workspace setting, natural lighting, professional attire
- Subtle dark gradient overlay (opacity-40) for text contrast
- Centered content with max-w-4xl
- Headline emphasizing financial independence + community value
- Descriptive subheading highlighting key differentiators: "Weekly dinners, expert speakers, skill workshops, and community impact"
- Two CTAs: primary "Become a Member" + secondary "Schedule a Tour" with blurred-background treatment (backdrop-blur-sm bg-white/10)
- Small trust indicator below CTAs: "Active community of 150+ professionals"

### Value Proposition Grid
- Four-column layout (lg:grid-cols-4, md:grid-cols-2) with gap-8
- Each card: minimal border, rounded-xl, p-8
- Icon from Heroicons (24x24, outline style)
- Bold title: "Weekly Dinners" | "Speaker Series" | "Skill Workshops" | "Community Activism"
- Concise description emphasizing tangible benefits
- Hover state: subtle shadow elevation

### About/Mission Section
- Two-column layout (lg:grid-cols-2) with gap-16, items-center
- Left: Professional image of community event (speaker presentation or workshop in action), rounded-lg
- Right: Mission statement with clear hierarchy
- Key stats highlighted: "Since 20XX" | "150+ Members" | "50+ Events Annually"
- CTA: "Our Story" link with arrow icon

### Program Showcase
- Three large sections stacked vertically, alternating image/text placement
- Section 1 (Community Events): Image right showing dinner gathering, text left describing weekly dinners + holiday parties
- Section 2 (Learning & Growth): Image left showing speaker at podium, text right about speaker series + workshops (finance, sustainability, passion projects)
- Section 3 (Impact): Image right showing volunteer activity, text left about community activism
- Each section: py-24, max-w-7xl container, lg:grid-cols-2 with gap-16
- Professional typography hierarchy, bullet points with check icons for features

### Space Features Grid
- Three-column layout (lg:grid-cols-3) with gap-12
- High-quality photos of amenities: focus rooms, collaboration spaces, event area, kitchen
- Each card: Image top (aspect-video), content p-6
- Title + description structure
- Professional shadow on hover

### Membership Tiers
- Three cards horizontal (max-w-6xl container, lg:grid-cols-3)
- Each tier: rounded-xl, border, p-8
- Clear tier names: "Core" | "Professional" | "Founder"
- Pricing prominent but refined (text-4xl font-bold)
- Feature list with Heroicons check-circle (20x20)
- Benefits clearly listed: access hours, event inclusion, guest privileges
- CTA per tier: rounded-lg, full-width
- Most popular tier: subtle border accent, badge "Most Popular"

### Testimonials
- Two-column grid (lg:grid-cols-2) with gap-12, max-w-6xl
- Each testimonial: rounded-xl, p-8, border
- Member photo (w-16 h-16 rounded-full) + quote
- Name, professional title/background below
- Focus on professional credibility and community value

### FAQ Section (Separate Page)
- Hero with "Frequently Asked Questions" headline
- Category tabs: Membership | Space | Events | Community
- Accordion items with gap-6, rounded-lg
- Questions in semibold, answers in body text
- Grouped logically with clear visual separation
- Sidebar: Contact info, "Still have questions?" CTA

### Events Calendar Preview
- Horizontal timeline or card grid showing upcoming events
- Event cards: rounded-lg, p-6, border
- Date/time prominent, event type label (Workshop | Dinner | Speaker)
- Brief description + RSVP indicator
- Link to full calendar page

### Location Section
- Split layout: 60% embedded Google Maps (rounded-lg) | 40% details
- Address, hours, parking clearly formatted
- Small gallery: 3-4 photos showing building exterior, neighborhood, nearby amenities
- "Visit Us" CTA encouraging tours

### Footer
- Four-column layout (lg:grid-cols-4): About | Programs | Resources | Connect
- Brief mission statement under About
- Newsletter signup: single-line form with rounded-lg input + button
- Social media icons (Heroicons, 24x24)
- Secondary nav + legal links in smaller text
- Total padding: py-16

## Images

**Hero Image**: Full-width professional photograph of members collaborating in the coworking space. Should show diverse professionals engaged in meaningful work/discussion, natural lighting, modern workspace aesthetic. High resolution, editorial quality.

**Throughout Site**:
- Event photography: speaker presentations, workshop sessions, dinner gatherings (candid but polished)
- Space photography: clean, well-lit shots of different areas - focus rooms, collaboration zones, event space
- Community activism: volunteering activities showing members making impact
- Detail shots: professional equipment, quality furniture, thoughtful design elements
- All images: professional grade, consistent color grading, natural lighting
- Image treatment: rounded-lg corners, subtle shadows for depth
- Diverse representation showing inclusive professional community

## Navigation

**Desktop**: Sticky header (backdrop-blur-md), subtle shadow on scroll
- Logo left (professional wordmark)
- Center menu: About | Programs | Space | Events | FAQ
- Right: "Schedule Tour" link + "Join" CTA button (rounded-lg)
- Clean spacing, professional typography

**Mobile**: Hamburger icon (Heroicons bars-3), full-screen overlay
- Large touchable menu items
- Vertical stack with py-6 spacing per item
- Close button (x-mark icon)

## Interactions

**Professional, Purposeful Animations**:
- Smooth transitions (duration-300)
- Cards subtle shadow on hover
- Buttons scale-105 on hover
- Accordion smooth expand
- Scroll-triggered fade-in for sections (subtle, once)
- No aggressive or distracting animations

## Accessibility

- AA contrast throughout
- Descriptive alt text for all images
- Form labels visible and clear
- Focus states: visible outline (ring-2) matching brand
- Semantic HTML with proper heading hierarchy
- Minimum 44x44px touch targets
- Skip to main content link