import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { renderContentPage } from "@/components/pages/ContentPages";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/messages";
import { buildPageMetadata } from "@/lib/seo";
import { resolvePageKey, staticSlugParams } from "@/lib/slug";
type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return staticSlugParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const pageKey = resolvePageKey(locale, slug);
  if (!pageKey) return {};
  const dict = getDictionary(locale);
  return buildPageMetadata(locale, pageKey, dict.meta[pageKey]);
}

export default async function SlugPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const pageKey = resolvePageKey(locale, slug);
  if (!pageKey) notFound();

  const dict = getDictionary(locale);
  const content = renderContentPage(pageKey, { locale, dict, pageKey });
  if (!content) notFound();

  return <main>{content}</main>;
}
