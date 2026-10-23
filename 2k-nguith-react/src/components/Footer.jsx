import { Facebook, Instagram, Music2 } from 'lucide-react';
import Logo from './Logo.jsx';
import { contact, slogans } from '../data/site.js';

const socials = [
  { label: 'TikTok', href: contact.socials.tiktok, Icon: Music2 },
  { label: 'Instagram', href: contact.socials.instagram, Icon: Instagram },
  { label: 'Facebook [lien à ajouter]', href: contact.socials.facebook, Icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-24">
      <div className="container-site">
        <p className="max-w-4xl border-t border-ink/10 pt-10 font-display text-4xl font-light leading-[1.1] tracking-tight text-ink sm:text-6xl">
          {slogans.main}
        </p>

        <div className="mt-20 grid gap-12 border-t border-ink/10 py-12 md:grid-cols-[1fr_1.4fr_auto] md:gap-16">
          <Logo className="self-start p-0" imgClassName="h-16" />
          <ul className="flex flex-col gap-3 text-ink-muted">
            <li>{contact.address}</li>
            <li>
              <a href={`tel:${contact.phoneIntl}`} className="inline-flex min-h-11 items-center text-ink hover:underline">
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
                >
                  <Icon aria-hidden strokeWidth={1.25} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/10 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2K Nguith Immo</p>
          <nav aria-label="Informations légales" className="flex gap-6">
            <a href="#" className="inline-flex min-h-11 items-center hover:text-ink">
              Mentions légales
            </a>
            <a href="#" className="inline-flex min-h-11 items-center hover:text-ink">
              Politique de confidentialité
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
