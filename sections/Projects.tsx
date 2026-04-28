// sections\Projects.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionTitle } from "../components/Layout";
import { PROJECTS } from "../constants";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
  ChevronRight,
} from "lucide-react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

// ── Modal ──────────────────────────────────────────────────────────────────

const ProjectModal = ({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 pt-28 md:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-3xl"
      >
        {/* Hero image */}
        <div className="relative h-48 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[99999] w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
          <h3 className="absolute bottom-4 left-6 text-2xl font-bold font-futuristic uppercase tracking-tighter text-neutral-900 dark:text-white">
            {project.title}
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 max-w-md">
            {project.description}
          </p>

          {/* Tech stack */}
          <div>
            <p className="text-sm text-sky-400 uppercase tracking-widest font-futuristic mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-sm text-neutral-600 dark:text-neutral-300 font-futuristic uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.details && (
            <>
              {/* Metrics */}
              <div>
                <p className="text-sm text-sky-400 uppercase tracking-widest font-futuristic mb-3">
                  Performance Metrics
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {project.details.metrics.map(
                    ({ label, value }: { label: string; value: string }) => (
                      <div
                        key={label}
                        className="text-center p-3 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl"
                      >
                        <p className="text-lg font-bold font-futuristic text-sky-400">
                          {value}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300 uppercase tracking-wider mt-1">
                          {label}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <p className="text-sm text-sky-400 uppercase tracking-widest font-futuristic mb-3">
                  Architecture
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl p-4">
                  {project.details.architecture}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <p className="text-sm text-sky-400 uppercase tracking-widest font-futuristic mb-3">
                  Engineering Challenges
                </p>
                <ul className="space-y-2">
                  {project.details.challenges.map((c: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-neutral-600 dark:text-neutral-300"
                    >
                      <ChevronRight
                        size={14}
                        className="text-sky-500 shrink-0 mt-0.5"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Links */}
          <div className="flex gap-4 pt-2 border-t border-white/5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-futuristic uppercase tracking-widest text-neutral-400 hover:text-sky-400 transition-colors"
              >
                <Github size={15} /> Source Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-futuristic uppercase tracking-widest text-neutral-400 hover:text-sky-400 transition-colors"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  onClick,
}: {
  project: any;
  onClick: () => void;
}) => {
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
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative min-h-[500px] w-full rounded-3xl bg-neutral-100 dark:bg-neutral-900/40 overflow-hidden border border-black/5 dark:border-white/5 group transition-all duration-500 hover:border-sky-500/30 cursor-pointer"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent" />
      </div>

      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="relative z-10 p-8 flex flex-col h-full justify-end min-h-[500px]"
      >
        <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-3xl font-bold font-futuristic text-neutral-900 dark:text-white tracking-tighter leading-tight uppercase">
              {project.title}
            </h3>
            <ArrowUpRight className="text-sky-500 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0" />
          </div>
          <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 delay-100">
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 max-w-md">
              {project.description}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="text-sm px-2 py-1 bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 rounded border border-black/5 dark:border-white/5 uppercase tracking-wider font-futuristic"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-sky-600/80 dark:text-sky-400/60 font-futuristic uppercase tracking-wider">
            Click to view details →
          </p>
        </div>
      </div>

      {/* Glossy reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

// ── Section ────────────────────────────────────────────────────────────────

export const Projects = () => {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <>
      <Section id="projects">
        <SectionTitle title="Selected Works" subtitle="05 // PORTFOLIO" />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};
