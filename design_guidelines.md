# FI Collective Design Guidelines

## Design Approach: Community-First Warmth

**Reference Inspiration**: Airbnb's belonging aesthetic + Notion's approachable professionalism + community-focused platforms. Create an environment that feels like a warm invitation rather than a corporate space.

**Core Principle**: Every element should answer "Does this make someone feel like they belong here?" Use rounded corners, soft shadows, generous spacing, and authentic imagery to create emotional connection.

## Typography Hierarchy

**Primary Font**: 'Inter' via Google Fonts (friendly, modern, highly readable)
**Accent Font**: 'Nunito' via Google Fonts for headlines (soft, rounded, welcoming)

- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold (Nunito)
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold (Nunito)
- Subheadings: text-xl md:text-2xl, font-semibold (Inter)
- Body Text: text-base md:text-lg, leading-relaxed (Inter)
- Captions: text-sm md:text-base, font-medium

All text maintains warmth through generous line-height (leading-relaxed to leading-loose) and comfortable letter-spacing.

## Layout System

**Spacing Units**: Tailwind 4, 8, 12, 16, 24, 32 (e.g., p-8, gap-12, py-24)

**Container Strategy**:
- Content sections: max-w-7xl mx-auto
- Text-focused areas: max-w-4xl mx-auto
- Full-width: w-full for image sections
- Padding: px-6 md:px-12 lg:px-16

**Border Radius**: Embrace curves consistently:
- Cards/Containers: rounded-2xl to rounded-3xl
- Buttons: rounded-full
- Images: rounded-xl to rounded-2xl
- Small elements: rounded-lg

## Component Library

### Hero Section (Home Page)
- Full-width high-fidelity image showing people collaborating warmly in the space
- Image overlay with subtle gradient for text legibility
- Centered headline emphasizing belonging and community
- Descriptive subheading about financial independence community
- Two CTAs: primary "Join Our Community" + secondary "Take a Tour" with blurred background treatment on buttons
- Floating testimonial badge in corner: "Where FI meets community" with soft shadow

### Welcome/About Section
- Two-column layout (lg:grid-cols-2) with generous gap-16
- Left: Warm, candid photo of members chatting over coffee (rounded-2xl)
- Right: Welcoming copy explaining FI Collective's mission
- Pull quote or stat highlighted in larger text with soft background
- Subtle decorative element: small illustrated icons (coffee cups, plants, books)

### Space Features Grid
- Three-column layout (lg:grid-cols-3, md:grid-cols-2)
- Each card: rounded-2xl with soft shadow, hover: shadow-xl transition
- High-quality photos of specific amenities (kitchen, focus rooms, collaboration areas)
- Icon + title + short description structure
- Icons from Heroicons (outline style for friendliness)
- Ample padding within cards (p-8)

### Community Showcase
- Masonry-style photo grid or 4-column gallery
- Authentic images: members working together, community events, casual conversations
- Each image: rounded-xl with subtle hover scale effect
- Optional caption overlay on hover showing context
- Diverse representation showing inclusive, welcoming environment

### Membership Tiers
- Two or three cards in row (max-w-6xl container)
- Each tier: rounded-3xl card with generous padding (p-10)
- Warm illustrative icons for each tier
- Feature lists with checkmark icons (Heroicons check-circle)
- Pricing displayed prominently but not aggressively
- CTA button per tier: rounded-full with appropriate visual weight
- Recommended tier gets subtle highlight treatment

### Location/Visit Section
- Split layout: embedded Google Maps (rounded-2xl) + location details
- Address, hours, parking info in friendly, scannable format
- Small location photos showing neighborhood context (coffee shops nearby, etc.)
- "Come visit us" CTA encouraging drop-ins
- Contact info with icons for phone, email

### Testimonials/Social Proof
- Card-based carousel or 2-3 column grid
- Each testimonial: rounded-2xl card with soft shadow
- Member photo (circular, border-4 with subtle treatment)
- Quote in comfortable reading size
- Name, role/background, membership duration
- Authentic, diverse member representation

### FAQ Section (Separate Page)
- Accordion with generous spacing between items (space-y-6)
- Each item: rounded-xl with soft background on expand
- Icons for categories (Heroicons)
- Questions in semibold, answers in relaxed body text
- Grouped by category with clear visual separation

### Footer
- Generous padding (py-16 to py-24)
- Three-column layout on desktop: About snippet, Quick Links, Connect
- Newsletter signup with friendly microcopy and rounded-full input
- Social media icons (Heroicons or Font Awesome)
- Small community stat badges: "X active members" "Since 20XX"
- Secondary navigation and legal links in smaller text

## Images

**Hero Image**: Essential - full-width, high-quality photo showing members in the space engaging warmly. Should capture energy and belonging.

**Section Images Throughout**:
- Space photography: natural lighting, lived-in feel, authentic (not staged)
- Member interactions: candid moments of collaboration, conversation, learning
- Detail shots: coffee being made, plants, cozy corners, whiteboards in use
- Neighborhood context: nearby cafes, outdoor spaces, Main Street charm
- All images professionally shot, high resolution, consistent warm tone

**Image Treatment**:
- Rounded corners throughout (rounded-xl to rounded-2xl)
- Subtle soft shadows for depth
- Natural, warm lighting in photos
- People should look genuine and engaged, not posed
- Diverse representation across all imagery

## Navigation

**Desktop**: 
- Sticky header with soft shadow on scroll
- Logo left (wordmark or simple graphic)
- Center or right-aligned menu items with comfortable spacing
- "Join" CTA as distinct rounded-full button
- Smooth transitions on interactions

**Mobile**: 
- Hamburger icon (Heroicons) 
- Full-screen overlay menu with large, touchable items
- Rounded-full close button
- Vertical stack with generous spacing

## Page Structure

### Home Page (7-8 sections):
1. Hero with high-impact community image
2. Welcome/What is FI Collective
3. Space Features (3-column grid)
4. Community Showcase (photo gallery)
5. Why Choose FI (benefits/values)
6. Membership Options
7. Location & Visit section
8. Final CTA with testimonial snippet

### FAQ Page:
- Hero section with friendly headline
- Category navigation if extensive FAQs
- Accordion sections with generous spacing
- Related resources or next steps sidebar
- CTA to join or contact

### Join/Membership Page:
- Brief welcoming intro section
- Detailed tier comparison
- Application or contact form with friendly labels
- Process timeline/what to expect
- Additional community benefits highlighted

## Interactions

**Gentle, Welcoming Animations**:
- Smooth transitions on hover (duration-300)
- Cards lift slightly on hover (hover:shadow-xl)
- Buttons have subtle scale on hover (hover:scale-105)
- Accordion smooth expand/collapse
- NO aggressive animations, maintain calm atmosphere

## Accessibility

- AA contrast maintained throughout
- All images have descriptive alt text
- Form labels clearly visible, not placeholder-only
- Focus states: visible outline with rounded corners matching design
- Semantic HTML structure with proper heading hierarchy
- Touch targets minimum 44x44px