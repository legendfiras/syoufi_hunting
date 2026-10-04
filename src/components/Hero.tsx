import Image from "next/image";
import type { Locale } from "@/i18n";
import { business } from "@/content/business";
import { siteContent } from "@/content/site";

type HeroProps = {
  locale: Locale;
};

const HERO_WIDTH = 1024;
const HERO_HEIGHT = 576;

export function Hero({ locale }: HeroProps) {
  const banner = siteContent.banner;
  const heroSrc = business.images.hero.trim();

  return (
    <section className="bg-ivory" aria-label={banner.imageAlt[locale]}>
      {heroSrc ? (
        <Image
          src={heroSrc}
          alt={banner.imageAlt[locale]}
          width={HERO_WIDTH}
          height={HERO_HEIGHT}
          priority
          unoptimized
          sizes="100vw"
          className="block h-auto w-full object-contain"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      ) : null}
    </section>
  );
}
