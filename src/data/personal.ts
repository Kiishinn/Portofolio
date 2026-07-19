import type { PersonalInfo } from '@/types/common';

export const personalInfo: PersonalInfo = {
  name: 'Nabil Syawaludin Prima',
  firstName: 'Nabil',
  title: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Laravel Specialist',
    'React Developer',
    'Problem Solver',
  ],
  bio: 'Saya adalah seorang Fresh Graduate Sistem Informasi yang passionate dalam membangun aplikasi web modern. Dengan pengalaman dalam Full Stack Development menggunakan Laravel, React, dan Next.js, saya selalu berusaha menciptakan solusi digital yang tidak hanya fungsional tetapi juga memiliki user experience yang luar biasa.',
  email: 'nabilsyawaludin108.@gmail.com',
  phone: '+6282185439224',
  location: 'Palembang, Indonesia',
  education: 'S1 Sistem Informasi',
  university: 'Universitas Multi Data Palembang',
  languages: ['Bahasa Indonesia', 'English'],
  interests: ['Web Development', 'UI Design', 'Open Source', 'Tech Community', 'Photography'],
  careerGoal: 'Menjadi Full Stack Developer yang mampu membangun produk digital berkualitas tinggi dan berkontribusi pada ekosistem teknologi Indonesia.',
  resumeUrl: '/files/resume.pdf',
  social: [
    { name: 'GitHub', url: 'https://github.com/Kiishinn', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nabil-syawaludin-a7b9b841a', icon: 'Linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/nabilsywl', icon: 'Instagram' },
    { name: 'Email', url: 'nabilsyawaludin108.@gmail.com', icon: 'Mail' },
    { name: 'WhatsApp', url: 'https://wa.me/6282185439224', icon: 'MessageCircle' },
  ],
  stats: [
    { label: 'Projects', value: 10, suffix: '+' },
    { label: 'Technologies', value: 30, suffix: '+' },
    { label: 'Certificates', value: 3, suffix: '+' },
    { label: 'Years Learning', value: 3, suffix: '+' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
