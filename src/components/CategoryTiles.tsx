import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n";
import { categoryCopy } from "@/content/products";
import { siteContent } from "@/content/site";
import { categoryPath } from "@/lib/paths";
import { PlaceholderArt } from "@/components/PlaceholderArt";

type CategoryTilesProps = {
  locale: Locale;
};

export function CategoryTiles({ locale }: CategoryTilesProps) {
  const section = siteContent.categories;

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold rtl:normal-case rtl:tracking-normal">
          {section.eyebrow[locale]}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-charcoal md:text-4xl">{section.heading[locale]}</h2>
      </div>
      <ul className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {section.items.map((item) => {
          const copy = categoryCopy[item.id];
          return (
            <li key={item.id}>
              <Link
                href={categoryPath(locale, item.id)}
                className="group relative flex min-h-52 flex-col justify-end overflow-hidden bg-forest-deep sm:min-h-72"
              >
                {copy.image ? (
                  <Image
                    src={copy.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <PlaceholderArt
                    kind={copy.placeholder}
                    className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                )}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/20 to-transparent"
                />
                <span className="relative z-10 p-4 text-base font-semibold text-cream sm:p-5 sm:text-lg">
                  {copy.name[locale]}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
