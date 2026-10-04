import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/messages";
import { localizedPath } from "@/lib/routes";

type BreadcrumbsProps = {
  locale: Locale;
  dict: Dictionary;
  items: { label: string; href?: string }[];
};

export default function Breadcrumbs({
  locale,
  dict,
  items,
}: BreadcrumbsProps) {
  const homeHref = localizedPath(locale, "home");

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link
            href={homeHref}
            className="hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            {dict.breadcrumb.home}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 dark:text-slate-200">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
