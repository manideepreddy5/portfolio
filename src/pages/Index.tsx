import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificationsSection } from '@/components/CertificationsSection'
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Logic for entrance graphics
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Sections wrapped in reveal divs */}
        <div className="reveal active"><HeroSection /></div>
        <div className="reveal"><AboutSection /></div>
        <div className="reveal"><SkillsSection /></div>
        <div className="reveal"><EducationSection /></div>
        <div className="reveal"><ProjectsSection /></div>
        <div className="reveal"><CertificationsSection /></div>
        <div className="reveal"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;