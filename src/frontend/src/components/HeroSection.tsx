import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary tracking-wide">BlueFire</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
          Protección Cibernética
          <br />
          <span className="text-primary">para México</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Consultoría especializada en ciberseguridad para PYMEs y maquiladoras.
          Protegemos sus activos digitales con soluciones integradas de networking y seguridad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Solicitar Evaluación Gratuita
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6"
          >
            Conocer Servicios
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">40B+</div>
            <div className="text-sm text-slate-600">Intentos de ataque en México (H1 2025)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">74%</div>
            <div className="text-sm text-slate-600">Empresas afectadas por ransomware</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-slate-600">PYMEs en México necesitan protección</div>
          </div>
        </div>
      </div>
    </section>
  );
}
