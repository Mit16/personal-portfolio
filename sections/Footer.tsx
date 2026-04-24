
import React from 'react';
import { ChevronUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-futuristic tracking-tighter">AMIT VISHWAKARMA</h3>
          <p className="text-neutral-500 text-sm mt-1 uppercase tracking-widest">Backend Engineer © 2025</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>

        <div className="flex gap-8 text-neutral-400 text-sm font-futuristic">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[100px] rounded-full" />
    </footer>
  );
};
