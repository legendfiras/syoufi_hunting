import Image from "next/image";
import type { Locale } from "@/i18n";
import { business } from "@/content/business";
import { siteContent } from "@/content/site";

export const logoAlt = "Syoufi Hunting";

type LogoProps = {
  locale: Locale;
  variant?: "light" | "dark";
  compact?: boolean;
  priority?: boolean;
  showName?: boolean;
  presentation?: "header" | "footer" | "panel";
};

export function Logo({
  locale,
  variant = "dark",
  compact = false,
  priority = false,
  showName = true,
  presentation = "header",
}: LogoProps) {
  const word = variant === "light" ? "text-cream" : "text-charcoal";
  const muted = variant === "light" ? "text-gold" : "text-olive";
  const boxed = presentation !== "panel";
  const logoSrc = business.images.logo.trim();
  const frame =
    presentation === "footer"
      ? "h-20 w-20 p-1"
      : presentation === "panel"
        ? "w-full max-w-sm"
        : "h-12 w-12 p-0.5 lg:h-16 lg:w-16";

  return (
    <span
      className={`flex items-center ${presentation === "panel" ? "w-full justify-center" : ""} ${showName ? "gap-2.5 sm:gap-3" : ""}`}
    >
      {logoSrc ? (
        <span className={`inline-flex shrink-0 items-center justify-center ${frame}`}>
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={308}
            height={308}
            priority={priority}
            sizes={presentation === "panel" ? "(min-width: 1024px) 24rem, 80vw" : "80px"}
            className="object-contain"
            style={
              boxed
                ? { width: "100%", height: "100%", objectFit: "contain" }
                : { width: "100%", height: "auto", objectFit: "contain" }
            }
          />
        </span>
      ) : null}
      {showName ? (
        <span className="min-w-0" aria-hidden={logoSrc ? true : undefined}>
          <span
            className={`block truncate font-semibold tracking-[0.1em] sm:tracking-[0.16em] ${compact ? "text-[0.72rem] sm:text-[0.95rem]" : "text-lg"} ${word}`}
            lang="en"
          >
            {siteContent.brand.en}
          </span>
          <span
            className={`mt-0.5 block truncate text-[0.56rem] font-medium tracking-[0.16em] sm:text-[0.62rem] sm:tracking-[0.2em] ${muted}`}
            lang="en"
            dir="ltr"
          >
            {siteContent.tagline}
          </span>
          {locale === "ar" && !compact ? (
            <span className={`mt-0.5 block truncate text-[0.68rem] ${variant === "light" ? "text-cream/70" : "text-moss"}`}>
              {siteContent.legalName.ar}
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
