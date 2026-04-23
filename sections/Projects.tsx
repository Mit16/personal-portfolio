
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Section, SectionTitle } from '../components/Layout';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }: { project: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[500px] w-full rounded-3xl bg-neutral-900/40 overflow-hidden border border-white/5 group transition-all duration-500 hover:border-sky-500/30"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>
      
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="relative z-10 p-8 flex flex-col h-full justify-end min-h-[500px]"
      >
        <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-start mb-4">
             <h3 className="text-3xl font-bold font-futuristic text-white tracking-tighter leading-tight uppercase">{project.title}</h3>
             <ArrowUpRight className="text-sky-500 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0" />
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {project.description}
          </p>
        </div>
        
        <div className="pt-4 border-t border-white/10 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="text-[9px] px-2 py-1 bg-white/5 text-neutral-400 rounded border border-white/5 uppercase tracking-widest font-futuristic">
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" className="flex items-center gap-2 text-xs font-futuristic uppercase tracking-widest text-neutral-400 hover:text-sky-400 transition-colors">
                <Github size={16} /> Source
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" className="flex items-center gap-2 text-xs font-futuristic uppercase tracking-widest text-neutral-400 hover:text-sky-400 transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Glossy Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle title="Selected Works" subtitle="04 // PORTFOLIO" />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
