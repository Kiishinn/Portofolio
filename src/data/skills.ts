import type { Skill } from '@/types/common';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'Code2' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: 'Palette' },
  { name: 'JavaScript', level: 88, category: 'frontend', icon: 'FileCode2' },
  { name: 'TypeScript', level: 82, category: 'frontend', icon: 'FileType' },
  { name: 'React', level: 85, category: 'frontend', icon: 'Atom' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: 'Globe' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: 'Wind' },

  // Backend
  { name: 'PHP', level: 90, category: 'backend', icon: 'Server' },
  { name: 'Laravel', level: 92, category: 'backend', icon: 'Box' },
  { name: 'Node.js', level: 75, category: 'backend', icon: 'Hexagon' },
  { name: 'REST API', level: 85, category: 'backend', icon: 'Webhook' },
  { name: 'Express.js', level: 70, category: 'backend', icon: 'Layers' },

  // Database
  { name: 'MySQL', level: 88, category: 'database', icon: 'Database' },
  { name: 'MongoDB', level: 70, category: 'database', icon: 'Leaf' },
  { name: 'Firebase', level: 72, category: 'database', icon: 'Flame' },

  // Tools
  { name: 'Git', level: 88, category: 'tools', icon: 'GitBranch' },
  { name: 'VS Code', level: 92, category: 'tools', icon: 'Code' },
  { name: 'Figma', level: 80, category: 'tools', icon: 'Figma' },
  { name: 'Postman', level: 85, category: 'tools', icon: 'Send' },
  { name: 'Docker', level: 65, category: 'tools', icon: 'Container' },

  // DevOps
  { name: 'Vercel', level: 82, category: 'devops', icon: 'Triangle' },
  { name: 'GitHub Actions', level: 70, category: 'devops', icon: 'GitPullRequest' },

  // Soft Skills
  { name: 'Problem Solving', level: 90, category: 'soft-skills', icon: 'Lightbulb' },
  { name: 'Communication', level: 85, category: 'soft-skills', icon: 'MessageSquare' },
  { name: 'Teamwork', level: 88, category: 'soft-skills', icon: 'Users' },
  { name: 'Leadership', level: 78, category: 'soft-skills', icon: 'Crown' },
  { name: 'Time Management', level: 82, category: 'soft-skills', icon: 'Clock' },
];

export const skillCategories = [
  { key: 'all', label: 'All Skills' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' },
  { key: 'devops', label: 'DevOps' },
  { key: 'soft-skills', label: 'Soft Skills' },
];
