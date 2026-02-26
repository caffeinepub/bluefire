import { MessageCircle, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToPricing = () => {
    document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.getElementById('que-hacemos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
      />
      {/* Dark Blue Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 37, 64, 0.85)' }}
      />
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,191,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bf-blue/40 bg-bf-blue/10 text-bf-blue text-sm font-semibold mb-8 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-bf-blue animate-pulse-slow inline-block" />
          Especialistas en Ciberseguridad · Reynosa, Tamaulipas
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-4xl mx-auto text-balance">
          Protege tu negocio en Reynosa{' '}
          <span style={{ color: '#00BFFF' }}>antes de que un ataque</span>{' '}
          lo detenga
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
          Seguridad digital local para PyMEs y maquiladoras — con respuesta en menos de 1 hora
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://wa.me/528992284075?text=Hola%2C%20me%20interesa%20el%20diagn%C3%B3stico%20gratuito%20de%2030%20minutos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-md font-bold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-glow"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle className="w-5 h-5" />
            Diagnóstico Gratuito de 30 minutos
          </a>
          <button
            onClick={scrollToPricing}
            className="flex items-center gap-2 px-8 py-4 rounded-md font-bold text-white text-base border-2 border-white/30 hover:border-bf-blue hover:text-bf-blue transition-all duration-200"
          >
            Ver Paquetes
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: '< 1 hora', label: 'Tiempo de respuesta local' },
            { value: '4 servicios', label: 'Especializados IT/OT' },
            { value: '100%', label: 'Enfoque en continuidad operativa' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: '#00BFFF' }}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
