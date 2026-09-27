import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n";
import { business } from "@/content/business";
import { siteContent } from "@/content/site";
import { getHuntingProducts, getMoreProducts } from "@/content/products";
import { BrandStory } from "@/components/BrandStory";
import { ContactBand } from "@/components/ContactBand";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { SocialCards } from "@/components/SocialCards";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const hunting = getHuntingProducts();
  const more = getMoreProducts();

  const sameAs = [business.instagram.url, business.tiktok.url].filter((url) => url.trim().length > 0);
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: business.legalName.en,
    alternateName: business.legalName.ar,
    description: siteContent.meta.en.description,
    telephone: "+96170568469",
    sameAs,
  };
  if (business.location.ar.trim()) {
    jsonLd.address = {
      "@type": "PostalAddress",
      streetAddress: business.location.ar,
      addressCountry: "LB",
    };
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero locale={locale} />
      <Container className="py-10 md:py-14">
        {hunting.length > 0 ? (
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold rtl:normal-case rtl:tracking-normal">
              {siteContent.featured.eyebrow[locale]}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-charcoal md:text-4xl">
              {siteContent.featured.heading[locale]}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-moss md:text-base">
              {siteContent.featured.intro[locale]}
            </p>
            <p className="mt-3 max-w-2xl text-sm font-medium text-olive">{siteContent.catalog.priceNote[locale]}</p>
            {hunting.some((item) => item.sample) ? (
              <p className="mt-2 text-sm font-medium text-olive">{siteContent.catalog.sampleNotice[locale]}</p>
            ) : null}
            <div className="mt-8">
              <ProductGrid products={hunting} locale={locale} priorityCount={4} />
            </div>
          </section>
        ) : null}
        {more.length > 0 ? (
          <section className="mt-14 md:mt-20">
            <h2 className="text-3xl font-semibold text-charcoal md:text-4xl">{siteContent.featured.moreHeading[locale]}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-moss md:text-base">
              {siteContent.featured.moreIntro[locale]}
            </p>
            <div className="mt-8">
              <ProductGrid products={more} locale={locale} />
            </div>
          </section>
        ) : null}
      </Container>
      <BrandStory locale={locale} />
      <SocialCards locale={locale} />
      <ContactBand locale={locale} />
    </>
  );
}
