import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/messages";
import { localizedPath, NAV_PAGES, type PageKey } from "@/lib/routes";

const linkPages: PageKey[] = NAV_PAGES.filter((p) => p !== "contacts");

type InternalLinksProps = {
  locale: Locale;
  dict: Dictionary;
  current?: PageKey;
};

export default function InternalLinks({
  locale,
  dict,
  current,
}: InternalLinksProps) {
  const label = (key: PageKey) => dict.nav[key as keyof typeof dict.nav] as string;

  return (
    <aside className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        {dict.internalLinks.heading}
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {linkPages
          .filter((p) => p !== current)
          .map((page) => (
            <li key={page}>
              <Link
                href={localizedPath(locale, page)}
                className="text-emerald-700 hover:underline dark:text-emerald-400"
              >
                {label(page)}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}
