# Meal Listing Interface · Recipe discovery grid

A compact **recipes browser**: fetch once, render a responsive **three-column grid** of meal cards, and surface loading and failure paths without cluttering the hero typography.

## What this project signals

- **Hook-first data layer** — `useMeals` centralizes fetch, status codes, and error strings.
- **Card-driven composition** — `MealCard` maps domain fields to a reusable tile—easy to extend with cuisine tags or macros later.
- **Restrained layout system** — Utility-style class names (`grid-3`, `container`) keep CSS approachable for reviewers scanning quickly.

## Stack

- React 19 · Vite 8 · ESLint

## Commands

```bash
npm install
npm run dev
```

Also: `npm run build`, `npm run preview`, `npm run lint`.

## Structure

```
src/
├── components/MealCard.jsx
├── hooks/useMeals.js
├── App.jsx
└── main.jsx
```

## API

Meals are fetched from FreeAPI’s public meals endpoint (`api.freeapi.app`).

## Enhancements on the roadmap

- Search or category filters if exposed by the API
- Detail drawer or route-per-recipe
- Image `loading="lazy"` + aspect-ratio guards for CLS

---

*A straightforward CRUD-adjacent read surface—executed with clean separation between fetch hooks and presentation.*
