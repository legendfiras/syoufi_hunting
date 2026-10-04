import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { business } from "@/content/business";
import { dirFor, isLocale, locales, type Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { logoAlt } from "@/components/Logo";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  const meta = siteContent.meta[locale];

  return {
    title: {
      default: meta.title,
      template: `%s | ${siteContent.storeName[locale]}`,
    },
    description: meta.description,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "ar" ? "ar_LB" : "en_US",
      type: "website",
      siteName: siteContent.storeName.en,
      images: business.images.hero.trim()
        ? [
            {
              url: business.images.hero,
              width: 1024,
              height: 576,
              alt: logoAlt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: business.images.hero.trim() ? "summary_large_image" : "summary",
      title: meta.title,
      description: meta.description,
      images: business.images.hero.trim() ? [business.images.hero] : undefined,
    },
  };
}

export default async function LocaleLayout({ params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div lang={locale} dir={dirFor(locale)} className="min-h-screen bg-ivory">
      <main>
        <Hero locale={locale} />
        <section className="bg-forest-deep text-cream" aria-labelledby="coming-soon-heading">
          <Container className="flex min-h-52 flex-col items-center justify-center gap-5 py-14 text-center md:min-h-64 md:py-20">
            <h1
              id="coming-soon-heading"
              className="text-4xl font-semibold uppercase tracking-[0.18em] text-gold md:text-6xl rtl:normal-case rtl:tracking-normal"
            >
              {locale === "ar" ? "قريبًا" : "Coming Soon"}
            </h1>
            <a
              href="https://roytech.solutions"
              className="text-xs font-medium text-gold transition-colors hover:text-gold-bright"
            >
              Back to Roytech
            </a>
          </Container>
        </section>
      </main>
    </div>
  );
}
