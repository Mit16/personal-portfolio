// components\CurrentlyBuilding.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, X } from 'lucide-react';

// Update this whenever you start something new
const CURRENT_PROJECT = {
    name: 'FitTrack',
    stack: 'Flutter · FastAPI · PostgresSQL · Python',
    status: 'In Progress',
};

export const CurrentlyBuilding = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="fixed bottom-8 left-8 z-20 max-w-xs"
                >
                    <div className="relative flex items-start gap-3 px-4 py-3 bg-white/90 dark:bg-[#030303]/90 border border-black/10 dark:border-white/10 rounded-2xl backdrop-blur-md shadow-xl">
                        {/* Live pulse dot */}
                        <div className="relative mt-1 shrink-0">
                            <span className="block w-2 h-2 rounded-full bg-sky-400" />
                            <span className="absolute inset-0 w-2 h-2 rounded-full bg-sky-400 animate-ping opacity-60" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-sky-400 uppercase tracking-[0.2em] font-futuristic mb-0.5 flex items-center gap-1.5">
                                <Zap size={9} /> Currently Building
                            </p>
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white font-futuristic truncate">
                                {CURRENT_PROJECT.name}
                            </p>
                            <p className="text-[11px] text-neutral-500 mt-0.5 font-futuristic">
                                {CURRENT_PROJECT.stack}
                            </p>
                        </div>

                        <button
                            onClick={() => setVisible(false)}
                            className="shrink-0 text-neutral-600 hover:text-neutral-300 transition-colors mt-0.5"
                            aria-label="Dismiss"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};