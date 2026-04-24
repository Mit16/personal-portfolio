// sections\Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Layout';
import { Github, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out, Amit will get back to you soon!");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact">
      <SectionTitle title="Nexus" subtitle="06 // CONTACT" />
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8">
            Let's build something extraordinary together. Whether it's a new backend architecture or a complex full-stack project, I'm ready to dive in.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">Email</p>
                <p className="text-neutral-900 dark:text-white">amitk.vishwa1633@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-black transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">Location</p>
                <p className="text-neutral-900 dark:text-white">Sector 62, Noida, U.P.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-black transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">Phone</p>
                <p className="text-neutral-900 dark:text-white">+91 9082526810</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <motion.a 
                whileHover={{ scale: 1.1 }} 
                href="https://github.com/Mit16" 
                target="_blank"
                className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl hover:text-sky-500"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
                whileHover={{ scale: 1.1 }} 
                href="https://linkedin.com/in/amit-m-vishwakarma" 
                target="_blank"
                className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl hover:text-sky-500"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded-3xl backdrop-blur-md"
        >
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Full Name</label>
            <input 
              required
              type="text" 
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 text-neutral-900 dark:text-white focus:outline-none focus:border-sky-500/50 transition-colors"
              placeholder="Elon Musk"
            />
          </div>
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Email Address</label>
            <input 
              required
              type="email" 
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 text-neutral-900 dark:text-white focus:outline-none focus:border-sky-500/50 transition-colors"
              placeholder="elon@spacex.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Message</label>
            <textarea 
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 text-neutral-900 dark:text-white focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
              placeholder="Let's build something crazy..."
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-sky-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-sky-400 transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] group"
          >
            Send Transmission <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
};
