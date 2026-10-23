import { Facebook, Instagram, MapPin, Music2, Phone } from 'lucide-react';
import { contact, nav, slogans } from '../data/site.js';
import logo from '../assets/logo-2k-nguith.webp';

const socials = [
  { label: 'TikTok', href: contact.socials.tiktok, Icon: Music2 },
  { label: 'Instagram', href: contact.socials.instagram, Icon: Instagram },
  { label: 'Facebook [lien à ajouter]', href: contact.socials.facebook, Icon: Facebook },
];

const services = ['Vente', 'Location', 'Terrains', 'Gérance', 'Construction et rénovation'];

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-flex rounded-lg bg-white p-1.5">
            <img src={logo} width="320" height="260" alt="Logo 2K Nguith Immo" className="h-12 w-auto" />
          </span>
          <p className="mt-4 text-sm text-white/70">{slogans.main}</p>
          <ul className="mt-5 flex gap-2" aria-label="Réseaux sociaux">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ink"
                >
                  <Icon aria-hidden className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Liens rapides</h3>
          <ul className="mt-4 space-y-1">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="inline-flex min-h-9 items-center text-sm text-white/75 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Nos services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {contact.address}
            </li>
            <li>
              <a href={`tel:${contact.phoneIntl}`} className="flex items-center gap-3 hover:text-white">
                <Phone aria-hidden className="h-4 w-4 text-gold" />
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
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
