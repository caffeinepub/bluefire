import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: '¿Qué hacemos?', href: '#que-hacemos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: '¿Por qué nosotros?', href: '#por-que-nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bf-dark shadow-lg'
          : 'bg-bf-dark/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex-shrink-0"
            aria-label="Bluefire Cysec - Inicio"
          >
            <img
              src="/assets/generated/bluefire-logo.dim_600x200.png"
              alt="Bluefire Cysec"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-bf-blue transition-colors duration-200 rounded-md hover:bg-white/5 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/8995081015"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 bg-bf-red text-white text-sm font-semibold rounded-md hover:bg-red-600 transition-colors duration-200 whitespace-nowrap"
            >
              Diagnóstico Gratis
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-white hover:text-bf-blue transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-bf-dark border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-3 text-sm font-medium text-white/80 hover:text-bf-blue hover:bg-white/5 rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/8995081015"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 bg-bf-red text-white text-sm font-semibold rounded-md hover:bg-red-600 transition-colors duration-200 text-center"
            >
              Diagnóstico Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
