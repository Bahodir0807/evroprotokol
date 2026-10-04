import type { Dictionary } from "@/lib/messages";

const icons = [
  "M12 2a10 10 0 1 0 10 10",
  "M5 13l4 4L19 7",
  "M4 6h16M4 10h16M4 14h10",
];

export default function Benefits({ dict }: { dict: Dictionary }) {
  const { benefits } = dict;

  return (
    <section id="benefits" className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {benefits.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {benefits.subheading}
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((it, i) => (
            <div
              key={it.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
                  <path d={icons[i] ?? icons[0]} />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
