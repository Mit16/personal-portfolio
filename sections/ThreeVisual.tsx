// sections/ThreeVisual.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Section, SectionTitle } from '../components/Layout';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null!);
  const gridRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    globeRef.current.rotation.y += 0.003;
    gridRef.current.rotation.y += 0.003;
    globeRef.current.rotation.x = Math.sin(t * 0.2) * 0.05;
  });

  return (
    <>
      {/* Solid inner sphere */}
      {/* @ts-ignore */}
      <mesh ref={globeRef}>
        {/* @ts-ignore */}
        <sphereGeometry args={[2, 64, 64]} />
        {/* @ts-ignore */}
        <meshStandardMaterial
          color="#020f1a"
          roughness={0.8}
          metalness={0.2}
        />
      {/* @ts-ignore */}
      </mesh>

      {/* Wireframe grid overlay */}
      {/* @ts-ignore */}
      <mesh ref={gridRef}>
        {/* @ts-ignore */}
        <sphereGeometry args={[2.01, 32, 32]} />
        {/* @ts-ignore */}
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.25}
        />
      {/* @ts-ignore */}
      </mesh>

      {/* Outer glow ring */}
      {/* @ts-ignore */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        {/* @ts-ignore */}
        <torusGeometry args={[2.3, 0.015, 16, 100]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2} />
      {/* @ts-ignore */}
      </mesh>
    </>
  );
};

export const ThreeVisual = () => {
  return (
    <Section id="visual" className="text-center">
      <div className="flex flex-col items-center">
        <SectionTitle title="Global Impact" subtitle="05 // CONNECTIVITY" />
        <p className="text-neutral-400 max-w-2xl mb-12">
          Engineering backend architectures that connect users across the globe.
          Scalable, reliable, and secure systems built for the modern internet.
        </p>

        <div className="w-full h-[500px] cursor-grab active:cursor-grabbing relative">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            {/* @ts-ignore */}
            <ambientLight intensity={0.4} />
            {/* @ts-ignore */}
            <pointLight position={[10, 10, 10]} intensity={2} color="#38bdf8" />
            {/* @ts-ignore */}
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
            <Stars radius={80} depth={40} count={3000} factor={3} fade speed={0.5} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
            <Globe />
          </Canvas>

          {/* HTML label overlay — no font fetch needed */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="font-futuristic text-sky-400/40 text-xs tracking-[0.5em] uppercase mt-[420px]">
              drag to rotate
            </p>
          </div>
        </div>

        {/* Stats below the globe */}
        <div className="grid grid-cols-3 gap-12 mt-8 w-full max-w-lg">
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<50ms', label: 'API Latency' },
            { value: '10K+', label: 'Req / sec' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold font-futuristic text-sky-400">{value}</p>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};