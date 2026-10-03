import { services } from "../data";
import { useReveal } from "../hooks/useReveal";
import { Icon } from "./Icon";

export function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div ref={ref} className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="h-px w-6 bg-primary/50" />
            Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Best Digital Marketing Services in Delhi for Sustainable Business Growth
          </h2>
          <p className="mt-4 text-body">
            Being the best creative digital marketing agency in New Delhi, we offer solutions that
            help you unlock long-term growth for your business.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <li key={item.id} id={item.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_20px_50px_rgba(0,117,162,0.12)]">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/35 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-cta transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{item.blurb}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3"
                >
                  {item.cta}
                  <Icon name="arrow" />
                </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
