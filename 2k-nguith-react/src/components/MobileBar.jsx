import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

// Barre fixe mobile. Le padding-bottom de <body> (index.css) évite qu'elle cache du contenu.
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-white pb-[env(safe-area-inset-bottom,0px)] lg:hidden">
      <a href={`tel:${contact.phoneIntl}`} className="flex min-h-[4.5rem] items-center justify-center border-r border-ink/10 text-[0.78rem] uppercase tracking-caps text-ink">
        Appeler
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener" className="flex min-h-[4.5rem] items-center justify-center bg-ink text-[0.78rem] uppercase tracking-caps text-white">
        WhatsApp
      </a>
    </div>
  );
}
