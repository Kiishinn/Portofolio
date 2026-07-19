'use client';

import { type FC, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './Button.module.css';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  href,
  target,
  fullWidth = false,
  className,
  ...props
}) => {
  const buttonClass = cn(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={buttonClass}>
        {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
