
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const words = ['Backend Engineer', 'Full Stack Developer'];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setSubText(currentWord.substring(0, subText.length + 1));

        if (subText.length === currentWord.length) {
          setIsDeleting(true);
        }
      } else {
        setSubText(currentWord.substring(0, subText.length - 1));

        if (subText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : subText === currentWord ? 2000 : 100);

    return () => clearTimeout(timeout);
  }, [subText, isDeleting, index]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <h2 className="text-sky-500 font-futuristic tracking-[0.4em] mb-4 text-sm md:text-base uppercase">Welcome to my Digital Space</h2>
        <h1 className="text-6xl md:text-9xl font-bold font-futuristic tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
          AMIT VISHWAKARMA
        </h1>
        <div className="h-12 md:h-16 mb-8">
          <p className="text-xl md:text-3xl text-neutral-400 font-light tracking-wide">
            {subText}<span className="animate-pulse text-sky-500">|</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-sky-500 text-black font-bold rounded-full transition-all hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
          >
            View Projects
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-full transition-all hover:bg-white/10"
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 text-neutral-500">
        <ChevronDown size={32} />
      </div>

      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-20">
        <motion.a whileHover={{ x: 5, color: '#0ea5e9' }} href="https://github.com/Mit16" target="_blank" className="text-neutral-500 transition-colors"><Github size={24} /></motion.a>
        <motion.a whileHover={{ x: 5, color: '#0ea5e9' }} href="https://linkedin.com/in/amit-m-vishwakarma" target="_blank" className="text-neutral-500 transition-colors"><Linkedin size={24} /></motion.a>
        <motion.a whileHover={{ x: 5, color: '#0ea5e9' }} href="mailto:amitk.vishwa1633@gmail.com" className="text-neutral-500 transition-colors"><Mail size={24} /></motion.a>
      </div>
    </section>
  );
};
