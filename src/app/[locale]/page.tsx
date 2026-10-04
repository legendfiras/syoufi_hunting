import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n";
import { business } from "@/content/business";
import { siteContent } from "@/content/site";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

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
      <section className="border-y border-gold/25 bg-forest-deep text-cream" aria-labelledby="coming-soon-heading">
        <Container className="flex min-h-52 items-center justify-center py-14 text-center md:min-h-64 md:py-20">
          <h1
            id="coming-soon-heading"
            className="text-4xl font-semibold uppercase tracking-[0.18em] text-gold md:text-6xl rtl:normal-case rtl:tracking-normal"
          >
            {locale === "ar" ? "قريبًا" : "Coming Soon"}
          </h1>
        </Container>
      </section>
    </>
  );
}
