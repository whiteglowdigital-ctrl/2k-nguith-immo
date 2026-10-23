import { useEffect, useState } from 'react';
import { cn } from '../lib/utils.js';
import logo from '../assets/logo-2k-nguith-transparent.webp';

const SIGNATURE = 'Propulsé par Jëfya';
const DURATION = 2500; // durée d'affichage avant le glissement vers le haut
const SLIDE = 900; // durée du glissement

// Écran d'entrée signature « Jëfya » : logo en fondu avec lueur dorée, signature lettre par lettre,
// puis glissement vers le haut. Affiché une seule fois par visite.
export default function Preloader() {
  const [state, setState] = useState(() => {
    try {
      if (sessionStorage.getItem('jefya-intro')) return 'done';
    } catch {
      /* stockage indisponible : on affiche l'intro */
    }
    return 'show';
  });

  // Lancé une seule fois au montage : changer d'état ne doit pas annuler les minuteries.
  useEffect(() => {
    if (state !== 'show') return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => setState('leave'), reduced ? 800 : DURATION);
    const t2 = setTimeout(() => {
      setState('done');
      document.body.style.overflow = '';
      try {
        sessionStorage.setItem('jefya-intro', '1');
      } catch {
        /* ignoré */
      }
    }, (reduced ? 800 : DURATION) + SLIDE);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state === 'done') return null;

  return (
    <div
      role="status"
      aria-label="Chargement de 2K Nguith Immo"
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]',
        state === 'leave' && '-translate-y-full',
      )}
    >
      {/* Halo doré diffus qui pulse derrière le logo */}
      <span aria-hidden className="absolute h-72 w-72 rounded-full bg-gold/20 blur-3xl motion-safe:animate-halo" />
      <img
        src={logo}
        width="360"
        height="288"
        alt="2K Nguith Immo"
        className="relative h-28 w-auto drop-shadow-[0_0_24px_rgba(245,158,11,0.35)] motion-safe:animate-logoIn md:h-36"
      />
      <p aria-hidden className="relative mt-8 text-xs font-light tracking-[0.3em] text-slate-400">
        {[...SIGNATURE].map((ch, i) => (
          <span key={i} className="inline-block opacity-0 motion-safe:animate-letter motion-reduce:opacity-100" style={{ animationDelay: `${700 + i * 55}ms` }}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </p>
      <span className="sr-only">{SIGNATURE}</span>
    </div>
  );
}
