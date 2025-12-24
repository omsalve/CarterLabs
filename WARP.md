# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tooling & commands

This is a Next.js (App Router) project using TypeScript, Tailwind CSS, and ESLint with the `eslint-config-next` presets. The repo is set up for `npm` (a `package-lock.json` is present).

### Installing dependencies

- Install all dependencies: `npm install`

### Running the app

- Start the development server (http://localhost:3000): `npm run dev`
- The main entry point is `app/page.tsx`; hot reloading is enabled by Next.js.

### Building & running in production

- Create a production build: `npm run build`
- Start the production server (after `npm run build`): `npm start`

### Linting

ESLint is configured via `eslint.config.mjs` and extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

- Lint the entire project: `npm run lint`
- Lint a specific file or directory (arguments are passed through to `eslint`):
  - Example (single file): `npm run lint -- app/components/Hero.tsx`
  - Example (directory): `npm run lint -- app/components`

### Testing

There is currently **no test runner or `test` npm script configured** in `package.json`. If you introduce tests in the future (e.g. Jest, Vitest, Playwright), ensure you:

- Add explicit `test`/`test:watch` scripts to `package.json`.
- Update this section with the commands for running all tests and a single test file.

## High-level architecture

### Framework & routing

- The app uses the **Next.js App Router**:
  - `app/layout.tsx` defines the root HTML shell, metadata, global fonts, and imports `app/globals.css`.
  - `app/page.tsx` is the main landing page and is marked as a **client component** (`'use client';`).
- There is a placeholder route at `app/CTA/page.tsx` which is currently empty; treat it as unused/experimental until it is implemented.

### Root layout

- `app/layout.tsx`:
  - Uses `next/font/google` to load **Geist** and **Geist Mono**, attaching them as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
  - Exposes basic `metadata` for the site (title `"CarterLabs"`, description `"Movement to build Bandra."`).
  - Wraps the React tree in a minimal `<html>/<body>` shell and applies the Geist font variables plus Tailwind utility classes (e.g. `antialiased`).

### Styling system

- **Tailwind CSS** is used as the primary styling system:
  - `app/globals.css` imports Tailwind via `@import "tailwindcss";` and defines theme tokens with an `@theme` block:
    - `--color-background`, `--color-foreground`.
    - `--font-body`, `--font-heading`, `--font-script`.
  - Global base styles set `html, body` background and foreground colors from these tokens; there is intentionally **no global `font-family`** (fonts are applied via Tailwind classes).
- **Custom fonts** are registered in `app/globals.css` via `@font-face`:
  - `Poppins` for body text (multiple weights).
  - `Edwardian` for script/accent text.
  - `Onyx` for headings.
- `tailwind.config.js`:
  - `content` globs include `./app/**/*.{js,ts,jsx,tsx}`, `./components/**/*.{js,ts,jsx,tsx}`, and `./src/**/*.{js,ts,jsx,tsx}`.
  - `theme.extend.fontFamily` maps Tailwind font families:
    - `font-body` → `['Poppins', 'sans-serif']`.
    - `font-heading` → `['Onyx', 'serif']`.
    - `font-script` → `['Edwardian', 'cursive']`.
- **Animations**:
  - `app/globals.css` defines a global `rotateUp` keyframe and a helper class `.animate-rotateUp`.
  - The `misc/WeDontRotate` component also defines a local `<style jsx>` animation with the same name; when adding new rotating text effects, prefer the global `.animate-rotateUp` class to avoid duplication.

### TypeScript & module resolution

- `tsconfig.json` highlights:
  - `strict` mode is enabled; `noEmit: true` (type-check only).
  - `moduleResolution: "bundler"` and `module: "esnext"` (aligned with modern Next.js defaults).
  - Path alias: `"@/*": ["./*"]`, allowing imports like `import X from '@/app/components/X';` from anywhere.

### Linting configuration

- `eslint.config.mjs` uses the new flat config API:
  - Combines `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` via `defineConfig([...])`.
  - Uses `globalIgnores` to ignore build artifacts and framework-generated files: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`.
- When adding new tooling or generated code, prefer updating `globalIgnores` here instead of scattering `.eslintignore` files.

### Page composition & scroll/animation model

The landing page is composed of several **client-side sections** that rely heavily on **Framer Motion** for scroll-based animation and parallax.

#### `app/page.tsx` (CarterLabsWebsite)

- Marked `'use client';` and imports the main sections:
  - `Hero`, `Manifesto`, `CuratedReveal`, `CTA`, `Footer`.
  - `BusinessGrid` and `BandraFocus` are imported but not currently rendered.
- State and observers:
  - `scrollY`: updated via a `window` scroll listener; currently passed only to `Hero` (and could be repurposed for other sections if desired).
  - `isVisible: Record<string, boolean>`: map of visibility flags per section.
  - `observerRefs`: `useRef<(HTMLElement | null)[]>` used to register DOM nodes for intersection observation.
  - An `IntersectionObserver` is created with threshold `0.2` and updates `isVisible[sectionKey]` based on each target element’s `data-section` attribute.
- Current usage:
  - The IntersectionObserver setup is designed to drive reveal animations (e.g. in `BusinessGrid`), but `BusinessGrid` is not currently mounted. If you bring `BusinessGrid` (or similar sections) back into the page, re-use this `isVisible`/`observerRefs` pattern rather than creating redundant observers.

#### Section components

- **`app/components/Hero.tsx`**
  - Client component using `framer-motion`’s `useScroll` and `useTransform` scoped to its own container `ref`.
  - Implements a full-screen hero with parallaxed typography and a scroll indicator.
  - Receives a `scrollY` prop from the page but primarily relies on its internal `scrollYProgress`; when making changes, prefer the local `useScroll` pattern to keep the hero self-contained.

- **`app/components/Manifesto.tsx`**
  - Client component with a two-column layout:
    - Left: sticky text column with headline (`GROWTH PARTNERS.`) and supporting copy.
    - Right: parallax image (`/Manifesto.jpg`) inside a tall container.
  - Uses Framer Motion’s `useScroll` on a section ref plus `useTransform` to drive vertical parallax of the image.
  - Accepts `isVisible` and `refEl` props but currently only uses its internal `containerRef`; if you want Manifesto to participate in the global IntersectionObserver, wire `refEl` to the same DOM node instead of introducing a second ref.

- **`app/components/CuratedReveal.tsx`**
  - Client component that renders a vertical list of manifesto items from a `MANIFEST_ITEMS` array.
  - For each item, `RevealItem` sets up a **per-item** `useScroll` and `scrollYProgress` with offsets tuned for a “reading zone”.
  - Subcomponents:
    - `HeadingReveal`: animates opacity and Y-offset as the item comes into view.
    - `BodyReveal`: reveals copy word-by-word, with staggered transforms derived from the index and `scrollYProgress`.
    - `Word`: uses `useTransform` to derive opacity/translation/blur and applies a red highlight color to certain words based on `highlights` data, using `clsx` for conditional styling.
  - When adding new manifesto items, update `MANIFEST_ITEMS` rather than duplicating layout code.

- **`app/components/CTA.tsx`**
  - Client component with a question-style header (`ARE YOU / Bandra?`) and a single primary call-to-action.
  - Uses `useScroll` for subtle parallax on the text.
  - Contains a nested `MagneticButton` component that:
    - Tracks mouse position relative to its bounding box.
    - Uses `framer-motion` spring animation to gently move toward the cursor.
  - The CTA link is a `mailto:hello@carterlabs.com` anchor wrapped by `MagneticButton` and decorated with a `lucide-react` `ArrowUpRight` icon.

- **`app/components/Footer.tsx`**
  - Client component.
  - Computes and displays **live Bandra time** using `Asia/Kolkata` timezone, refreshing every minute via `setInterval`.
  - Renders:
    - Brand block with Carter Labs SVG from `/logos/CarterLabsWhite.svg`.
    - Short descriptive copy and a status pill showing location/time.
    - A “Sitemap” column and a “Socials” column; most links are placeholders (`"#"`) except email.
  - Subcomponent `FooterLink` wraps links with a shared hover effect and a trailing `ArrowUpRight` icon from `lucide-react`.

- **`app/components/BusinessGrid.tsx`**
  - Not currently mounted in `app/page.tsx`, but designed to work tightly with the page’s IntersectionObserver.
  - Props:
    - `isVisible: Record<string, boolean>` – driven by the observer in `page.tsx`.
    - `observerRefs: React.MutableRefObject<(HTMLElement | null)[]>` – shared from the page so each card can register itself.
  - Renders a grid of sector cards (`Cafés`, `Restaurants`, `Bars & Clubs`, etc.) with gradient backgrounds.
  - Each card:
    - Sets `data-section="card-${i}"` to match keys in `isVisible`.
    - Animates opacity and translateY based on `isVisible["card-${i}"]`.
  - If you re-enable this section, make sure that `observerRefs.current[i + 1]` indices and `data-section` keys remain in sync with the IntersectionObserver in `page.tsx`.

- **`app/components/BandraFocus.tsx`**
  - Standalone horizontal scroll storytelling section, currently not rendered.
  - Uses a `sticky` container with `useScroll` on its own section `ref`, mapping `scrollYProgress` to horizontal translation (`x`) of a flex track.
  - Contains intro text and multiple “cards” plus a CTA card; includes a bottom progress bar driven by `scrollYProgress`.
  - When integrating this back into the page, place it in its own `<section>` so the sticky behavior and scroll range are predictable.

- **`app/components/misc/wedontrotate.tsx` (WeDontRotate)**
  - Client component that cycles through a small set of phrases every 2 seconds using `setInterval` and local state.
  - Implements inline CSS animation via `<style jsx>` and a `rotateUp` keyframe to animate the word transitions.

- **`app/components/ui/GrainOverlay.tsx`**
  - Stateless component that renders a full-screen SVG noise overlay using an `<feTurbulence>` filter.
  - Intended to be mounted once at the app root (e.g. in `layout.tsx` or `page.tsx`) to provide a subtle film grain effect across the site.

### Assets & public folder

- Images and fonts are served from the `public` directory (e.g. `/Manifesto.jpg`, `/fonts/...`, `/logos/CarterLabsWhite.svg`). When adding new assets, keep paths and naming consistent with existing ones to avoid breaking imports.

### Next.js configuration

- `next.config.ts` currently exports a minimal `NextConfig` object with no custom options.
  - Any framework-level features (image domains, redirects, experimental flags) should be added here.

## Guidance for future changes (Warp-specific)

- Prefer **client components** (`'use client';`) for new sections that rely on `window`, `IntersectionObserver`, or `framer-motion` hooks; keep `layout.tsx` as a simple server component shell.
- When implementing new scroll-based animations, first consider whether the effect can be **localized** using `useScroll` on a section `ref` (as in `Hero`, `Manifesto`, `CuratedReveal`, `CTA`, `BandraFocus`) instead of introducing new global scroll state.
- For reveal-on-scroll grids or cards, re-use the existing `IntersectionObserver` pattern from `app/page.tsx` plus the `isVisible` map and `observerRefs` array rather than creating parallel observer logic.
- Use Tailwind utility classes together with the configured `font-body`, `font-heading`, and `font-script` families to stay consistent with the established typography system.
- When adding new lint rules or ignoring additional generated artifacts, update `eslint.config.mjs` (and the `globalIgnores` call) so that `npm run lint` continues to be the single source of truth.
