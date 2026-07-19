'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import styles from './TechStack.module.css';

interface TechItem {
  name: string;
  color: string;
  bgColor: string;
  iconUrl: string;
  category: string;
}

const getDevicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

const techStack: TechItem[] = [
  { name: 'HTML5', color: '#E34F26', bgColor: '#FFF1EE', iconUrl: getDevicon('html5/html5-original'), category: 'Language' },
  { name: 'CSS3', color: '#1572B6', bgColor: '#EEF4FF', iconUrl: getDevicon('css3/css3-original'), category: 'Language' },
  { name: 'JavaScript', color: '#F7DF1E', bgColor: '#FFFDE7', iconUrl: getDevicon('javascript/javascript-original'), category: 'Language' },
  { name: 'TypeScript', color: '#3178C6', bgColor: '#EEF2FF', iconUrl: getDevicon('typescript/typescript-original'), category: 'Language' },
  { name: 'PHP', color: '#777BB4', bgColor: '#F3F0FF', iconUrl: getDevicon('php/php-original'), category: 'Language' },
  { name: 'React', color: '#61DAFB', bgColor: '#ECFEFF', iconUrl: getDevicon('react/react-original'), category: 'Framework' },
  { name: 'Next.js', color: '#111827', bgColor: '#F3F4F6', iconUrl: getDevicon('nextjs/nextjs-original'), category: 'Framework' },
  { name: 'Laravel', color: '#FF2D20', bgColor: '#FEF2F2', iconUrl: getDevicon('laravel/laravel-original'), category: 'Framework' },
  { name: 'Node.js', color: '#339933', bgColor: '#F0FDF4', iconUrl: getDevicon('nodejs/nodejs-original'), category: 'Runtime' },
  { name: 'MySQL', color: '#4479A1', bgColor: '#EFF6FF', iconUrl: getDevicon('mysql/mysql-original'), category: 'Database' },
  { name: 'MongoDB', color: '#47A248', bgColor: '#F0FDF4', iconUrl: getDevicon('mongodb/mongodb-original'), category: 'Database' },
  { name: 'Git', color: '#F05032', bgColor: '#FEF2F2', iconUrl: getDevicon('git/git-original'), category: 'Tool' },
  { name: 'Docker', color: '#2496ED', bgColor: '#EFF6FF', iconUrl: getDevicon('docker/docker-original'), category: 'Tool' },
  { name: 'Figma', color: '#F24E1E', bgColor: '#FFF1EE', iconUrl: getDevicon('figma/figma-original'), category: 'Design' },
  { name: 'Vercel', color: '#111827', bgColor: '#F3F4F6', iconUrl: getDevicon('vercel/vercel-original'), category: 'Platform' },
  { name: 'Tailwind', color: '#06B6D4', bgColor: '#ECFEFF', iconUrl: getDevicon('tailwindcss/tailwindcss-original'), category: 'Framework' },
];

const TechStack: FC = () => {
  return (
    <section id="techstack" className={`section ${styles.techstack}`} aria-label="Tech Stack section">
      <div className="container">
        <SectionHeader
          badge="Tech Stack"
          title="Technologies I Use"
          subtitle="My go-to tools and technologies for building modern web applications."
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className={styles.item}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div
                className={styles.logo}
                style={{ backgroundColor: tech.bgColor }}
              >
                <img 
                  src={tech.iconUrl} 
                  alt={`${tech.name} logo`} 
                  width={32} 
                  height={32} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className={styles.name}>{tech.name}</span>
              <span className={styles.category}>{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
