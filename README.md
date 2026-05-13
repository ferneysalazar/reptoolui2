# FIRE Reporting Tool — Vite + React Base

Modern regulatory-reporting admin shell. Use as a starting point for your own SaaS app.

## Quick start

```bash
cd vite-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Vite reloads on save.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |

## Project layout

```
vite-app/
├── index.html              ← Vite entry HTML, loads /src/main.jsx
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            ← React root mount
    ├── App.jsx             ← Top-level state + routing
    ├── styles.css          ← All tokens & component styles (single CSS file)
    ├── icons.jsx           ← Inline-SVG icon set exported as { I, Icon }
    ├── data/
    │   └── nav.js          ← Sidebar nav tree, institution & year demo data
    ├── components/
    │   ├── Topbar.jsx
    │   ├── Sidebar.jsx
    │   ├── CommandPalette.jsx  (⌘K)
    │   ├── Pill.jsx
    │   ├── Sparkline.jsx
    │   └── TLItem.jsx
    └── screens/
        ├── Dashboard.jsx
        ├── InstitutionVerification.jsx
        ├── FilerAdministration.jsx
        ├── JurisdictionAdministration.jsx
        ├── Events.jsx
        ├── OperationNotifications.jsx
        └── Placeholder.jsx  ← fallback for un-built modules
```

## Design tokens

All colors, fonts, radii and shadows live as CSS custom properties at the top of
`src/styles.css`. The palette is intentionally minimal:

* `--bg` / `--panel` / `--panel-2` — white surfaces
* `--ink` / `--ink-2` / `--ink-3` / `--ink-4` — text scale (dark → muted)
* `--accent` — single brand blue. Change this one variable to re-tint the app.
* `--ok` / `--warn` / `--bad` / `--info` — semantic colors used by pills & timeline nodes
* `--font-sans` / `--font-mono` / `--font-serif` — IBM Plex family

Re-skin by editing those variables only; component code reads them everywhere.

## Routing

The shell is intentionally state-driven (no router) so you can drop it onto any
backend. `App.jsx` keeps the active screen id in `useState` and a `switch`
returns the right screen component. To swap in `react-router-dom`:

1. Wrap `<App />` in `<BrowserRouter>` inside `main.jsx`.
2. Replace the `switch` in `App.jsx` with `<Routes>` / `<Route>`.
3. Replace `goTo(id)` with `useNavigate()`.

## Adding a new screen

1. Create `src/screens/MyThing.jsx` exporting a named component.
2. Add an entry to `NAV` in `src/data/nav.js` with a matching `id`.
3. Import it in `App.jsx` and add a case to the `switch` in `currentScreen()`.

## Keyboard

| Key | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Open command palette |
| `Esc` | Close palette / popovers |

## Notes

* Fonts are loaded from Google Fonts CDN in `index.html`. Self-host them for
  production if you need offline / strict CSP.
* No state library is used. State lives in `App.jsx` and flows down via props.
  Lift to context / Zustand / Redux when it grows.
* The hover-to-expand sidebar dwell timer is in `App.jsx` (`onItemEnter`).
