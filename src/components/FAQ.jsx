import { useState } from "react";
import { faqs } from "../data";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-3 text-body">Resolve your general queries and concerns with our FAQ section below.</p>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-1 py-4 text-left font-semibold"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : i)}
                >
                  {item.q}
                  <span className="text-primary" aria-hidden="true">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm leading-relaxed text-body">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
