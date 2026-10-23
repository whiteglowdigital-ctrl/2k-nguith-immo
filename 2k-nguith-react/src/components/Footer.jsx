import { Facebook, Instagram, Music2 } from 'lucide-react';
import { contact, nav, slogans } from '../data/site.js';
import logo from '../assets/logo-2k-nguith-transparent.webp';

const socials = [
  { label: 'TikTok', href: contact.socials.tiktok, Icon: Music2 },
  { label: 'Instagram', href: contact.socials.instagram, Icon: Instagram },
  { label: 'Facebook [lien à ajouter]', href: contact.socials.facebook, Icon: Facebook },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
        <div>
          <img src={logo} width="360" height="288" alt="Logo 2K Nguith Immo" className="h-16 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.12)]" />
          <p className="mt-5 font-serif text-lg text-white">{slogans.main}</p>
        </div>
        <nav aria-label="Liens du pied de page">
          <ul className="grid grid-cols-2 gap-y-1">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(n);
                  }}
                  className="inline-flex min-h-10 items-center text-sm text-silver transition-colors hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-4 text-sm text-silver">
          <p>{contact.address}</p>
          <a href={`tel:${contact.phoneIntl}`} className="block tabular-nums text-white hover:text-gold">
            {contact.phoneDisplay}
          </a>
          <ul className="flex gap-2 pt-2" aria-label="Réseaux sociaux">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon aria-hidden strokeWidth={1.5} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container flex flex-col gap-2 py-5 pb-24 text-xs text-silver sm:flex-row sm:items-center sm:justify-between md:pb-5">
          <p>© 2K Nguith Immo</p>
          <nav aria-label="Informations légales" className="flex gap-6">
            <a href="#" className="inline-flex min-h-11 items-center hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="inline-flex min-h-11 items-center hover:text-white">
              Politique de confidentialité
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
