// constants.tsx
import React from 'react';
import { Server, Database, Code2, Cpu, Globe, Cloud, ShieldCheck, Zap, Layers, Smartphone } from 'lucide-react';
import {
  SiNodedotjs,
  SiSpringboot,
  SiExpress,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiJsonwebtokens,
  SiKubernetes,
} from 'react-icons/si';
import { SiAwslambda } from 'react-icons/si'; // or SiAwsamplify, SiAwsfargate
import { Project, Experience, Skill } from './types';
import Customcppredis from './assets/Custom-cpp-redis.jpg';
import figureFitImg from "./assets/ecommerce.jpg";
import healthFirstImg from './assets/Healthfirst.jpg';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FigureFit E-commerce',
    description: 'A high-performance luxury fashion engine. Architected a scalable Node.js backend handling complex inventories, secure Stripe payment flows, and automated Cloudinary image optimization pipelines. Integrated multi-layered JWT/OAuth for enterprise-grade security.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ'],
    image: figureFitImg,
    demo: 'https://figurefitfashion.com',
    details: {
      architecture: 'Monolithic Node.js API with Redis caching layer, BullMQ job queues for async image processing, and MongoDB Atlas for inventory. Deployed on AWS EC2 behind an Nginx reverse proxy.',
      challenges: [
        'Handling concurrent inventory updates without overselling',
        'Stripe webhook idempotency under high traffic',
        'Cloudinary transformation pipelines for 10K+ SKU images',
      ],
      metrics: [
        { label: 'Response Time', value: '<80ms' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Concurrent Users', value: '2K+' },
      ],
    },
  },
  {
    id: '2',
    title: 'HealthFirst AI',
    description: 'Precision health monitoring system. Developed a robust Spring Boot microservice architecture that ingests real-time Wear OS telemetry. Implemented AI-driven risk assessment modules using Gemini API to predict health anomalies with 94% accuracy.',
    tech: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'MQTT', 'Gemini AI'],
    image: healthFirstImg,
    github: 'https://github.com/Mit16/HealthFirst-Personalized-Health-Monitoring-System',
    details: {
      architecture: 'Spring Boot microservices communicating via MQTT for real-time Wear OS telemetry ingestion. PostgreSQL for time-series health records, Gemini API for anomaly detection inference.',
      challenges: [
        'Sub-second telemetry ingestion from 100+ concurrent devices',
        'Designing a reliable MQTT broker with QoS guarantees',
        'Tuning Gemini prompts for 94% anomaly detection accuracy',
      ],
      metrics: [
        { label: 'Detection Accuracy', value: '94%' },
        { label: 'Ingestion Latency', value: '<200ms' },
        { label: 'Data Points/Day', value: '1M+' },
      ],
    },
  },
  {
    id: '3',
    title: 'Custom C++ Redis',
    description: 'High-speed in-memory data store built from the ground up. Engineered custom TCP/IP stack handling, protocol serialization, and optimized hash-table data structures for sub-millisecond latency. Focus on low-level memory management and thread safety.',
    tech: ['C++', 'TCP/IP', 'Data Structures', 'Networking'],
    image: Customcppredis,
    github: 'https://github.com/Mit16/Redis-Implementation-in-C-Cpp',
    details: {
      architecture: 'Single-threaded event loop in C++ mimicking Redis internals. Custom RESP protocol parser, hash-table with open addressing, and epoll-based non-blocking I/O.',
      challenges: [
        'Implementing RESP serialization from scratch',
        'Thread-safe hash-table resizing without stop-the-world pauses',
        'Matching Redis latency benchmarks on commodity hardware',
      ],
      metrics: [
        { label: 'GET Latency', value: '<1ms' },
        { label: 'Commands Supported', value: '12' },
        { label: 'Max Throughput', value: '50K ops/s' },
      ],
    },
  },
  {
    id: '4',
    title: 'GenAI Biz Engine',
    description: 'Unified business intelligence platform. Orchestrates complex workflows across multiple external APIs for real-time domain analysis, trademark validation, and automated ad campaign generation. Built for high-throughput decision-making.',
    tech: ['Next.js', 'Python', 'FastAPI', 'Redis', 'Google Cloud'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    details: {
      architecture: 'Next.js frontend orchestrating a Python FastAPI backend. Redis for caching expensive API responses. Google Cloud Run for auto-scaling inference workloads.',
      challenges: [
        'Orchestrating 5+ external APIs with partial failure handling',
        'Keeping trademark search latency under 3s end-to-end',
        'Rate limiting and cost control on Gemini API calls',
      ],
      metrics: [
        { label: 'APIs Orchestrated', value: '5+' },
        { label: 'Avg Response', value: '<3s' },
        { label: 'Cache Hit Rate', value: '72%' },
      ],
    },
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
  { name: 'Node.js', icon: <SiNodedotjs size={28} />, category: 'Backend' },
  { name: 'Spring Boot', icon: <SiSpringboot size={28} />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress size={28} />, category: 'Backend' },
  { name: 'Redis', icon: <SiRedis size={28} />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb size={28} />, category: 'Database' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={28} />, category: 'Database' },
  { name: 'React.js', icon: <SiReact size={28} />, category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs size={28} />, category: 'Frontend' },
  // { name: 'AWS', icon: <SiAmazonwebservices size={28} />, category: 'Tools' },
  // { name: 'AWS', icon: <SiAwslambda size={28} />, category: 'Tools' },
  { name: 'Docker', icon: <SiDocker size={28} />, category: 'Tools' },
  { name: 'JWT/Auth', icon: <SiJsonwebtokens size={28} />, category: 'Tools' },
  { name: 'Kubernetes', icon: <SiKubernetes size={28} />, category: 'Tools' },
];