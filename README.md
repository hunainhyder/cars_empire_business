# Cars Empire — Website

A static, two-page business website for **Cars Empire**, a prestige & performance car dealer.
Design inspired by the premium dark automotive-dealer aesthetic (à la autoselecta.com).
No backend, no database, no build step — just open the files.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page — hero, featured cars, about, why-us, contact CTA |
| `collections.html` | Full car collection with make filter + live search |

> There are intentionally **no individual car detail pages** — the cards show all the info and an **Enquire** button (opens an email / contact CTA).

## Project structure

```
cars_empire/
├── index.html
├── collections.html
├── css/
│   └── style.css
├── js/
│   └── main.js          # header, mobile menu, scroll reveal, filter/search
└── images/
    ├── hero.svg  banner.svg  cta.svg     # section backgrounds
    └── car-01.svg … car-12.svg           # car placeholder images
```

## How to view

Double-click `index.html` — it runs in any browser, offline. No server needed.
(Optional, for a local server: `npx serve` or `python -m http.server` in this folder.)

## Editing the content

**Contact details** (phone/email/address) appear in the header, footer and CTA bands.
Search & replace these placeholders across `index.html` and `collections.html`:
- `+44 1234 567 890`
- `sales@carsempire.co.uk`
- `Empire House, 1 Showroom Way, Business Park, London, EC1 2AB`

**Cars** live directly in the HTML as `<article class="car-card">` blocks.
To add / edit a car, copy an existing card block and change the title, specs and price.
On `collections.html`, keep the two attributes so filtering/search works:
- `data-make="audi|bmw|mercedes|porsche|landrover|lamborghini|bentley"`
- `data-name="full model name in lowercase"`

**Real car photos** — the `images/car-XX.svg` files are tasteful placeholders.
Replace them with real photos: drop a `car-01.jpg` into `/images`, then change that card's
`<img src="images/car-01.svg">` to `images/car-01.jpg`. Recommended size ≈ 800×525px.

## Colours (in `css/style.css`, top `:root` block)

- Background `#0a0a0a` · Surfaces `#141414` · Gold accent `#c9a24b` · Text `#f4f4f4`

Change `--gold` to re-brand the accent colour everywhere at once.
