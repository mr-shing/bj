import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ClientsSection from '@/components/home/ClientsSection';
import ContactSection from '@/components/home/ContactSection';
import ProjectsSection from '@/components/home/ProjectsSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
