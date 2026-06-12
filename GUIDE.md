# Project Guide

This guide explains how the app is organized and how to update its structure.

## App Architecture

### Locales and routing

- `middleware.ts` inspects the URL path prefix (`/en`, `/ar`, `/fr`).
- If a locale prefix is present, it rewrites the URL and sets the `NEXT_LOCALE` cookie.
- `src/app/(locale)/layout.tsx` loads locale-specific messages and renders `NextIntlClientProvider`.
- Supported locale files are stored in `src/locales/{en,ar,fr}/common.json`.

### Layout and pages

- `src/app/layout.tsx` is the global root layout for the app.
- `src/app/(locale)/layout.tsx` is the locale-aware wrapper for localized pages.
- `src/app/(locale)/page.tsx` is the localized home screen.
- `src/app/(locale)/(app)/dashboard/page.tsx` is an example nested route under the locale route group.

### Theme support

- `src/providers/theme-provider.tsx` provides theme context.
- It reads the theme from `src/services/storage.ts` with Zustand persistence.
- `useTheme()` can be used to read `theme`, `resolvedTheme`, and `setTheme()`.

### Translation hook

- `src/hooks/useTranslation.ts` provides translations via `next-intl`.
- It returns `t`, `locale`, `availableLocales`, and `setLocale()`.
- Locale changes refresh the page and persist the selected locale cookie.

## Source Directory Guide

- `src/assets/` — static assets used by the UI.
  - `fonts/` contains local font files for English and Arabic.
  - `images/` contains project images.
- `src/constants/` — constant values and configuration helpers.
- `src/hooks/` — custom React hooks.
- `src/lib/` — helpers and shared logic.
- `src/providers/` — React provider components.
- `src/services/` — app services such as storage.
- `src/features/` — feature modules, currently `auth` and `home`.
- `src/types/` — shared type definitions.

## How to Add a New Locale

1. Add the locale code to `src/constants/locales.ts` and `next-intl.config.ts`.
2. Create `src/locales/<locale>/common.json`.
3. Update `locales.name` and `locales.langs`.
4. Add any RTL configuration if needed through `locales.isRTL()`.
5. Confirm middleware handles the new locale prefix.

## How to Add a New Page

1. Create a page under `src/app/(locale)/...`.
2. Use `useTranslation()` with the appropriate namespace.
3. Add translation keys to each locale's `common.json`.
4. Ensure locale-aware layout still wraps the page.

## How to Add a New Feature

1. Add a new folder under `src/features/`.
2. Place feature-specific components, hooks, API modules, and schemas there.
3. Expose the feature from `src/features/<feature>/index.ts` if needed.

## Developer Commands

- `npm run dev` — start local development server
- `npm run build` — build production app
- `npm run start` — start the production server
- `npm run lint` — run ESLint checks

## Useful Notes

- The app uses Tailwind CSS v4 and class-based dark mode.
- Local font loading is configured in `src/lib/fonts.ts`.
- `src/providers/locale-direction-provider.tsx` sets `lang` and `dir` on the document element.
- `src/providers/locale-initializer.tsx` persists the server locale into storage for client-side hooks.
