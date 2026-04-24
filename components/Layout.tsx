// components\Layout.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center ${className}`}>
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10 md:mb-14"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-8 h-[1px] bg-sky-500/50" />
        {subtitle && <p className="text-sky-400 font-futuristic text-xs tracking-[0.3em] uppercase">{subtitle}</p>}
      </div>
      <h2 className="text-5xl md:text-7xl font-bold font-futuristic text-white uppercase tracking-tighter leading-none">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i % 2 !== 0 ? "text-transparent stroke-white stroke-1" : ""}>
            {word}{' '}
          </span>
        ))}
      </h2>
      <style>{`
        .stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </motion.div>
  );
};
