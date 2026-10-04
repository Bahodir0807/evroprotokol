import type { Locale } from "./i18n";
import { ALL_PAGES, getSlug, type PageKey } from "./routes";

export function resolvePageKey(locale: Locale, slug: string): PageKey | null {
  for (const page of ALL_PAGES) {
    if (page === "home") continue;
    if (getSlug(page, locale) === slug) return page;
  }
  return null;
}

export function staticSlugParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of ["ru", "uz"] as Locale[]) {
    for (const page of ALL_PAGES) {
      if (page === "home") continue;
      const slug = getSlug(page, locale);
      if (slug) params.push({ locale, slug });
    }
  }
  return params;
}
