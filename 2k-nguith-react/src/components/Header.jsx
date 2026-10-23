import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { Dot } from './Glyphs.jsx';
import { contact, nav } from '../data/site.js';
import { cn } from '../lib/utils.js';

export default function Header({ onFilter }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (item) => {
    if (item.filter) onFilter(item.filter);
    setActive(item.label);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-xl">
      <div className="wrap flex h-20 items-center justify-between gap-8">
        <a href="#accueil" className="flex items-center gap-4" aria-label="2K Nguith Immo, retour en haut de page">
          <Logo className="h-9" />
          <span aria-hidden className="hidden h-6 w-px bg-ink/15 sm:block" />
          <span aria-hidden className="caps hidden text-ink sm:block">
            2K Nguith Immo
          </span>
        </a>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => go(item)}
                  className={cn(
                    'relative inline-flex min-h-11 items-center text-[0.78rem] uppercase tracking-caps transition-colors duration-700 ease-out',
                    'after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-left after:bg-amber after:transition-transform after:duration-700 after:ease-out',
                    active === item.label ? 'text-ink after:scale-x-100' : 'text-ink-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <a href={`tel:${contact.phoneIntl}`} className="hidden items-center gap-3 text-sm tabular-nums text-ink xl:inline-flex">
            <Dot />
            {contact.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="group flex min-h-11 items-center gap-3 text-[0.78rem] uppercase tracking-caps text-ink lg:hidden"
          >
            {open ? 'Fermer' : 'Menu'}
            <span aria-hidden className="relative block h-3 w-7">
              <span className={cn('absolute left-0 h-px w-full bg-ink transition-transform duration-700 ease-out', open ? 'top-1.5 rotate-45' : 'top-0')} />
              <span className={cn('absolute left-0 h-px bg-ink transition-all duration-700 ease-out', open ? 'top-1.5 w-full -rotate-45' : 'top-3 w-4')} />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile : rideau plein écran qui se déroule */}
      <div
        id="menu-mobile"
        className={cn(
          'fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] overflow-y-auto bg-white transition-[clip-path,visibility] duration-700 ease-out lg:hidden',
          open ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]',
        )}
      >
        <nav aria-label="Menu mobile" className="wrap flex min-h-full flex-col justify-between pb-28 pt-6">
          <ul>
            {nav.map((item) => (
              <li key={item.label} className="border-b border-ink/10">
                <a href={item.href} onClick={() => go(item)} className="display flex min-h-[4.5rem] items-center text-4xl">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-12 flex items-center gap-3 text-sm text-ink-muted">
            <Dot />
            {contact.address}
          </p>
        </nav>
      </div>
    </header>
  );
}
