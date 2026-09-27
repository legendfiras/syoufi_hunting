import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { categoryCopy, categoryIds, getProductsByCategory, isCategoryId } from "@/content/products";
import { parseCatalogQuery } from "@/lib/catalog";
import { categoryPath, homePath } from "@/lib/paths";
import { CatalogView } from "@/components/CatalogView";
import { Container } from "@/components/Container";

type PageProps = {
  params: Promise<{ locale: string; category: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => categoryIds.map((category) => ({ locale, category })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, category } = await params;
  if (!isLocale(raw) || !isCategoryId(category)) return {};
  const locale: Locale = raw;
  return {
    title: categoryCopy[category].name[locale],
    description: categoryCopy[category].intro[locale],
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { locale: raw, category } = await params;
  if (!isLocale(raw) || !isCategoryId(category)) notFound();
  const locale: Locale = raw;
  const query = parseCatalogQuery(await searchParams);
  const copy = categoryCopy[category];

  return (
    <Container>
      <CatalogView
        locale={locale}
        title={copy.name[locale]}
        intro={copy.intro[locale]}
        source={getProductsByCategory(category)}
        query={{ ...query, category: undefined }}
        basePath={categoryPath(locale, category)}
        hideCategory
        demo={copy.isDemo}
        crumbs={[
          { href: homePath(locale), label: siteContent.product.breadcrumbHome[locale] },
          { label: copy.name[locale] },
        ]}
      />
    </Container>
  );
}
