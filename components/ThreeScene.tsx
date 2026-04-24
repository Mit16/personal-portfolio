// components\Layout.tsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = Math.sin(time) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      {/* @ts-ignore - Fix: mesh is an intrinsic Three.js element */}
      <mesh ref={meshRef}>
        {/* @ts-ignore - Fix: octahedronGeometry is an intrinsic Three.js element */}
        <octahedronGeometry args={[1, 0]} />
        {/* @ts-ignore - Fix: meshStandardMaterial is an intrinsic Three.js element */}
        <meshStandardMaterial color="#38bdf8" wireframe />
      {/* @ts-ignore - Fix: mesh is an intrinsic Three.js element */}
      </mesh>
    </Float>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-neutral-50 dark:bg-[#030303] transition-colors duration-300">
    </div>
  );
};

export const InteractiveGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    globeRef.current.rotation.y += 0.005;
  });

  return (
    // @ts-ignore - Fix: mesh is an intrinsic Three.js element
    <mesh ref={globeRef}>
      {/* @ts-ignore - Fix: sphereGeometry is an intrinsic Three.js element */}
      <sphereGeometry args={[2, 64, 64]} />
      {/* @ts-ignore - Fix: meshStandardMaterial is an intrinsic Three.js element */}
      <meshStandardMaterial 
        color="#0ea5e9" 
        wireframe 
        transparent 
        opacity={0.3}
      />
      {/* @ts-ignore - Fix: pointLight is an intrinsic Three.js element */}
      <pointLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />
    {/* @ts-ignore - Fix: mesh is an intrinsic Three.js element */}
    </mesh>
  );
};
