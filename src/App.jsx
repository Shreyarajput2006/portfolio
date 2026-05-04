import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Credentials from './components/portfolio/Credentials';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#14121a]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
