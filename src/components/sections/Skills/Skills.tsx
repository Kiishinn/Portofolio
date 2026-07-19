'use client';

import { type FC, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { skills, skillCategories } from '@/data/skills';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import styles from './Skills.module.css';

const Skills: FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = useMemo(
    () => activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className={`section ${styles.skills}`} aria-label="Skills section">
      <div className="container">
        <SectionHeader
          badge="Skills"
          title="What I Can Do"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        {/* Category Tabs */}
        <motion.div
          className={styles.tabs}
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              className={`${styles.tab} ${activeCategory === cat.key ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const icons = LucideIcons as unknown as Record<string, FC<{ size?: number }>>;
              const IconComponent = skill.icon ? icons[skill.icon] : null;
              return (
                <motion.div
                  key={skill.name}
                  className={styles.card}
                  variants={fadeUp}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      {IconComponent ? <IconComponent size={22} /> : <LucideIcons.Code size={22} />}
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
