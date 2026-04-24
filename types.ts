// types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  details?: {
    architecture: string;
    challenges: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "Backend" | "Frontend" | "Tools" | "Database";
}
