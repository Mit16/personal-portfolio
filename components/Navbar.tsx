// components/Navbar.tsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-5">
      <div className="flex justify-between items-center backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4">
        <a
          href="#"
          className="font-futuristic font-bold text-xl tracking-tighter text-neutral-900 dark:text-white"
        >
          AV
        </a>

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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-900 dark:text-white"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

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

export default Navbar;