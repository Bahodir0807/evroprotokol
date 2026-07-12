import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evroprotokol.uz"),
  title: {
    default: "Европротокол Ассистанс | Оформление ДТП без СБДД",
    template: "%s | Европротокол Ассистанс",
  },
  description:
    "Аварийные комиссары в Ташкенте. Оформление Европротокола за 15 минут. Выезд на место ДТП, помощь в заполнении документов, консультации по ОСАГО. Работаем 24/7.",
  keywords:
    "европротокол ташкент, аварийный комиссар, оформление дтп, осаго узбекистан, сбдд, помощь при дтп",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Европротокол Ассистанс | Оформление ДТП без СБДД",
    description:
      "Аварийные комиссары в Ташкенте. Оформление Европротокола за 15 минут. Выезд на место ДТП, помощь в заполнении документов.",
    url: "/",
    type: "website",
    locale: "ru_UZ",
    siteName: "Европротокол Ассистанс",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Европротокол Ассистанс" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Европротокол Ассистанс | Оформление ДТП без СБДД",
    description: "Аварийные комиссары в Ташкенте. Оформление Европротокола за 15 минут.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { const s = localStorage.getItem('theme'); if (s === 'dark') document.documentElement.classList.add('dark'); } catch (e) {}`,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden transition-colors duration-200`}>
        {children}
      </body>
    </html>
  );
}
