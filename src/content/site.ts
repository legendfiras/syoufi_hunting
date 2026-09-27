import type { Locale } from "@/i18n";
import { business } from "@/content/business";
import type { CategoryId } from "@/content/products";

export type NavKey = "home" | "products" | "about" | "contact";

export const siteContent = {
  brand: business.brand,
  legalName: business.legalName,
  tagline: business.tagline,
  storeName: {
    en: business.legalName.en,
    ar: business.legalName.ar,
  },
  location: business.location,
  instagram: {
    handle: business.instagram.handle,
    url: business.instagram.url,
    label: { en: "Instagram", ar: "إنستغرام" },
  },
  tiktok: {
    handle: business.tiktok.handle,
    url: business.tiktok.url,
    label: { en: "TikTok", ar: "تيك توك" },
  },
  meta: {
    en: {
      title: "SYOUFI HUNTING",
      description:
        "Demonstration site for Syoufi Hunting: hunting clothing, camping accessories, shotguns, and cartridges. Sample prices, no payment. The catalog is not confirmed inventory.",
    },
    ar: {
      title: "سيوفي هانتينغ",
      description:
        "نسخة عرض لسيوفي هانتينغ: ملابس صيد، لوازم تخييم، بنادق وخراطيش. أسعار عيّنة، ومن دون دفع. الكتالوج ليس مخزونًا مؤكدًا.",
    },
  },
  skipToContent: {
    en: "Skip to content",
    ar: "الانتقال إلى المحتوى",
  },
  language: {
    en: { switchTo: "العربية", switchToLocale: "ar" as Locale, current: "English" },
    ar: { switchTo: "English", switchToLocale: "en" as Locale, current: "العربية" },
  },
  nav: {
    en: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    ar: {
      home: "الرئيسية",
      products: "المنتجات",
      about: "عن المؤسسة",
      contact: "تواصل",
    },
  },
  header: {
    en: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menu: "Menu",
      contact: "Contact us",
      contactShort: "Contact",
      searchLabel: "Search products",
      searchPlaceholder: "Search clothing, camping, optics",
    },
    ar: {
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      menu: "القائمة",
      contact: "تواصل معنا",
      contactShort: "تواصل",
      searchLabel: "البحث في المنتجات",
      searchPlaceholder: "ابحث في الملابس والتخييم والبصريات",
    },
  },
  banner: {
    heading: {
      en: "Ready for every outing",
      ar: "جاهز لكل طلعة",
    },
    text: {
      en: "Hunting clothing, camping gear, and outdoor equipment — explore the Syoufi Hunting range.",
      ar: "ملابس صيد، لوازم تخييم ومعدات للطلعات — اكتشف مجموعة سيوفي هانتينغ.",
    },
    exploreProducts: {
      en: "Browse products",
      ar: "تصفّح المنتجات",
    },
    contact: {
      en: "Contact us",
      ar: "تواصل معنا",
    },
    imageAlt: {
      en: "Syoufi Hunting outdoor artwork",
      ar: "صورة سيوفي هانتينغ في الهواء الطلق",
    },
  },
  categories: {
    eyebrow: { en: "The range", ar: "المجموعة" },
    heading: { en: "Shop by category", ar: "تسوق حسب القسم" },
    items: [
      { id: "clothing" as CategoryId },
      { id: "camping" as CategoryId },
      { id: "lighting" as CategoryId },
      { id: "optics" as CategoryId },
      { id: "rifles" as CategoryId },
      { id: "cartridges" as CategoryId },
    ],
  },
  featured: {
    eyebrow: { en: "Selection", ar: "مختارات" },
    heading: { en: "Featured products", ar: "منتجات مختارة" },
    intro: {
      en: "Hunting shotguns and cartridges, with sample prices you can add to the cart.",
      ar: "بنادق صيد وخراطيش، بأسعار عيّنة يمكن إضافتها إلى السلة.",
    },
    moreHeading: { en: "More products", ar: "منتجات أخرى" },
    moreIntro: {
      en: "Clothing, camping, lighting, and optics from the sample catalog.",
      ar: "ملابس وتخييم وإضاءة وبصريات من كتالوج العيّنات.",
    },
    ask: { en: "Ask for the price", ar: "استفسر عن السعر" },
  },
  identity: {
    eyebrow: { en: "The business", ar: "المؤسسة" },
    heading: {
      en: "Hunting and the outdoors",
      ar: "الصيد والطلعات",
    },
    paragraphs: {
      en: [
        "This demonstration storefront presents a sample catalog for Syoufi Hunting: hunting shotguns, cartridges, clothing, camping, lighting, and optics.",
        "Prices are sample figures. The cart does not take payment, and these products are not confirmed Syoufi Hunting inventory.",
      ],
      ar: [
        "يعرض هذا الموقع كتالوج عيّنات لسيوفي هانتينغ: بنادق صيد، خراطيش، ملابس، تخييم، إضاءة وبصريات.",
        "الأسعار أرقام عيّنة. السلة لا تستلم دفعًا، وهذه المنتجات ليست مخزونًا مؤكدًا لسيوفي هانتينغ.",
      ],
    },
    ownerAlt: {
      en: "Syoufi Hunting logo",
      ar: "شعار سيوفي هانتينغ",
    },
    ownerPending: {
      en: "Logo artwork has not been added yet.",
      ar: "لم يُضف الشعار بعد.",
    },
  },
  social: {
    eyebrow: { en: "Instagram", ar: "إنستغرام" },
    heading: { en: "From the range", ar: "من المجموعة" },
    intro: {
      en: "A look at the sample range. Each card opens the Syoufi Hunting Instagram page.",
      ar: "لمحة من مجموعة العيّنات. كل بطاقة تفتح صفحة سيوفي هانتينغ على إنستغرام.",
    },
    open: { en: "Open the Instagram page", ar: "افتح الصفحة على إنستغرام" },
    cards: [
      {
        id: "clothing",
        image: "/images/products/sea-to-summit-ultra-sil-nano-poncho-lime.webp",
        title: { en: "Hunting clothing", ar: "ملابس الصيد" },
        text: {
          en: "Outdoor clothing from the sample catalog.",
          ar: "ملابس خارجية من كتالوج العيّنات.",
        },
      },
      {
        id: "camping",
        image: "/images/covers/camping-chair.jpg",
        title: { en: "Camping and light", ar: "التخييم والإضاءة" },
        text: {
          en: "Camping accessories from the sample catalog.",
          ar: "لوازم التخييم من كتالوج العيّنات.",
        },
      },
      {
        id: "optics",
        image: "/images/products/vortex-diamondback-hd-10x42.jpg",
        title: { en: "Optics", ar: "البصريات" },
        text: {
          en: "Binoculars and field optics from the sample catalog.",
          ar: "مناظير وبصريات ميدانية من كتالوج العيّنات.",
        },
      },
    ],
  },
  contact: {
    eyebrow: { en: "Contact", ar: "التواصل" },
    heading: { en: "Contact Syoufi Hunting", ar: "تواصل مع سيوفي هانتينغ" },
    locationLabel: { en: "Location", ar: "الموقع" },
    phoneLabel: { en: "Phone", ar: "الهاتف" },
    reach: {
      en: "Call, message on WhatsApp, or open the Instagram page.",
      ar: "للاتصال، أو عبر واتساب، أو من صفحة إنستغرام.",
    },
    inquiryAbout: { en: "Asking about", ar: "الاستفسار عن" },
    mapLabel: { en: "Open the map", ar: "افتح الخريطة" },
  },
  catalog: {
    allHeading: { en: "Products", ar: "المنتجات" },
    allIntro: {
      en: "Search the demonstration catalog and filter by category. Prices below are sample figures.",
      ar: "ابحث في كتالوج العرض وصفِّ حسب القسم. الأسعار أدناه أرقام عيّنة.",
    },
    priceNote: {
      en: "Sample prices for this demonstration. They are not Syoufi Hunting prices.",
      ar: "أسعار عيّنة لهذا العرض. ليست أسعار سيوفي هانتينغ.",
    },
    filters: { en: "Filter", ar: "تصفية" },
    category: { en: "Category", ar: "القسم" },
    allCategories: { en: "All categories", ar: "كل الأقسام" },
    clear: { en: "Clear all", ar: "مسح الكل" },
    results: {
      en: (count: number) => (count === 1 ? "1 product" : `${count} products`),
      ar: (count: number) => {
        if (count === 0) return "لا توجد منتجات";
        if (count === 1) return "منتج واحد";
        if (count === 2) return "منتجان";
        if (count <= 10) return `${count} منتجات`;
        return `${count} منتجًا`;
      },
    },
    empty: {
      en: "No products match this search. Try another category or a different word.",
      ar: "لا توجد منتجات مطابقة. جرّب قسمًا آخر أو كلمة مختلفة.",
    },
    viewDetails: { en: "View details", ar: "عرض التفاصيل" },
    demo: { en: "Demo", ar: "عيّنة" },
    related: { en: "More from the range", ar: "من المجموعة أيضًا" },
    ask: { en: "Ask for the price", ar: "استفسر عن السعر" },
    sampleNotice: {
      en: "Sample catalog — not confirmed Syoufi Hunting inventory.",
      ar: "كتالوج عيّنات — ليست مخزونًا مؤكدًا لسيوفي هانتينغ.",
    },
    brand: { en: "Brand", ar: "العلامة" },
    specifications: { en: "Specifications", ar: "المواصفات" },
    source: { en: "Manufacturer page", ar: "صفحة الشركة المصنّعة" },
    photoCredit: {
      en: "Product photograph from the manufacturer page. Permission to reuse it has not been verified.",
      ar: "صورة المنتج من صفحة الشركة المصنّعة. لم يُؤكَّد إذن إعادة الاستخدام.",
    },
    openFilters: { en: "Filter and search", ar: "تصفية وبحث" },
    closeFilters: { en: "Close", ar: "إغلاق" },
  },
  product: {
    breadcrumbHome: { en: "Home", ar: "الرئيسية" },
    breadcrumbProducts: { en: "Products", ar: "المنتجات" },
    gallery: { en: "Product image", ar: "صورة المنتج" },
    imageUnavailable: {
      en: "Image unavailable",
      ar: "الصورة غير متوفرة",
    },
  },
  cart: {
    label: { en: "Cart", ar: "السلة" },
    open: { en: "Open cart", ar: "افتح السلة" },
    close: { en: "Close", ar: "إغلاق" },
    add: { en: "Add to cart", ar: "أضف إلى السلة" },
    inCart: { en: "In cart", ar: "في السلة" },
    empty: { en: "Your cart is empty.", ar: "السلة فارغة." },
    continue: { en: "Continue browsing", ar: "متابعة التصفح" },
    remove: { en: "Remove", ar: "إزالة" },
    decrease: { en: "Decrease quantity", ar: "أنقص الكمية" },
    increase: { en: "Increase quantity", ar: "زِد الكمية" },
    subtotal: { en: "Subtotal", ar: "المجموع" },
    note: {
      en: "Demonstration cart. Nothing is charged and no order is sent.",
      ar: "سلة للعرض. لا يوجد دفع ولا يُرسَل طلب.",
    },
  },
  aboutPage: {
    eyebrow: { en: "About", ar: "عن المؤسسة" },
    heading: {
      en: "Syoufi Hunting",
      ar: "سيوفي هانتينغ",
    },
    paragraphs: {
      en: [
        "Syoufi Hunting is presented here as a demonstration storefront for hunting and outdoor gear.",
        "This site is a sample catalog: the prices are sample figures, the cart does not take payment, and the products are not confirmed inventory.",
      ],
      ar: [
        "تُعرض سيوفي هانتينغ هنا كواجهة لمتجر صيد ومعدات للطلعات.",
        "هذا الموقع كتالوج عيّنات: الأسعار أرقام عيّنة، والسلة لا تستلم دفعًا، والمنتجات ليست مخزونًا مؤكدًا.",
      ],
    },
  },
  footer: {
    en: {
      blurb: "Hunting clothing, camping accessories, and outdoor gear.",
      copyright: "© 2026 Syoufi Hunting",
      categories: "Categories",
      explore: "Explore",
      visit: "Contact",
      demo: "Demonstration website",
    },
    ar: {
      blurb: "ملابس صيد، لوازم تخييم ومعدات للطلعات.",
      copyright: "© 2026 سيوفي هانتينغ",
      categories: "الأقسام",
      explore: "تصفّح",
      visit: "التواصل",
      demo: "موقع عرض تجريبي",
    },
  },
} as const;

export const navItems: { key: NavKey; match: (pathname: string, locale: Locale, hash: string) => boolean }[] = [
  {
    key: "home",
    match: (pathname, locale) => pathname === `/${locale}` || pathname === `/${locale}/`,
  },
  {
    key: "products",
    match: (pathname, locale) =>
      pathname.startsWith(`/${locale}/products`) || pathname.startsWith(`/${locale}/categories`),
  },
  {
    key: "about",
    match: (pathname, locale, hash) => pathname.startsWith(`/${locale}/about`) && hash !== "#contact",
  },
  {
    key: "contact",
    match: (pathname, locale, hash) => pathname.startsWith(`/${locale}/about`) && hash === "#contact",
  },
];

export function navHref(key: NavKey, locale: Locale) {
  switch (key) {
    case "home":
      return `/${locale}`;
    case "products":
      return `/${locale}/products`;
    case "about":
      return `/${locale}/about`;
    case "contact":
      return `/${locale}/about#contact`;
  }
}
