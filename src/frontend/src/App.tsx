import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import MarketContextSection from './components/MarketContextSection';
import TargetClientsSection from './components/TargetClientsSection';
import ReferralProgramSection from './components/ReferralProgramSection';
import PilotProgramSection from './components/PilotProgramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div lang="es" className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <MarketContextSection />
      <TargetClientsSection />
      <ReferralProgramSection />
      <PilotProgramSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
