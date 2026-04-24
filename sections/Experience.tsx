// sections\Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Layout';
import { EXPERIENCES } from '../constants';

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle title="Experience" subtitle="03 // JOURNEY" />
      
      <div className="relative space-y-2">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative grid md:grid-cols-12 gap-8 py-10 border-b border-black/5 dark:border-white/5 last:border-none"
          >
            <div className="md:col-span-3">
              <span className="text-sky-500/70 font-futuristic text-xs tracking-widest uppercase mb-2 block">{exp.period}</span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter leading-none">{exp.company}</h3>
              <p className="text-neutral-600 dark:text-neutral-500 text-xs font-futuristic mt-2 uppercase tracking-widest">{exp.role}</p>
            </div>

            <div className="md:col-span-9">
              <div className="space-y-4">
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-sky-500/40 rounded-full mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-full text-[9px] text-neutral-800 dark:text-neutral-300 uppercase font-futuristic group-hover:text-neutral-900 dark:group-hover:text-white group-hover:border-sky-500/20 transition-all duration-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Background Hover Effect */}
            <div className="absolute inset-0 -z-10 bg-black/0 dark:bg-white/0 group-hover:bg-black/[0.02] dark:group-hover:bg-white/[0.01] transition-all duration-500 -mx-6 rounded-3xl" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
