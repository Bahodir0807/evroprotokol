import React from 'react'

export default function Help() {
  return (
    <section id="help" className="bg-slate-50 py-16 dark:bg-slate-900 margin-top-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Частые вопросы</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">Короткие ответы на популярные ситуации при оформлении европротокола.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-900 hover:bg-slate-50 group-open:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50 group-open:dark:bg-slate-800/50">
              Когда можно оформить ДТП по европротоколу?
              <svg className="ml-3 h-4 w-4 shrink-0 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clipRule="evenodd"/></svg>
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">
              Если нет пострадавших, участвуют только два авто, у обоих есть действующие полисы ОСАГО и нет споров по обстоятельствам.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-900 hover:bg-slate-50 group-open:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50 group-open:dark:bg-slate-800/50">
              Нужен ли вызов ГИБДД?
              <svg className="ml-3 h-4 w-4 shrink-0 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clipRule="evenodd"/></svg>
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">
              Как правило, нет. Достаточно корректно заполнить извещение о ДТП и уведомить страховую.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-900 hover:bg-slate-50 group-open:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50 group-open:dark:bg-slate-800/50">
              Какие фото нужно сделать?
              <svg className="ml-3 h-4 w-4 shrink-0 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clipRule="evenodd"/></svg>
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">
              Общий план места ДТП, повреждения с разных ракурсов, номера авто, разметка/знаки, следы торможения.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-900 hover:bg-slate-50 group-open:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50 group-open:dark:bg-slate-800/50">
              Что делать, если есть разногласия?
              <svg className="ml-3 h-4 w-4 shrink-0 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clipRule="evenodd"/></svg>
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">
              Вызовите ГИБДД для фиксации обстоятельств. Европротокол оформляется при согласии сторон.
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
