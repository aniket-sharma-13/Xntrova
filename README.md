# Xntrova homepage (redesign)

React + Vite + Tailwind CSS rebuild of the [Xntrova](https://www.xntrova.com/) homepage. Copy, structure, colour and type follow the live site; layout, motion and UI are tightened for the assignment.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173/).

Production build:

```bash
npm run build
npm run preview
```

## Stack

- React 19
- Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Poppins (same family as the live site)

## Brand tokens (from the live site)

- Primary teal `#0075a2` / `#005a7d`
- Header CTA gold `#faae39`
- Ink `#001720`
- Surface `#f2f7f9`
- Body text `#575757`

## What changed vs the old live homepage

- Clearer sticky header: utility bar, underline hover, Services dropdown, India control, gold Contact Us
- Hero keeps the same headline and audit form, with a stronger overlay and motion
- Service cards, count-up stats, client marquee, testimonial switcher, FAQ accordion
- Same testimonials, stats, address and service list as the public site

Blog, Careers and legal links still go to xntrova.com until those inner pages are built.

## What I would do next

- Inner service / about / careers pages
- Wire forms to the real backend
- Official logo SVG and full-resolution hero if marketing supplies them
