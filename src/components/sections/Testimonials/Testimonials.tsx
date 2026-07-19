'use client';

import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/services';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import { fadeUp, viewportConfig } from '@/lib/animations';
import styles from './Testimonials.module.css';

const Testimonials: FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className={`section ${styles.testimonials}`} aria-label="Testimonials section">
      <div className="container">
        <SectionHeader
          badge="Testimonials"
          title="What People Say"
          subtitle="Kind words from clients and colleagues I've had the pleasure to work with."
        />

        <motion.div
          className={styles.slider}
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <div className={styles.quoteIcon} aria-hidden="true">
            <Quote size={48} strokeWidth={1} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.card}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <p className={styles.text}>&ldquo;{testimonial.text}&rdquo;</p>

              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.controlBtn} onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.controlBtn} onClick={next} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
