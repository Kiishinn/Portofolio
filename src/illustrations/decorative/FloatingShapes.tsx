'use client';

import { type FC, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './FloatingShapes.module.css';

const FloatingShapes: FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms for different depths
  const x1 = useTransform(springX, (v) => v * -30);
  const y1 = useTransform(springY, (v) => v * -30);

  const x2 = useTransform(springX, (v) => v * 20);
  const y2 = useTransform(springY, (v) => v * 20);

  const x3 = useTransform(springX, (v) => v * 40);
  const y3 = useTransform(springY, (v) => v * 40);

  const x4 = useTransform(springX, (v) => v * -40);
  const y4 = useTransform(springY, (v) => v * -40);

  const x5 = useTransform(springX, (v) => v * 25);
  const y5 = useTransform(springY, (v) => v * 25);

  const x6 = useTransform(springX, (v) => v * -15);
  const y6 = useTransform(springY, (v) => v * -15);

  const x7 = useTransform(springX, (v) => v * 50);
  const y7 = useTransform(springY, (v) => v * 50);
  const x8 = useTransform(springX, (v) => v * 35);
  const y8 = useTransform(springY, (v) => v * 35);

  const x9 = useTransform(springX, (v) => v * -25);
  const y9 = useTransform(springY, (v) => v * -25);

  const x10 = useTransform(springX, (v) => v * 45);
  const y10 = useTransform(springY, (v) => v * 45);

  const x11 = useTransform(springX, (v) => v * -35);
  const y11 = useTransform(springY, (v) => v * -35);

  const x12 = useTransform(springX, (v) => v * 15);
  const y12 = useTransform(springY, (v) => v * 15);

  const x13 = useTransform(springX, (v) => v * -45);
  const y13 = useTransform(springY, (v) => v * -45);

  return (
    <div className={styles.shapes} aria-hidden="true">
      {/* Circle outlines */}
      <motion.div style={{ x: x1, y: y1, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.circle1}`}
          animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.div style={{ x: x2, y: y2, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.circle2}`}
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div style={{ x: x8, y: y8, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.circle3}`}
          animate={{ y: [-5, 5, -5], rotate: [0, -360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Dots */}
      <motion.div style={{ x: x3, y: y3, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.dot1}`}
          animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div style={{ x: x4, y: y4, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.dot2}`}
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div style={{ x: x5, y: y5, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.dot3}`}
          animate={{ y: [-6, 10, -6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div style={{ x: x9, y: y9, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.dot4}`}
          animate={{ x: [-8, 8, -8], y: [-8, 8, -8] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div style={{ x: x10, y: y10, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.dot5}`}
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Triangles */}
      <motion.div style={{ x: x6, y: y6, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.triangle}`}
          animate={{ rotate: [0, 360], y: [-5, 5, -5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.div style={{ x: x11, y: y11, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.triangle2}`}
          animate={{ rotate: [360, 0], y: [5, -5, 5] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Square */}
      <motion.div style={{ x: x12, y: y12, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.square1}`}
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Crosses */}
      <motion.div style={{ x: x7, y: y7, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.cross1}`}
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.div style={{ x: x13, y: y13, position: 'absolute', inset: 0 }}>
        <motion.div
          className={`${styles.shape} ${styles.cross2}`}
          animate={{ rotate: [360, 270, 180, 90, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingShapes;
