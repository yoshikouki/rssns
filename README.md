# RSSNS - RSS News Notification Service

## Directory Structure

```
src/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with providers and global components
│   ├── page.tsx           # Root page
│   ├── main-navigation.tsx # App-specific navigation component
│   └── [feature]/         # Feature-specific routes and components
├── components/            # Shared UI components (e.g., Button, Card)
├── features/             # Feature-specific business logic and components
│   └── [feature]/
│       ├── components/   # Feature-specific components
│       ├── lib/         # Feature-specific utilities and business logic
│       └── page.tsx     # Feature page component
└── lib/                 # Shared utilities and configurations
    ├── db/             # Database configuration and schema
    └── utils.ts        # Shared utility functions
```

### Package by Feature

This project follows the "Package by Feature" approach rather than "Package by Layer". This means:

- Code is organized around business features rather than technical layers
- Each feature is self-contained with its own components, logic, and types
- Reduces coupling between features
- Makes the codebase more maintainable and scalable
- Easier to understand the business domain
- Facilitates parallel development

For example, instead of:
```
src/
├── components/    # All components
├── services/     # All services
└── utils/        # All utilities
```

We organize by feature:
```
src/features/
├── auth/         # Authentication feature
├── feeds/        # Feed management feature
└── collections/  # Collection management feature
```

### Directory Structure Conventions

1. **App Router (`src/app/`)**
   - Contains Next.js pages and layouts
   - App-specific components that are tightly coupled with the app structure (e.g., main-navigation.tsx)
   - Each route can have its own components directly in its directory

2. **Shared Components (`src/components/`)**
   - Reusable UI components only
   - Should be feature-agnostic
   - Examples: Button, Card, Input, etc.

3. **Features (`src/features/`)**
   - Organized by feature/domain
   - Contains all feature-specific code (components, logic, types)
   - Each feature is self-contained and can be moved/refactored easily

4. **Shared Libraries (`src/lib/`)**
   - Shared utilities, configurations, and types
   - Database and external service configurations
   - Helper functions used across features

### File Naming Conventions

- React Components: PascalCase (e.g., `LoginButton.tsx`)
- Other files: kebab-case (e.g., `main-navigation.tsx`, `use-auth.ts`)
- Next.js special files: as per Next.js conventions (e.g., `layout.tsx`, `page.tsx`)

### Import Conventions

- Use absolute imports with `@/` prefix for non-relative imports
- Use relative imports for files within the same feature/module
- Keep import paths as short as possible while maintaining clarity

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
