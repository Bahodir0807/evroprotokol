"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import {
  PhoneIcon,
  TelegramIcon,
  ClockIcon,
  MapPinIcon,
  ShieldIcon,
} from "@/components/ui/Icon";
import type { Dictionary } from "@/lib/messages";
import { SITE_CONFIG } from "@/lib/site";

export default function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  const handleTelegramClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const openWithMessage = (text: string) => {
      const url = `https://t.me/Otsenka777?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    };
    const fallback = () => {
      window.open(SITE_CONFIG.telegram, "_blank", "noopener,noreferrer");
    };
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const maps = `https://maps.google.com/?q=${latitude},${longitude}`;
          openWithMessage(
            `Geolocation: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}\n${maps}`
          );
        },
        () => fallback(),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      fallback();
    }
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "clock":
        return <ClockIcon className="h-4 w-4" />;
      case "map":
        return <MapPinIcon className="h-4 w-4" />;
      case "shield":
        return <ShieldIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#050b14]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      <div className="container relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:py-16 md:py-20">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-2xl font-extrabold text-[#ff3e1d] sm:text-3xl md:text-4xl">
            {hero.subtitle}
          </p>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">{hero.description}</p>
        </div>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {hero.badges.map((badge, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm text-slate-300 backdrop-blur"
            >
              {getBadgeIcon(badge.icon)}
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            aria-label={`${hero.cta.call} ${SITE_CONFIG.phone}`}
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 sm:w-auto"
          >
            <PhoneIcon className="h-6 w-6" />
            <span>{hero.cta.call}</span>
          </a>
          <a
            href={SITE_CONFIG.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTelegramClick}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl border-2 border-[#0088cc] bg-[#0088cc]/20 px-8 py-4 text-lg font-bold text-[#0088cc] transition-all hover:scale-105 hover:bg-[#0088cc]/30 focus:outline-none focus:ring-4 focus:ring-[#0088cc]/50 sm:w-auto"
          >
            <TelegramIcon className="h-6 w-6" />
            <span>{hero.cta.telegram}</span>
          </a>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500/80 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            <Image
              src="/evroprotokoll.jpg"
              alt={
                dict.meta.home.title.slice(0, 80) ||
                "Yevroprotokol blank"
              }
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 768px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
