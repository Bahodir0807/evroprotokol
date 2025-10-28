"use client"

import React from 'react'

export default function Hero() {
  const handleTelegramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try { e.preventDefault() } catch {}

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
        () => { fallback() },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      )
    } else {
      fallback()
    }
  }

  return (
    <section id="home" className="relative isolate overflow-hidden bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-20 text-center">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            Попали в ДТП? Не хотите вызывать ГАИ? Воспользуйтесь услугой по оформлению
            <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent"> ЕВРОПРОТОКОЛА!</span>
          </h1>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <li>
            <a
              aria-label="Позвонить +998993280777"
              rel="noopener"
              data-link="tel:+998993280777"
              href="tel:+998993280777"
              target="_top"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <span className="text-lg"><em className="icon ni ni-call-alt-fill"></em></span>
              <span className="font-semibold">Позвонить +998 (99) 328 07 77, +998 (90) 328 17 77</span>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/Otsenka777"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTelegramClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:bg-slate-800/60 dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-800"
            >
              <span className="text-lg"><em className="icon ni ni-telegram"></em></span>
              <span className="font-semibold">Написать в Telegram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/yevroprotokol24_7?igsh=ZHZzOHplNmc0YTd2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 dark:bg-slate-800/60 dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-800"
            >
              <span className="text-lg"><em className="icon ni ni-instagram"></em></span>
              <span className="font-semibold">Написать в Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
