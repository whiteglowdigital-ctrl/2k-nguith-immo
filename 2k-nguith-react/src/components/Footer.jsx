import Logo from './Logo.jsx';
import { Dot } from './Glyphs.jsx';
import { contact, slogans } from '../data/site.js';

const socials = [
  { label: 'TikTok', href: contact.socials.tiktok },
  { label: 'Instagram', href: contact.socials.instagram },
  { label: 'Facebook [lien à ajouter]', href: contact.socials.facebook },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="wrap pt-24 sm:pt-32">
        <p className="display max-w-5xl text-[2.6rem] sm:text-7xl lg:text-[6.5rem]">{slogans.main}</p>

        <div className="mt-24 grid gap-12 border-t border-white/15 py-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="inline-flex bg-white p-2">
              <Logo className="h-14" />
            </span>
          </div>
          <ul className="flex flex-col gap-3 text-white/70 md:col-span-5">
            <li>{contact.address}</li>
            <li>
              <a href={`tel:${contact.phoneIntl}`} className="inline-flex min-h-11 items-center gap-3 tabular-nums text-white hover:underline">
                <Dot />
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
          <ul className="flex flex-col md:col-span-3 md:col-start-10" aria-label="Réseaux sociaux">
            {socials.map(({ label, href }) => (
              <li key={label} className="border-b border-white/15 first:border-t">
                <a
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener"
                  className="flex min-h-12 items-center justify-between text-[0.78rem] uppercase tracking-caps text-white/80 transition-colors duration-700 ease-out hover:text-white"
                >
                  {label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2K Nguith Immo</p>
          <nav aria-label="Informations légales" className="flex gap-8">
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
