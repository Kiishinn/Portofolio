import type { Service, Testimonial, FAQ } from '@/types/common';

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Web Development',
    description: 'Membangun website modern, cepat, dan responsif menggunakan teknologi terkini.',
    features: ['Custom Website', 'Web Application', 'Landing Page', 'E-Commerce'],
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Merancang antarmuka yang intuitif dan menarik dengan fokus pada user experience.',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design System'],
  },
  {
    icon: 'Server',
    title: 'Backend Development',
    description: 'Membangun API dan backend system yang scalable, secure, dan well-documented.',
    features: ['REST API', 'Database Design', 'Authentication', 'Server Management'],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Mengembangkan aplikasi mobile cross-platform dengan performa native.',
    features: ['Flutter App', 'React Native', 'Push Notification', 'Offline Support'],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'StartupXYZ',
    text: 'Nabil adalah developer yang sangat profesional. Website yang dibuatnya tidak hanya indah tapi juga sangat cepat. Sangat merekomendasikan!',
    rating: 5,
  },
  {
    name: 'Sari Dewi',
    role: 'Project Manager',
    company: 'PT Digital Kreatif',
    text: 'Kolaborasi yang sangat baik. Nabil selalu memberikan solusi kreatif dan menyelesaikan project tepat waktu. Kualitas kodenya sangat bersih.',
    rating: 5,
  },
  {
    name: 'Andi Wijaya',
    role: 'Founder',
    company: 'Toko Online ID',
    text: 'Website e-commerce yang dibangun Nabil sangat membantu bisnis kami. Penjualan online meningkat 200% setelah relaunch website.',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Teknologi apa yang biasa Anda gunakan?',
    answer: 'Saya menggunakan stack modern seperti React, Next.js, TypeScript untuk frontend, dan Laravel, Node.js untuk backend. Untuk database, saya terbiasa dengan MySQL, PostgreSQL, dan MongoDB.',
  },
  {
    question: 'Berapa lama waktu pengerjaan project?',
    answer: 'Tergantung kompleksitas project. Landing page biasanya 1-2 minggu, web application 1-3 bulan. Saya selalu memberikan timeline yang realistis di awal project.',
  },
  {
    question: 'Apakah tersedia untuk freelance?',
    answer: 'Ya! Saya terbuka untuk project freelance. Silakan hubungi melalui form kontak atau WhatsApp untuk diskusi lebih lanjut tentang kebutuhan Anda.',
  },
  {
    question: 'Apakah menyediakan maintenance setelah project selesai?',
    answer: 'Tentu saja. Saya menyediakan maintenance dan support setelah project selesai. Biasanya 1 bulan pertama gratis maintenance untuk fix minor bugs.',
  },
  {
    question: 'Bagaimana proses kerja Anda?',
    answer: 'Dimulai dari diskusi kebutuhan, pembuatan wireframe/design, development, testing, hingga deployment. Saya menggunakan metodologi Agile dengan update progress secara berkala.',
  },
];
