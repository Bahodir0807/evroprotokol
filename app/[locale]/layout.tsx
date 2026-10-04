import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import LocaleDocument from "@/components/LocaleDocument";
import Navbar from "@/components/Navbar";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/messages";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <LocaleDocument locale={locale} />
      <Navbar locale={locale} dict={dict} />
      <div className="flex-1">{children}</div>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
