import { Check, Star, MessageCircle } from 'lucide-react';

interface PricingPackage {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  color: string;
}

const packages: PricingPackage[] = [
  {
    name: 'Básico',
    price: '$6,500',
    priceNote: 'MXN / proyecto',
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
  },
  {
    name: 'Estándar',
    price: '$14,000',
    priceNote: 'MXN / proyecto',
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
  },
  {
    name: 'Premium',
    price: '$19,500',
    priceNote: 'MXN / proyecto',
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
  },
  {
    name: 'Enterprise OT',
    price: '$28,000',
    priceNote: 'MXN + mensualidad',
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
            Inversión en seguridad
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#0A2540' }}>
            Paquetes y Precios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precios transparentes y accesibles para PyMEs y maquiladoras en Reynosa
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                pkg.popular
                  ? 'shadow-glow scale-105'
                  : 'bg-white'
              }`}
              style={{
                borderColor: pkg.popular ? pkg.color : '#E5E7EB',
                backgroundColor: pkg.popular ? '#0A2540' : 'white',
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md"
                  style={{ backgroundColor: '#FF0033' }}
                >
                  <Star className="w-3 h-3 fill-current" />
                  Más Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Package name */}
                <div className="mb-4">
                  <h3
                    className="text-xl font-black mb-1"
                    style={{ color: pkg.popular ? '#00BFFF' : '#0A2540' }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: pkg.popular ? 'rgba(255,255,255,0.65)' : '#6B7280' }}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b" style={{ borderColor: pkg.popular ? 'rgba(255,255,255,0.15)' : '#E5E7EB' }}>
                  <div
                    className="text-4xl font-black"
                    style={{ color: pkg.popular ? 'white' : pkg.color }}
                  >
                    {pkg.price}
                  </div>
                  {pkg.priceNote && (
                    <div
                      className="text-xs mt-1"
                      style={{ color: pkg.popular ? 'rgba(255,255,255,0.5)' : '#9CA3AF' }}
                    >
                      {pkg.priceNote}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: pkg.popular ? '#00BFFF' : pkg.color }}
                      />
                      <span
                        className="text-xs leading-relaxed"
                        style={{ color: pkg.popular ? 'rgba(255,255,255,0.8)' : '#374151' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/8995081015?text=Hola%2C%20me%20interesa%20el%20paquete%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 hover:scale-105"
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
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Precios en pesos mexicanos (MXN). Incluyen IVA. Consulta condiciones específicas para tu empresa.{' '}
          <a
            href="https://wa.me/8995081015"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: '#0A2540' }}
          >
            Contáctanos para un presupuesto personalizado →
          </a>
        </p>
      </div>
    </section>
  );
}
