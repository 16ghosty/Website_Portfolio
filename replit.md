# Gautam Marathe Portfolio Website

## Overview

This is a professional portfolio website for Gautam Marathe, a Data Scientist and Analytics Expert. The application showcases his experience, skills, projects, and contact information through a modern, responsive web interface. Built as a full-stack application with a React frontend and Express backend, it features a clean, accessible design with dark/light theme support and smooth scrolling navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system and shadcn/ui component library
- **UI Components**: Radix UI primitives for accessibility-compliant, headless components
- **State Management**: TanStack Query for server state management and React Context for theme management
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables

### Backend Architecture
- **Framework**: Express.js server with TypeScript
- **Development Setup**: Hot module replacement and error overlay for development
- **Data Layer**: In-memory storage with interface-based design for easy database migration
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Middleware**: Comprehensive logging, JSON parsing, and error handling

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **User Model**: Basic user entity with id, username, and password fields
- **Migration System**: Drizzle-kit for schema migrations and database management

### Development & Build System
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Monorepo Structure**: Shared types and schemas between frontend and backend
- **Development Server**: Integrated Vite dev server with Express for full-stack development
- **Production Build**: Optimized builds with esbuild for server and Vite for client
- **Asset Management**: Static file serving with proper routing and caching

### Design System
- **Component Library**: shadcn/ui with consistent styling and accessibility features
- **Color System**: CSS custom properties for theming with primary, secondary, and accent colors
- **Typography**: Inter font family with responsive sizing and proper contrast ratios
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: WCAG 2.2 AA compliance focus throughout the application

## External Dependencies

### Database & Storage
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for Neon
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **drizzle-kit**: Database migration and schema management tool

### UI & Styling
- **@radix-ui/**: Complete set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for conditionally constructing className strings

### State Management & Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **@hookform/resolvers**: Form validation resolvers for react-hook-form integration

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **tsx**: TypeScript execution engine for development server
- **esbuild**: Fast JavaScript bundler for server-side builds

### Utilities & Helpers
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe, unique string ID generator
- **zod**: TypeScript-first schema validation library
- **embla-carousel-react**: Lightweight carousel library for React