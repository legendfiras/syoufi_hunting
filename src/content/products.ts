import type { Locale } from "@/i18n";
import { business, optionalImage } from "@/content/business";
import { armsCatalog } from "@/content/arms-catalog";
import { sampleCatalog } from "@/content/sample-catalog";

export const categoryIds = ["clothing", "camping", "lighting", "optics", "rifles", "cartridges"] as const;
export type CategoryId = (typeof categoryIds)[number];

export type PlaceholderKind =
  | "jacket"
  | "outfit"
  | "fleece"
  | "vest"
  | "flashlight"
  | "chair"
  | "honey"
  | "optics"
  | "shotgun"
  | "cartridge";

export type ProductSpec = {
  label: Record<Locale, string>;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: Record<Locale, string>;
  category: CategoryId;
  images: string[];
  placeholder: PlaceholderKind;
  description: Record<Locale, string>;
  featured: boolean;
  /** Sample catalog entry for the demonstration site. */
  isDemo: boolean;
  /** Manufacturer or brand, when a page confirms it. */
  brand?: string;
  /** Verified specifications. Empty or blank values are not shown. */
  specs?: ProductSpec[];
  /** Public manufacturer or retailer page used to check the facts. */
  sourceUrl?: string;
  /** Sourced sample. Availability is not a Syoufi Hunting stock claim. */
  sample?: boolean;
};

export const categoryCopy: Record<
  CategoryId,
  {
    name: Record<Locale, string>;
    intro: Record<Locale, string>;
    image: string | null;
    placeholder: PlaceholderKind;
    isDemo: boolean;
  }
> = {
  clothing: {
    name: { en: "Hunting clothing", ar: "ملابس الصيد" },
    intro: {
      en: "Camouflage and outdoor clothing from the demonstration selection.",
      ar: "ملابس تمويه وملابس خارجية من مجموعة العرض.",
    },
    image: optionalImage(business.images.categories.clothing),
    placeholder: "outfit",
    isDemo: true,
  },
  camping: {
    name: { en: "Camping gear", ar: "لوازم التخييم" },
    intro: {
      en: "Camping accessories from the demonstration selection.",
      ar: "لوازم تخييم من مجموعة العرض.",
    },
    image: optionalImage(business.images.categories.camping),
    placeholder: "chair",
    isDemo: true,
  },
  lighting: {
    name: { en: "Lighting and accessories", ar: "إضاءة وإكسسوارات" },
    intro: {
      en: "Lighting and outdoor accessories from the demonstration selection.",
      ar: "إضاءة وإكسسوارات خارجية من مجموعة العرض.",
    },
    image: optionalImage(business.images.categories.lighting),
    placeholder: "flashlight",
    isDemo: true,
  },
  rifles: {
    name: { en: "Hunting shotguns", ar: "بنادق صيد" },
    intro: {
      en: "12-gauge hunting shotguns from the sample catalog. These photographs are the Issawi product images. Availability is not confirmed.",
      ar: "بنادق صيد عيار 12 من كتالوج العيّنات. الصور هي صور منتجات العيسوي. التوفّر غير مؤكّد.",
    },
    image: "/images/categories/radikal-sax-2.jpg",
    placeholder: "shotgun",
    isDemo: true,
  },
  cartridges: {
    name: { en: "Cartridges", ar: "خراطيش" },
    intro: {
      en: "BME and Saga hunting cartridges from the sample catalog, using the Issawi product photographs. Confirm the load before asking.",
      ar: "خراطيش صيد BME وSaga من كتالوج العيّنات، بصور منتجات العيسوي. أكّد الحمل عند الاستفسار.",
    },
    image: "/images/categories/bme-cartridges.jpg",
    placeholder: "cartridge",
    isDemo: true,
  },
  optics: {
    name: { en: "Optics and navigation", ar: "بصريات وملاحة" },
    intro: {
      en: "Binoculars and compasses in the sample catalog. Availability is still to be confirmed.",
      ar: "مناظير وبوصلات ضمن كتالوج العيّنات. التوفّر لم يُؤكَّد بعد.",
    },
    image: "/images/products/vortex-diamondback-hd-10x42.jpg",
    placeholder: "optics",
    isDemo: true,
  },
};

function hasProductImage(product: Product) {
  return product.images.some((src) => src.trim().length > 0);
}

export const products: Product[] = [...sampleCatalog, ...armsCatalog].filter(hasProductImage);

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((item) => item.featured);
}

/** Hunting shotguns first, then cartridges. Featured items lead each group. */
export function getHuntingProducts() {
  return products
    .filter((item) => item.category === "rifles" || item.category === "cartridges")
    .sort((a, b) => {
      if (a.category !== b.category) return a.category === "rifles" ? -1 : 1;
      return Number(b.featured) - Number(a.featured);
    });
}

export function getMoreProducts() {
  return products.filter((item) => item.category !== "rifles" && item.category !== "cartridges");
}

export function getProductsByCategory(category: CategoryId) {
  return products.filter((item) => item.category === category);
}

export function getRelatedProducts(product: Product, limit = 4) {
  const sameCategory = products.filter(
    (item) => item.id !== product.id && item.category === product.category,
  );
  const rest = products.filter(
    (item) => item.id !== product.id && item.category !== product.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export function isCategoryId(value: string): value is CategoryId {
  return categoryIds.includes(value as CategoryId);
}
