import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Benefits from "@/components/Benefits";
import Help from "@/components/body/help/Help";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/messages";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_CONFIG, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  return buildPageMetadata(locale, "home", dict.meta.home);
}

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: locale === "uz" ? SITE_CONFIG.nameUz : SITE_CONFIG.nameRu,
    description: dict.meta.home.description,
    url: SITE_URL,
    telephone: SITE_CONFIG.phoneRaw,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_URL,
    inLanguage: [locale === "uz" ? "uz-UZ" : "ru-UZ"],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <main>
        <Hero dict={dict} />
        <Benefits dict={dict} />
        <HowItWorks dict={dict} />
        <Help locale={locale} dict={dict} />
      </main>
    </>
  );
}
