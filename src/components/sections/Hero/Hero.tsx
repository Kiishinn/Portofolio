'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Mail } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { personalInfo } from '@/data/personal';
import { Button } from '@/components/atoms/Button';
import { fadeUp, staggerContainer } from '@/lib/animations';
import FloatingShapes from '@/illustrations/decorative/FloatingShapes';
import Image from 'next/image';
import styles from './Hero.module.css';

/* Inline SVG icons for brands (not in lucide-react) */
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Hero: FC = () => {
  const typedText = useTypingEffect(personalInfo.roles, 80, 50, 2000);

  const socialIcons: Record<string, React.ReactNode> = {
    Github: <GithubIcon />,
    Linkedin: <LinkedinIcon />,
    Mail: <Mail size={20} />,
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Hero section">
      <FloatingShapes />

      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Greeting */}
          <motion.div className={styles.greeting} variants={fadeUp}>
            <span className={styles.wave} aria-hidden="true">👋</span>
            <span>Hello, I&apos;m</span>
          </motion.div>

          {/* Name */}
          <motion.h1 className={styles.name} variants={fadeUp}>
            <span className={styles.gradientText}>{personalInfo.name}</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div className={styles.roleWrapper} variants={fadeUp}>
            <span className={styles.roleStatic}>I&apos;m a </span>
            <span className={styles.roleTyping}>
              {typedText}
              <span className={styles.cursor} aria-hidden="true">|</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p className={styles.bio} variants={fadeUp}>
            Fresh graduate Sistem Informasi yang passionate membangun
            aplikasi web modern dengan <strong>React</strong>, <strong>Next.js</strong>,
            dan <strong>Laravel</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div className={styles.ctas} variants={fadeUp}>
            <Button
              variant="primary"
              size="lg"
              href={personalInfo.resumeUrl}
              target="_blank"
              icon={<Download size={18} />}
            >
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social */}
          <motion.div className={styles.social} variants={fadeUp}>
            {personalInfo.social
              .filter((s) => ['Github', 'Linkedin', 'Mail'].includes(s.icon))
              .map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.name}
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/images/hero-photo.jpg" 
                alt={`${personalInfo.name} Hero`}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to about section"
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
