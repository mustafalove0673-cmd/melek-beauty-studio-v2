import Navbar from '@/components/villa/Navbar';
import HeroSection from '@/components/villa/HeroSection';
import FeaturesSection from '@/components/villa/FeaturesSection';
import ShowcaseSection from '@/components/villa/ShowcaseSection';
import StatsSection from '@/components/villa/StatsSection';
import TestimonialsSection from '@/components/villa/TestimonialsSection';
import ContactSection from '@/components/villa/ContactSection';
import Footer from '@/components/villa/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-foreground relative">
      {/* Noise texture overlay for depth */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[100]" />

      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
