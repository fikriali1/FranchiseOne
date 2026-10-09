# Franchise One – static website

## Publish on GitHub Pages
1. Push this folder's contents to a repo (files at the repo root).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Custom domain: add `franchise.one` in Pages settings (it creates a `CNAME` file) and point DNS to GitHub.

## Edit content
- Brands, services, testimonials, media cards: top of `js/main.js`.
- Brand logos: put PNGs in `assets/brands/` named like the brand in lowercase with dashes (e.g. `bebek-terminal.png`). Missing files show the brand name as text.
- Colors, text color, hover distances: variables/rules at the top of `css/style.css`.
- Placeholders to replace: stats (`index.html`), `#` links (Location/Commerce, Read more, Terms, Privacy).

## Qrafter link (one line)
Open `js/main.js`. The first line is `const QRAFTER_URL="#";`. Put the Qrafter website address between the quotes, for example `const QRAFTER_URL="https://qrafter.example.com";`, then save. Every Qrafter button (hero, slider, Qrafter section, path card, System card) uses it and opens in a new tab. While it is `"#"` they do nothing.

## Photos and screenshots (a missing file just shows a dashed placeholder or initials)
- Product screenshots or illustrations: `assets/products/` with these exact names: `qrafter-hero.png`, `expansion-hero.png` (hero slides), `qrafter-orders.png` (wide) and `qrafter-menu.png` (phone, portrait) in the Qrafter section, and `marketplace-hero.png` (third hero slide).
- Leadership: `assets/team/andre.jpg`, `assets/team/paulus.jpg` (square crop works best).
- Our Story slider: put photos in `assets/team/` named `story-1`, `story-2` ... up to `story-6` (png, jpg, jpeg or webp all work). Only the files that exist are used. More photos or captions: edit the `STORY_PHOTOS` list at the top of `js/main.js`. Aim for 16:10 landscape and about 200 KB per photo.
- Keep the file name and extension exactly as written, or change the matching `src` in `index.html`.

## Booking link
In `js/main.js`, the line `const BOOKING_URL="#contact";` controls the "Book a call" and "Schedule a session" buttons. Paste a booking page address there; until then they open the contact form.

### Starter messages
While the booking link is the contact form, each booking button scrolls to the form and fills the message box (it never overwrites text the visitor typed) and tags the email subject, e.g. `[Consultation] Website inquiry from ...`. Edit the texts in the `TOPICS` list at the top of `js/main.js`. Once `BOOKING_URL` is an external page, the buttons go there instead.

## Hero slides
Slides are the three `<article class="slide ...">` blocks in `index.html` (section `#home`). To add one, copy a block and update the "1 of 3" labels.
