import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, FileText, Users, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    icon: Users,
    title: 'Contacto Inicial',
    description: 'Outreach por email o llamada ofreciendo escaneo rápido'
  },
  {
    icon: FileText,
    title: 'Firma de Documentos',
    description: 'SOW corto + autorización + NDA + pago inicial (50%)'
  },
  {
    icon: Clock,
    title: 'Ejecución (48 horas)',
    description: 'Escaneo, análisis técnico y validación interna'
  },
  {
    icon: CheckCircle2,
    title: 'Entrega',
    description: 'Reporte ejecutivo + técnico + reunión 30 min'
  }
];

const deliverables = [
  'Escaneo externo de 1-3 IPs/dominios',
  'Reporte ejecutivo con hallazgos priorizados',
  'Reporte técnico detallado con CVSS',
  'Reunión de priorización de 30 minutos',
  'Recomendaciones accionables inmediatas'
];

export default function PilotProgramSection() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Oferta de Entrada
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Programa Piloto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comience con un escaneo rápido y descubra sus vulnerabilidades
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Offer Card */}
          <Card className="border-2 border-primary/50 shadow-2xl mb-12">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-3xl text-center">
                Escaneo Rápido de Vulnerabilidades
              </CardTitle>
              <p className="text-center text-muted-foreground mt-2">
                Evaluación profesional en 48 horas
              </p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Alcance del Servicio</h3>
                  <ul className="space-y-3">
                    {deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Servicios Opcionales</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">Remediación</h4>
                      <p className="text-sm text-muted-foreground">
                        SOW adicional para implementación de mitigaciones y verificación post-remediación
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">Retainer Mensual</h4>
                      <p className="text-sm text-muted-foreground">
                        Contrato recurrente para parches continuos y monitoreo de vulnerabilidades
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  Solicitar Escaneo Piloto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Process Steps */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Proceso Simplificado
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-card border-2 rounded-lg p-6 text-center hover:shadow-lg transition-shadow h-full">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold mb-2 text-foreground">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
