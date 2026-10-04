"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/messages";
import { localizedPath, NAV_PAGES, type PageKey } from "@/lib/routes";

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

function readTheme(): "light" | "dark" {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window === "undefined" ? "light" : readTheme()
  );
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateScrollPadding = () => {
      const h = headerRef.current?.offsetHeight || 0;
      const v = h ? `${h}px` : "";
      document.documentElement.style.scrollPaddingTop = v;
      document.body.style.scrollPaddingTop = v;
      document.documentElement.style.setProperty("--header-offset", v || "0px");
    };
    requestAnimationFrame(updateScrollPadding);
    window.addEventListener("resize", updateScrollPadding);
    return () => window.removeEventListener("resize", updateScrollPadding);
  }, []);

  useEffect(() => {
    const h = headerRef.current?.offsetHeight || 0;
    const v = h ? `${h}px` : "";
    document.documentElement.style.scrollPaddingTop = v;
    document.body.style.scrollPaddingTop = v;
    document.documentElement.style.setProperty("--header-offset", v || "0px");
  }, [open, theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  const navLink =
    "px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white";
  const homePath = localizedPath(locale, "home");

  const navLabel = (key: PageKey) =>
    dict.nav[key as keyof typeof dict.nav] as string;

  const anchorLinks = [
    { href: `${homePath}#benefits`, label: dict.nav.benefits },
    { href: `${homePath}#process`, label: dict.nav.process },
    { href: localizedPath(locale, "faq"), label: dict.nav.faq },
    { href: localizedPath(locale, "contacts"), label: dict.nav.contacts },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link href={homePath} className="flex min-w-0 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-8 w-8 shrink-0 text-emerald-500"
            aria-hidden
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          <span className="truncate text-base font-semibold tracking-tight text-slate-900 dark:text-white">
            {locale === "uz" ? "Yevroprotokol 24/7" : "Европротокол 24/7"}
          </span>
        </Link>
        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_PAGES.slice(0, 4).map((page) => (
            <Link key={page} href={localizedPath(locale, page)} className={navLink}>
              {navLabel(page)}
            </Link>
          ))}
          {anchorLinks.slice(2).map((item) => (
            <Link key={item.href} href={item.href} className={navLink}>
              {item.label}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dict.nav.toggleTheme}
            className="ml-1 rounded-md border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M21.64 13.02A9 9 0 1 1 11 2.36a7 7 0 1 0 10.64 10.66z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zM3 11H2a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2z" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center rounded-md border border-slate-200 p-2 text-slate-700 shadow-sm dark:border-slate-700 dark:text-slate-200"
            aria-expanded={open}
            aria-label={dict.nav.menu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-slate-200 px-4 pb-4 lg:hidden dark:border-slate-800">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_PAGES.map((page) => (
              <Link
                key={page}
                href={localizedPath(locale, page)}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {navLabel(page)}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="mt-2 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {dict.nav.theme}: {theme === "dark" ? dict.nav.themeDark : dict.nav.themeLight}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
