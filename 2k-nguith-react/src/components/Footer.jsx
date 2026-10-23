import { Facebook, Instagram, MapPin, Music2, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { contact, slogans } from '../data/site.js';

const socials = [
  { label: 'TikTok', href: contact.socials.tiktok, Icon: Music2 },
  { label: 'Instagram', href: contact.socials.instagram, Icon: Instagram },
  { label: 'Facebook [lien à ajouter]', href: contact.socials.facebook, Icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 text-white">
      <div className="container-site">
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-[1.5fr_1fr_auto]">
          <div>
            <Logo imgClassName="h-14" />
            <p className="mt-8 max-w-sm font-display text-2xl font-light leading-snug">{slogans.main}</p>
          </div>
          <ul className="flex flex-col gap-4 text-white/80">
            <li className="flex gap-3">
              <MapPin aria-hidden strokeWidth={1.25} className="mt-0.5 h-5 w-5 shrink-0" />
              {contact.address}
            </li>
            <li>
              <a href={`tel:${contact.phoneIntl}`} className="inline-flex min-h-11 items-center gap-3 hover:text-white">
                <Phone aria-hidden strokeWidth={1.25} className="h-5 w-5" />
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
          <ul className="flex gap-3" aria-label="Réseaux sociaux">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
                >
                  <Icon aria-hidden strokeWidth={1.25} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 py-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
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
