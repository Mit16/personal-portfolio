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
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <div className="flex justify-between items-center backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4">
        
        {/* Logo */}
        <a
          href="#"
          className="font-futuristic font-bold text-xl tracking-tighter text-neutral-900 dark:text-white"
        >
          AV
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-6 font-futuristic text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-900 dark:text-white"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black/5 dark:border-white/5 rounded-2xl p-5 flex flex-col gap-4 text-sm uppercase tracking-widest text-neutral-700 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-sky-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
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
            {/* <ThreeVisual /> */}
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
