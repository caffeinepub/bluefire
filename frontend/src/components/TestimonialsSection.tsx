import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Roberto Garza',
    role: 'Gerente de TI',
    company: 'Manufactura Norteña S.A. de C.V.',
    avatar: '/assets/generated/testimonial-1.dim_120x120.png',
    rating: 5,
    quote:
      'Bluefire Cysec encontró vulnerabilidades críticas en nuestros sistemas OT que llevaban meses expuestas. Su equipo llegó a nuestra planta en menos de una hora cuando tuvimos un incidente. Eso no tiene precio.',
  },
  {
    name: 'María Elena Rodríguez',
    role: 'Directora General',
    company: 'Logística Frontera PyME',
    avatar: '/assets/generated/testimonial-2.dim_120x120.png',
    rating: 5,
    quote:
      'Como PyME, siempre pensé que la ciberseguridad era solo para grandes empresas. El paquete Estándar de Bluefire nos dio protección real a un precio que podíamos pagar. El curso anti-phishing fue un antes y un después para mi equipo.',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Supervisor de Operaciones',
    company: 'Maquiladora Precision Parts',
    avatar: '/assets/generated/testimonial-3.dim_120x120.png',
    rating: 5,
    quote:
      'La segmentación de red que implementaron separó completamente nuestros sistemas de producción de la red administrativa. Cuando un empleado cayó en phishing, el daño quedó contenido. Literalmente salvaron nuestra operación.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: '#0A2540', borderColor: '#00BFFF', backgroundColor: 'rgba(0,191,255,0.08)' }}
          >
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#0A2540' }}>
            Testimonios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas en Reynosa que ya protegen su operación con Bluefire Cysec
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8" style={{ color: '#00BFFF', opacity: 0.5 }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#FF0033' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: '#00BFFF' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0';
                      fallback.style.backgroundColor = '#0A2540';
                      fallback.textContent = testimonial.name.charAt(0);
                      parent.insertBefore(fallback, target);
                    }
                  }}
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: '#0A2540' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs font-semibold" style={{ color: '#00BFFF' }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
