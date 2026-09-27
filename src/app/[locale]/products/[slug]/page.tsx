import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n";
import { getProduct, getRelatedProducts, products } from "@/content/products";
import { Container } from "@/components/Container";
import { ProductDetails } from "@/components/ProductDetails";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name[locale],
    description: product.description[locale],
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <Container>
      <ProductDetails locale={locale} product={product} related={getRelatedProducts(product)} />
    </Container>
  );
}
