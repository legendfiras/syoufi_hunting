# SYOUFI HUNTING

Demonstration website for Syoufi Hunting. Arabic is the default language. English is available from the language switch.

The product list is a sample catalog. Prices are sample figures, and the cart does not take payment or send an order. These products are not confirmed Syoufi Hunting inventory.

Instagram: https://www.instagram.com/syoufi_hunting/

Phone: +961 70 568 469

WhatsApp: https://wa.me/96170568469

TikTok stays hidden until a URL is added in `src/content/business.ts`. No street address, opening hours, or map pin is shown, because none was supplied.

The circular logo and outdoor hero are in `public/images/syoufi/`.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4

## Run locally

```bash
npm install
npm run dev
```

Arabic: [http://localhost:3000/ar](http://localhost:3000/ar). English: [http://localhost:3000/en](http://localhost:3000/en).

```bash
npm run build
npm start
```

The site is marked `noindex` until it is approved for publication.

## Edit content

| What | Where |
| --- | --- |
| Name, Instagram, TikTok, phone, WhatsApp, hours, image paths | `src/content/business.ts` |
| Page copy | `src/content/site.ts` |
| Demonstration catalog | `src/content/products.ts` |

Leave `tiktok.url` empty until a profile is supplied. A product inquiry opens WhatsApp with the product name when `whatsappE164` is set.

Put the cropped logo and hero in `public/images/syoufi/` and point to them from `business.images`.
