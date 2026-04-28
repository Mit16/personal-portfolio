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
import personalAiCtoImg from './assets/personalAiCtoImg.jpg';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FigureFit E-commerce Platform',
    description: 'Built a scalable e-commerce platform for a fashion brand with secure authentication, payment integration, inventory management, and optimized media delivery. Focused heavily on backend architecture, API performance, and real-world commerce workflows.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Cloudinary'],
    image: figureFitImg,
    demo: 'https://figurefitfashion.com',
    details: {
      architecture: 'Built a Node.js backend architecture with REST APIs for product management, cart workflows, authentication, and order processing. Used MongoDB for storing product and user data, Redis for caching frequently accessed data, and Cloudinary for media storage and optimization.',
      challenges: [
        'Managing inventory updates during simultaneous purchases',
        'Implementing secure authentication and authorization flows',
        'Optimizing image uploads and delivery for faster product browsing'
      ],
      metrics: [
        { label: 'Core Modules Built', value: '6+' },
        { label: 'API Endpoints Developed', value: '20+' },
        { label: 'Payment Integration', value: 'Completed' }
      ],
    },
  },
  {
    id: '2',
    title: 'HealthFirst AI',
    description: 'Developed a health monitoring platform that collects wearable device data and uses AI-powered analysis to provide health insights and anomaly detection recommendations.',
    tech: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'MQTT', 'Gemini AI'],
    image: healthFirstImg,
    github: 'https://github.com/Mit16/HealthFirst-Personalized-Health-Monitoring-System',
    details: {
      architecture: 'Built backend services using Spring Boot to process wearable health data streams. Used PostgreSQL for storing health records, MQTT for real-time communication, and Gemini API for generating health recommendations and anomaly detection insights.',
      challenges: [
        'Handling real-time health data ingestion',
        'Integrating wearable device communication',
        'Building reliable AI-generated recommendation workflows'
      ],
      metrics: [
        { label: 'Health Parameters Tracked', value: 'Multiple' },
        { label: 'AI Integration', value: 'Implemented' },
        { label: 'Real-Time Monitoring', value: 'Enabled' }
      ],
    },
  },
  {
    id: '3',
    title: 'Custom Redis Implementation',
    description: 'Built a Redis-inspired in-memory datastore from scratch in C++ to understand database internals, networking, protocol handling, and performance optimization.',
    tech: ['C++', 'TCP/IP', 'Data Structures', 'Networking'],
    image: Customcppredis,
    github: 'https://github.com/Mit16/Redis-Implementation-in-C-Cpp',
    details: {
      architecture: 'Built a custom in-memory key-value store using C++ with socket programming for client-server communication. Implemented command parsing, efficient data storage structures, and explored low-level system design concepts inspired by Redis internals.',
      challenges: [
        'Implementing socket communication from scratch',
        'Designing efficient in-memory storage structures',
        'Understanding database internals and command execution flow'
      ],
      metrics: [
        { label: 'Commands Implemented', value: '10+' },
        { label: 'Data Storage Type', value: 'In-Memory' },
        { label: 'Built From Scratch', value: '100%' }
      ],
    },
  },
  {
    id: '4',
    title: 'Personal AI CTO',
    description: 'Built an AI-powered developer execution system that analyzes GitHub repositories, tracks development progress, and provides personalized recommendations to improve productivity and decision-making.',
    tech: ['Next.js', 'Node.js', 'Python', 'GitHub API', 'AI APIs'],
    image: personalAiCtoImg,
    github: 'YOUR_GITHUB_LINK',
    details: {
      architecture: 'Built an automation-driven system that connects with GitHub repositories, tracks commits and project progress, analyzes development patterns, and generates actionable recommendations using AI models.',
      challenges: [
        'Designing reliable GitHub activity tracking pipelines',
        'Structuring AI outputs into useful recommendations',
        'Building scalable automation workflows for future expansion'
      ],
      metrics: [
        { label: 'Repositories Tracked', value: 'Multiple' },
        { label: 'Automation Workflows', value: 'Built' },
        { label: 'AI Recommendations', value: 'Integrated' }
      ],
    },
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Universe Capital India',
    role: 'IT Developer',
    period: 'Sept 2025 - Present',
    description: [
      'Developed production-ready backend systems for high-traffic Next.js platforms covering authentication, payments, media pipelines, rate-limiting, and admin operations.',

      'Engineered order, refund, and shipment tracking workflows with strong data consistency, automated notifications, and financial reconciliation logic.',

      'Built an internal scheduling system for delayed and batch email automation using Excel ingestion, cookie-based sessions, and background worker processes.',

      'Contributed to a confidential AI-driven business development platform integrating multiple APIs for analysis, automated website generation, ad management, and workflow routing.'
    ],
    tech: [
      'Node.js',
      'Express.js',
      'Next.js',
      'MongoDB',
      'Cloudinary',
      'Razorpay',
      'JWT/OAuth',
      'Redis',
      'Background Workers'
    ]
  },

  {
    company: 'Visvik Business Solutions LLP',
    role: 'Backend Developer',
    period: 'Jul 2025 - Sept 2025',
    description: [
      'Developed backend architecture for the company website including admin dashboards, role-based access control, dynamic team modules, and lead management workflows.',

      'Built backend systems for BobbyMart’s multi-vendor e-commerce platform with modular APIs, authentication systems, and scalable product/vendor/order workflows.',

      'Improved system reliability by defining API contracts, optimizing database queries, and standardizing validation and error handling across services.'
    ],
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Authentication',
      'Database Optimization'
    ]
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

export const FEATURED_PROJECTS = [
  {
    name: "Personal AI CTO",
    description:
      "AI-powered execution system that analyzes repositories, tracks progress, and provides development recommendations.",
    tech: "TypeScript",
    url: "https://github.com/Mit16"
  },
  {
    name: "Custom Redis Implementation",
    description:
      "Built Redis-inspired in-memory datastore from scratch using C++.",
    tech: "C++",
    url: "https://github.com/Mit16/Redis-Implementation-in-C-Cpp"
  },
  {
    name: "HealthFirst AI",
    description:
      "Real-time health monitoring system with wearable integrations and AI recommendations.",
    tech: "JavaScript",
    url: "https://github.com/Mit16/HealthFirst-Personalized-Health-Monitoring-System"
  },
  {
    name: "FigureFit E-commerce",
    description:
      "Production e-commerce backend with payments, inventory workflows, and media pipelines.",
    tech: "Node.js",
    url: "https://figurefitfashion.com"
  }
];