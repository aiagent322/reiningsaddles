# Mobile-First Production Standard — ReiningSaddles.com

This build is reviewed in the order that matters for deployment: phone first, tablet second, desktop third.

## Phone first
- Navigation uses a scrollable mobile menu and 44px+ touch targets.
- Primary CTAs stack full width on phone.
- Inventory cards display as one column.
- Product pages show image gallery first, inquiry/action panel second.
- Tables scroll horizontally where needed instead of breaking the layout.
- A phone-only sticky action bar gives buyers Call David and Email David actions.
- Sponsor bar and footer are compacted for small screens.

## Tablet
- Cards move to two columns at 640px.
- Forms move to two-column where space allows.
- Gallery thumbnails expand.
- CTAs remain large enough for touch.

## Desktop
- Product pages become a two-column gallery/details layout.
- Inventory and saddle grids expand to three columns.
- Endorser grids expand to four columns.
- Product detail panel becomes sticky for easier inquiry while reviewing photos.

## Standard to copy to other saddle sites
Use the final block in `styles.css` labeled `MOBILE-FIRST PRODUCTION LAYOUT LAYER` and the updated `site.js` as the baseline for CuttingSaddles.com, RanchSaddles.com, CowHorseSaddle.com, CertifiedUsedSaddles.com, and WesternSaddles.ai.
