import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim()) errors.nombre = 'El nombre es requerido';
  if (!data.empresa.trim()) errors.empresa = 'La empresa es requerida';
  if (!data.email.trim()) {
    errors.email = 'El correo es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresa un correo válido';
  }
  if (data.telefono && !/^[\d\s\-\+\(\)]{7,15}$/.test(data.telefono)) {
    errors.telefono = 'Ingresa un teléfono válido';
  }
  if (!data.mensaje.trim()) errors.mensaje = 'El mensaje es requerido';
  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' });
    }, 6000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contacto" className="py-24 bg-bf-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: '#0A2540', borderColor: '#00BFFF', backgroundColor: 'rgba(0,191,255,0.08)' }}
          >
            Hablemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#0A2540' }}>
            Contacto y Diagnóstico Gratis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agenda tu diagnóstico gratuito de 30 minutos. Sin compromiso, sin letra chica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/528992284075?text=Hola%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20gratuito%20de%2030%20minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl text-white transition-all duration-200 hover:scale-105 hover:shadow-glow"
              style={{ backgroundColor: '#25D366' }}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-black text-lg">Agendar Diagnóstico Gratuito</div>
                <div className="text-white/80 text-sm">Respuesta inmediata por WhatsApp</div>
              </div>
            </a>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 border border-border space-y-5">
              <h3 className="font-black text-lg" style={{ color: '#0A2540' }}>
                Información de Contacto
              </h3>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,191,255,0.12)' }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#00BFFF' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                    Teléfono / WhatsApp
                  </div>
                  <a
                    href="https://wa.me/528992284075"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                    style={{ color: '#0A2540' }}
                  >
                    (899) 228-4075
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,191,255,0.12)' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#00BFFF' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                    Correo
                  </div>
                  <a
                    href="mailto:ventas@bluefirecysec.com"
                    className="font-bold hover:underline"
                    style={{ color: '#0A2540' }}
                  >
                    ventas@bluefirecysec.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,191,255,0.12)' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: '#00BFFF' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                    Dirección
                  </div>
                  <div className="font-bold" style={{ color: '#0A2540' }}>
                    San José #619
                  </div>
                  <div className="text-sm text-muted-foreground">Reynosa, Tamaulipas</div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: '#0A2540' }}
            >
              <h4 className="font-black mb-3" style={{ color: '#00BFFF' }}>
                Horario de Atención
              </h4>
              <div className="space-y-1 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Lunes – Viernes</span>
                  <span className="font-semibold text-white">8:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-semibold text-white">9:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergencias</span>
                  <span className="font-semibold" style={{ color: '#00BFFF' }}>24/7 WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(0,191,255,0.12)' }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: '#00BFFF' }} />
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: '#0A2540' }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  Gracias por contactarnos. Nos comunicaremos contigo en menos de 1 hora durante horario de atención.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black mb-6" style={{ color: '#0A2540' }}>
                  Solicitar Diagnóstico Gratuito
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <Label htmlFor="nombre" className="text-sm font-semibold" style={{ color: '#0A2540' }}>
                      Nombre completo *
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className={`mt-1 ${errors.nombre ? 'border-red-500' : ''}`}
                    />
                    {errors.nombre && (
                      <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="empresa" className="text-sm font-semibold" style={{ color: '#0A2540' }}>
                      Empresa *
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className={`mt-1 ${errors.empresa ? 'border-red-500' : ''}`}
                    />
                    {errors.empresa && (
                      <p className="text-xs text-red-500 mt-1">{errors.empresa}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold" style={{ color: '#0A2540' }}>
                      Correo electrónico *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@empresa.com"
                      className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="telefono" className="text-sm font-semibold" style={{ color: '#0A2540' }}>
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="(899) 000-0000"
                      className={`mt-1 ${errors.telefono ? 'border-red-500' : ''}`}
                    />
                    {errors.telefono && (
                      <p className="text-xs text-red-500 mt-1">{errors.telefono}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-sm font-semibold" style={{ color: '#0A2540' }}>
                      Mensaje *
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu empresa y qué necesitas proteger..."
                      rows={4}
                      className={`mt-1 ${errors.mensaje ? 'border-red-500' : ''}`}
                    />
                    {errors.mensaje && (
                      <p className="text-xs text-red-500 mt-1">{errors.mensaje}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-glow mt-2"
                    style={{ backgroundColor: '#0A2540' }}
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitud
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
