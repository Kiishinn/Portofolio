'use client';

import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/services';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import styles from './FAQ.module.css';

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section ${styles.faq}`} aria-label="FAQ section">
      <div className="container">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about my work process and services."
        />

        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
              variants={fadeUp}
            >
              <button
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <motion.span
                  className={styles.chevron}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className={styles.answerText}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
