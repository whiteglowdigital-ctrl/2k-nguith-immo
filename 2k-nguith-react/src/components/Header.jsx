import { useEffect, useState } from 'react';
import { Clock, MapPin, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { contact, nav } from '../data/site.js';
import { cn } from '../lib/utils.js';

export default function Header({ onFilter }) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* Barre d'infos : ordinateur uniquement */}
      <div className="hidden border-b border-ink/10 bg-white text-[0.8rem] text-ink-muted lg:block">
        <div className="container-site flex items-center justify-between gap-8 py-2.5">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
            {contact.address}
          </span>
          <span className="flex items-center divide-x divide-ink/10">
            <a href={`tel:${contact.phoneIntl}`} className="inline-flex items-center gap-2 pr-6 hover:text-ink">
              <Phone aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
              {contact.phoneDisplay}
            </a>
            <span className="inline-flex items-center gap-2 pl-6">
              <Clock aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
              {contact.hours}
            </span>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/85 backdrop-blur-xl">
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <a href="#accueil" className="flex items-center gap-3" aria-label="2K Nguith Immo, retour en haut de page">
            <Logo imgClassName="h-10" className="p-0" />
            <span className="hidden font-display text-lg tracking-tight sm:block" aria-hidden>
              2K Nguith Immo
            </span>
          </a>

          <nav aria-label="Menu principal" className="hidden lg:block">
            <ul className="flex items-center">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => go(item)}
                    className="relative inline-flex min-h-11 items-center px-4 text-[0.9rem] font-medium text-ink-muted transition-colors duration-300 after:absolute after:inset-x-4 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-copper after:transition-transform after:duration-500 after:ease-soft hover:text-ink hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-dark hidden sm:inline-flex">
              Nous contacter
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink lg:hidden"
            >
              {open ? <X aria-hidden strokeWidth={1.5} /> : <Menu aria-hidden strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Menu mobile plein écran */}
        <div id="menu-mobile" hidden={!open} className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-ink/10 bg-white lg:hidden">
          <nav aria-label="Menu mobile" className="container-site flex h-full flex-col justify-between pb-28 pt-4">
            <ul className="divide-y divide-ink/10">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => go(item)} className={cn('flex min-h-16 items-center font-display text-3xl font-light text-ink')}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-dark mt-10 w-full">
              Nous contacter
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
