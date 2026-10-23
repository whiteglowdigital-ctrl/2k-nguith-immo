import { useEffect, useState } from 'react';
import { ArrowRight, Clock, MapPin, Menu, Phone, X } from 'lucide-react';
import { contact, nav } from '../data/site.js';
import { cn } from '../lib/utils.js';
import logo from '../assets/logo-2k-nguith.webp';

// En-tête transparent sur la photo du hero, qui devient bleu nuit au défilement.
export default function Header({ onFilter }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const go = (item) => {
    if (item.filter) onFilter(item.filter);
    setOpen(false);
  };

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300', solid || open ? 'bg-night/95 shadow-lg backdrop-blur-md' : 'bg-transparent')}>
      <div className={cn('hidden overflow-hidden border-b border-white/10 text-xs font-light text-slate-300 transition-all duration-300 lg:block', solid ? 'max-h-0 opacity-0' : 'max-h-10')}>
        <div className="container flex items-center justify-between py-2">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden className="h-3.5 w-3.5 text-gold" />
            {contact.address}
          </span>
          <span className="flex items-center gap-6">
            <a href={`tel:${contact.phoneIntl}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone aria-hidden className="h-3.5 w-3.5 text-gold" />
              {contact.phoneDisplay}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock aria-hidden className="h-3.5 w-3.5 text-gold" />
              {contact.hours}
            </span>
          </span>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between gap-6">
        <a href="#accueil" className="flex items-center gap-3" aria-label="2K Nguith Immo, retour en haut de page">
          <span className="rounded-lg bg-white p-1">
            <img src={logo} width="320" height="260" alt="Logo 2K Nguith Immo" className="h-9 w-auto" />
          </span>
          <span className="hidden leading-tight sm:block" aria-hidden>
            <span className="block font-serif text-lg font-semibold">2K Nguith</span>
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">Immobilier</span>
          </span>
        </a>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => go(item)}
                  className="relative inline-flex min-h-11 items-center px-3.5 text-sm font-semibold text-white/85 transition-colors after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gold after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-gold hidden sm:inline-flex">
            Nous contacter
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 lg:hidden"
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>

      <nav id="menu-mobile" aria-label="Menu mobile" hidden={!open} className="border-t border-white/10 lg:hidden">
        <ul className="container py-3">
          {nav.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              <a href={item.href} onClick={() => go(item)} className="flex min-h-14 items-center text-base font-semibold">
                {item.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold w-full">
              Nous contacter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
