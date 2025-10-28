import React from 'react'

const steps = [
  { n: 1, t: 'Подготовьте данные', d: 'Фото места ДТП, номера полисов, данные водителей.' },
  { n: 2, t: 'Заполните форму', d: 'Ответьте на вопросы — мы подскажем, что важно.' },
  { n: 3, t: 'Проверьте и сохраните', d: 'Получите готовый документ для отправки в страховую.' },
]

export default function HowItWorks() {
  return (
    <section id="process" className="bg-slate-50 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Как это работает</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">Три шага — и всё готово.</p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute -top-3 left-6 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-indigo-600 px-2 text-xs font-semibold text-white shadow">{s.n}</div>
              <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
