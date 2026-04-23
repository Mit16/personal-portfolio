
import React, { Suspense, useEffect } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { ThreeVisual } from './sections/ThreeVisual';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ThreeBackground } from './components/ThreeScene';
import { CustomCursor } from './components/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
      <div className="font-futuristic font-bold text-xl tracking-tighter pointer-events-auto cursor-pointer">
        AV
      </div>
      <div className="hidden md:flex gap-8 font-futuristic text-xs tracking-widest uppercase pointer-events-auto">
        <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
        <a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

function App() {
  useEffect(() => {
    // Reveal animation for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <main className="relative bg-[#030303]">
      <CustomCursor />
      <Navbar />
      <ThreeBackground />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ThreeVisual />
        <Contact />
        <Footer />
      </div>

      {/* Background Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}

export default App;
