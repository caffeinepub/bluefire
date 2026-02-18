import { AlertTriangle, TrendingUp, Building2, Shield } from 'lucide-react';

const stats = [
  {
    icon: AlertTriangle,
    value: '40,000M+',
    label: 'Intentos de ciberataques',
    sublabel: 'Primer semestre 2025'
  },
  {
    icon: TrendingUp,
    value: '35,200M',
    label: 'Ataques en Q1 2026',
    sublabel: 'Tendencia creciente'
  },
  {
    icon: Building2,
    value: '74%',
    label: 'Empresas afectadas',
    sublabel: 'Por ransomware en 2025'
  },
  {
    icon: Shield,
    value: '40%',
    label: 'PYMEs con protección',
    sublabel: 'De 99.8% del tejido empresarial'
  }
];

const sectors = [
  { name: 'Finanzas', percentage: 31, color: 'bg-chart-1' },
  { name: 'Salud', percentage: 21, color: 'bg-chart-2' },
  { name: 'Manufactura', percentage: 19, color: 'bg-chart-3' }
];

export default function MarketContextSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            El Panorama de Amenazas en México
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            México es uno de los países más atacados en América Latina
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-card border-2 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Sectors and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Sectores Más Afectados
            </h3>
            <div className="space-y-6">
              {sectors.map((sector, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">{sector.name}</span>
                    <span className="text-2xl font-bold text-primary">{sector.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${sector.color} transition-all duration-1000`}
                      style={{ width: `${sector.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
              <p className="text-sm leading-relaxed">
                <strong className="text-destructive">Alerta:</strong> Solo el 40% de las PYMEs tienen protocolos de seguridad activos, 
                a pesar de representar el 99.8% del tejido empresarial mexicano. Entre el 84% y 93% usan Internet diariamente, 
                y el 86% adoptan servicios en la nube con configuraciones inseguras.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="/assets/generated/stats-mexico.dim_800x600.png"
              alt="Estadísticas de ciberseguridad en México"
              className="rounded-lg shadow-2xl border-2 border-border w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
