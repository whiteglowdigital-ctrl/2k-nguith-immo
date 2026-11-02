import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils.js';

// Carrousel photo d'un bien : glisser du doigt (défilement magnétique), flèches et points.
// « card » : version compacte des cartes (mini-flèches au survol, sans vignettes).
// « full » : fiche détaillée (flèches plus grandes et vignettes cliquables).
export default function PhotoCarousel({ images, alt, variant = 'full', onImageClick, imgClassName, className, children }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const many = images.length > 1;
  const card = variant === 'card';

  // Suit la photo visible pendant le glissement.
  useEffect(() => {
    const el = track.current;
    if (!el) return undefined;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const go = (i, e) => {
    e?.stopPropagation();
    const el = track.current;
    if (!el) return;
    const n = (i + images.length) % images.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: 'smooth' });
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  const arrow = cn(
    'absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full text-white backdrop-blur-md transition-all duration-300 active:scale-95',
    card
      ? 'h-9 w-9 bg-black/35 hover:bg-black/60 md:h-8 md:w-8 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100'
      : 'h-11 w-11 bg-black/45 hover:bg-black/70 md:opacity-0 md:group-hover/photos:opacity-100 md:focus-visible:opacity-100',
  );

  return (
    <div className={cn('flex min-w-0 flex-col', className)}>
      <div
        className="group/photos relative min-h-0 flex-1 overflow-hidden"
        role="region"
        aria-roledescription="carrousel"
        aria-label={`Photos : ${alt}`}
        tabIndex={many ? 0 : undefined}
        onKeyDown={many ? onKey : undefined}
      >
        <ul ref={track} className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((src, i) => (
            <li key={src} className="relative h-full w-full shrink-0 snap-center overflow-hidden" aria-label={`Photo ${i + 1} sur ${images.length}`}>
              <img
                src={src}
                alt={i === 0 ? alt : `${alt}, photo ${i + 1}`}
                loading={i === 0 && !card ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                onClick={onImageClick}
                className={cn('h-full w-full select-none object-cover', onImageClick && 'cursor-pointer', imgClassName)}
              />
            </li>
          ))}
        </ul>
        {/* Calques posés sur la photo (badges, voile) : ils laissent passer le doigt */}
        <div className="pointer-events-none absolute inset-0">{children}</div>
        {many && (
          <>
            <button type="button" onClick={(e) => go(index - 1, e)} aria-label="Photo précédente" className={cn(arrow, card ? 'left-2' : 'left-3')}>
              <ChevronLeft aria-hidden className={card ? 'h-4 w-4' : 'h-5 w-5'} />
            </button>
            <button type="button" onClick={(e) => go(index + 1, e)} aria-label="Photo suivante" className={cn(arrow, card ? 'right-2' : 'right-3')}>
              <ChevronRight aria-hidden className={card ? 'h-4 w-4' : 'h-5 w-5'} />
            </button>
            <div aria-hidden className={cn('pointer-events-none absolute inset-x-0 flex justify-center gap-1.5', card ? 'bottom-10' : 'bottom-3')}>
              {images.map((src, i) => (
                <span key={src} className={cn('h-1.5 rounded-full bg-white shadow-sm transition-all duration-300', i === index ? 'w-4' : 'w-1.5 opacity-60')} />
              ))}
            </div>
          </>
        )}
      </div>
      {many && !card && (
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
