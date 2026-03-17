# HERO.IO — App Discovery Platform

Discover, install, and manage your favourite productivity and lifestyle apps — all in one place.

## Technologies

- **React** — UI library
- **Vite** — Build tool and dev server
- **React Router DOM** — Client-side routing
- **Recharts** — Ratings bar chart on App Details page
- **React Toastify** — Install / Uninstall toast notifications
- **CSS** — Custom styles, fully responsive

## Features

- Browse 20 apps on Home and All Apps pages
- Live search (case-insensitive) and sort by downloads
- App Details with Recharts ratings chart
- Install button saves app to localStorage
- My Installation page — view and uninstall saved apps, sort by size
- Custom 404 error page and App Not Found page
- Loading animation on every page navigation and search
- Fully responsive for mobile, tablet, and desktop

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/apps` | All Apps |
| `/apps/:id` | App Details |
| `/installation` | My Installation |
| `*` | 404 Error |

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```
