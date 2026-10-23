import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

// Barre fixe mobile. Le padding-bottom de <body> (index.css) évite qu'elle cache du contenu.
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white pb-[env(safe-area-inset-bottom,0px)] lg:hidden">
      <div className="wrap grid grid-cols-2 gap-3 py-3">
        <a href={`tel:${contact.phoneIntl}`} className="btn-outline">
          Appeler
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-dark">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
