// components\Layout.tsx
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center ${className}`}
    >
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10 md:mb-14"
    >
      {/* Subtitle */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-[2px] bg-sky-500" />

        {subtitle && (
          <p className="text-sm md:text-base text-sky-500 font-futuristic tracking-[0.25em] uppercase">
            {subtitle}
          </p>
        )}
      </div>

      {/* Main title */}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-futuristic text-neutral-900 dark:text-white tracking-tight leading-none">
        {title}
      </h2>
    </motion.div>
  );
};
