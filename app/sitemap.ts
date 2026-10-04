import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { ALL_PAGES, absoluteUrl } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of ALL_PAGES) {
      const priority = page === "home" ? 1 : page === "faq" ? 0.8 : 0.7;
      const changeFrequency = page === "home" ? "weekly" : "monthly";
      entries.push({
        url: absoluteUrl(locale as Locale, page),
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            "ru-UZ": absoluteUrl("ru", page),
            "uz-UZ": absoluteUrl("uz", page),
            "x-default": absoluteUrl("ru", page),
          },
        },
      });
    }
  }

  return entries;
}
