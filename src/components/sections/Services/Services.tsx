'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { services } from '@/data/services';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import styles from './Services.module.css';

const Services: FC = () => {
  return (
    <section id="services" className={`section ${styles.services}`} aria-label="Services section">
      <div className="container">
        <SectionHeader
          badge="Services"
          title="What I Offer"
          subtitle="Professional services to help bring your digital vision to reality."
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {services.map((service, index) => {
            const icons = LucideIcons as unknown as Record<string, FC<{ size?: number; strokeWidth?: number }>>;
            const IconComponent = icons[service.icon] || LucideIcons.Code;
            return (
              <motion.div
                key={service.title}
                className={styles.card}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className={styles.iconWrapper} style={{ animationDelay: `${index * 0.5}s` }}>
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((feat) => (
                    <li key={feat} className={styles.feature}>
                      <LucideIcons.Check size={14} className={styles.checkIcon} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
