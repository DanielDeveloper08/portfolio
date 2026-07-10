export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  companyColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
  logo?: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  location: string;
  availability: string;
}
