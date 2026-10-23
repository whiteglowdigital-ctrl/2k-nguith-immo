import logo from '../assets/logo-2k-nguith.webp';
import { contact, slogans } from '../data/site.js';

const socials = [
  { label: 'TikTok', href: contact.socials.tiktok },
  { label: 'Instagram', href: contact.socials.instagram },
  { label: 'Facebook [lien à ajouter]', href: contact.socials.facebook },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="wrap grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
        <div>
          <span className="inline-flex rounded-lg bg-white p-2">
            <img src={logo} width="320" height="260" alt="Logo 2K Nguith Immo" className="h-12 w-auto" />
          </span>
          <p className="mt-4 font-serif text-xl">{slogans.main}</p>
        </div>
        <ul className="space-y-2 text-white/80">
          <li>{contact.address}</li>
          <li>
            <a href={`tel:${contact.phoneIntl}`} className="tabular-nums text-white hover:underline">
              {contact.phoneDisplay}
            </a>
          </li>
        </ul>
        <ul className="space-y-1" aria-label="Réseaux sociaux">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target={href === '#' ? undefined : '_blank'} rel="noopener" className="inline-flex min-h-11 items-center text-white/80 hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
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
