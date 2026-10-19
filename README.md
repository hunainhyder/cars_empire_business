# Cars Empire — Website

A **Next.js** (App Router) business website for **Cars Empire**, a prestige & performance
car dealer. Premium dark theme inspired by high-end automotive-dealer sites.
Two pages only — a landing page and a collection listing. No car detail pages, no backend.

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.js` | Landing — hero, stats, featured cars, about, why-us, contact CTA |
| `/collections` | `app/collections/page.js` | Full collection with make filter + live search |

## Project structure

```
cars_empire/
├── app/
│   ├── layout.js            # fonts (next/font), metadata
│   ├── globals.css          # all styles (dark premium theme)
│   ├── page.js              # home page
│   └── collections/page.js  # collection page
├── components/
│   ├── Header.js            # sticky nav + mobile menu (client)
│   ├── Footer.js
│   ├── CarCard.js
│   ├── CtaBand.js
│   ├── CollectionGrid.js    # filter + search (client)
│   ├── ScrollReveal.js      # scroll-in animations (client)
│   └── icons.js             # inline SVG icons
├── lib/
│   └── cars.js              # car inventory + contact details (edit here)
├── public/
│   └── images/              # hero/banner/cta + car-01…car-12 placeholder art
├── next.config.mjs
├── jsconfig.json            # "@/..." path alias
└── package.json
```

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Editing content

- **Cars** — all inventory lives in `lib/cars.js`. Add/edit an object in the `cars`
  array (title, specs, price, `make`, `image`). The home page shows the first 6;
  the collection page shows all of them and filters by `make`.
- **Contact details** (phone, email, address) — change once in the `site` object in
  `lib/cars.js`; applied across the header, footer and CTA bands.
- **Real car photos** — the `public/images/car-XX.svg` files are tasteful placeholders.
  Drop a real photo (e.g. `car-01.jpg`, ~800×525px) into `public/images` and update
  that car's `image` path in `lib/cars.js`.
- **Accent colour** — change `--gold` in the `:root` block of `app/globals.css`.
