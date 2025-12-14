# AxiomHost - Web Hosting Platform

## Overview

AxiomHost is a comprehensive web hosting platform frontend designed to compete with major providers like Hostinger and DigitalOcean. The application is a single-page application (SPA) targeting the Nigerian and global market, offering web hosting, VPS, domain registration, business email, and various other hosting services. The platform emphasizes SEO optimization, international currency support, and a modern, professional UI inspired by Apple's design language.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom CSS variables and shadcn/ui components
- **Animation**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with custom plugins for meta image handling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Hot module replacement via Vite middleware

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via Neon serverless)
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Current Schema**: Basic users table with id, username, password
- **In-Memory Fallback**: MemStorage class for development without database

### Design System
- **Primary Color**: #673DE6 (Deep Purple)
- **Accent Color**: #EC1C65 (Pink/Magenta)
- **Typography**: SF Pro Display (custom fonts) with DM Sans fallback
- **Component Library**: shadcn/ui (New York style) with Radix UI primitives
- **Icons**: Lucide React

### Key Features
1. **Multi-Currency Support**: Automatic currency detection based on user location with real-time conversion (NGN base currency)
2. **International SEO**: Hreflang tags, JSON-LD schemas, canonical URLs for global ranking
3. **Responsive Design**: Mobile-first approach with glassmorphism effects
4. **AI Chatbot**: Integrated customer support chatbot with sound effects
5. **Extensive Page Coverage**: 50+ pages covering all hosting services, tutorials, and guides

### Content & Guide Pages
- **Knowledge Base** (`/knowledge-base`) - 15 categories with 120+ articles
- **Web Hosting Guide** (`/web-hosting-guide`) - Beginner's guide to hosting
- **WordPress Guide** (`/wordpress-guide`) - WordPress hosting guide
- **cPanel Guide** (`/cpanel-guide`) - Control panel tutorial
- **Security Guide** (`/security-guide`) - Website security best practices
- **SEO Guide** (`/seo-guide`) - SEO and performance optimization
- **Backups Guide** (`/backups-guide`) - Backup & recovery procedures
- **DNS Guide** (`/dns-guide`) - DNS management tutorial
- **Domain & Email Guide** (`/domain-email-guide`) - Domain registration and email setup

### Project Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route-based page components
│   │   ├── lib/          # Utilities (currency, pricing, etc.)
│   │   └── hooks/        # Custom React hooks
│   └── public/           # Static assets and help articles
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   └── storage.ts        # Data access layer
├── shared/               # Shared code between client/server
│   └── schema.ts         # Drizzle database schema
└── migrations/           # Database migrations
```

## External Dependencies

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management
- **connect-pg-simple**: PostgreSQL session storage

### UI Components
- **@radix-ui/react-***: Accessible UI primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-built component library
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **cmdk**: Command palette component

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation
- **drizzle-zod**: Drizzle-to-Zod schema generation

### External Services (Configured but may need API keys)
- **Domain**: axiomhost.cloud (main site), my.axiomhost.cloud (account portal)
- **Analytics**: Google Tag Manager integration ready
- **Trustpilot**: Widget integration for reviews

### Development Tools
- **Vite**: Build tool with React plugin
- **tsx**: TypeScript execution for server
- **esbuild**: Production bundling for server code
- **tailwindcss**: CSS framework (v4 via Vite plugin)