import Link from "next/link";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { categoryCopy, type Product } from "@/content/products";
import { hasText } from "@/lib/text";
import { demoPrice, formatPrice } from "@/lib/price";
import { productPath } from "@/lib/paths";
import { AddToCart } from "@/components/AddToCart";
import { DemoBadge } from "@/components/DemoBadge";
import { ProductImage } from "@/components/ProductImage";

type ProductCardProps = {
  product: Product;
  locale: Locale;
  priority?: boolean;
};

export function ProductCard({ product, locale, priority = false }: ProductCardProps) {
  const price = demoPrice(product.id, product.category);

  return (
    <article className="flex h-full flex-col bg-paper">
      <Link href={productPath(locale, product.slug)} aria-label={product.name[locale]} className="block">
        <ProductImage
          product={product}
          unavailableLabel={siteContent.product.imageUnavailable[locale]}
          priority={priority}
          className="aspect-[4/5]"
        />
      </Link>
      <div className="flex flex-1 flex-col px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-olive">{categoryCopy[product.category].name[locale]}</p>
          {product.isDemo ? <DemoBadge locale={locale} /> : null}
        </div>
        {hasText(product.brand) ? <p className="mt-2 text-xs text-moss">{product.brand}</p> : null}
        <h3 className="mt-2 text-base font-semibold leading-snug text-charcoal">
          <Link href={productPath(locale, product.slug)} className="hover:text-forest">
            {product.name[locale]}
          </Link>
        </h3>
        <p className="mt-3 text-base font-semibold text-charcoal sm:text-lg" dir="ltr">
          {formatPrice(price)}
        </p>
        <div className="mt-3">
          <AddToCart slug={product.slug} locale={locale} />
        </div>
        <Link
          href={productPath(locale, product.slug)}
          className="mt-1 inline-flex min-h-11 items-center text-sm text-moss hover:text-charcoal"
        >
          {siteContent.catalog.viewDetails[locale]}
        </Link>
      </div>
    </article>
  );
}
