import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, TrendingUp, Clock, DollarSign } from 'lucide-react';

const referralDetails = [
  {
    icon: TrendingUp,
    title: 'Comisión Competitiva',
    description: '15-30% de comisión por el primer contrato conseguido',
    highlight: '15-30%',
    color: 'text-chart-1'
  },
  {
    icon: DollarSign,
    title: 'Valor del Contrato',
    description: '15% del valor neto del primer contrato cobrado por cliente referido',
    highlight: '15%',
    color: 'text-chart-2'
  },
  {
    icon: Handshake,
    title: 'Pago Garantizado',
    description: 'Pago después de recibir el pago completo del cliente',
    highlight: 'Garantizado',
    color: 'text-primary'
  },
  {
    icon: Clock,
    title: 'Transferencia Rápida',
    description: 'Transferencia dentro de 30 días posteriores al cobro',
    highlight: '30 días',
    color: 'text-accent'
  }
];

export default function ReferralProgramSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Programa de Referencias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gana comisiones atractivas por cada cliente que nos refieras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {referralDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon className={`w-8 h-8 ${detail.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{detail.title}</CardTitle>
                      <div className={`text-2xl font-bold ${detail.color} mt-1`}>
                        {detail.highlight}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 bg-primary/5">
            <CardContent className="p-8">
              <div className="text-center">
                <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  ¿Cómo Funciona?
                </h3>
                <div className="space-y-3 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mt-0.5">
                      1
                    </div>
                    <p className="text-muted-foreground">
                      Refiere un cliente potencial que necesite servicios de ciberseguridad
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mt-0.5">
                      2
                    </div>
                    <p className="text-muted-foreground">
                      Nosotros cerramos el primer contrato con el cliente referido
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mt-0.5">
                      3
                    </div>
                    <p className="text-muted-foreground">
                      Recibimos el pago completo del cliente
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mt-0.5">
                      4
                    </div>
                    <p className="text-muted-foreground">
                      Te transferimos tu comisión dentro de 30 días posteriores al cobro
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
