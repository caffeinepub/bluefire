import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Registro de Activos',
    icon: '/assets/generated/service-asset-registry.dim_256x256.png',
    description: 'Inventario exhaustivo y automatizado de todos sus activos digitales: hardware, software, aplicaciones y datos sensibles.',
    necessity: 'En México, el 43% de las PYMEs ha sido víctima de ciberataques. Sin un registro completo, es imposible proteger lo que no se conoce.',
    benefits: [
      'Mayor visibilidad para reducir riesgos ocultos',
      'Cumplimiento normativo (LFPDPPP)',
      'Ahorro hasta 20% en costos operativos'
    ]
  },
  {
    title: 'Evaluación de Vulnerabilidades',
    icon: '/assets/generated/service-vulnerability.dim_256x256.png',
    description: 'Escaneos periódicos y profundos de su infraestructura para identificar debilidades, software desactualizado y configuraciones erróneas.',
    necessity: 'México registra casi 300 mil ataques cibernéticos diarios. Sin evaluaciones regulares, las brechas pueden costar millones en pérdidas.',
    benefits: [
      'Detección temprana reduce downtime hasta 50%',
      'Informes accionables con priorización CVSS',
      'Demuestra protección proactiva a reguladores'
    ]
  },
  {
    title: 'Remediación de Vulnerabilidades',
    icon: '/assets/generated/service-remediation.dim_256x256.png',
    description: 'Implementación de planes personalizados: aplicación de parches, actualizaciones, fortalecimiento de accesos y verificación post-remediación.',
    necessity: 'Con más de 35,200 millones de intentos de ataques en Q1 2025, la remediación rápida es esencial para mitigar daños.',
    benefits: [
      'Minimiza pérdidas financieras y reputacionales',
      'Mantiene continuidad operativa sin interrupciones',
      'Soporte experto integrado con networking'
    ]
  },
  {
    title: 'Segmentación de Redes',
    icon: '/assets/generated/service-segmentation.dim_256x256.png',
    description: 'División de su red en segmentos aislados siguiendo modelo Zero Trust, con firewalls, VPNs y políticas de acceso granular.',
    necessity: 'En redes planas, una brecha puede propagarse rápidamente. El Plan Nacional de Ciberseguridad urge la segmentación de infraestructura crítica.',
    benefits: [
      'Contención de amenazas a un solo segmento',
      'Facilita cumplimiento y escalabilidad futura',
      'Mejora rendimiento con rápido ROI'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integradas de ciberseguridad diseñadas para el mercado mexicano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                    Por qué es necesario
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.necessity}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                    Beneficios clave
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
