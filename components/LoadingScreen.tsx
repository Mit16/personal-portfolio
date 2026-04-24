// components\LoadingScreen.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 400);
                    return 100;
                }
                // Fast at start, slow in middle, fast at end
                const increment = prev < 30 ? 4 : prev < 80 ? 1.5 : 3;
                return Math.min(prev + increment, 100);
            });
        }, 30);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[99999] bg-neutral-50 dark:bg-[#030303] flex flex-col items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-8"
            >
                {/* Logo */}
                <div className="font-futuristic font-bold text-6xl tracking-tighter text-neutral-900 dark:text-white">
                    AV
                </div>

                {/* Progress bar */}
                <div className="w-48 h-[1px] bg-black/10 dark:bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-sky-500"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.05 }}
                    />
                </div>

                {/* Percentage */}
                <p className="font-futuristic text-xs tracking-[0.4em] text-neutral-600 uppercase">
                    {Math.round(progress)}%
                </p>
            </motion.div>
        </motion.div>
    );
};