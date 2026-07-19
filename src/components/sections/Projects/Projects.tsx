'use client';

import { type FC, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Globe, Smartphone, Palette } from 'lucide-react';
import Image from 'next/image';
import { projects, projectCategories } from '@/data/projects';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import Badge from '@/components/atoms/Badge/Badge';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import styles from './Projects.module.css';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'web': return <Globe size={48} strokeWidth={1.5} color="var(--color-primary)" />;
    case 'mobile': return <Smartphone size={48} strokeWidth={1.5} color="var(--color-accent)" />;
    case 'design': return <Palette size={48} strokeWidth={1.5} color="var(--color-secondary)" />;
    default: return <Code2 size={48} strokeWidth={1.5} color="var(--color-primary)" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'web': return '#EEF4FF'; 
    case 'mobile': return '#F0FDF4'; 
    case 'design': return '#FFF1EE'; 
    default: return '#F3F4F6';
  }
};

const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(
    () => activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className={`section ${styles.projects}`} aria-label="Projects section">
      <div className="container">
        <SectionHeader
          badge="Projects"
          title="My Recent Work"
          subtitle="A selection of projects that showcase my skills and passion for development."
        />

        {/* Filter */}
        <motion.div
          className={styles.filters}
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              className={`${styles.filter} ${activeCategory === cat.key ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className={styles.card}
                variants={fadeUp}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                {/* Thumbnail */}
                <div className={styles.thumbnail} style={{ backgroundColor: getCategoryColor(project.category) }}>
                  {/* Note: Uncomment below when actual images are available in public/images/projects/ */}
                  {/* project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : */ (
                    <div className={styles.thumbnailInner}>
                      {getCategoryIcon(project.category)}
                      <span className={styles.thumbnailLabel}>{project.title}</span>
                    </div>
                  )}
                  <div className={styles.thumbnailOverlay}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.overlayLink} aria-label={`GitHub: ${project.title}`}>
                        <GithubIcon /> Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.overlayLink} aria-label={`Demo: ${project.title}`}>
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  {/* Tech badges */}
                  <div className={styles.techBadges}>
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="neutral">{tech}</Badge>
                    ))}
                  </div>

                  {/* Meta */}
                  {(project.role || project.duration) && (
                    <div className={styles.meta}>
                      {project.role && <span className={styles.metaItem}>{project.role}</span>}
                      {project.duration && <span className={styles.metaItem}>{project.duration}</span>}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
