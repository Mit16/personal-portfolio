
import React from 'react';
import { Server, Database, Code2, Cpu, Globe, Cloud, ShieldCheck, Zap, Layers, Smartphone } from 'lucide-react';
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FigureFit E-commerce',
    description: 'A high-performance luxury fashion engine. Architected a scalable Node.js backend handling complex inventories, secure Stripe payment flows, and automated Cloudinary image optimization pipelines. Integrated multi-layered JWT/OAuth for enterprise-grade security.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    demo: 'https://figurefitfashion.com',
  },
  {
    id: '2',
    title: 'HealthFirst AI',
    description: 'Precision health monitoring system. Developed a robust Spring Boot microservice architecture that ingests real-time Wear OS telemetry. Implemented AI-driven risk assessment modules using Gemini API to predict health anomalies with 94% accuracy.',
    tech: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'MQTT', 'Gemini AI'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/Mit16/HealthFirst-Personalized-Health-Monitoring-System',
  },
  {
    id: '3',
    title: 'Custom C++ Redis',
    description: 'High-speed in-memory data store built from the ground up. Engineered custom TCP/IP stack handling, protocol serialization, and optimized hash-table data structures for sub-millisecond latency. Focus on low-level memory management and thread safety.',
    tech: ['C++', 'TCP/IP', 'Data Structures', 'Networking'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/Mit16/Redis-Implementation-in-C-Cpp',
  },
  {
    id: '4',
    title: 'GenAI Biz Engine',
    description: 'Unified business intelligence platform. Orchestrates complex workflows across multiple external APIs for real-time domain analysis, trademark validation, and automated ad campaign generation. Built for high-throughput decision-making.',
    tech: ['Next.js', 'Python', 'FastAPI', 'Redis', 'Google Cloud'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Universe Capital',
    role: 'IT Developer',
    period: 'Sept 2025 - Present',
    description: [
      'Architecting resilient backend systems for luxury commerce reaching thousands of concurrent users.',
      'Optimizing payment reconciliation logic, reducing transaction latency by 40%.',
      'Developing AI-driven trademark and domain verification engines for rapid business scaling.',
      'Implementing automated CI/CD pipelines on AWS for sub-minute deployments.'
    ],
    tech: ['Node.js', 'Next.js', 'MongoDB', 'AWS', 'Redis']
  },
  {
    company: 'Visvik Business Solutions',
    role: 'Backend Developer',
    period: 'Jul 2025 - Sept 2025',
    description: [
      'Designed and versioned RESTful APIs for production-scale logistics and inquiry systems.',
      'Pioneered multi-vendor architecture for BobbyMart, a high-traffic e-commerce marketplace.',
      'Leveraged Cloudinary SDKs for advanced media transformation and delivery optimization.'
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Docker']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Node.js', icon: <Server size={22} />, category: 'Backend' },
  { name: 'Spring Boot', icon: <Layers size={22} />, category: 'Backend' },
  { name: 'Express.js', icon: <Cpu size={22} />, category: 'Backend' },
  { name: 'Redis', icon: <Zap size={22} />, category: 'Backend' },
  { name: 'MongoDB', icon: <Database size={22} />, category: 'Database' },
  { name: 'PostgreSQL', icon: <Database size={22} />, category: 'Database' },
  { name: 'React.js', icon: <Code2 size={22} />, category: 'Frontend' },
  { name: 'Next.js', icon: <Globe size={22} />, category: 'Frontend' },
  { name: 'AWS', icon: <Cloud size={22} />, category: 'Tools' },
  { name: 'Docker', icon: <Layers size={22} />, category: 'Tools' },
  { name: 'JWT/Auth', icon: <ShieldCheck size={22} />, category: 'Tools' },
  { name: 'Microservices', icon: <Layers size={22} />, category: 'Backend' },
];
