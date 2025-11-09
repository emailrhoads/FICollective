# FI Collective - Community & Co-Working Platform

## Overview

FI Collective is a web application for a Financial Independence (FI) community and co-working space in Longmont, Colorado at 712 Main St. The platform serves as a digital presence for the physical community hub, showcasing membership options, programs, events, and fostering connections among people pursuing financial independence and early retirement.

The application is built as a full-stack TypeScript monorepo with a React frontend and Express backend, featuring a modern, energetic design that reflects the fun and vibrant nature of the FI community.

## Recent Changes (November 2024)

**Design Transformation:** The site underwent a complete redesign from a vintage botanical/gardening theme to a fun, energetic, "kick butt" community vibe based on design committee feedback. All gardening metaphors, Latin text, botanical decorative elements (❦, ✺), and vintage styling have been removed in favor of casual, conversational copy with personality.

**Typography Update (November 9, 2024):**
- Changed entire site to use Poppins font family (replacing Crimson Text/Inter/Space Grotesk)
- Imported Poppins from Google Fonts with weights 300-800
- Updated all CSS font variables and design guidelines to reflect new typography

**Community Photos Integration (November 9, 2024):**
- Optimized 10 community photos for web using Sharp (1200x800 max, 85% quality JPEG)
- Added hiking group photo under hero text "We're a collection of people..." on About page
- Added indoor group photo above "It's a fun, vibrant community" text on About page
- Converted "Community in Action" static gallery to interactive carousel using embla-carousel-react
- Carousel shows 1-3 images depending on screen size (responsive)
- Includes Previous/Next navigation buttons and keyboard support (arrow keys)
- All images use lazy loading for performance, with proper alt text and data-testid attributes for accessibility

**Content Updates:**
- About page now serves as the homepage
- Removed old Home and FAQ pages from routing
- Updated membership tiers with new pricing and conversational copy
- Refreshed Navigation and Footer to match new design tone
- Removed "Most Popular" badge and special styling from co-working membership tier

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing without the overhead of React Router

**Design System:**
- shadcn/ui component library built on Radix UI primitives for accessible, composable components
- Tailwind CSS for utility-first styling with a custom design system
- Custom color scheme using CSS variables (HSL format) for theming flexibility
- Design philosophy emphasizes "fun, vibrant, energetic" aesthetics over muted/botanical themes
- Typography: Poppins font family throughout the site (imported from Google Fonts)

**State Management:**
- TanStack Query (React Query) for server state management and API data fetching
- Local component state with React hooks for UI state
- Custom query client configured with infinite stale time and disabled auto-refetching

**Animation & UX:**
- Framer Motion for page transitions and interactive animations
- Custom "ZoomLink" component that creates zoom-in/zoom-out page transition effects
- Hover and active states using Tailwind utility classes (hover-elevate, active-elevate-2)

**Project Structure:**
- `client/src/pages/` - Route components (About [homepage], Join, NotFound)
- `client/src/components/` - Reusable UI components (Navigation, Hero, Footer, etc.)
- `client/src/components/ui/` - shadcn/ui component library
- `client/src/lib/` - Utility functions and shared logic
- `client/src/hooks/` - Custom React hooks

**Active Routes:**
- `/` - About page (serves as homepage) with community information and event details
- `/join` - Membership page with five tier options and pricing
- 404 - Not Found page for invalid routes

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js with TypeScript
- ESM module system (type: "module" in package.json)
- Custom middleware for request logging with duration tracking and JSON response capture

**Development Setup:**
- Vite middleware mode for SSR-like development experience
- Hot module replacement (HMR) enabled via Vite dev server
- Custom error overlay for runtime errors via Replit plugin

**API Design:**
- RESTful API structure with all routes prefixed with `/api`
- Storage abstraction layer (`IStorage` interface) for database operations
- Currently implements in-memory storage (`MemStorage`) with user CRUD operations
- Designed to be easily swapped for persistent database implementation

**Build & Deployment:**
- Development: `tsx` for running TypeScript directly
- Production: Vite builds client bundle, esbuild bundles server code
- Separate dist directories for public assets and server bundle

### Data Storage Solutions

**Database Preparation:**
- Drizzle ORM configured for PostgreSQL database operations
- Schema defined in `shared/schema.ts` with users table
- Neon Database serverless PostgreSQL as the target database provider
- Migration system via Drizzle Kit (migrations stored in `/migrations`)

**Current Implementation:**
- In-memory storage using Map data structure for development
- User entity with id (UUID), username, and password fields
- Zod schema validation via drizzle-zod for type-safe inserts

