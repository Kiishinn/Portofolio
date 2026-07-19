# Nabil Syawaludin Prima - Personal Portfolio

A modern, highly interactive personal portfolio built with a **Neo-Brutalist** design aesthetic. It features dynamic animations, solid colors, hard shadows, and responsive layouts that look great on any device.

## 🚀 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules (Vanilla CSS) with Neo-Brutalist tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Smooth Scrolling**: [Lenis](https://studiofreight.github.io/lenis/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🎨 Design System (Neo-Brutalism)

This project heavily embraces the neo-brutalist design philosophy:
- High contrast borders (usually 2px solid black).
- Hard, solid-colored box shadows.
- Vibrant, playful color palettes.
- Micro-interactions (bounce/spring effects) on hover.

## 📁 Project Structure

All data content is cleanly separated from the UI components for easy editing. You can update your portfolio content by modifying the files in the `src/data/` directory:

- `src/data/personal.ts` - Bio, stats, social links, and navigation.
- `src/data/experience.ts` - Work history, education, and certificates.
- `src/data/projects.ts` - Project showcases with images and tech stacks.
- `src/data/skills.ts` - Technical skills.
- `src/data/services.ts` - Services offered and testimonials.

## 🛠️ How to Run Locally

First, make sure you have Node.js installed. Then, follow these steps:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **View in browser**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Editing Images

To update project thumbnails, simply add your image files (preferably `.webp` or `.png`) into the `public/images/projects/` directory, and make sure the file name matches the `image` string in `src/data/projects.ts`.

---
*Designed & Developed by Nabil Syawaludin Prima.*
