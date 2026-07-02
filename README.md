# Oak Grove Nutrition — website redesign concept

An unsolicited redesign concept for **Oak Grove Nutrition**, a family-owned nutrition club
(loaded teas, mega teas, protein shakes, smoothies & refreshers) in **Prairieville, LA**
serving the Baton Rouge / Livingston / Ascension area.

## Why this exists
Today the business has **no real branded website** — its only web presence is a generic
Herbalife distributor page (`kelseyfstafford.herbalife.com`) plus Facebook/Instagram. This is a
concept for a fast, bright, mobile-first site that actually looks like *their* brand: a real menu,
real hours, click-to-call, and a contact form — with none of the corporate Herbalife-template feel.

## What's real vs. placeholder
- **Confirmed real:** business name, address (17709 Old Jefferson Hwy, Suite D, Prairieville, LA 70769),
  phone `(225) 494-4094`, email `Oakgrovenutritionla@gmail.com`, owner **Kelsey Stafford**,
  ~6:30 AM opening, punch-card rewards, Facebook & Instagram handles, and the drink categories
  (loaded teas, mega teas, shakes, smoothies, refreshers, rotating seasonal menu).
- **Not web-accessible → placeholder:** the exact signature drink names + prices are posted only on
  Facebook/Instagram (token-blocked), so the menu shows real **categories** with prices marked
  `TODO` (search `MENU-INCOMPLETE` / `TODO` in `index.html`). Day-by-day hours beyond the ~6:30 AM–3 PM
  window are marked `TODO`.
- **Photos:** real photos live on token-blocked social pages, so the site uses designed CSS/SVG
  placeholders (no random stock hotlinking). See `assets/photos/DROP-PHOTOS-HERE.md` to add real images.

## Tech
Fully static — `index.html` + `styles.css` + `script.js`. One Google Fonts link, no build step,
no framework. Responsive (360px → widescreen), accessible (semantic landmarks, labels, focus states,
`prefers-reduced-motion`), and animated (sticky header, scroll reveal, playful hero).

## View it
Open `index.html` in any browser. No server needed.

---
*Independent redesign concept — not affiliated with or endorsed by the business. Not the official site.*
