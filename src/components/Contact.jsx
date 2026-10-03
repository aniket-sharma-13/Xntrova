import { useState } from "react";
import { formServices } from "../data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const next = {};
    const n = form.name.value.trim();
    const email = form.email.value.trim();

    if (n.length < 2) next.name = "Enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      form[Object.keys(next)[0]]?.focus();
      return;
    }
    setName(n);
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-16 text-white md:py-20 lg:py-24">
      <img src="/assets/contact.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Boost your brand growth with the Best Digital Marketing Company in Delhi
          </h2>
          <p className="mt-4 max-w-lg text-white/75">
            We aim at improving your online visibility, so you can reach your potential customers
            and boost conversions.
          </p>
          <p className="mt-4 max-w-lg text-white/75">
            At Xntrova, we offer performance-driven digital marketing services to boost your brand
            growth and achieve success. Contact us now.
          </p>
        </div>
        <form
          className="rounded-2xl bg-white p-6 text-ink md:p-8"
          onSubmit={onSubmit}
          noValidate
        >
          <h3 className="text-xl font-semibold">Get a Free Digital Audit</h3>
          {sent ? (
            <p className="mt-4 rounded-lg bg-surface p-4 text-sm" role="status">
              Thanks, {name}. We have your request and will reply with next steps.
            </p>
          ) : (
            <div className="mt-5 space-y-4">
              <label className="block text-sm font-medium">
                Name
                <input
                  name="name"
                  className={`mt-1 min-h-11 w-full rounded-md border px-3 ${errors.name ? "border-red-600" : "border-line"}`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <span className="mt-1 block text-xs font-normal text-red-700" aria-live="polite">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  name="email"
                  type="email"
                  className={`mt-1 min-h-11 w-full rounded-md border px-3 ${errors.email ? "border-red-600" : "border-line"}`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className="mt-1 block text-xs font-normal text-red-700" aria-live="polite">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="block text-sm font-medium">
                Which service are you interested in?
                <select name="service" className="mt-1 min-h-11 w-full rounded-md border border-line px-3" defaultValue="">
                  <option value="">Select a service</option>
                  {formServices.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <button type="submit" className="min-h-11 w-full rounded-sm bg-cta font-semibold">
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
