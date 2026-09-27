import Link from "next/link";
import type { Locale } from "@/i18n";
import { categoryCopy, categoryIds } from "@/content/products";
import { navHref, navItems, siteContent } from "@/content/site";
import { categoryPath } from "@/lib/paths";
import { Container } from "@/components/Container";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { InstagramLink } from "@/components/InstagramLink";
import { Logo, logoAlt } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { TikTokLink } from "@/components/TikTokLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { hasText } from "@/lib/text";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const footer = siteContent.footer[locale];
  const nav = siteContent.nav[locale];

  return (
    <footer className="mt-auto border-t border-gold/25 bg-forest-deep text-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-14">
        <div className="max-w-xs">
          <Link href={`/${locale}`} aria-label={logoAlt} className="inline-flex">
            <Logo locale={locale} variant="light" compact presentation="footer" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">{footer.blurb}</p>
        </div>

        <nav aria-label={footer.categories}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold rtl:normal-case rtl:tracking-normal">
            {footer.categories}
          </h2>
          <ul className="mt-4 space-y-2">
            {categoryIds.map((id) => (
              <li key={id}>
                <Link href={categoryPath(locale, id)} className="text-sm text-cream/75 hover:text-gold">
                  {categoryCopy[id].name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={footer.explore}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold rtl:normal-case rtl:tracking-normal">
            {footer.explore}
          </h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={navHref(item.key, locale)} className="text-sm text-cream/75 hover:text-gold">
                  {nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold rtl:normal-case rtl:tracking-normal">
            {footer.visit}
          </h2>
          {hasText(siteContent.location.ar) ? (
            <p className="mt-4 text-sm leading-relaxed text-cream/80">{siteContent.location.ar}</p>
          ) : null}
          {locale === "en" && hasText(siteContent.location.en) ? (
            <p className="mt-1 text-sm text-cream/55">{siteContent.location.en}</p>
          ) : null}
          <div className="mt-3">
            <PhoneLink locale={locale} variant="light" />
            <WhatsAppLink locale={locale} variant="light" />
            <InstagramLink locale={locale} variant="light" />
            <TikTokLink locale={locale} variant="light" />
          </div>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/50">
            {footer.copyright}
            <span className="mx-2 text-cream/25" aria-hidden>
              ·
            </span>
            {footer.demo}
          </p>
          <LanguageSwitch locale={locale} variant="plain" />
        </Container>
      </div>
    </footer>
  );
}
