import { Database, Search, Wrench, Network, ShieldAlert } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Asset Registry',
    subtitle: 'Inventario de Activos IT/OT',
    description:
      'Identificamos y catalogamos todos tus activos digitales: servidores, equipos de red, PLCs, HMIs y dispositivos IoT. Sin visibilidad, no hay protección.',
    color: '#00BFFF',
    tag: 'Paso 1',
  },
  {
    icon: Search,
    title: 'Vulnerability Assessment',
    subtitle: 'Evaluación de Vulnerabilidades',
    description:
      'Escaneamos tu infraestructura para detectar brechas, software desactualizado y configuraciones inseguras antes de que los atacantes las encuentren.',
    color: '#0A2540',
    tag: 'Paso 2',
  },
  {
    icon: Wrench,
    title: 'Remediación',
    subtitle: 'Remediación de Vulnerabilidades',
    description:
      'Aplicamos parches, actualizaciones y correcciones de configuración con un plan priorizado por riesgo. Verificamos cada corrección antes de cerrar el ticket.',
    color: '#FF0033',
    tag: 'Paso 3',
  },
  {
    icon: Network,
    title: 'Network Segmentation',
    subtitle: 'Segmentación de Redes',
    description:
      'Dividimos tu red en zonas aisladas (IT/OT/DMZ) con modelo Zero Trust. Si un segmento es comprometido, el resto de tu operación sigue funcionando.',
    color: '#00BFFF',
    tag: 'Paso 4',
  },
  {
    icon: ShieldAlert,
    title: 'Curso Anti-Phishing',
    subtitle: 'Capacitación al Personal',
    description:
      'El 91% de los ataques comienzan con un correo. Entrenamos a tu equipo para identificar y reportar intentos de phishing con simulaciones reales.',
    color: '#0A2540',
    tag: 'Adicional',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-bf-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: '#0A2540', borderColor: '#00BFFF', backgroundColor: 'rgba(0,191,255,0.08)' }}
          >
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#0A2540' }}>
            Servicios Clave
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un portafolio completo de ciberseguridad diseñado para la realidad operativa de Reynosa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{
                  borderTop: `3px solid ${service.color}`,
                }}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${service.color}18`,
                      color: service.color,
                    }}
                  >
                    {service.tag}
                  </span>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black mb-1" style={{ color: '#0A2540' }}>
                  {service.title}
                </h3>
                <p className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ backgroundColor: service.color }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/8995081015?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-glow"
            style={{ backgroundColor: '#0A2540' }}
          >
            Consultar sobre servicios →
          </a>
        </div>
      </div>
    </section>
  );
}