**Database Schema:**
```typescript
users: {
  id: varchar (UUID, primary key)
  username: text (unique, not null)
  password: text (not null)
}
```

### Authentication and Authorization

**Current State:**
- Schema prepared for user authentication with username/password fields
- Session management dependencies installed (connect-pg-simple for PostgreSQL sessions)
- No active authentication implementation yet
- API query client supports 401 handling with configurable behavior (returnNull or throw)

**Planned Implementation:**
- Session-based authentication using Express sessions
- PostgreSQL session store for persistence
- Protected routes for authenticated users

### External Dependencies

**UI & Component Libraries:**
- Radix UI - Headless component primitives for accessibility (accordion, dialog, dropdown, etc.)
- Lucide React - Icon library
- cmdk - Command palette component
- Embla Carousel - Carousel/slider functionality
- Recharts - Charting library
- React Day Picker - Date picker component
- Vaul - Drawer component

**Data & State Management:**
- TanStack Query - Server state management
- React Hook Form - Form state and validation
- Zod - Schema validation
- date-fns - Date manipulation utilities

**Database & Backend:**
- Drizzle ORM - Type-safe database toolkit
- Neon Database Serverless - PostgreSQL database provider
- connect-pg-simple - PostgreSQL session store

**Animation & Styling:**
- Framer Motion - Animation library
- Tailwind CSS - Utility-first CSS framework
- class-variance-authority - Type-safe variant API for components
- clsx & tailwind-merge - Utility for merging class names

**Development Tools:**
- Replit-specific plugins for dev banner, error overlay, and cartographer
- TypeScript for type safety across frontend and backend
- ESBuild & Vite for bundling and build optimization

**Third-Party Services:**
- Currently no external API integrations
- Design references CampFI community and mentions virtual meetings capability
- Membership content suggests Stripe or similar payment processor will be needed

## Theme System

The application includes a multi-theme system allowing the design committee to switch between different visual themes from the UI.

### Available Themes
1. **Green & Natural (default)** - Original green/natural color scheme with warm tones
2. **Mountain Vista** - Muted earth tones and sky blues inspired by mountain landscapes
3. **Line Art** - High-contrast black and white theme

### Technical Implementation

**Theme Architecture:**
- Each theme is defined in a separate CSS file in `client/src/themes/`
- Theme CSS files define all color variables using CSS custom properties
- Themes are applied by adding a class to the document root (e.g., `theme-default`, `theme-mountain`, `theme-line-art`)
- The base `index.css` contains only non-color variables (fonts, shadows, etc.)

**Theme Files:**
- `client/src/themes/default.css` - Green & Natural theme
- `client/src/themes/mountain.css` - Mountain Vista theme
- `client/src/themes/line-art.css` - Line Art theme

**ThemeSelector Component:**
- Located at `client/src/components/ThemeSelector.tsx`
- Integrated into the Navigation component
- Saves theme preference to localStorage (key: `fi-collective-theme`)
- Pre-hydration script in `index.html` applies saved theme to prevent flash of unstyled content

**Adding New Themes:**
1. Create a new CSS file in `client/src/themes/` (e.g., `new-theme.css`)
2. Define all color variables under a theme class (e.g., `.theme-new-theme`)
3. Include both light mode (on the theme class) and dark mode (on `.theme-new-theme.dark`)
4. Import the CSS file at the top of `client/src/index.css`
5. Add the theme to the `themes` array in `ThemeSelector.tsx`

**Color Variables to Define:**
Each theme must define: --background, --foreground, --card, --card-foreground, --card-border, --primary, --primary-foreground, --secondary, --secondary-foreground, --muted, --muted-foreground, --accent, --accent-foreground, --destructive, --destructive-foreground, --border, --input, --ring, --sidebar-*, --popover-*, --chart-1 through --chart-5

## Community Information

**Location:** 712 Main St, Longmont, CO 80501  
**Community Size:** 150+ members  
**Key Events:** Tuesday night potlucks (not Thursday), FI classes, music jams, dance parties, cooking competitions, book clubs, volunteering

**Membership Tiers:**
1. Individual Community Membership - $400/year
2. Family Community Membership - $600/year
3. Co-working Membership - $1,000/year ($1,200 semiannually)
4. Remote Membership - $100/year (for members 30+ miles away)
5. July Pass - $50 (for CampFI Rocky Mountain attendees)

**Philosophy:**
- Strong preference for flat-fee financial advisors over percentage-based advisors
- Index fund investing recommended
- Community-focused approach to financial independence
- Connection to CampFI community (founded by Stephen Baughier)