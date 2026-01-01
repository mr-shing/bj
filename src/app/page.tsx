import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ClientsSection from '@/components/home/ClientsSection';
import ContactSection from '@/components/home/ContactSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ThreeCanvas from '@/components/home/ThreeCanvas'; // حتماً ایمپورت شود

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden min-h-screen">
      {/* پس‌زمینه سه بعدی */}
      <ThreeCanvas />

      {/* محتوای اصلی روی پس‌زمینه */}
      <div className="relative z-10 w-full">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </div>
    </main>
  );
}