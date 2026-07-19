import Navbar from '@/components/organisms/Navbar/Navbar';
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Skills from '@/components/sections/Skills/Skills';
import TechStack from '@/components/sections/TechStack/TechStack';
import Projects from '@/components/sections/Projects/Projects';
import Experience from '@/components/sections/Experience/Experience';
import Services from '@/components/sections/Services/Services';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import FAQ from '@/components/sections/FAQ/FAQ';
import Contact from '@/components/sections/Contact/Contact';
import Footer from '@/components/sections/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
