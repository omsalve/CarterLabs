# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 (App Router) marketing website for CarterLabs, a video editing and content creation service. The site is built with React 19, TypeScript, and Tailwind CSS 4, featuring animated landing page sections with client-side interactivity.

## Common Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build production bundle
npm start          # Start production server
npm run lint       # Run ESLint
```

### Package Management
- Uses npm (package-lock.json present)
- Node modules installed in `/node_modules`

## Architecture & Structure

### Next.js App Router Layout
```
app/
├── layout.tsx              # Root layout with font configuration (Geist Sans/Mono)
├── page.tsx                # Home page composing all sections
├── globals.css             # Tailwind config with custom brand colors & grid pattern
├── components/
    ├── layout/
    │   └── Header.tsx      # Fixed header with scroll effects
    └── sections/
        ├── Hero.tsx                # Hero section with floating testimonial cards
        ├── EditorShowcase.tsx      # Video editor showcase with stats marquee
        ├── AboutStats.tsx          # Animated statistics with intersection observer
        ├── HowItWorks.tsx          # 4-step process grid
        ├── ProblemSolution.tsx     # Problem/solution section
        └── PortfolioShowcase.tsx   # Portfolio showcase section
```

### Key Technical Patterns

**Client Components**: All components use `'use client'` directive and manage local state
- Mounted state pattern for animation triggers
- Intersection Observer for scroll-triggered animations (e.g., AboutStats)
- useEffect for scroll listeners and animation timers

**Animation Strategy**:
- CSS transitions with opacity/transform on mount
- Inline `<style jsx>` for custom @keyframes animations
- Staggered delays using `transitionDelay` and conditional classes
- Libraries: Framer Motion and GSAP available but not heavily used in current sections

**Styling Approach**:
- Tailwind CSS 4 with custom theme in globals.css
- Brand colors: `--color-brand-orange` (#FF5500), `--color-brand-black` (#111111), `--color-brand-gray` (#F5F5F7)
- Custom utilities: `.bg-grid-pattern` for grid backgrounds
- Inline gradient text: `bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent`

### Image Assets
```
public/
├── Logos/
│   ├── CarterLabs.png       # Full logo (used in Header)
│   └── CarterLabsShort.png  # Short logo (used in Hero section)
└── Fonts/
    ├── Onyx.otf
    └── SmoochSans.ttf
```

**Important**: Use Next.js `<Image>` component from `next/image` for all images
- Set width/height explicitly
- Use `priority` for above-the-fold images

## TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` maps to project root
- JSX pragma: `react-jsx` (new JSX transform)
- Target: ES2017

## Code Style Guidelines

### ESLint Configuration
- Uses Next.js recommended configs: `core-web-vitals` and `typescript`
- Run `npm run lint` before committing

### Component Structure
When creating new sections:
1. Export as default function component
2. Add `'use client'` if using React hooks or browser APIs
3. Implement mount animation pattern:
   ```typescript
   const [mounted, setMounted] = useState(false);
   useEffect(() => { setMounted(true); }, []);
   ```
4. Use conditional classes for animations: `${mounted ? 'opacity-100' : 'opacity-0'}`
5. Add sections to `app/page.tsx` imports and render in `<main>`

### Naming Conventions
- Components: PascalCase (e.g., `EditorShowcase.tsx`)
- Files: Match component name exactly
- Sections go in `app/components/sections/`
- Layout components go in `app/components/layout/`

## Animation Guidelines

- Use CSS transitions for simple mount/unmount effects
- Add `transition-all duration-700` for smooth animations
- Stagger animations with incremental delays (100-200ms between elements)
- For scroll-triggered effects, use Intersection Observer API
- Custom animations: Define in `<style jsx>` blocks within component

## Development Notes

- **Hot Reload**: Files auto-update on save via Next.js Fast Refresh
- **Brand Identity**: Orange/red gradient (`from-red-500 to-orange-500`) is primary brand accent
- **Responsive Design**: Mobile-first with `md:` and `lg:` breakpoints
- **Icons**: Using `lucide-react` library throughout
- **Smooth Scrolling**: Lenis library available for smooth scroll effects (imported but may not be configured)

## Important Files

- `next.config.ts` - Next.js configuration (currently default)
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - ESLint flat config
- `postcss.config.mjs` - Tailwind PostCSS setup
- `app/globals.css` - Theme and custom CSS utilities
