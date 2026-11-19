import { useEffect } from "react";
import Hero from "../../sections/Hero";
import Brands from "../../sections/Brands";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Projects from "../../sections/Projects";
import Process from "../../sections/Process";
import Contact from "../../sections/Contact";

type Props = { scrollTo?: string };

const HomePage = ({ scrollTo }: Props) => {
  useEffect(() => {
    if (!scrollTo) return;
    document.getElementById(scrollTo)?.scrollIntoView();
  }, [scrollTo]);

  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
};

export default HomePage;
