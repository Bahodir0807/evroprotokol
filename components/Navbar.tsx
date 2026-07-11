'use client'
import { useEffect, useRef, useState } from 'react'
 
export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = stored ? stored : prefersDark ? 'dark' : 'light'
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
      // expose header height for sections' scroll-mt via CSS var
      document.documentElement.style.setProperty('--header-offset', v || '0px')
    }
    // recalc after layout
    requestAnimationFrame(updateScrollPadding)
    window.addEventListener('resize', updateScrollPadding)
    return () => window.removeEventListener('resize', updateScrollPadding)
  }, [])

  // update when mobile menu opens/closes (header height changes)
  useEffect(() => {
    const h = headerRef.current?.offsetHeight || 0
    const v = h ? `${h}px` : ''
    document.documentElement.style.scrollPaddingTop = v
    document.body.style.scrollPaddingTop = v
    document.documentElement.style.setProperty('--header-offset', v || '0px')
  }, [open])

  // update when theme changes (possible font/rendering shifts)
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
    const next = theme === 'dark' ? 'light' : 'dark'
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
    <header ref={headerRef} className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-emerald-500"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">Европротокол 24/7</span>
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