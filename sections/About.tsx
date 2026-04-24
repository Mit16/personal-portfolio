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
    <p className="text-neutral-400 uppercase tracking-widest text-xs mt-2">{label}</p>
  </div>
);

export const About = () => {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle title="Engineering Digital Core" subtitle="01 // ABOUT ME" />
          <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl">
            I'm a <span className="text-sky-500 font-semibold">Backend Engineer</span> with a passion for building high-performance, scalable systems. 
            Currently based in Noida, I specialize in architecting production-grade APIs, microservices, and real-time data pipelines.
          </p>
          <p className="text-neutral-400 mb-12">
            My engineering philosophy revolves around code reliability and system efficiency. Whether it's crafting custom Redis implementations or engineering multi-vendor e-commerce backends, I thrive at the intersection of complex logic and elegant design.
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
            <div className="text-center backdrop-blur-sm p-4 rounded-lg border border-white/10 bg-black/20">
              <span className="text-5xl font-bold font-futuristic">{"{CODE}"}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
