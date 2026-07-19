'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/lib/animations';
import Badge from '@/components/atoms/Badge/Badge';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ badge, title, subtitle }) => {
  return (
    <motion.div
      className={styles.header}
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
    >
      <Badge variant="primary">✦ {badge}</Badge>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
