import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/528992284075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20ciberseguridad"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white font-bold text-sm shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 group"
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
