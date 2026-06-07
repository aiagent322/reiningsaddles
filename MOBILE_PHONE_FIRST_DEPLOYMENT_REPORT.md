# Mobile Phone First Deployment Pass

Source ZIP: `reiningsaddles-com-fix-10-11-production.zip`

## Deployment fixes applied

1. Added a final phone-first CSS QA layer.
2. Converted the mobile navigation into a true full-height overlay with scroll containment.
3. Added body scroll lock when the mobile menu is open.
4. Added keyboard focus trapping and Escape-to-close behavior for the phone menu.
5. Changed the sticky phone action bar to three primary actions: Call, WhatsApp, Email.
6. Added safe-area support for modern iPhones.
7. Tightened phone hero spacing and buyer-path spacing.
8. Changed buyer action buttons to a 2x2 phone grid to reduce scroll depth.
9. Improved product-page phone flow: main image, horizontal thumbnail strip, title, price/action panel.
10. Hardened inventory cards for phone scanning and finger-sized tap targets.
11. Added a real mobile-ready contact form on `contact.html` using the existing David Solum mailto JavaScript.
12. Added form-control rules to prevent iPhone input zoom and make forms easier to use.
13. Added footer/network link wrapping rules to prevent small-phone horizontal overflow.
14. Added general media/table/code overflow guards for 320px deployment.

## Remaining live-deployment checks

After upload to Cloudflare Pages, test these live URLs in Chrome DevTools mobile view and on a real phone:

- `/`
- `/used-saddles.html`
- one `/used-saddles/*.html` product page
- `/new-saddles.html`
- `/contact.html`
- `/european-reining-saddle-guide.html`
- `/de/reining-sattel-kaufen.html`
- `/fr/selle-reining-acheter.html`

Confirm David Solum’s WhatsApp number before European promotion.
