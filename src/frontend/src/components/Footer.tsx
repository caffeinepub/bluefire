export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'bluefire-cybersecurity';

  return (
    <footer className="bg-card border-t-2 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/file_00000000e32471fd987536c27237c5ae.png" 
                alt="BlueFire Logo" 
                className="w-14 h-14 object-contain"
              />
              <span className="text-2xl font-bold text-foreground">BlueFire</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Consultoría especializada en ciberseguridad para PYMEs y maquiladoras en México.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Registro de Activos</li>
              <li>Evaluación de Vulnerabilidades</li>
              <li>Remediación de Vulnerabilidades</li>
              <li>Segmentación de Redes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:angelmedina121215@gmail.com" className="hover:text-primary transition-colors">
                  angelmedina121215@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+528992284075" className="hover:text-primary transition-colors">
                  +52 899 228 4075
                </a>
              </li>
              <li>Reynosa, México</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} BlueFire. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Built with <span className="text-destructive">♥</span> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
