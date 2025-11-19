# FI Collective

A web application for the Financial Independence (FI) community and co-working space in Longmont, Colorado. The platform serves as a digital presence for the physical community hub at 712 Main St, showcasing membership options, programs, events, and fostering connections among people pursuing financial independence and early retirement.

## 🚀 Features

- **Community Showcase**: Learn about FI Collective's vibrant community, events, and programs
- **Membership Options**: Browse and join different membership tiers (Individual, Family, Co-working, Remote)
- **Interactive Photo Gallery**: Carousel showcasing community events and activities
- **Multi-Theme Support**: Switch between three visual themes (Green & Natural, Mountain Vista, Line Art)
- **Responsive Design**: Optimized for all devices with modern, energetic aesthetics
- **PayPal Integration**: Secure membership subscription payments via PayPal

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Build tool and dev server
- **Wouter** - Lightweight routing
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Utility-first styling
- **TanStack Query** - Server state management
- **Framer Motion** - Animations and transitions
- **Embla Carousel** - Image carousel functionality

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe development
- **Drizzle ORM** - Database toolkit (PostgreSQL ready)
- **Neon Database** - Serverless PostgreSQL (configured)

### Development Tools
- **TypeScript** - Type safety
- **ESBuild** - Fast bundling
- **Drizzle Kit** - Database migrations

## 📋 Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn** package manager
- **PostgreSQL** database (optional, for production)

## 🏃 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FICollective
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Start the development server:
```bash
npm run dev
```

For local development on port 3011:
```bash
npm run dev:local
```

The application will be available at `http://localhost:5000` (or `http://localhost:3011` for local).

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Type Checking

Run TypeScript type checking:
```bash
npm run check
```

### Database

Push database schema changes:
```bash
npm run db:push
```

## 📁 Project Structure

```
FICollective/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── pages/           # Route components
│   │   │   ├── About.tsx    # Homepage
│   │   │   ├── Join.tsx     # Membership page
│   │   │   ├── FAQ.tsx      # FAQ page
│   │   │   └── not-found.tsx
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities
│   │   ├── themes/          # Theme CSS files
│   │   └── index.css        # Global styles
│   └── public/              # Static assets
├── server/                  # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Storage abstraction
├── shared/                  # Shared code
│   └── schema.ts           # Database schema
├── attached_assets/        # Image assets
│   ├── optimized/          # Optimized images
│   └── community/          # Community photos
└── dist/                   # Build output
```

## 🎨 Theme System

FI Collective includes a multi-theme system with three available themes:

1. **Green & Natural** (default) - Warm green/natural color scheme
2. **Mountain Vista** - Muted earth tones and sky blues
3. **Line Art** - High-contrast black and white

Users can switch themes via the theme selector in the navigation. Theme preferences are saved to localStorage.

### Adding a New Theme

1. Create a new CSS file in `client/src/themes/` (e.g., `new-theme.css`)
2. Define all color variables under a theme class (e.g., `.theme-new-theme`)
3. Include both light and dark mode variants
4. Import the CSS file in `client/src/index.css`
5. Add the theme to the `themes` array in `ThemeSelector.tsx`

## 🛣️ Routes

- `/` - About page (homepage) with community information
- `/join` - Membership options and PayPal integration
- `/faq` - Frequently asked questions
- `/*` - 404 Not Found page

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run dev:local` | Start development server on port 3011 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## 🎯 Key Features Explained

### Membership Tiers

1. **Individual Community Membership** - $400/year
2. **Family Community Membership** - $600/year
3. **Co-working Membership** - $1,000/year ($1,200 semiannually)
4. **Remote Membership** - $100/year (for members 30+ miles away)

### PayPal Integration

Membership subscriptions are handled through PayPal subscription buttons. Each membership tier has its own PayPal plan ID configured in the `Join.tsx` component.

## 🔧 Development Guidelines

### Code Style

- **TypeScript**: All code is written in TypeScript for type safety
- **Functional Components**: Use functional components and hooks
- **File Organization**: Keep files under 500 lines when possible
- **Component Structure**: Components in `client/src/components/`, pages in `client/src/pages/`
- **Naming**: Use descriptive names with auxiliary verbs (e.g., `isLoading`, `hasError`)

### Component Guidelines

- Use shadcn/ui components from `@/components/ui/`
- Follow the existing component patterns
- Include proper TypeScript types
- Add data-testid attributes for testing
- Use Tailwind CSS for styling

### Asset Management

- Optimized images are stored in `attached_assets/optimized/`
- Community photos are in `attached_assets/community/`
- Images are imported using the `@assets` alias
- All images should be optimized for web (max 1200x800, 85% quality JPEG)

## 🗄️ Database

The project uses Drizzle ORM.
The schema is defined in `shared/schema.ts`. 
Currently, the application uses in-memory storage for development. 
There is no database being used for this

### Schema

```typescript
users: {
  id: varchar (UUID, primary key)
  username: text (unique, not null)
  password: text (not null)
}
```

## 🚢 Deployment

### Build Process

1. Frontend: Vite builds the React app to `dist/public/`
2. Backend: ESBuild bundles the Express server to `dist/index.js`
3. Static assets are served from `dist/public/`

### Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)

---

Built with ❤️ for the FI Collective community

