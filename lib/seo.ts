import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { ogLocale } from "./i18n";
import { hreflangMap, localizedPath, type PageKey } from "./routes";
import { SITE_CONFIG, SITE_URL } from "./site";

type PageMeta = {
  title: string;
  description: string;
};

export function buildPageMetadata(
  locale: Locale,
  page: PageKey,
  meta: PageMeta
): Metadata {
  const canonicalPath = localizedPath(locale, page);
  const canonical = `${SITE_URL}${canonicalPath}`;
  const siteName = locale === "uz" ? SITE_CONFIG.nameUz : SITE_CONFIG.nameRu;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: hreflangMap(page),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locale === "ru" ? [ogLocale.uz] : [ogLocale.ru],
      siteName,
      images: [
        {
          url: "/evroprotokoll.jpg",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/evroprotokoll.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Европротокол 24/7 | Оформление ДТП в Узбекистане",
      template: "%s | Европротокол 24/7",
    },
    applicationName: SITE_CONFIG.nameRu,
    creator: SITE_CONFIG.nameRu,
    formatDetection: { telephone: true },
  };
}
