"use client"

import React, { useState } from 'react'

type FormData = {
  name: string
  phone: string
  email: string
  details: string
}

export default function CTAForm() {
  const [data, setData] = useState<FormData>({ name: '', phone: '', email: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="form" className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Начните оформление сейчас</h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">Заполните контактные данные и кратко опишите ситуацию. Мы подскажем, что делать дальше.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>— Бесплатно и без регистрации</li>
              <li>— Хранение данных только на вашем устройстве</li>
              <li>— Помощь в любой момент</li>
            </ul>
          </div>
          <div>
            <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Имя</label>
                  <input name="name" value={data.name} onChange={onChange} required className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="Иван"/>
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Телефон</label>
                  <input name="phone" value={data.phone} onChange={onChange} required className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="+7 (___) ___-__-__"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Email (необязательно)</label>
                  <input type="email" name="email" value={data.email} onChange={onChange} className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="you@example.com"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Краткое описание</label>
                  <textarea name="details" value={data.details} onChange={onChange} required rows={4} className="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="Опишите обстоятельства ДТП..."/>
                </div>
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Получить подсказки</button>
              {submitted && (
                <p className="mt-3 text-center text-sm text-emerald-600 dark:text-emerald-400">Спасибо! Проверьте подсказки ниже и раздел Помощь.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
