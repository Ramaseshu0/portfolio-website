
# Portfolio Website for Chinmaya Sri Rama Seshu Pasupuleti

A creative, recruiter-friendly portfolio in the **Modern dark + accent** style, built with TanStack Start (the project's stack). Content is sourced from the uploaded resume.

## Visual Design

- **Theme:** Dark background `oklch(0.16 0.02 265)` with cyan accent `oklch(0.78 0.14 200)` and violet secondary `oklch(0.65 0.20 290)`.
- **Typography:** Inter for body, JetBrains Mono for accents/numbers (data-engineer vibe).
- **Motion:** Subtle fade/slide-in on scroll, animated gradient blobs in hero, hover lifts on project cards.
- **Layout:** Single landing page (`/`) with anchor scroll to sections + separate route for `/blog` placeholder. Sticky top nav with smooth scroll.

## Sections (on `/`)

1. **Hero** — Name, title "Data Engineer & Analyst | MS Data Science @ UB", short pitch, CTAs: View Projects, Download Resume, Contact. Monogram avatar (CP) with glowing ring (placeholder for future photo). Animated gradient background.
2. **About** — Short bio drawn from resume: 4 yrs at Cognizant on AbbVie healthcare data, currently MS Data Science at University at Buffalo. Quick stats: 9M+ records, 25% latency cut, 30% downtime reduction, 81% model accuracy.
3. **Skills** — Grouped chips: Programming, Data Engineering & ETL, Databases & Warehousing, Big Data & ML, Visualization & BI, Tools & DevOps. Each group as a card with icon.
4. **Experience** — Vertical timeline. Cognizant / AbbVie 2021–2025 with the 5 bullet achievements and tech stack chips.
5. **Projects** — 3 project cards (Healthcare Admissions Analytics, Type 2 Diabetes ML, Cardiovascular Disease ML) with description, tech tags, GitHub icon-link (links to https://github.com/Ramaseshu0).
6. **Education** — UB MS (2026–Present, GPA 3.5) and Amrita B.Tech ECE (2017–2021).
7. **Blog** (placeholder) — Section on home teasing "Writing coming soon" linking to `/blog`.
8. **Contact** — Email, phone, GitHub, LinkedIn, location (Buffalo, NY) as large clickable cards. Copy-to-clipboard on email.
9. **Footer** — Minimal: name © 2026, built with TanStack Start.

## Routes

- `src/routes/index.tsx` — full landing page with all sections.
- `src/routes/blog.tsx` — placeholder "Writing coming soon" page with back link, own `head()` metadata.
- Each route gets unique `head()` (title, description, og:title, og:description).

## Files to add/change

- `src/styles.css` — update `:root` to dark-by-default palette, add accent colors, font imports.
- `src/routes/__root.tsx` — keep, update default title/description to Chinmaya's portfolio.
- `src/routes/index.tsx` — replace placeholder with full landing.
- `src/routes/blog.tsx` — new.
- `src/components/portfolio/` — `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Education.tsx`, `BlogTeaser.tsx`, `Contact.tsx`, `Footer.tsx`, `SectionHeading.tsx`.
- `public/resume.pdf` — copy of the uploaded resume so the Download button works.
- Use `lucide-react` (already available via shadcn) for icons.

## Technical notes

- Pure client-side; no backend/Supabase needed.
- Smooth scroll via CSS `scroll-behavior: smooth` and `scroll-margin-top` on sections for sticky nav offset.
- Animations with Tailwind utilities + a small IntersectionObserver hook for reveal-on-scroll.
- Responsive: mobile-first, hamburger menu under `md`.

## About GitHub Pages hosting

I should be transparent: **I can't push to your GitHub repo or deploy to GitHub Pages from here.** This Lovable project lives in its own repo and deploys via Lovable's "Publish" button (gives you a `.lovable.app` URL). Two options to get it on `github.com/Ramaseshu0/portfolio-website` + GitHub Pages:

1. **Recommended — Lovable ↔ GitHub sync:** After I build it, connect this Lovable project to GitHub (Plus menu → GitHub → Connect). Lovable will create/sync a repo. Note Lovable currently creates a new repo rather than importing into your existing one, so you'd either rename it to `portfolio-website` or copy the generated code into your existing repo manually.
2. **Manual copy:** Download the codebase from Lovable and push to your existing `portfolio-website` repo yourself.

For **GitHub Pages** specifically: this app is a TanStack Start SSR app, which doesn't deploy cleanly to GitHub Pages (Pages only serves static files). To host on GitHub Pages you'd need to either (a) publish via Lovable instead, or (b) export a static build and configure a GitHub Actions workflow — I can add a workflow file as part of implementation if you want to try that route, but SSR features (server functions, dynamic routes) won't work on Pages.

**My recommendation:** publish via Lovable (one click, full feature support), and optionally also sync to your GitHub repo for code ownership. Let me know if you'd rather I include the GitHub Actions static-export workflow anyway.
