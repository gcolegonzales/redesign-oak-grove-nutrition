# Drop real photos here

Oak Grove Nutrition's real drink/storefront photos live on Facebook and Instagram,
which are token-blocked and cannot be pulled programmatically. So this build ships
with tasteful CSS/SVG placeholders instead of hotlinked stock photos.

To make the site fully real, drop optimized images into this folder and wire them in:

## What to grab (from the club's own posts, with permission)
- `hero.jpg` — a bright, colorful loaded-tea lineup (used behind/near the hero)
- `storefront.jpg` — the shop exterior or interior (used in the About section)
- `tea-1.jpg` ... `tea-4.jpg` — individual signature drinks for a gallery

## Optimize before committing
- Keep each file **under 400 KB**
- Resize hero to ~1600px wide, gallery to ~800px wide
- Prefer `.jpg` for photos, `.webp` if you can

## Where they plug in (search `IMG-NEEDED` in index.html)
- Hero visual: `.hero-visual` block
- About section: `.photo-placeholder` inside `.about-visual`

## Sources to pull from
- Instagram: https://www.instagram.com/oakgrovenutrition/
- Facebook: https://www.facebook.com/OakGroveNutrition225/
