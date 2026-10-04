import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/messages";
import { localizedPath, NAV_PAGES } from "@/lib/routes";
import { SITE_CONFIG } from "@/lib/site";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function Footer({ locale, dict }: FooterProps) {
  const navLabel = (key: keyof typeof dict.nav) => dict.nav[key];

  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {locale === "uz" ? SITE_CONFIG.nameUz : SITE_CONFIG.nameRu}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {dict.footer.disclaimer}
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {dict.internalLinks.heading}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_PAGES.map((page) => (
                <li key={page}>
                  <Link
                    href={localizedPath(locale, page)}
                    className="text-emerald-700 hover:underline dark:text-emerald-400"
                  >
                    {navLabel(page as keyof typeof dict.nav)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localizedPath(locale, "privacy")}
                  className="text-emerald-700 hover:underline dark:text-emerald-400"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="font-medium text-slate-900 dark:text-white">
                {SITE_CONFIG.phone}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400"
              >
                Telegram
              </a>
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. {dict.footer.rights}.
        </p>
      </div>
    </footer>
  );
}
