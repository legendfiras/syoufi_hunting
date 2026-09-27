import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { categoryCopy, type Product } from "@/content/products";
import { hasText, presentValue } from "@/lib/text";
import { demoPrice, formatPrice } from "@/lib/price";
import { categoryPath, homePath, productsPath } from "@/lib/paths";
import { inquiryMessage } from "@/lib/inquiry";
import { AddToCart } from "@/components/AddToCart";
import { InstagramLink } from "@/components/InstagramLink";
import { PhoneLink } from "@/components/PhoneLink";
import { TikTokLink } from "@/components/TikTokLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DemoBadge } from "@/components/DemoBadge";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductGrid } from "@/components/ProductGrid";

type ProductDetailsProps = {
  locale: Locale;
  product: Product;
  related: Product[];
};

export function ProductDetails({ locale, product, related }: ProductDetailsProps) {
  const copy = siteContent.catalog;
  const specs = (product.specs ?? []).flatMap((item) => {
    const value = presentValue(item.value);
    const label = presentValue(item.label[locale]);
    return value && label ? [{ label, value }] : [];
  });
  const brand = presentValue(product.brand);
  const sourceUrl = presentValue(product.sourceUrl);
  const price = demoPrice(product.id, product.category);
  const crumbs = [
    { href: homePath(locale), label: siteContent.product.breadcrumbHome[locale] },
    { href: productsPath(locale), label: siteContent.product.breadcrumbProducts[locale] },
    {
      href: categoryPath(locale, product.category),
      label: categoryCopy[product.category].name[locale],
    },
    { label: product.name[locale] },
  ];

  return (
    <div className="py-8 md:py-12">
      <Breadcrumbs items={crumbs} />
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery product={product} locale={locale} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive rtl:normal-case rtl:tracking-normal">
            {categoryCopy[product.category].name[locale]}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold text-charcoal md:text-4xl">{product.name[locale]}</h1>
            {product.isDemo ? <DemoBadge locale={locale} /> : null}
          </div>
          {product.sample ? (
            <p className="mt-4 text-sm font-medium text-olive">{copy.sampleNotice[locale]}</p>
          ) : null}
          {hasText(product.description[locale]) ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-moss">{product.description[locale]}</p>
          ) : null}
          {brand ? (
            <p className="mt-5 text-sm text-charcoal">
              <span className="text-moss">{copy.brand[locale]}: </span>
              {brand}
            </p>
          ) : null}
          {specs.length > 0 ? (
            <section className="mt-6">
              <h2 className="text-sm font-semibold text-charcoal">{copy.specifications[locale]}</h2>
              <dl className="mt-3 divide-y divide-line border-y border-line">
                {specs.map((item) => (
                  <div key={item.label} className="grid grid-cols-[minmax(7rem,0.8fr)_minmax(0,1.2fr)] gap-3 py-2.5 text-sm">
                    <dt className="text-moss">{item.label}</dt>
                    <dd className="text-charcoal" dir="ltr">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}
          {sourceUrl ? (
            <p className="mt-4">
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-forest underline decoration-gold/70 underline-offset-4 hover:text-olive"
              >
                {copy.source[locale]}
              </a>
            </p>
          ) : null}
          {sourceUrl && product.images.some((src) => hasText(src)) ? (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-moss">{copy.photoCredit[locale]}</p>
          ) : null}
          <p className="mt-6 text-2xl font-semibold text-charcoal" dir="ltr">
            {formatPrice(price)}
          </p>
          <p className="mt-2 max-w-xl text-sm text-moss">{copy.priceNote[locale]}</p>
          <div className="mt-5 flex max-w-xs flex-col gap-3">
            <AddToCart slug={product.slug} locale={locale} />
            <PhoneLink locale={locale} />
            <WhatsAppLink locale={locale} text={inquiryMessage(locale, product.name[locale])} />
            <InstagramLink locale={locale} />
            <TikTokLink locale={locale} />
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-charcoal">{copy.related[locale]}</h2>
          <ProductGrid products={related} locale={locale} />
        </section>
      ) : null}
    </div>
  );
}
