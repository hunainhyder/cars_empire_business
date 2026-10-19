# Cars Empire — Website

A **Next.js** (App Router) business website for **Cars Empire**, a prestige & performance
car dealer. Clean, modern **light theme** with a vivid orange accent. Two pages only —
a landing page and a collection listing. No car detail pages, no backend.

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.js` | Landing — hero + search, featured cars, browse by make, collections, how it works, reviews, FAQ, CTAs |
| `/collections` | `app/collections/page.js` | Full stock with filter sidebar, search, sort and pagination |

Supports query params: `/collections?category=japanese` (from the Collections menu)
and `/collections?q=Porsche` (from the hero / make search).

## Key features

- **Collections mega-menu** in the navbar — a grid of category tiles with a "See all" button.
- **Filterable listing** — make, body type, fuel and price filters, search, sort, and pagination (client-side over the static data).
- Fully responsive with a mobile slide-in menu.
- No auctions / buying / selling flow — cars are shown with a clear price and an **Enquire** (mailto) action.

## Project structure

```
cars_empire/
├── app/
│   ├── layout.js            # Inter font + metadata
│   ├── globals.css          # all styles (light theme)
│   ├── page.js              # landing page
│   └── collections/page.js  # collection listing
├── components/
│   ├── Header.js            # navbar + Collections mega-menu + mobile menu (client)
│   ├── Footer.js
│   ├── CarCard.js           # car card with shortlist + enquire (client)
│   ├── CollectionTile.js    # category tile
│   ├── CollectionBrowser.js # filters + search + sort + pagination (client)
│   ├── Faq.js               # accordion (client)
│   ├── ScrollReveal.js      # scroll-in animations (client)
│   └── icons.js             # inline SVG icons
├── lib/
│   └── cars.js              # inventory, collections, makes, reviews, FAQs, contact details
├── public/images/           # hero + car-01…15 + col-*.svg placeholder art
├── next.config.mjs
├── jsconfig.json            # "@/..." path alias
└── package.json
```

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Production: `npm run build && npm start`

## Editing content

- **Cars** — edit the `cars` array in `lib/cars.js` (`price` and `mileageVal` are numbers so
  sorting works). `make`, `body` and `tags` drive the filters and collection categories.
- **Collections / makes / reviews / FAQs / contact details** — all in `lib/cars.js`.
- **Real car photos** — the `public/images/*.svg` files are placeholders. Drop a real photo
  (e.g. `car-01.jpg`, ~800×520px) into `public/images` and update the `image` path in `lib/cars.js`.
- **Accent colour** — change `--accent` in the `:root` block of `app/globals.css`.
