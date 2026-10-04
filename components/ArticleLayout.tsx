import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinks from "@/components/InternalLinks";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/messages";
import type { PageKey } from "@/lib/routes";

type ArticleLayoutProps = {
  locale: Locale;
  dict: Dictionary;
  pageKey: PageKey;
  title: string;
  breadcrumbLabel: string;
  children: ReactNode;
};

export default function ArticleLayout({
  locale,
  dict,
  pageKey,
  title,
  breadcrumbLabel,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs locale={locale} dict={dict} items={[{ label: breadcrumbLabel }]} />
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:scroll-mt-24 dark:[&_h2]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">
        {children}
      </div>
      <InternalLinks locale={locale} dict={dict} current={pageKey} />
    </article>
  );
}
