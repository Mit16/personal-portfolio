// components\CustomCursor.tsx
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isPointer = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const scale = useTransform(isPointer, [0, 1], [1, 1.5]);
  const bgAlpha = useTransform(isPointer, [0, 1], [0, 0.2]);

  const backgroundColor = useTransform(
    bgAlpha,
    (v) => `rgba(14, 165, 233, ${v})`,
  );

  const dotX = useSpring(cursorX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(cursorY, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const el = e.target as HTMLElement;
      const pointer = window.getComputedStyle(el).cursor === "pointer" ? 1 : 0;

      isPointer.set(pointer);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-500/50 pointer-events-none z-30 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          scale,
          backgroundColor,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-sky-500 rounded-full pointer-events-none z-30"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
