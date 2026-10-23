import { useEffect, useState } from 'react';
import { Close, Menu } from './Icons.jsx';
import { contact, nav } from '../data/site.js';
import logo from '../assets/logo-2k-nguith.webp';

export default function Header({ onFilter }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (item) => {
    if (item.filter) onFilter(item.filter);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      {/* Barre d'infos : ordinateur uniquement */}
      <div className="hidden border-b border-ink/10 lg:block">
        <div className="wrap flex items-center justify-between py-2 text-xs text-ink-muted">
          <span>{contact.address}</span>
          <span className="flex gap-6">
            <a href={`tel:${contact.phoneIntl}`} className="hover:text-ink">
              {contact.phoneDisplay}
            </a>
            <span>{contact.hours}</span>
          </span>
        </div>
      </div>

      <div className="wrap flex h-20 items-center justify-between gap-6">
        <a href="#accueil" className="flex items-center gap-3" aria-label="2K Nguith Immo, retour en haut de page">
          <img src={logo} width="320" height="260" alt="Logo 2K Nguith Immo" className="h-10 w-auto" />
          <span className="hidden font-serif text-lg font-medium sm:block" aria-hidden>
            2K Nguith Immo
          </span>
        </a>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => go(item)}
                  className="border-b-2 border-transparent py-2 text-sm font-medium text-ink-muted transition-colors duration-300 hover:border-amber hover:text-ink"
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
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-ink/15 lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <nav id="menu-mobile" aria-label="Menu mobile" hidden={!open} className="border-t border-ink/10 bg-white lg:hidden">
        <ul className="wrap py-2">
          {nav.map((item) => (
            <li key={item.label} className="border-b border-ink/10 last:border-0">
              <a href={item.href} onClick={() => go(item)} className="flex min-h-14 items-center text-base font-medium">
                {item.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-dark w-full">
              Nous contacter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
