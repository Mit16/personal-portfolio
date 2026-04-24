// sections\ThreeVisual.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { InteractiveGlobe } from '../components/ThreeScene';
import { Section, SectionTitle } from '../components/Layout';
import { OrbitControls, Text } from '@react-three/drei';

export const ThreeVisual = () => {
  return (
    <Section id="visual" className="text-center">
      <div className="flex flex-col items-center">
        <SectionTitle title="Global Impact" subtitle="05 // CONNECTIVITY" />
        <p className="text-neutral-400 max-w-2xl mb-12">
          Engineering backend architectures that connect users across the globe. 
          Scalable, reliable, and secure systems built for the modern internet.
        </p>
        <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 6] }}>
            {/* @ts-ignore - Fix: ambientLight is an intrinsic Three.js element */}
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <InteractiveGlobe />
            <Text
              position={[0, 0, 0]}
              fontSize={0.5}
              color="white"
              font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoSQUrYV-W_61m0.woff2"
            >
              WORLD CLASS INFRA
            </Text>
          </Canvas>
        </div>
      </div>
    </Section>
  );
};
