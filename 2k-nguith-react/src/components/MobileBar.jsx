import { MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

// Barre fixe mobile. Le padding-bottom de <body> (index.css) évite qu'elle cache du contenu.
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white/90 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pt-3 backdrop-blur-lg lg:hidden">
      <a href={`tel:${contact.phoneIntl}`} className="btn-light w-full px-4">
        <Phone aria-hidden strokeWidth={1.5} className="h-4 w-4" />
        Appeler
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-dark w-full px-4">
        <MessageCircle aria-hidden strokeWidth={1.5} className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
