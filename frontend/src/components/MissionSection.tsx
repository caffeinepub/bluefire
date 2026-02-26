import { MapPin, Clock, Shield, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: MapPin,
    title: 'Presencia local en Reynosa',
    description: 'Nuestro equipo está en Reynosa, Tamaulipas. Conocemos el entorno industrial y empresarial de la región.',
    color: '#00BFFF',
  },
  {
    icon: Clock,
    title: 'Respuesta en menos de 1 hora',
    description: 'Ante un incidente, respondemos en menos de 60 minutos. No somos un call center en otra ciudad.',
    color: '#FF0033',
  },
  {
    icon: Shield,
    title: 'Especialistas IT/OT',
    description: 'Entendemos tanto los sistemas de oficina (IT) como los sistemas de producción (OT) de las maquiladoras.',
    color: '#00BFFF',
  },
  {
    icon: TrendingUp,
    title: 'Continuidad operativa primero',
    description: 'Nuestro objetivo no es solo cumplir normas — es que tu operación nunca se detenga por un ciberataque.',
    color: '#FF0033',
  },
];

export default function MissionSection() {
  return (
    <section id="que-hacemos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: '#0A2540', borderColor: '#00BFFF', backgroundColor: 'rgba(0,191,255,0.08)' }}>
            Nuestra Misión
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#0A2540' }}>
            ¿Qué hacemos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bluefire Cysec protege la continuidad digital de PyMEs y maquiladoras en Reynosa
            a través de servicios de ciberseguridad locales, accesibles y especializados en entornos industriales.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border-l-4 bg-bf-gray" style={{ borderLeftColor: '#0A2540' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A2540' }}>
                El problema que resolvemos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Las PyMEs y maquiladoras en Reynosa son blancos frecuentes de ciberataques —
                ransomware, phishing y vulnerabilidades en sistemas OT pueden detener una línea de producción
                completa en minutos. La mayoría no tiene un equipo de seguridad interno ni acceso a
                expertos locales que respondan rápido.
              </p>
            </div>
            <div className="p-6 rounded-xl border-l-4 bg-bf-gray" style={{ borderLeftColor: '#00BFFF' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A2540' }}>
                Nuestra solución
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos un portafolio completo: inventario de activos IT/OT, evaluación y remediación
                de vulnerabilidades, segmentación de redes y capacitación anti-phishing. Todo con
                precios diseñados para PyMEs y con soporte presencial en Reynosa.
              </p>
            </div>
          </div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl border bg-white hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${item.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-bold text-sm mb-2" style={{ color: '#0A2540' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          style={{ backgroundColor: '#0A2540' }}
        >
          {[
            { value: '43%', label: 'de PyMEs en México han sufrido ciberataques' },
            { value: '300K+', label: 'ataques cibernéticos diarios en México' },
            { value: '$2.5M', label: 'costo promedio de una brecha de seguridad' },
            { value: '72h', label: 'tiempo promedio para detectar un ataque sin protección' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-black mb-1" style={{ color: '#00BFFF' }}>
                {stat.value}
              </div>
              <div className="text-xs text-white/60 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
