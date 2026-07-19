'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';

const HeroIllustration: FC = () => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 500, height: 'auto' }}
      aria-hidden="true"
    >
      {/* Background Circle */}
      <motion.circle
        cx="250" cy="250" r="200"
        fill="url(#heroGradientBg)"
        opacity="0.15"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Desk */}
      <rect x="120" y="320" width="260" height="12" rx="6" fill="#E5E7EB" />
      <rect x="160" y="332" width="8" height="60" rx="4" fill="#D1D5DB" />
      <rect x="332" y="332" width="8" height="60" rx="4" fill="#D1D5DB" />
      <rect x="140" y="390" width="50" height="6" rx="3" fill="#E5E7EB" />
      <rect x="310" y="390" width="50" height="6" rx="3" fill="#E5E7EB" />

      {/* Monitor */}
      <rect x="170" y="200" width="160" height="110" rx="12" fill="#1F2937" />
      <rect x="178" y="208" width="144" height="90" rx="6" fill="#111827" />
      <rect x="235" y="310" width="30" height="12" rx="2" fill="#9CA3AF" />
      <rect x="215" y="318" width="70" height="6" rx="3" fill="#D1D5DB" />

      {/* Code lines on screen */}
      <rect x="190" y="220" width="60" height="4" rx="2" fill="#818CF8" opacity="0.9" />
      <rect x="190" y="230" width="90" height="4" rx="2" fill="#6EE7B7" opacity="0.7" />
      <rect x="200" y="240" width="70" height="4" rx="2" fill="#FCD34D" opacity="0.7" />
      <rect x="200" y="250" width="50" height="4" rx="2" fill="#818CF8" opacity="0.6" />
      <rect x="190" y="260" width="80" height="4" rx="2" fill="#67E8F9" opacity="0.7" />
      <rect x="200" y="270" width="100" height="4" rx="2" fill="#A78BFA" opacity="0.6" />
      <rect x="190" y="280" width="40" height="4" rx="2" fill="#6EE7B7" opacity="0.5" />

      {/* Character body */}
      <ellipse cx="100" cy="380" rx="30" ry="8" fill="#E5E7EB" opacity="0.5" /> {/* Shadow */}

      {/* Character - sitting pose */}
      {/* Legs */}
      <rect x="80" y="340" width="16" height="40" rx="8" fill="#4338CA" />
      <rect x="104" y="340" width="16" height="40" rx="8" fill="#3730A3" />
      {/* Shoes */}
      <ellipse cx="88" cy="380" rx="12" ry="6" fill="#1F2937" />
      <ellipse cx="112" cy="380" rx="12" ry="6" fill="#1F2937" />

      {/* Torso */}
      <rect x="72" y="270" width="56" height="75" rx="16" fill="#4F46E5" />
      {/* Shirt detail */}
      <rect x="95" y="275" width="3" height="40" rx="1.5" fill="#4338CA" />

      {/* Arms */}
      <motion.g
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '85px 290px' }}
      >
        {/* Left arm reaching to keyboard */}
        <rect x="55" y="290" width="20" height="14" rx="7" fill="#FBBF24" />
        <rect x="45" y="295" width="22" height="12" rx="6" fill="#FCD34D" />
      </motion.g>

      <motion.g
        animate={{ rotate: [2, -2, 2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '115px 290px' }}
      >
        {/* Right arm */}
        <rect x="125" y="290" width="20" height="14" rx="7" fill="#FBBF24" />
        <rect x="135" y="295" width="22" height="12" rx="6" fill="#FCD34D" />
      </motion.g>

      {/* Keyboard */}
      <rect x="130" y="300" width="80" height="20" rx="6" fill="#F3F4F6" />
      <rect x="134" y="304" width="10" height="5" rx="1.5" fill="#D1D5DB" />
      <rect x="148" y="304" width="10" height="5" rx="1.5" fill="#D1D5DB" />
      <rect x="162" y="304" width="10" height="5" rx="1.5" fill="#D1D5DB" />
      <rect x="176" y="304" width="10" height="5" rx="1.5" fill="#D1D5DB" />
      <rect x="190" y="304" width="10" height="5" rx="1.5" fill="#D1D5DB" />
      <rect x="140" y="312" width="50" height="4" rx="1.5" fill="#D1D5DB" />

      {/* Head */}
      <circle cx="100" cy="248" r="30" fill="#FCD34D" />
      {/* Hair */}
      <path d="M70 240 Q75 210 100 208 Q125 210 130 240" fill="#1F2937" />
      <rect x="70" y="232" width="60" height="12" rx="6" fill="#1F2937" />
      {/* Eyes */}
      <circle cx="90" cy="250" r="3.5" fill="#1F2937" />
      <circle cx="110" cy="250" r="3.5" fill="#1F2937" />
      <circle cx="91" cy="249" r="1.2" fill="white" />
      <circle cx="111" cy="249" r="1.2" fill="white" />
      {/* Smile */}
      <path d="M92 260 Q100 267 108 260" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Glasses */}
      <circle cx="90" cy="250" r="10" stroke="#6B7280" strokeWidth="2" fill="none" />
      <circle cx="110" cy="250" r="10" stroke="#6B7280" strokeWidth="2" fill="none" />
      <line x1="100" y1="249" x2="100" y2="249" stroke="#6B7280" strokeWidth="2" />

      {/* Floating tech icons */}
      <motion.g
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* React icon */}
        <circle cx="380" cy="160" r="22" fill="#DBEAFE" />
        <circle cx="380" cy="160" r="5" fill="#3B82F6" />
        <ellipse cx="380" cy="160" rx="16" ry="7" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
        <ellipse cx="380" cy="160" rx="16" ry="7" stroke="#3B82F6" strokeWidth="1.5" fill="none" transform="rotate(60 380 160)" />
        <ellipse cx="380" cy="160" rx="16" ry="7" stroke="#3B82F6" strokeWidth="1.5" fill="none" transform="rotate(-60 380 160)" />
      </motion.g>

      <motion.g
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        {/* Laravel icon */}
        <circle cx="400" cy="280" r="20" fill="#FEE2E2" />
        <text x="400" y="286" textAnchor="middle" fontSize="18" fill="#EF4444">L</text>
      </motion.g>

      <motion.g
        animate={{ y: [-8, 4, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        {/* JS icon */}
        <rect x="355" y="80" width="36" height="36" rx="8" fill="#FEF3C7" />
        <text x="373" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#F59E0B">JS</text>
      </motion.g>

      <motion.g
        animate={{ y: [4, -6, 4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        {/* Database icon */}
        <circle cx="430" cy="220" r="18" fill="#ECFDF5" />
        <ellipse cx="430" cy="214" rx="10" ry="5" fill="#10B981" />
        <rect x="420" y="214" width="20" height="12" fill="#ECFDF5" />
        <ellipse cx="430" cy="226" rx="10" ry="5" stroke="#10B981" strokeWidth="2" fill="none" />
        <line x1="420" y1="214" x2="420" y2="226" stroke="#10B981" strokeWidth="2" />
        <line x1="440" y1="214" x2="440" y2="226" stroke="#10B981" strokeWidth="2" />
      </motion.g>

      {/* Coffee cup */}
      <rect x="230" y="290" width="20" height="26" rx="3" fill="#F3F4F6" />
      <path d="M250 298 Q260 298 260 306 Q260 314 250 314" stroke="#D1D5DB" strokeWidth="2" fill="none" />
      <motion.path
        d="M235 288 Q237 282 240 288"
        stroke="#9CA3AF"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        animate={{ y: [-2, -6, -2], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="heroGradientBg" x1="50" y1="50" x2="450" y2="450">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroIllustration;
