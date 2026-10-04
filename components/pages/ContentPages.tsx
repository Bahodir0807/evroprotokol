import type { ReactNode } from "react";
import ContactCta from "@/components/ContactCta";
import ArticleLayout from "@/components/ArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/messages";
import { absoluteUrl, type PageKey } from "@/lib/routes";
import { SITE_CONFIG } from "@/lib/site";

type PageRenderProps = {
  locale: Locale;
  dict: Dictionary;
  pageKey: PageKey;
};

function navTitle(dict: Dictionary, pageKey: PageKey) {
  return dict.nav[pageKey as keyof typeof dict.nav] as string;
}

export function UzbekistanPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.uzbekistan;
  return (
    <ArticleLayout
      locale={locale}
      dict={dict}
      pageKey={pageKey}
      title={content.h1}
      breadcrumbLabel={navTitle(dict, pageKey)}
    >
      <p>{content.intro}</p>
      {content.sections.map((s) => (
        <section key={s.h2}>
          <h2>{s.h2}</h2>
          <p>{s.body}</p>
        </section>
      ))}
      <ContactCta dict={dict} />
    </ArticleLayout>
  );
}

export function TashkentPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.tashkent;
  return (
    <ArticleLayout
      locale={locale}
      dict={dict}
      pageKey={pageKey}
      title={content.h1}
      breadcrumbLabel={navTitle(dict, pageKey)}
    >
      <p>{content.intro}</p>
      {content.sections.map((s) => (
        <section key={s.h2}>
          <h2>{s.h2}</h2>
          <p>{s.body}</p>
        </section>
      ))}
      <ContactCta dict={dict} />
    </ArticleLayout>
  );
}

export function HowToPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.howTo;
  return (
    <ArticleLayout
      locale={locale}
      dict={dict}
      pageKey={pageKey}
      title={content.h1}
      breadcrumbLabel={navTitle(dict, pageKey)}
    >
      <p>{content.intro}</p>
      <ol>
        {content.steps.map((step) => (
          <li key={step.title}>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
      <ContactCta dict={dict} />
    </ArticleLayout>
  );
}

export function DocumentsPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.documents;
  return (
    <ArticleLayout
      locale={locale}
      dict={dict}
      pageKey={pageKey}
      title={content.h1}
      breadcrumbLabel={navTitle(dict, pageKey)}
    >
      <p>{content.intro}</p>
      <ul>
        {content.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{content.note}</p>
    </ArticleLayout>
  );
}

export function WhenNotPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.whenNot;
  return (
    <ArticleLayout
      locale={locale}
      dict={dict}
      pageKey={pageKey}
      title={content.h1}
      breadcrumbLabel={navTitle(dict, pageKey)}
    >
      <p>{content.intro}</p>
      <ul>
        {content.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="font-medium text-slate-900 dark:text-white">{content.cta}</p>
    </ArticleLayout>
  );
}

export function FaqPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.faqPage;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleLayout
        locale={locale}
        dict={dict}
        pageKey={pageKey}
        title={content.h1}
        breadcrumbLabel={navTitle(dict, pageKey)}
      >
        <p>{content.intro}</p>
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {dict.faq.items.map((item) => (
            <div key={item.question} className="p-5">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.question}
              </h2>
              <p className="mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
        <ContactCta dict={dict} />
      </ArticleLayout>
    </>
  );
}

export function ContactsPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.contacts;
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: locale === "uz" ? SITE_CONFIG.nameUz : SITE_CONFIG.nameRu,
    url: absoluteUrl(locale, "contacts"),
    telephone: SITE_CONFIG.phoneRaw,
    sameAs: [SITE_CONFIG.telegram, SITE_CONFIG.instagram],
  };

  return (
    <>
      <JsonLd data={localBusiness} />
      <ArticleLayout
        locale={locale}
        dict={dict}
        pageKey={pageKey}
        title={content.h1}
        breadcrumbLabel={navTitle(dict, pageKey)}
      >
        <p>{content.intro}</p>
        <ul className="space-y-3">
          <li>
            <span className="font-medium text-slate-900 dark:text-white">
              {content.phoneLabel}:{" "}
            </span>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`}>{SITE_CONFIG.phone}</a>
            {SITE_CONFIG.phoneAlt ? (
              <span className="block text-sm text-slate-500">{SITE_CONFIG.phoneAlt}</span>
            ) : null}
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-white">
              {content.telegramLabel}:{" "}
            </span>
            <a href={SITE_CONFIG.telegram} target="_blank" rel="noopener noreferrer">
              t.me/Otsenka777
            </a>
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-white">
              {content.instagramLabel}:{" "}
            </span>
            <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer">
              @yevroprotokol24_7
            </a>
          </li>
        </ul>
        <p className="text-sm">{content.hoursNote}</p>
        <ContactCta dict={dict} />
      </ArticleLayout>
    </>
  );
}

export function PrivacyPage({ locale, dict, pageKey }: PageRenderProps) {
  const content = dict.pages.privacy;
  return (
    <ArticleLayout
      locale={locale}
      dict={dict}
      pageKey={pageKey}
      title={content.h1}
      breadcrumbLabel={dict.footer.privacy}
    >
      <p className="text-sm text-slate-500">{content.updated}</p>
      {content.sections.map((s) => (
        <section key={s.h2}>
          <h2>{s.h2}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </ArticleLayout>
  );
}

export function renderContentPage(
  pageKey: PageKey,
  props: PageRenderProps
): ReactNode {
  switch (pageKey) {
    case "uzbekistan":
      return <UzbekistanPage {...props} />;
    case "tashkent":
      return <TashkentPage {...props} />;
    case "howTo":
      return <HowToPage {...props} />;
    case "documents":
      return <DocumentsPage {...props} />;
    case "whenNot":
      return <WhenNotPage {...props} />;
    case "faq":
      return <FaqPage {...props} />;
    case "contacts":
      return <ContactsPage {...props} />;
    case "privacy":
      return <PrivacyPage {...props} />;
    default:
      return null;
  }
}
