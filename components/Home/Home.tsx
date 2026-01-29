"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Roadmap from "./Roadmap/Roadmap";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="home" className="scroll-mt-14 sm:scroll-mt-20 md:scroll-mt-17.5">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-14 sm:scroll-mt-20 md:scroll-mt-17.5">
        <About />
      </section>

      <section id="services" className="scroll-mt-14 sm:scroll-mt-20 md:scroll-mt-17.5">
        <Services />
      </section>

      <section id="projects" className="scroll-mt-14 sm:scroll-mt-20 md:scroll-mt-17.5">
        <Projects />
      </section>

      <section id="skills" className="scroll-mt-14 sm:scroll-mt-20 md:scroll-mt-17.5">
        <Skills />
      </section>

      <section id="roadmap" className="scroll-mt-6 sm:scroll-mt-20 md:scroll-mt-8">
        <Roadmap />
      </section>

      <section id="contact" className="scroll-mt-6 sm:scroll-mt-20 md:scroll-mt-17.5">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
