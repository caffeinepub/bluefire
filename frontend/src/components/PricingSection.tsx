import { Check, Star, MessageCircle } from 'lucide-react';

interface PricingPackage {
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  color: string;
  icon: string;
}

const packages: PricingPackage[] = [
  {
    name: 'Básico',
    description: 'Ideal para PyMEs que quieren empezar a protegerse sin grandes inversiones.',
    features: [
      'Asset Registry (hasta 25 activos)',
      'Vulnerability Assessment básico',
      'Reporte ejecutivo de hallazgos',
      'Recomendaciones de remediación',
      'Soporte por correo 5 días',
    ],
    ctaText: 'Solicitar Básico',
    color: '#00BFFF',
    icon: '🛡️',
  },
  {
    name: 'Estándar',
    description: 'El paquete más completo para PyMEs que necesitan protección real y continua.',
    features: [
      'Asset Registry completo (hasta 100 activos)',
      'Vulnerability Assessment profundo',
      'Remediación de vulnerabilidades críticas',
      'Segmentación básica de red',
      'Curso Anti-Phishing (hasta 20 usuarios)',
      'Reporte técnico + ejecutivo',
      'Soporte presencial en Reynosa',
    ],
    popular: true,
    ctaText: 'Solicitar Estándar',
    color: '#0A2540',
    icon: '⚡',
  },
  {
    name: 'Premium',
    description: 'Para empresas que requieren una postura de seguridad robusta y documentada.',
    features: [
      'Todo lo del paquete Estándar',
      'Asset Registry ilimitado',
      'Segmentación avanzada IT/OT',
      'Curso Anti-Phishing (usuarios ilimitados)',
      'Simulación de phishing incluida',
      'Plan de respuesta a incidentes',
      'Revisión trimestral de seguridad',
    ],
    ctaText: 'Solicitar Premium',
    color: '#FF0033',
    icon: '🔒',
  },
  {
    name: 'Enterprise OT',
    description: 'Solución completa para maquiladoras con entornos OT/ICS críticos.',
    features: [
      'Todo lo del paquete Premium',
      'Evaluación especializada OT/ICS/SCADA',
      'Segmentación IT/OT/DMZ completa',
      'Monitoreo continuo de red OT',
      'Respuesta a incidentes 24/7',
      'Cumplimiento IEC 62443',
      'Gerente de cuenta dedicado',
      'Revisiones mensuales on-site',
    ],
    ctaText: 'Solicitar Enterprise',
    color: '#0A2540',
    icon: '🏭',
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: '#0A2540', borderColor: '#00BFFF', backgroundColor: 'rgba(0,191,255,0.08)' }}
          >
            Soluciones a tu medida
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#0A2540' }}>
            Nuestros Paquetes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Servicios de ciberseguridad diseñados para PyMEs y maquiladoras en Reynosa. Contáctanos para un presupuesto personalizado.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${
                pkg.popular ? 'shadow-glow scale-105' : 'bg-white'
              }`}
              style={{
                borderColor: pkg.popular ? pkg.color : '#E5E7EB',
                backgroundColor: pkg.popular ? '#0A2540' : 'white',
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md whitespace-nowrap"
                  style={{ backgroundColor: '#FF0033' }}
                >
                  <Star className="w-3 h-3 fill-current" />
                  Más Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Icon + Package name */}
                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{
                      backgroundColor: pkg.popular
                        ? 'rgba(0,191,255,0.15)'
                        : `${pkg.color}18`,
                    }}
                  >
                    {pkg.icon}
                  </div>
                  <h3
                    className="text-2xl font-black mb-2"
                    style={{ color: pkg.popular ? '#00BFFF' : '#0A2540' }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: pkg.popular ? 'rgba(255,255,255,0.65)' : '#6B7280' }}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="mb-6 border-t"
                  style={{ borderColor: pkg.popular ? 'rgba(255,255,255,0.15)' : '#E5E7EB' }}
                />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: pkg.popular
                            ? 'rgba(0,191,255,0.2)'
                            : `${pkg.color}18`,
                        }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: pkg.popular ? '#00BFFF' : pkg.color }}
                        />
                      </div>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: pkg.popular ? 'rgba(255,255,255,0.85)' : '#374151' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/528992284075?text=Hola%2C%20me%20interesa%20el%20paquete%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 px-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={
                    pkg.popular
                      ? { backgroundColor: '#00BFFF', color: '#0A2540' }
                      : { backgroundColor: pkg.color, color: 'white' }
                  }
                >
                  <MessageCircle className="w-4 h-4" />
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          ¿Necesitas algo personalizado?{' '}
          <a
            href="https://wa.me/528992284075?text=Hola%2C%20necesito%20un%20presupuesto%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: '#0A2540' }}
          >
            Contáctanos para un presupuesto a tu medida →
          </a>
        </p>
      </div>
    </section>
  );
}
