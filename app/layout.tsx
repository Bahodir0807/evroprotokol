import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata();

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
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
