import { Phone, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier =
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.hostname)
      : 'bluefire-cysec';

  return (
    <footer style={{ backgroundColor: '#0A2540' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block mb-4"
            >
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">Bluefire</span>
                <span style={{ color: '#00BFFF' }}> CYSEC</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Seguridad digital para la continuidad de tu operación. Especialistas en ciberseguridad IT/OT para PyMEs y maquiladoras en Reynosa, Tamaulipas.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: SiFacebook, href: '#', label: 'Facebook' },
                { Icon: SiLinkedin, href: '#', label: 'LinkedIn' },
                { Icon: SiX, href: '#', label: 'X (Twitter)' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-white mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {[
                'Asset Registry',
                'Vulnerability Assessment',
                'Remediación de Vulnerabilidades',
                'Network Segmentation',
                'Curso Anti-Phishing',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-white mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#00BFFF' }} />
                <a
                  href="https://wa.me/528992284075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  (899) 228-4075
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#00BFFF' }} />
                <a href="mailto:ventas@bluefirecysec.com" className="text-sm text-white/55 hover:text-white transition-colors">
                  ventas@bluefirecysec.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#00BFFF' }} />
                <span className="text-sm text-white/55">
                  San José #619, Reynosa, Tamaulipas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="text-white/40">
            © {currentYear} Bluefire Cysec. Todos los derechos reservados.
          </p>
          <p className="text-white/40">
            Hecho con{' '}
            <span style={{ color: '#FF0033' }}>♥</span>
            {' '}usando{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: '#00BFFF' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
