// App.tsx
import React, { Suspense, useEffect, useState } from 'react';
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
import { Github } from './sections/Github';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import { ThemeToggle } from './components/ThemeToggle';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
      <div className="font-futuristic font-bold text-xl tracking-tighter pointer-events-auto cursor-pointer text-neutral-900 dark:text-white transition-colors duration-300">
        AV
      </div>
      <div className="hidden md:flex gap-8 font-futuristic text-xs tracking-widest uppercase pointer-events-auto text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
        <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
        <a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

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
  }, [loaded]);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {!loaded && <LoadingScreen key="loader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <main className="relative">
          <CustomCursor />
          <Navbar />
          <ThreeBackground />
          <ThemeToggle />
          <CurrentlyBuilding />

          <div className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Github />
            <Projects />
            <ThreeVisual />
            <Contact />
            <Footer />
          </div>

          <div
            className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '128px 128px',
            }}
          />
        </main>
      )}
    </ThemeProvider>
  );
}

export default App;
