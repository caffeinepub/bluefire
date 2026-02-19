export default function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="/assets/file_00000000e32471fd987536c27237c5ae.png" 
              alt="BlueFire Logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-bold text-primary">BlueFire</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('programa-piloto')}
              className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
            >
              Programa Piloto
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
