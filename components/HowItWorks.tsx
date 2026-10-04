import type { Dictionary } from "@/lib/messages";

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  const { howItWorks } = dict;

  return (
    <section id="process" className="bg-slate-50 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {howItWorks.subheading}
          </p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {howItWorks.steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="absolute -top-3 left-6 inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-indigo-600 px-2 text-xs font-semibold text-white shadow">
                {s.n}
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
