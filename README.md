# nextjs-app

A localized Next.js application using `next-intl`, Tailwind CSS, and theme support.

## Overview

- Next.js 16 application
- Internationalization using `next-intl`
- Locale-aware routing via middleware
- Theme switching with `next-themes` and persisted local storage
- Custom fonts for English and Arabic

## Key Features

- Dynamic locale detection and translation rendering
- Arabic RTL support via `locale-direction-provider`
- Theme persistence using `zustand` + `localStorage`
- Route-based locale middleware that rewrites language prefixes and sets `NEXT_LOCALE`

## Important Files

- `package.json` — project dependencies and scripts
- `next.config.ts` — Next.js configuration with `next-intl` plugin
- `next-intl.config.ts` — locale config for `next-intl`
- `middleware.ts` — locale prefix detection and cookie setup
- `tsconfig.json` — TypeScript configuration
- `tailwind.config.ts` — Tailwind CSS configuration
- `src/app/layout.tsx` — root application layout
- `src/app/(locale)/layout.tsx` — locale-aware layout and provider setup
- `src/app/(locale)/page.tsx` — default localized home page

## Folder Structure

- `src/app/` — Next.js App Router pages and layouts
  - `(locale)/` — locale-aware route group
  - `layout.tsx` — global root layout
- `src/assets/` — fonts and static images used by the app
- `src/constants/` — app constants for colors, locales, routes, and storage
- `src/hooks/` — reusable hooks (`useTheme`, `useTranslation`)
- `src/lib/` — utility helpers and font loading
- `src/locales/` — translation files for supported locales
- `src/providers/` — React context providers for theme, locale, and app state
- `src/services/` — app storage service using Zustand
- `src/features/` — feature-specific modules (`auth`, `home`)
- `src/types/` — application type definitions

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Supported Locales

- `en` — English
- `ar` — Arabic
- `fr` — French

## Notes

- Locale selection is persisted via the `NEXT_LOCALE` cookie.
- `src/app/(locale)/layout.tsx` loads locale-specific messages and font classes.
- `src/hooks/useTranslation.ts` uses `next-intl` and keeps document language updated.
