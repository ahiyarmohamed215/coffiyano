# COFFIYANO — premium restaurant website

A real Next.js multi-page restaurant website built using the COFFIYANO photographs and two menu boards supplied by the owner. English-language pages are designed for tourists and local customers. Includes a WhatsApp ordering link, free-delivery messaging, halal-information page (WITHOUT a certification claim), Google Maps, an optional live Google Reviews integration, per-page metadata, Restaurant JSON-LD, sitemap and robots.txt.

## Run locally

1. Install Node.js 20.9+ (Node.js 22 recommended).
2. In this folder, run `npm install`, then `npm run dev`.
3. Visit `http://localhost:3000`.
4. Create `.env.local` from `.env.example` to configure domain and Google Places API; restart dev server after editing.
5. Check all page content, menu prices, address and operating hours with the owner before launch.

## Publish to Vercel

1. Push this folder to a private GitHub repository.
2. Import the repository into Vercel and select Next.js; add the required environment variables in Project Settings.
3. Purchase `coffiyano.lk` **only after verifying its availability** through an accredited .lk registrar. Domain availability has not been checked and is not guaranteed.
4. Configure the domain using the DNS records provided by Vercel. Update `NEXT_PUBLIC_SITE_URL=https://coffiyano.lk` before a production build; redeploy.
5. Add the live website URL to the existing Google Business Profile. Create a Search Console Domain property, verify using the DNS TXT record, submit `https://coffiyano.lk/sitemap.xml`, and inspect key URLs for indexing.
6. Connect GA4 if analytics consent/privacy requirements are addressed. The site presently does **not** include GA4 or a cookie-consent manager.

## Enable LIVE Google Reviews

1. In Google Cloud, enable Places API (New), attach billing and create an API key restricted to Places API (New). This key must remain SERVER-SIDE. The API may incur charges.
2. Determine the **exact Place ID** corresponding to COFFIYANO's existing Google Business Profile. Do not use an assumed Place ID.
3. Set `GOOGLE_PLACE_ID` and `GOOGLE_PLACES_API_KEY` in Vercel environment variables and redeploy.
4. `/api/google-reviews` fetches rating, count and up to 5 review results exposed by Google's Places API. It does not fetch every Google review, auto-refresh instantaneously, or guarantee a particular selection. The website links to the original Google Maps listing for all reviews.
5. Check current Google Maps Platform Places policies, attribution requirements and applicable review/author terms before publishing. The initial review component includes Google source links but is not a substitute for validating any additional attribution/logo requirements.
6. With no key/ID or on API errors, the site shows no fabricated rating/reviews; it shows a working link to real Google Maps reviews.

## Operational checks before launch

- **Logo:** No separate original standalone logo file could be identified among the available attachments. The website uses a typography-based COFFIYANO brand header as a temporary placeholder. Replace it with the owner's original vector/transparent logo when provided.
- **Photos:** The ZIPs contained three original dish photos and three Instagram SCREENSHOTS, not full-resolution Instagram post images. The site uses the dish and storefront photos. Get original high-resolution Instagram assets from the owner before upgrading gallery/hero quality.
- **Food categories:** The homepage's third food card reuses a real mixed-food photo; replace with an actual isolated chicken photograph when available.
- **Menu:** Product names/prices are transcribed from supplied photographs; verify prices before production. Coffee and tea were advertised on storefront but not on submitted two-page menu, so no invented prices or products were added.
- **Halal:** Owner says all food/ingredients/preparation comply with their halal requirements and confirms NO formal certification. Site conveys both facts without claiming certification or displaying a fake badge/certificate.
- **Hours:** Monday–Thursday and Saturday–Sunday 10:30 AM until 1 AM the following day; Friday 3 PM until 1 AM Saturday. Verify hours with the restaurant and Google Business Profile before publishing. Schema.org openingHoursSpecification crossing midnight needs validation; consider explicit weekday + next-day split if rich result test indicates an issue.
- **Delivery:** Owner states free delivery throughout Weligama. Confirm coverage, minimum orders or exceptions, if any.
- **Address:** Owner confirmed 100/A, Samaraweera Place, Weligama. Embedded generic search map may not pin the exact restaurant. Update to the precise Google Maps Business Profile embed URL if possible; existing Get Directions button uses their supplied Maps URL.
- **Domain:** Neither domain purchase nor domain availability/ownership is part of this project. Sitemap defaults to proposed coffiyano.lk and must be configured at deploy time.
- **Security/privacy:** Keep API keys private; don't add review self-rating schema; add a privacy/cookie notice if adding visitor analytics, ads or tracking.
