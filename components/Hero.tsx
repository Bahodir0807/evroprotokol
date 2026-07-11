'use client'
import type { MouseEvent } from 'react'
import { PhoneIcon, TelegramIcon, ClockIcon, MapPinIcon, ShieldIcon } from '@/components/ui/Icon'
import { HERO_CONTENT, SITE_CONFIG } from '@/lib/content'

export default function Hero() {
  const handleTelegramClick = (e: MouseEvent<HTMLAnchorElement>) => {
    try {
      e.preventDefault()
    } catch (_) {}

    const openWithMessage = (text: string) => {
      const url = `https://t.me/Otsenka777?text=${encodeURIComponent(text)}`
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    const fallback = () => {
      window.open('https://t.me/Otsenka777', '_blank', 'noopener,noreferrer')
    }

    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          const maps = `https://maps.google.com/?q=${latitude},${longitude}`
          const text = `Mani geolocation: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}\n${maps}`
          openWithMessage(text)
        },
        () => {
          fallback()
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      )
    } else {
      fallback()
    }
  }

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <ClockIcon className="h-4 w-4" />
      case 'map':
        return <MapPinIcon className="h-4 w-4" />
      case 'shield':
        return <ShieldIcon className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#050b14]">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:py-16 md:py-20 text-center relative z-10">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {HERO_CONTENT.title}
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ff3e1d] animate-pulse">
            {HERO_CONTENT.subtitle}
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            {HERO_CONTENT.description}
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
          {HERO_CONTENT.badges.map((badge, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-4 py-2 text-sm text-slate-300 backdrop-blur"
            >
              {getBadgeIcon(badge.icon)}
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-8">
          <a
            aria-label={`Позвонить ${SITE_CONFIG.phone}`}
            rel="noopener"
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-4 h-14 text-white font-bold text-lg shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
          >
            <PhoneIcon className="h-6 w-6" />
            <span>{HERO_CONTENT.cta.call}</span>
          </a>
          <a
            href={SITE_CONFIG.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTelegramClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#0088cc]/20 hover:bg-[#0088cc]/30 border-2 border-[#0088cc] px-8 py-4 h-14 text-[#0088cc] font-bold text-lg transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#0088cc]/50"
          >
            <TelegramIcon className="h-6 w-6" />
            <span>{HERO_CONTENT.cta.telegram}</span>
          </a>
        </div>

        {/* Image with neon border */}
        <div className="max-w-3xl w-full mx-auto">
          <div className="relative rounded-2xl border-2 border-blue-500/80 shadow-[0_0_30px_rgba(59,130,246,0.25)] overflow-hidden">
            <img
              src="/evroprotokoll.jpg"
              alt="Европротокол бланк"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}