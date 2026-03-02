# Muhammad Iqbal Portfolio

Personal portfolio website built with Next.js App Router, TypeScript, and custom component styling.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4 (with custom CSS theme system)
- Bun (package manager and script runner)

## Run Locally

### Prerequisites

- Bun `>= 1.3`

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
bun run dev     # Start development server
bun run lint    # Run ESLint
bun run build   # Create production build
bun run start   # Start production server
```

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    styles/
      globals.css
      themes.css
  _components/
    portfolio-template.tsx
    template/
      hero-section.tsx
      about-section.tsx
      experience-section.tsx
      projects-section.tsx
      contact-section.tsx
      navbar.tsx
      mobile-menu.tsx
      template-footer.tsx
  _hooks/
    use-theme.ts
    use-active-section.ts
    use-navbar-scrolled.ts
    use-body-scroll-lock.ts
    use-reveal-on-scroll.ts
  lib/
    template-data.ts
```

## Customize Content

Most content is centralized in:

- `src/lib/template-data.ts`

Update this file to edit:

- Profile and contact info
- Navigation items and section IDs
- Skill groups
- Experience timeline
- Projects and category filters
- Marquee technologies

## Styling

- Main design tokens and section styling: `src/app/styles/themes.css`
- Base global styles: `src/app/styles/globals.css`

## Metadata and SEO

SEO metadata is defined in:

- `src/app/layout.tsx`

Update title, description, Open Graph, Twitter card, and canonical URL there.

## Notes

- Contact form uses a `mailto:` flow from the client side.
- Theme toggle state is handled on the client via custom hooks.
