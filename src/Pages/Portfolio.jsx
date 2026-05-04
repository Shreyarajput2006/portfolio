import React from "react";
import Header from "../components/portfolio/Header";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Credentials from "../components/portfolio/Credentials";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="relative bg-[#faf8f5] text-[#14121a] font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
