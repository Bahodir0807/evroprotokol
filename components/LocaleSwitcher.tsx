"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, type Locale, locales } from "@/lib/i18n";
import { ALL_PAGES, getSlug, type PageKey } from "@/lib/routes";

function resolvePageKey(pathname: string, locale: Locale): PageKey {
  const rest = pathname.replace(`/${locale}`, "").replace(/^\//, "");
  if (!rest) return "home";
  for (const page of ALL_PAGES) {
    if (getSlug(page, locale) === rest) return page;
  }
  return "home";
}

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const page = resolvePageKey(pathname, locale);

  return (
    <div className="flex items-center gap-1 rounded-md border border-slate-200 p-0.5 text-xs font-medium dark:border-slate-700">
      {locales.map((loc) => {
        const href =
          loc === locale
            ? pathname
            : `/${loc}${getSlug(page, loc) ? `/${getSlug(page, loc)}` : ""}`;
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={href}
            hrefLang={loc}
            className={`rounded px-2 py-1 ${
              active
                ? "bg-emerald-600 text-white"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {localeLabels[loc]}
          </Link>
        );
      })}
    </div>
  );
}
