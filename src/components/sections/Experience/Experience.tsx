'use client';

import { type FC, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Building, Award } from 'lucide-react';
import { experiences, experienceCategories } from '@/data/experience';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import { fadeUp, viewportConfig } from '@/lib/animations';
import { formatDate } from '@/lib/utils';
import styles from './Experience.module.css';

const iconMap: Record<string, FC<{ size?: number }>> = {
  GraduationCap,
  Briefcase,
  Building,
  Rocket: Briefcase,
  Award,
};

const Experience: FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(
    () => activeFilter === 'all' ? experiences : experiences.filter((e) => e.type === activeFilter),
    [activeFilter]
  );

  return (
    <section id="experience" className={`section ${styles.experience}`} aria-label="Experience section">
      <div className="container">
        <SectionHeader
          badge="Experience"
          title="My Journey"
          subtitle="Education, work experience, and professional milestones along the way."
        />

        {/* Filter */}
        <motion.div
          className={styles.filters}
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {experienceCategories.map((cat) => (
            <button
              key={cat.key}
              className={`${styles.filter} ${activeFilter === cat.key ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {filtered.map((item, index) => {
            const IconComponent = item.icon ? iconMap[item.icon] || Briefcase : Briefcase;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewportConfig}
              >
                {/* Dot */}
                <div className={styles.timelineDot}>
                  <IconComponent size={16} />
                </div>

                {/* Card */}
                <div className={styles.timelineCard}>
                  <div className={styles.cardDate}>
                    {formatDate(item.startDate)} — {item.endDate === 'Present' ? 'Present' : formatDate(item.endDate)}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <div className={styles.cardOrg}>{item.organization}</div>
                  {item.location && <div className={styles.cardLocation}>{item.location}</div>}
                  <p className={styles.cardDesc}>{item.description}</p>
                  <span className={`${styles.typeBadge} ${styles[item.type]}`}>
                    {item.type}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
