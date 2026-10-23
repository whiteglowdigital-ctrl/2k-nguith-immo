import { useEffect, useState } from 'react';
import { Clock, MapPin, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { contact, nav } from '../data/site.js';
import { cn } from '../lib/utils.js';

export default function Header({ onFilter }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (item) => {
    if (item.filter) onFilter(item.filter);
    setOpen(false);
  };

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-white transition-colors duration-500 ease-soft',
        solid ? 'bg-ink/95 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md' : 'bg-transparent',
      )}
    >
      {/* Barre d'infos : ordinateur uniquement, disparaît au défilement */}
      <div
        className={cn(
          'hidden overflow-hidden border-b border-white/10 text-[0.8rem] text-white/80 transition-all duration-500 ease-soft lg:block',
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100',
        )}
      >
        <div className="container-site flex items-center justify-between gap-8 py-2.5">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
            {contact.address}
          </span>
          <span className="flex items-center gap-8">
            <a href={`tel:${contact.phoneIntl}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
              {contact.phoneDisplay}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
              {contact.hours}
            </span>
          </span>
        </div>
      </div>

      <div className="container-site flex h-20 items-center justify-between gap-6">
        <a href="#accueil" className="flex items-center gap-3" aria-label="2K Nguith Immo, retour en haut de page">
          <Logo imgClassName="h-9 sm:h-10" />
          <span className="hidden font-display text-lg font-normal tracking-tight sm:block" aria-hidden>
            2K Nguith Immo
          </span>
        </a>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => go(item)}
                  className="relative inline-flex min-h-11 items-center px-3.5 text-[0.9rem] font-medium text-white/85 transition-colors duration-300 after:absolute after:inset-x-3.5 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Seul CTA à l'accent cuivré. Texte bleu nuit : contraste 5,6:1 */}
          <a
            href="#contact"
            className="btn hidden bg-copper text-ink hover:bg-copper-light sm:inline-flex"
          >
            Nous contacter
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white lg:hidden"
          >
            {open ? <X aria-hidden strokeWidth={1.5} /> : <Menu aria-hidden strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-5rem)] overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label="Menu mobile" className="container-site flex h-full flex-col justify-between pb-28 pt-6">
          <ul className="divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => go(item)}
                  className="flex min-h-16 items-center font-display text-3xl font-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn mt-10 w-full bg-copper text-ink">
            Nous contacter
          </a>
        </nav>
      </div>
    </header>
  );
}
