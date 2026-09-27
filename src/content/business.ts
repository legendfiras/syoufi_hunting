/**
 * Editable Syoufi Hunting details.
 *
 * Leave a field as an empty string when it is still unknown. The site hides
 * TikTok, the map, the address, and brand photographs until a value is present.
 *
 * Image paths are relative to `public`, for example `/images/syoufi/hero-banner.jpg`.
 */

export type BusinessConfig = {
  brand: { en: string; ar: string };
  legalName: { en: string; ar: string };
  tagline: string;
  instagram: { handle: string; url: string };
  /** Leave the URL empty until a real TikTok profile is supplied. */
  tiktok: { handle: string; url: string };
  /** Street address. Leave empty when none has been supplied. */
  location: { ar: string; en: string };
  /** Readable phone, for example "+961 70 568 469". */
  phoneDisplay: string;
  /** Full tel link, for example "tel:+96170568469". */
  phoneTel: string;
  /**
   * International number, digits only, no plus sign.
   * Example: "96170568469". Leave empty until the number is verified.
   */
  whatsappE164: string;
  /** Readable local format, for example "+961 70 568 469". */
  whatsappDisplay: string;
  /** Do not guess. Leave empty until confirmed. */
  ownerName: string;
  /** Do not guess. Leave empty until confirmed. */
  hours: string;
  email: string;
  /** Leave empty. Do not paste an unverified map pin. */
  mapUrl: string;
  images: {
    logo: string;
    hero: string;
    owner: string;
    categories: {
      clothing: string;
      camping: string;
      lighting: string;
      honey: string;
    };
    products: {
      "camo-jacket": string;
      "camo-set": string;
      "olive-fleece": string;
      "outdoor-vest": string;
      flashlight: string;
      "camping-chair": string;
      honey: string;
    };
  };
};

export const business: BusinessConfig = {
  brand: {
    en: "SYOUFI",
    ar: "سيوفي",
  },
  legalName: {
    en: "Syoufi Hunting",
    ar: "سيوفي هانتينغ",
  },
  tagline: "HUNTING",
  instagram: {
    handle: "@syoufi_hunting",
    url: "https://www.instagram.com/syoufi_hunting/",
  },
  tiktok: {
    handle: "",
    url: "",
  },
  location: {
    ar: "",
    en: "",
  },
  phoneDisplay: "+961 70 568 469",
  phoneTel: "tel:+96170568469",
  whatsappE164: "96170568469",
  whatsappDisplay: "+961 70 568 469",
  ownerName: "",
  hours: "",
  email: "",
  mapUrl: "",
  images: {
    logo: "/images/syoufi/logo.png",
    hero: "/images/syoufi/hero-banner.jpg",
    owner: "",
    categories: {
      clothing: "/images/products/sea-to-summit-ultra-sil-nano-poncho-lime.webp",
      camping: "/images/covers/camping-chair.jpg",
      lighting: "/images/products/biolite-alpenglow-500.png",
      honey: "/images/covers/honey-jar.jpg",
    },
    products: {
      "camo-jacket": "",
      "camo-set": "",
      "olive-fleece": "",
      "outdoor-vest": "",
      flashlight: "",
      "camping-chair": "",
      honey: "",
    },
  },
};

export function optionalImage(src: string) {
  const value = src.trim();
  return value.length > 0 ? value : null;
}

export function whatsappDigits() {
  return business.whatsappE164.replace(/\D/g, "");
}

export function isWhatsAppConfigured() {
  return whatsappDigits().length >= 8;
}

export function isTikTokConfigured() {
  return business.tiktok.url.trim().length > 0;
}

export function isInstagramConfigured() {
  return business.instagram.url.trim().length > 0;
}

export function phoneHref() {
  const value = business.phoneTel.trim();
  return value.startsWith("tel:") ? value : null;
}
