import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { nav } from '../data/site.js';
import { cn } from '../lib/utils.js';
import logo from '../assets/logo-2k-nguith-dark.webp';

// Transparent sur la photo du hero, noir translucide flouté au défilement.
export default function Header({ onNavigate, solidAlways = false }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // Défilement fluide vers la section (et retour à l'accueil depuis le catalogue).
  const go = (e, item) => {
    e.preventDefault();
    setOpen(false);
    onNavigate(item);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        solid || open || solidAlways ? 'border-b border-white/5 bg-void/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* Fine barre dorée : progression de la lecture */}
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-gold-dark via-gold to-gold-light" style={{ transform: `scaleX(${progress})` }} />
      <div className="container flex h-20 items-center justify-between gap-6">
        <a href="#accueil" onClick={(e) => go(e, { href: '#accueil' })} className="flex items-center gap-3" aria-label="2K Nguith Immo, retour en haut de page">
          {/* Logo sans fond : le bleu et l'orange se posent directement sur la barre sombre */}
          <img src={logo} width="480" height="390" alt="Logo 2K Nguith Immo" className="h-11 w-auto" />
          <span className="hidden font-serif text-lg font-semibold sm:block" aria-hidden>
            2K Nguith <span className="text-gold">Immo</span>
          </span>
        </a>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item)}
                  className="relative inline-flex min-h-11 items-center px-3.5 text-sm text-silver transition-colors duration-300 after:absolute after:inset-x-3.5 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:text-white hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" onClick={(e) => go(e, { href: '#contact' })} className="btn-gold hidden min-h-11 sm:inline-flex">
            Nous contacter
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav id="menu-mobile" aria-label="Menu mobile" hidden={!open} className="border-t border-white/5 lg:hidden">
        <ul className="container py-4">
          {nav.map((item) => (
            <li key={item.label} className="border-b border-white/5">
              <a href={item.href} onClick={(e) => go(e, item)} className="flex min-h-14 items-center font-serif text-xl">
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a href="#contact" onClick={(e) => go(e, { href: '#contact' })} className="btn-gold w-full">
              Nous contacter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
