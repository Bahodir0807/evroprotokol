import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-linear-to-br from-blue-500 to-indigo-600 shadow-md" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white">IshonchProtokol</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} IshonchProtokol. Информационный сервис. Не является юридической консультацией.</p>
      </div>
    </footer>
  )
}
