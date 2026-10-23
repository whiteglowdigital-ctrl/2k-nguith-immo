import { cn, caption, formatFcfa } from '../lib/utils.js';

// Vignette pure : l'image, puis une ligne fine et le prix. Aucun cadre, aucun fond.
export default function PropertyTile({ property: p, shape = 'wide', onOpen }) {
  return (
    <article className="group relative">
      <div className={cn('relative overflow-hidden bg-ink/5', shape === 'tall' ? 'aspect-[4/5] lg:aspect-[3/4]' : 'aspect-[16/10]')}>
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="ph-tag absolute right-3 top-3">[Photo à remplacer]</span>
        {/* Filet ambre qui se déploie sous l'image au survol */}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-amber transition-transform duration-700 ease-out group-hover:scale-x-100" />
      </div>
      <h3 className="mt-5 text-[0.95rem] font-normal text-ink-muted">
        <button
          type="button"
          onClick={() => onOpen(p)}
          className="text-left after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-1 focus-visible:after:outline-offset-4 focus-visible:after:outline-amber"
        >
          {caption(p)}
        </button>
      </h3>
      <p className="display mt-2 text-[2rem] tabular-nums sm:text-[2.4rem]">
        {formatFcfa(p.price)}
        <span className="caps ml-3 align-middle">F CFA{p.perMonth && ' / mois'}</span>
      </p>
    </article>
  );
}
