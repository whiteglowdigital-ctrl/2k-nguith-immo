import { ArrowRight } from 'lucide-react';
import { typeLabels } from '../data/site.js';
import { cn, formatFcfa } from '../lib/utils.js';

export default function PropertyCard({ property: p, ratio = 'aspect-[4/5]', onOpen }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-air transition-all duration-700 ease-soft hover:-translate-y-1 hover:shadow-air-lg">
      <div className={cn('relative overflow-hidden bg-mist', ratio)}>
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-label text-ink backdrop-blur">
          {typeLabels[p.type]}
        </span>
        <span className="ph-tag absolute bottom-5 right-5">[Photo à remplacer]</span>
      </div>

      <div className="p-7 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <h3 className="font-display text-2xl font-normal leading-snug tracking-tight text-ink sm:text-[1.7rem]">
            {/* Toute la carte est cliquable via ce bouton étendu */}
            <button
              type="button"
              onClick={() => onOpen(p)}
              className="text-left after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-copper"
            >
              {p.title}
            </button>
          </h3>
          <span aria-hidden className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-all duration-500 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0" strokeWidth={1.5} />
          </span>
        </div>
        <p className="mt-2 text-sm text-ink-muted">{p.location}</p>

        <dl className="mt-6 grid grid-cols-2 border-t border-ink/10 text-sm">
          <div className="border-r border-ink/10 py-4 pr-4">
            <dt className="label">Surface</dt>
            <dd className="mt-1.5 text-ink">{p.surface}</dd>
          </div>
          <div className="py-4 pl-4">
            <dt className="label">{p.papers ? 'Papiers' : 'Détails'}</dt>
            <dd className="mt-1.5 text-ink">{p.papers ?? p.details}</dd>
          </div>
        </dl>

        <p className="border-t border-ink/10 pt-5 font-display text-[1.75rem] font-light tabular-nums tracking-tight text-ink">
          {formatFcfa(p.price)}
          <span className="ml-2 font-sans text-[0.68rem] font-semibold uppercase tracking-label text-ink-muted">
            F CFA{p.perMonth && ' / mois'}
          </span>
        </p>
      </div>
    </article>
  );
}
