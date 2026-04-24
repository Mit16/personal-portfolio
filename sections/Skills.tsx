// sections\Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Layout';
import { SKILLS } from '../constants';

export const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle title="Core Expertise" subtitle="02 // SKILLS" />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              borderColor: 'rgba(56,189,248,0.4)',
              backgroundColor: 'rgba(56,189,248,0.03)'
            }}
            className="group relative p-8 border border-white/[0.03] bg-white/[0.01] rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 overflow-hidden"
          >
            <div className="mb-4 text-neutral-600 group-hover:text-current transition-all duration-500 group-hover:scale-110"
              style={{ color: undefined }} // let brand color come through on hover
            >
              {skill.icon}
            </div>
            <h3 className="font-futuristic font-medium text-xs text-neutral-500 group-hover:text-white uppercase tracking-[0.2em]">
              {skill.name}
            </h3>

            {/* Subtle glow behind icon on hover */}
            <div className="absolute inset-0 -z-10 bg-sky-500/0 group-hover:bg-sky-500/5 blur-2xl transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
