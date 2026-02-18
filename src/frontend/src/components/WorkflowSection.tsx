import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ScanSearch, Wrench, Network } from 'lucide-react';

const workflowSteps = [
  {
    icon: Search,
    title: 'Asset Registry',
    subtitle: 'Inventario de Activos IT/OT',
    stages: [
      'Discovery inicial (documentación)',
      'Discovery pasivo (OT seguro)',
      'Discovery activo (IT controlado)',
      'Enriquecimiento y normalización',
      'Validación con cliente'
    ]
  },
  {
    icon: ScanSearch,
    title: 'Vulnerability Assessment',
    subtitle: 'Evaluación de Vulnerabilidades',
    stages: [
      'Scoping y Rules of Engagement',
      'Evaluación externa (perimetral)',
      'Evaluación interna (LAN/AD)',
      'Validación y filtrado de hallazgos',
      'Priorización CVSS + contexto'
    ]
  },
  {
    icon: Wrench,
    title: 'Patching',
    subtitle: 'Remediación Segura',
    stages: [
      'Planificación y control de cambios',
      'Pruebas en laboratorio/staging',
      'Parcheo escalonado por criticidad',
      'Validación post-implementación',
      'Plan de rollback si necesario'
    ]
  },
  {
    icon: Network,
    title: 'Segmentation',
    subtitle: 'Segmentación de Red IT/OT',
    stages: [
      'Diseño de arquitectura Zero Trust',
      'Implementación de VLANs/firewalls',
      'Políticas de acceso granular',
      'Pruebas de conectividad',
      'Documentación y entrega'
    ]
  }
];

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metodología segura y repetible para entornos IT/OT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {step.stages.map((stage, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-sm">{stage}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Workflow Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              Flujo de Trabajo Integrado
            </h3>
            <img 
              src="/assets/generated/workflow-diagram.dim_1000x600.png"
              alt="Diagrama de flujo de trabajo MAIVOR"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <p className="text-sm text-center text-muted-foreground">
                <strong>Consideraciones especiales:</strong> Pruebas en laboratorio para OT, 
                reglas de operación definidas, planes de rollback documentados, y aprobaciones formales en cada etapa crítica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
