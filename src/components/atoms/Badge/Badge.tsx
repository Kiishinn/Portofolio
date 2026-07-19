'use client';

import { type FC, type ReactNode } from 'react';
import styles from './Badge.module.css';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'neutral';
  children: ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ variant = 'primary', children, className }) => {
  return (
    <span className={cn(styles.badge, styles[variant], className)}>
      {children}
    </span>
  );
};

export default Badge;
