# Raj Sir's Python Education Website

## Overview

A professional, responsive educational platform for "Raj Sir," a Python educator and YouTube content creator. The website serves as a comprehensive portfolio and learning hub, featuring dynamic YouTube integration, course listings, testimonials, and contact functionality. Built with modern web technologies, it emphasizes trust-building, content accessibility, and a clean, approachable design inspired by platforms like Coursera and Khan Academy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- Client code located in `client/src/` directory

**UI Component System:**
- Shadcn UI component library (New York style variant) for consistent, accessible components
- Radix UI primitives as the foundation for interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color system based on HSL values with CSS variables for theming
- Typography: Poppins (headings), Roboto/Inter (body text) via Google Fonts

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod validation for form handling
- Local component state using React hooks

**Design System:**
- Royal Blue primary color (#0052cc) with gradients
- Custom Tailwind configuration with extended theme tokens
- Responsive breakpoints and mobile-first approach
- Accessibility-focused component patterns from Radix UI

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for type-safe API development
- ESM modules throughout the codebase
- RESTful API design pattern

**API Endpoints:**
- `/api/contact` - POST endpoint for contact form submissions
- `/api/youtube/videos` - GET endpoint for fetching latest videos from YouTube Data API v3

**Development Environment:**
- Hot Module Replacement (HMR) via Vite in development mode
- Custom logging middleware for API request tracking
- Request body parsing with raw body preservation for webhooks

**Session & Storage:**
- In-memory storage implementation (`MemStorage`) for contact submissions
- Interface-based storage abstraction (`IStorage`) for future database integration
- UUID-based ID generation for contact records

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using JavaScript Map for contact data persistence during runtime
- Temporary solution suitable for development and low-traffic scenarios

**Prepared for Migration:**
- Drizzle ORM configured with PostgreSQL dialect
- Schema definitions in `shared/schema.ts` using Drizzle's type-safe schema builder
- Neon Database serverless driver configured as the PostgreSQL client
- Database URL provisioning via environment variables
- Migration setup via Drizzle Kit with output to `./migrations` directory

**Schema Design:**
- `contacts` table: id (UUID), name, email, message, createdAt timestamp
- Type-safe schema validation using Drizzle-Zod integration
- Shared types between client and server via `@shared` path alias

### External Dependencies

**YouTube Data API v3:**
- API key stored in environment variable `YOUTUBE_API_KEY`
- Channel ID: `UCDqBwGKpLwKBKCHN0d6bFQ`
- Fetches latest 6 videos using search endpoint with `channelId`, `order=date`, and `type=video` parameters
- Returns structured video data: id, title, description, thumbnailUrl, publishedAt
- Error handling with fallback UI for API failures

**Third-Party Services:**
- Google Fonts CDN for Poppins, Roboto, and Inter font families
- Font Awesome 6.4.0 for social media icons
- YouTube embed iframes for video playback

**Build & Development Tools:**
- Replit-specific plugins: runtime error modal, cartographer, dev banner (development only)
- TypeScript compiler for type checking (no emit mode)
- PostCSS with Tailwind and Autoprefixer for CSS processing
- esbuild for server-side bundling in production

**Database Infrastructure (Configured):**
- Neon Database serverless PostgreSQL
- Connection via `@neondatabase/serverless` driver
- Environment-based configuration (`DATABASE_URL`)

**Form Validation:**
- Zod schema validation library
- Hookform resolvers for React Hook Form integration

**UI Libraries:**
- Complete Radix UI component suite (20+ primitives)
- Embla Carousel for testimonial sliders
- Lucide React for iconography
- Class Variance Authority (CVA) for component variant management
- clsx and tailwind-merge for className composition