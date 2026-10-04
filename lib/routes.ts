import type { Locale } from "./i18n";
import { SITE_URL } from "./site";

export type PageKey =
  | "home"
  | "uzbekistan"
  | "tashkent"
  | "howTo"
  | "documents"
  | "whenNot"
  | "faq"
  | "contacts"
  | "privacy";

const SLUGS: Record<PageKey, Record<Locale, string>> = {
  home: { ru: "", uz: "" },
  uzbekistan: {
    ru: "evroprotokol-uzbekistan",
    uz: "ozbekistonda-yevroprotokol",
  },
  tashkent: {
    ru: "evroprotokol-tashkent",
    uz: "toshkentda-yevroprotokol",
  },
  howTo: {
    ru: "kak-oformit-evroprotokol",
    uz: "yevroprotokolni-qanday-rasmiylashtirish",
  },
  documents: {
    ru: "dokumenty-dlya-evroprotokola",
    uz: "yevroprotokol-hujjatlari",
  },
  whenNot: {
    ru: "kogda-evroprotokol-nelzya",
    uz: "qachon-yevroprotokol-mumkin-emas",
  },
  faq: { ru: "chastye-voprosy", uz: "savol-javob" },
  contacts: { ru: "kontakty", uz: "aloqa" },
  privacy: {
    ru: "politika-konfidentsialnosti",
    uz: "maxfiylik-siyosati",
  },
};

export function getSlug(page: PageKey, locale: Locale): string {
  return SLUGS[page][locale];
}

export function localizedPath(locale: Locale, page: PageKey): string {
  const slug = getSlug(page, locale);
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function absoluteUrl(locale: Locale, page: PageKey): string {
  const path = localizedPath(locale, page);
  return `${SITE_URL}${path}`;
}

export function hreflangMap(page: PageKey): Record<string, string> {
  return {
    "ru-UZ": absoluteUrl("ru", page),
    "uz-UZ": absoluteUrl("uz", page),
    "x-default": absoluteUrl("ru", page),
  };
}

export const ALL_PAGES: PageKey[] = [
  "home",
  "uzbekistan",
  "tashkent",
  "howTo",
  "documents",
  "whenNot",
  "faq",
  "contacts",
  "privacy",
];

export const NAV_PAGES: PageKey[] = [
  "uzbekistan",
  "tashkent",
  "howTo",
  "documents",
  "whenNot",
  "faq",
  "contacts",
];
