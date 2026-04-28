// sections\About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Layout';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const StatCounter = ({ target, label }: { target: string, label: string }) => (
  <div className="text-center md:text-left">
    <motion.h4
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl md:text-5xl font-bold font-futuristic text-sky-500"
    >
      {target}
    </motion.h4>
    <p className="text-neutral-600 dark:text-neutral-400 uppercase tracking-widest text-xs mt-2">{label}</p>
  </div>
);

export const About = () => {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle title="About Me" subtitle="01 // ABOUT ME" />
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 max-w-xl">
            I'm a <span className="text-sky-500 font-semibold">Backend Engineer</span> focused on building scalable APIs, backend systems, and automation-driven workflows.
            I enjoy solving complex problems across system design, performance optimization, and business logic.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl">
            From building a custom Redis implementation in C++ to developing production e-commerce systems and AI-integrated platforms, I enjoy working on systems that require both reliability and strong engineering fundamentals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <StatCounter target="10+" label="Projects Completed" />
            <StatCounter target="2+" label="Years of Dev Experience" />
            <StatCounter target="15+" label="Tech Stack Proficiencies" />
          </div>
        </div>

        <div className="relative h-[400px] w-full hidden lg:block">
          <Canvas>
            {/* @ts-ignore - Fix: ambientLight is an intrinsic Three.js element */}
            <ambientLight intensity={1} />
            {/* @ts-ignore - Fix: pointLight is an intrinsic Three.js element */}
            <pointLight position={[10, 10, 10]} />
            <Float speed={5} rotationIntensity={2} floatIntensity={2}>
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#0ea5e9"
                  attach="material"
                  distort={0.4}
                  speed={2}
                  roughness={0}
                />
              </Sphere>
            </Float>
          </Canvas>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center backdrop-blur-sm p-4 rounded-lg border border-black/10 dark:border-white/10 bg-white/20 dark:bg-black/20 text-neutral-900 dark:text-white">
              <span className="text-5xl font-bold font-futuristic">{"{CODE}"}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
