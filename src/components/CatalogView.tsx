import Link from "next/link";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { categoryCopy, type Product } from "@/content/products";
import { filterProducts, type CatalogQuery } from "@/lib/catalog";
import { hasText } from "@/lib/text";
import { CatalogFilters } from "@/components/CatalogFilters";
import { ProductGrid } from "@/components/ProductGrid";
import { DemoBadge } from "@/components/DemoBadge";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type CatalogViewProps = {
  locale: Locale;
  title: string;
  intro: string;
  source: readonly Product[];
  query: CatalogQuery;
  basePath: string;
  hideCategory?: boolean;
  demo?: boolean;
  crumbs?: { href?: string; label: string }[];
};

export function CatalogView({
  locale,
  title,
  intro,
  source,
  query,
  basePath,
  hideCategory = false,
  demo = false,
  crumbs,
}: CatalogViewProps) {
  const result = filterProducts(source, query);
  const copy = siteContent.catalog;
  const active = [
    result.query.q ? `“${result.query.q}”` : null,
    result.query.category ? categoryCopy[result.query.category].name[locale] : null,
  ].filter(Boolean);

  return (
    <div className="py-8 md:py-12">
      {crumbs ? (
        <div className="mb-5">
          <Breadcrumbs items={crumbs} />
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold text-charcoal md:text-4xl">{title}</h1>
        {demo ? <DemoBadge locale={locale} /> : null}
      </div>
      {hasText(intro) ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-moss md:text-base">{intro}</p> : null}
      {source.some((product) => product.sample) ? (
        <p className="mt-3 max-w-2xl text-sm font-medium text-olive">{copy.sampleNotice[locale]}</p>
      ) : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <CatalogFilters
          locale={locale}
          basePath={basePath}
          value={{
            q: result.query.q,
            category: result.query.category,
          }}
          resultCount={result.items.length}
          hideCategory={hideCategory}
        />

        <div>
          <div className="mb-4 hidden items-center justify-between gap-4 lg:flex">
            <p className="text-sm text-moss">{copy.results[locale](result.items.length)}</p>
            {active.length > 0 ? (
              <p className="text-sm text-charcoal">
                {active.join(" · ")}{" "}
                <Link href={basePath} className="font-medium text-forest hover:text-olive">
                  {copy.clear[locale]}
                </Link>
              </p>
            ) : null}
          </div>

          {result.items.length > 0 ? (
            <ProductGrid products={result.items} locale={locale} />
          ) : (
            <div className="bg-paper px-6 py-16 text-center">
              <p className="text-charcoal">{copy.empty[locale]}</p>
              <Link
                href={basePath}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:text-olive"
              >
                {copy.clear[locale]}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
