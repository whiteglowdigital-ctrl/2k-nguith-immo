import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils.js';

// Carrousel photo d'un bien : glisser du doigt (défilement magnétique), flèches, points et vignettes.
export default function PhotoCarousel({ images, alt, className }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const many = images.length > 1;

  // Suit la photo visible pendant le glissement.
  useEffect(() => {
    const el = track.current;
    if (!el) return undefined;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const go = (i) => {
    const el = track.current;
    if (!el) return;
    const n = (i + images.length) % images.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: 'smooth' });
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  return (
    <div className={cn('flex min-w-0 flex-col', className)}>
      <div className="group relative flex-1 overflow-hidden" role="region" aria-roledescription="carrousel" aria-label={`Photos : ${alt}`} tabIndex={0} onKeyDown={onKey}>
        <ul ref={track} className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((src, i) => (
            <li key={src} className="relative h-full w-full shrink-0 snap-center" aria-label={`Photo ${i + 1} sur ${images.length}`}>
              <img src={src} alt={i === 0 ? alt : `${alt}, photo ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} className="h-full w-full object-cover" />
            </li>
          ))}
        </ul>
        <span className="ph-tag pointer-events-none absolute left-3 top-3">[Photos à remplacer]</span>
        {many && (
          <>
            <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs tabular-nums text-white backdrop-blur-md">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Photo précédente"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft aria-hidden className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Photo suivante"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight aria-hidden className="h-5 w-5" />
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {images.map((src, i) => (
                <span key={src} className={cn('h-1.5 rounded-full bg-white transition-all duration-300', i === index ? 'w-5' : 'w-1.5 opacity-50')} />
              ))}
            </div>
          </>
        )}
      </div>
      {many && (
        <div className="flex gap-2 overflow-x-auto bg-black/30 p-2 [scrollbar-width:none]">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Voir la photo ${i + 1}`}
              aria-current={i === index}
              className={cn('h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-all duration-300', i === index ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100')}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
