import type { Experience } from '@/types/common';

export const experiences: Experience[] = [
  {
    id: 'edu-university',
    title: 'S1 Sistem Informasi',
    organization: 'Universitas Multi Data Palembang',
    location: 'Palembang',
    startDate: '2022-08',
    endDate: '2026-07',
    description: 'Mempelajari analisis sistem, basis data, rekayasa perangkat lunak, dan pengembangan web.',
    type: 'education',
    icon: 'GraduationCap',
  },
  {
    id: 'freelance',
    title: 'Freelance Web Developer',
    organization: 'Self-employed',
    location: 'Remote',
    startDate: '2024-03',
    endDate: 'Present',
    description: 'Membangun website untuk UMKM dan startup. Fokus pada desain responsif, performa, dan user experience yang optimal.',
    type: 'work',
    icon: 'Rocket',
  },
  {
    id: 'cert-dicoding-web',
    title: 'Belajar Dasar Pemrograman Web',
    organization: 'Dicoding Indonesia',
    location: 'Online',
    startDate: '2024-04',
    endDate: '2024-04',
    description: 'Sertifikat Kelulusan Kelas Belajar Dasar Pemrograman Web. ID Sertifikat: N9ZOME6GYPG5. Berlaku hingga 19 April 2027.',
    type: 'certification',
    icon: 'Award',
  },
  {
    id: 'cert-lsp',
    title: 'Sertifikasi Kompetensi Profesi (LSP)',
    organization: 'Lembaga Sertifikasi Profesi',
    location: 'Palembang',
    startDate: '2026-07',
    endDate: '2026-07',
    description: 'Telah berhasil menyelesaikan ujian sertifikasi profesi resmi untuk memvalidasi kompetensi dan keahlian di bidang teknologi informasi.',
    type: 'certification',
    icon: 'Award',
  },
];

export const experienceCategories = [
  { key: 'all', label: 'All' },
  { key: 'education', label: 'Education' },
  { key: 'work', label: 'Work' },
  { key: 'internship', label: 'Internship' },
  { key: 'certification', label: 'Certification' },
];
