import { MapPin, Activity, Cpu, DollarSign } from 'lucide-react';

const differentiators = [
  {
    icon: MapPin,
    title: 'Soporte local en Reynosa',
    subtitle: 'Respuesta en menos de 1 hora',
    description:
      'Nuestro equipo está físicamente en Reynosa. Cuando hay un incidente, llegamos a tu empresa — no te dejamos solo con un ticket de soporte.',
    color: '#00BFFF',
    stat: '< 1 hora',
    statLabel: 'tiempo de respuesta',
  },
  {
    icon: Activity,
    title: 'Continuidad operativa primero',
    subtitle: 'No solo cumplimiento normativo',
    description:
      'Nos enfocamos en que tu línea de producción y operaciones nunca se detengan. La seguridad al servicio del negocio, no al revés.',
    color: '#FF0033',
    stat: '0',
    statLabel: 'interrupciones operativas',
  },
  {
    icon: Cpu,
    title: 'Especialistas IT/OT',
    subtitle: 'Para entornos de maquiladora',
    description:
      'Entendemos PLCs, HMIs, SCADA y redes industriales. No solo protegemos computadoras de oficina — protegemos toda tu infraestructura de producción.',
    color: '#0A2540',
    stat: 'IT + OT',
    statLabel: 'cobertura completa',
  },
  {
    icon: DollarSign,
    title: 'Precios accesibles para PyMEs',
    subtitle: 'Desde $6,500 MXN',
    description:
      'Diseñamos paquetes que caben en el presupuesto de una PyME. Ciberseguridad profesional no debería ser solo para grandes corporativos.',
    color: '#00BFFF',
    stat: '$6,500',
    statLabel: 'desde MXN',
  },
];

export default function DifferentiatorsSection() {
  return (
    <section id="por-que-nosotros" className="py-24 bg-bf-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: '#0A2540', borderColor: '#00BFFF', backgroundColor: 'rgba(0,191,255,0.08)' }}
          >
            Nuestra diferencia
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#0A2540' }}>
            ¿Por qué Bluefire Cysec?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No somos una empresa de ciberseguridad genérica. Somos el equipo de seguridad local de Reynosa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-black mb-0.5" style={{ color: '#0A2540' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: item.color }}>
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Stat */}
                <div
                  className="mt-6 pt-4 border-t flex items-center gap-3"
                  style={{ borderColor: `${item.color}25` }}
                >
                  <span className="text-2xl font-black" style={{ color: item.color }}>
                    {item.stat}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/8995081015?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Bluefire%20Cysec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-glow"
            style={{ backgroundColor: '#0A2540' }}
          >
            Hablar con un especialista →
          </a>
        </div>
      </div>
    </section>
  );
}
