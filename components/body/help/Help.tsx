import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/messages";
import { localizedPath } from "@/lib/routes";

type HelpProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function Help({ locale, dict }: HelpProps) {
  const { faq } = dict;

  return (
    <section id="help" className="mt-16 bg-slate-50 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {faq.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{faq.subheading}</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {faq.items.map((item, index) => (
            <details key={index} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-900 hover:bg-slate-50 group-open:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50 group-open:dark:bg-slate-800/50">
                {item.question}
                <svg className="ml-3 h-4 w-4 shrink-0 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">{item.answer}</div>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link
            href={localizedPath(locale, "faq")}
            className="text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
          >
            {faq.moreLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
