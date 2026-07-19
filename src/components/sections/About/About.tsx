'use client';

import { type FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Globe, Heart } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useCountUp } from '@/hooks/useCountUp';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportConfig } from '@/lib/animations';
import styles from './About.module.css';

const About: FC = () => {
  return (
    <section id="about" className={`section ${styles.about}`} aria-label="About section">
      <div className="container">
        <SectionHeader
          badge="About Me"
          title="Get To Know Me"
          subtitle="A passionate developer who loves turning ideas into beautiful, functional digital experiences."
        />

        <div className={styles.grid}>
          {/* Illustration / Image side */}
          <motion.div
            className={styles.imageCol}
            variants={slideLeft}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <Image 
                  src="/images/profile.jpg" 
                  alt={`${personalInfo.name} Profile`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className={styles.imageDecor} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className={styles.contentCol}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
          >
            <motion.p className={styles.bio} variants={fadeUp}>
              {personalInfo.bio}
            </motion.p>

            <motion.blockquote className={styles.quote} variants={fadeUp}>
              &ldquo;{personalInfo.careerGoal}&rdquo;
            </motion.blockquote>

            {/* Info cards */}
            <motion.div className={styles.infoGrid} variants={fadeUp}>
              <div className={styles.infoCard}>
                <GraduationCap size={22} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Education</span>
                  <span className={styles.infoValue}>{personalInfo.education}</span>
                </div>
              </div>
              <div className={styles.infoCard}>
                <MapPin size={22} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>{personalInfo.location}</span>
                </div>
              </div>
              <div className={styles.infoCard}>
                <Globe size={22} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Languages</span>
                  <span className={styles.infoValue}>{personalInfo.languages.join(', ')}</span>
                </div>
              </div>
              <div className={styles.infoCard}>
                <Heart size={22} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Interests</span>
                  <span className={styles.infoValue}>{personalInfo.interests.slice(0, 3).join(', ')}</span>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div className={styles.stats} variants={fadeUp}>
              {personalInfo.stats.map((stat) => (
                <StatItem key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Stat counter sub-component */
const StatItem: FC<{ label: string; value: number; suffix?: string }> = ({ label, value, suffix }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div className={styles.statItem} ref={ref}>
      <span className={styles.statValue}>
        {count}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

export default About;
