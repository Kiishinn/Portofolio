/* ========================
   TYPE DEFINITIONS
   ======================== */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'devops' | 'soft-skills';
}

export interface TechItem {
  name: string;
  icon: string;
  category: string;
  experience: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  category: string;
  features?: string[];
  role?: string;
  duration?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  type: 'education' | 'work' | 'internship' | 'certification';
  icon?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
  category?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon?: string;
}

export interface Publication {
  title: string;
  abstract: string;
  journal: string;
  date: string;
  url?: string;
  doi?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar?: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  roles: string[];
  bio: string;
  email: string;
  phone?: string;
  location: string;
  education: string;
  university: string;
  languages: string[];
  interests: string[];
  careerGoal: string;
  resumeUrl: string;
  social: SocialLink[];
  stats: { label: string; value: number; suffix?: string }[];
}
