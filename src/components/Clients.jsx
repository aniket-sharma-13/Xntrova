import { clients, tools } from "../data";

export function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section className="overflow-hidden border-y border-line bg-surface py-14">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Trusted by thousands of companies
        </h2>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 pr-4">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1440px] flex-wrap items-center justify-center gap-6 px-5 text-sm text-body sm:px-8 lg:px-10">
        <span className="font-semibold text-ink">Tools we work with</span>
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  );
}
