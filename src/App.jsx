import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";
import { Approach } from "./components/Approach";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-2 -top-20 z-[80] rounded bg-white px-3 py-2 text-sm font-medium text-ink focus:top-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Clients />
        <Approach />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
