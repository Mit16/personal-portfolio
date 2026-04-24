// components\ThemeToggle.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggle } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-all"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

// Need AnimatePresence import
import { AnimatePresence } from 'framer-motion';