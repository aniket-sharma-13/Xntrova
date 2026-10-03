import { useState } from "react";
import { testimonials } from "../data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const initial = item.name.charAt(0);

  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Words from Our Valued Clients</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <blockquote className="rounded-3xl bg-white p-8 shadow-[0_16px_50px_rgba(0,23,32,0.06)] md:p-10">
            <p className="text-lg leading-relaxed text-body">“{item.quote}”</p>
            <footer className="mt-8 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-lg font-semibold text-white">
                {initial}
              </span>
              <div>
                <cite className="not-italic font-semibold">{item.name}</cite>
                <p className="text-sm text-body">{item.role}</p>
              </div>
            </footer>
          </blockquote>
          <div className="flex flex-col justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name + t.role}
                type="button"
                onClick={() => setIndex(i)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                  i === index
                    ? "border-primary bg-white font-semibold text-primary"
                    : "border-transparent text-body hover:bg-white"
                }`}
              >
                {t.name}, {t.role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
