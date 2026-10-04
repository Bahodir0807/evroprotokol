export const locales = ["ru", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  ru: "Рус",
  uz: "Oʻzb",
};

export const htmlLang: Record<Locale, string> = {
  ru: "ru",
  uz: "uz",
};

export const ogLocale: Record<Locale, string> = {
  ru: "ru_UZ",
  uz: "uz_UZ",
};
