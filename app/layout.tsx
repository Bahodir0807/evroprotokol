import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Европротокол Ассистанс Ташкент | Оформление ДТП без СБДД",
  description: "Аварийные комиссары в Ташкенте. Оформление Европротокола за 15 минут. Выезд на место ДТП, помощь в заполнении документов, консультации по ОСАГО. Работаем 24/7.",
  keywords: "европротокол ташкент, аварийный комиссар, оформление дтп, осаго узбекистан, сбдд, помощь при дтп",
  openGraph: {
    title: "Европротокол Ассистанс Ташкент | Оформление ДТП без СБДД",
    description: "Аварийные комиссары в Ташкенте. Оформление Европротокола за 15 минут. Выезд на место ДТП, помощь в заполнении документов.",
    type: "website",
    locale: "ru_UZ",
    siteName: "Европротокол Ассистанс",
  },
  twitter: {
    card: "summary_large_image",
    title: "Европротокол Ассистанс Ташкент | Оформление ДТП без СБДД",
    description: "Аварийные комиссары в Ташкенте. Оформление Европротокола за 15 минут.",
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
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
