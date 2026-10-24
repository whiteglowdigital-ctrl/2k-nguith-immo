import { useEffect, useState } from 'react';
import { cn } from '../lib/utils.js';
import { slogans } from '../data/site.js';
import logo from '../assets/logo-2k-nguith-dark.webp';

const DURATION = 2900; // durée d'affichage avant l'ouverture du rideau
const EXIT = 1000; // durée de l'ouverture

// Écran d'entrée : fond bleu nuit et grille de plan d'architecte, un toit se dessine au trait,
// le logo apparaît, puis le slogan mot par mot. Sortie en rideau qui s'ouvre vers le haut.
// Affiché une seule fois par visite.
export default function Preloader() {
  const [state, setState] = useState(() => {
    try {
      if (sessionStorage.getItem('2k-intro')) return 'done';
    } catch {
      /* stockage indisponible : on affiche l'intro */
    }
    // Les animations de l'accueil attendent l'ouverture du rideau (voir Hero.jsx).
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--intro', `${(DURATION + EXIT * 0.4) / 1000}s`);
    }
    return 'show';
  });

  // Lancé une seule fois au montage : changer d'état ne doit pas annuler les minuteries.
  useEffect(() => {
    if (state !== 'show') return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wait = reduced ? 900 : DURATION;
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => setState('leave'), wait);
    const t2 = setTimeout(() => {
      setState('done');
      document.body.style.overflow = '';
      try {
        sessionStorage.setItem('2k-intro', '1');
      } catch {
        /* ignoré */
      }
    }, wait + EXIT);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state === 'done') return null;

  const words = slogans.main.split(' ');

  return (
    <div
      role="status"
      aria-label="Chargement de 2K Nguith Immo"
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#13294B_0%,#0A1A33_45%,#050B16_100%)] px-6 transition-[clip-path] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] [clip-path:inset(0_0_0_0)]',
        state === 'leave' && '[clip-path:inset(0_0_100%_0)]',
      )}
    >
      {/* Grille de plan d'architecte, estompée vers les bords */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,#000_20%,transparent_70%)]"
      />
      {/* Ligne lumineuse qui balaie l'écran */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent motion-safe:animate-scan" />

      <div className={cn('relative flex flex-col items-center transition-all duration-700', state === 'leave' && '-translate-y-6 opacity-0')}>
        {/* Toit dessiné au trait */}
        <svg aria-hidden viewBox="0 0 220 70" className="mb-2 h-12 w-44 md:h-14 md:w-52" fill="none">
          <path
            d="M10 64 L110 8 L210 64"
            stroke="url(#toit)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            className="[stroke-dasharray:1] [stroke-dashoffset:1] motion-safe:animate-draw motion-reduce:[stroke-dashoffset:0]"
          />
          <path
            d="M160 36 L160 18 L176 18 L176 45"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            className="[stroke-dasharray:1] [stroke-dashoffset:1] motion-safe:animate-draw motion-reduce:[stroke-dashoffset:0]"
            style={{ animationDelay: '700ms' }}
          />
          <defs>
            <linearGradient id="toit" x1="0" x2="1">
              <stop offset="0" stopColor="#1E6ED6" />
              <stop offset="0.5" stopColor="#FBBF24" />
              <stop offset="1" stopColor="#E85C0A" />
            </linearGradient>
          </defs>
        </svg>

        <img
          src={logo}
          width="480"
          height="390"
          alt="2K Nguith Immo"
          className="h-28 w-auto opacity-0 motion-safe:animate-logoIn motion-reduce:opacity-100 md:h-36"
          style={{ animationDelay: '500ms' }}
        />

        <p aria-hidden className="mt-8 max-w-xs text-center font-serif text-xl italic leading-snug text-white md:max-w-none md:text-3xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span className="inline-block translate-y-full opacity-0 motion-safe:animate-word motion-reduce:transform-none motion-reduce:opacity-100" style={{ animationDelay: `${1150 + i * 110}ms` }}>
                {/notre|raison|être/i.test(w) ? <span className="text-gold-light">{w}</span> : w}
                {' '}
              </span>
            </span>
          ))}
        </p>
        <span aria-hidden className="mt-6 h-px w-0 bg-gold/60 motion-safe:animate-grow motion-reduce:w-24" style={{ animationDelay: '2000ms' }} />
      </div>
      <span className="sr-only">{slogans.main}</span>
    </div>
  );
}
