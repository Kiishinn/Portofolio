'use client';

import { type FC, useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navLinks } from '@/data/personal';
import { Button } from '@/components/atoms/Button';
import styles from './Navbar.module.css';
import { cn } from '@/lib/utils';

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();

  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace('#', '')),
    []
  );
  const scrollActiveSection = useActiveSection(sectionIds);
  
  // Override active section during smooth scroll so the box flies straight there
  const [clickedSection, setClickedSection] = useState<string | null>(null);
  const activeSection = clickedSection || scrollActiveSection;

  // Clear the override once the scroll finishes
  useEffect(() => {
    if (clickedSection && scrollActiveSection === clickedSection) {
      const t = setTimeout(() => setClickedSection(null), 100);
      return () => clearTimeout(t);
    }
  }, [scrollActiveSection, clickedSection]);

  const navbarClass = cn(
    styles.navbar,
    !isAtTop && styles.scrolled,
    scrollDirection === 'down' && !isAtTop && styles.hidden
  );

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    
    const targetId = href.replace('#', '');
    setClickedSection(targetId);

    if (typeof window !== 'undefined' && (window as any).lenis) {
      // Use Lenis for premium smooth scroll with offset for the navbar
      (window as any).lenis.scrollTo(href, { 
        offset: -72,
        duration: 0.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 4) // easeOutQuart for snappy start
      });
    } else {
      // Fallback
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className={navbarClass}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className={styles.container} aria-label="Main navigation">
          {/* Logo */}
          <a
            href="#hero"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            aria-label="Go to top"
          >
            <span className={styles.logoGradient}>NSP</span>
            <span className={styles.logoDot}>.</span>
          </a>

          {/* Desktop Nav */}
          <ul className={styles.desktopNav} role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className={cn(
                    styles.navLink,
                    activeSection === link.href.replace('#', '') && styles.active
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeSection"
                      transition={{ type: 'tween', ease: 'circOut', duration: 0.25 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className={styles.mobileNav}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        styles.mobileNavLink,
                        activeSection === link.href.replace('#', '') && styles.active
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => handleNavClick('#contact')}
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
