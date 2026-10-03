import { useReveal } from "../hooks/useReveal";
import { cycle, pillars } from "../data";

export function About() {
  const ref = useReveal();

  return (
    <section id="about" className="overflow-hidden py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10"
      >
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
            About Xntrova
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="block">Driven By Ideas.</span>
            <span className="block">
              Focused on <span className="text-primary">Results</span>
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-body">
            At Xntrova, we believe that the key to great marketing is understanding people. Each of
            our strategies is rooted in fresh ideas, robust planning, and a clear focus on what
            truly matters. We combine creativity with data-driven decisions to create meaningful
            experiences that connect, engage, and inspire action.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
            Whether you want to shape your brand story, improve visibility, or drive conversion, we
            take a creative and data-driven approach to ensure the best possible results. Standing
            as the best digital marketing agency in Delhi NCR, we aim to create work that delivers
            measurable results and helps your business climb the competitive ladder with confidence.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_rgba(0,117,162,0.12)]"
              >
                <span className="text-xs font-semibold text-cta">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <img
            src="/assets/about-main.jpg"
            alt="Team collaborating in an office"
            className="col-span-2 h-[280px] w-full rounded-2xl object-cover md:h-[340px]"
          />
          <img
            src="/assets/about-2.jpg"
            alt="Strategy discussion"
            className="h-40 w-full rounded-2xl object-cover md:h-48"
          />
          <img
            src="/assets/about-3.jpg"
            alt="Client workshop"
            className="h-40 w-full rounded-2xl object-cover md:h-48"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[28px] bg-dark text-white">
          <div className="px-6 py-10 md:px-12">
            <p className="text-sm font-semibold tracking-[0.16em] text-cta uppercase">Let’s grow together</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Driven by Results</h3>
          </div>
          <ol className="grid md:grid-cols-4">
            {cycle.map((item, index) => (
              <li key={item.title} className="relative min-h-[220px] overflow-hidden">
                <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-dark/72" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="text-3xl font-bold text-cta">0{index + 1}</span>
                  <h4 className="mt-2 font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm text-white/75">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
