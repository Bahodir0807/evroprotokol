"use client"

import React, { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = stored ? (stored as 'light' | 'dark') : prefersDark ? 'dark' : 'light'
      setTheme(initial)
      if (initial === 'dark') document.documentElement.classList.add('dark')
    } catch {}
  }, [])

  useEffect(() => {
    const updateScrollPadding = () => {
      const h = headerRef.current?.offsetHeight || 0
      const v = h ? `${h}px` : ''
      document.documentElement.style.scrollPaddingTop = v
      document.body.style.scrollPaddingTop = v
      document.documentElement.style.setProperty('--header-offset', v || '0px')
    }
    requestAnimationFrame(updateScrollPadding)
    window.addEventListener('resize', updateScrollPadding)
    return () => window.removeEventListener('resize', updateScrollPadding)
  }, [])

  useEffect(() => {
    const h = headerRef.current?.offsetHeight || 0
    const v = h ? `${h}px` : ''
    document.documentElement.style.scrollPaddingTop = v
    document.body.style.scrollPaddingTop = v
    document.documentElement.style.setProperty('--header-offset', v || '0px')
  }, [open])

  useEffect(() => {
    const recalc = () => {
      const h = headerRef.current?.offsetHeight || 0
      const v = h ? `${h}px` : ''
      document.documentElement.style.scrollPaddingTop = v
      document.body.style.scrollPaddingTop = v
      document.documentElement.style.setProperty('--header-offset', v || '0px')
    }
    requestAnimationFrame(recalc)
    const t = setTimeout(recalc, 50)
    return () => clearTimeout(t)
  }, [theme])

  const toggleTheme = () => {
    const next: 'light' | 'dark' = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (next === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    try { localStorage.setItem('theme', next) } catch {}
  }

  const navLink = 'px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'

  return (
    <header ref={headerRef as React.RefObject<HTMLDivElement>} className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md"></div>
          <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">IshonchProtokol</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          <a href="#benefits" className={navLink}>Преимущества</a>
          <a href="#process" className={navLink}>Как это работает</a>
          <a href="#help" className={navLink}>Помощь</a>
          <a href="#contact" className={navLink}>Контакты</a>
          <button onClick={toggleTheme} aria-label="Переключить тему" className="ml-2 rounded-md border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M21.64 13.02A9 9 0 1 1 11 2.36a7 7 0 1 0 10.64 10.66z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zM3 11H2a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2zm15.66 7.66-.7-.7a1 1 0 1 1 1.41-1.41l.7.7a1 1 0 1 1-1.41 1.41zM4.64 6.05l-.7-.7A1 1 0 1 1 5.35 3.94l.7.7A1 1 0 0 1 4.64 6.05zm0 11.31a1 1 0 0 1 0-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7a1 1 0 0 1-1.41 0zM18.66 5.34a1 1 0 0 1 0-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7a1 1 0 0 1-1.41 0z"/></svg>
            )}
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="inline-flex items-center rounded-md border border-slate-200 p-2 text-slate-700 shadow-sm md:hidden dark:border-slate-700 dark:text-slate-200" aria-label="Меню">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 px-4 pb-4 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-1 pt-2">
            <a onClick={() => setOpen(false)} href="#benefits" className="rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">Преимущества</a>
            <a onClick={() => setOpen(false)} href="#process" className="rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">Как это работает</a>
            <a onClick={() => setOpen(false)} href="#help" className="rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">Помощь</a>
            <a onClick={() => setOpen(false)} href="#contact" className="rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">Контакты</a>
            <button onClick={toggleTheme} className="mt-2 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
              <span>Тема: {theme === 'dark' ? 'Тёмная' : 'Светлая'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
