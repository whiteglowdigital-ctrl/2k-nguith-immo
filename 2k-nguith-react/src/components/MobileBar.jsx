import { MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

// Barre fixe mobile. Le padding-bottom de <body> (index.css) évite qu'elle cache du contenu.
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur lg:hidden">
      <div className="container grid grid-cols-2 gap-3 py-3">
        <a href={`tel:${contact.phoneIntl}`} className="btn-line">
          <Phone aria-hidden className="h-4 w-4" />
          Appeler
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-navy">
          <MessageCircle aria-hidden className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
