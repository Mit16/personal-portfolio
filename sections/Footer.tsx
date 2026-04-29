import React from "react";
import { ChevronUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-futuristic tracking-tighter">
            AMIT VISHWAKARMA
          </h3>
          <p className="text-neutral-500 text-sm mt-1 uppercase tracking-widest">
            Backend Engineer © {currentYear}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="relative z-10 w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
        >
          <ChevronUp
            size={24}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>

        <div className="flex gap-8 text-neutral-400 text-sm font-futuristic">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[100px] rounded-full" />
    </footer>
  );
};
