import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div lang="es-MX" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <PricingSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
