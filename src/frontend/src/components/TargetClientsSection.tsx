import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Factory, Users, Briefcase } from 'lucide-react';

const clientSegments = [
  {
    title: 'PYMEs',
    icon: Building,
    characteristics: [
      'Ciclo de venta corto (días a semanas)',
      'Servicios estandarizados',
      'Precios accesibles',
      'Entregables ejecutivos simplificados'
    ],
    color: 'text-chart-1'
  },
  {
    title: 'Maquiladoras',
    icon: Factory,
    characteristics: [
      'Ciclo de venta largo (meses)',
      'SOW formal y NDA robusto requeridos',
      'Seguro profesional necesario',
      'Proyectos de mayor ticket',
      'Contratos recurrentes'
    ],
    color: 'text-chart-2'
  }
];

const targetTypes = [
  {
    icon: Building,
    title: 'PYMEs Locales',
    description: 'Retail, logística, servicios profesionales'
  },
  {
    icon: Factory,
    title: 'Plantas de Manufactura',
    description: 'Maquiladoras y entornos IT/OT'
  },
  {
    icon: Briefcase,
    title: 'Proveedores de Cadena',
    description: 'Proveeduría, oficinas administrativas'
  },
  {
    icon: Users,
    title: 'MSPs y Proveedores TI',
    description: 'Partners y re-sellers'
  }
];

export default function TargetClientsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones adaptadas a las necesidades específicas de cada segmento
          </p>
        </div>

        {/* Client Segments Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {clientSegments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-10 h-10 ${segment.color}`} />
                    <CardTitle className="text-2xl">{segment.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {segment.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full ${segment.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm">{char}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Target Client Types */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Tipos de Clientes Objetivo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border rounded-lg p-6 text-center hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{type.title}</h4>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
