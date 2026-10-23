import { ArrowRight, MapPin } from 'lucide-react';
import { typeLabels } from '../data/site.js';
import { formatFcfa } from '../lib/utils.js';

export default function PropertyCard({ property: p, onOpen }) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-label text-ink backdrop-blur">
          {typeLabels[p.type]}
        </span>
        <span className="ph-tag absolute bottom-4 right-4">[Photo à remplacer]</span>
        <span
          aria-hidden
          className="absolute bottom-4 left-4 inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink opacity-0 transition-all duration-500 ease-soft group-hover:translate-y-0 group-hover:opacity-100"
        >
          Voir les détails <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-display text-2xl font-normal leading-snug tracking-tight text-ink">
          {/* Toute la carte est cliquable via ce bouton étendu */}
          <button
            type="button"
            onClick={() => onOpen(p)}
            className="text-left after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-copper"
          >
            {p.title}
          </button>
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
          <MapPin aria-hidden strokeWidth={1.5} className="h-4 w-4 shrink-0" />
          {p.location}
        </p>
        <p className="mb-6 mt-1 text-sm text-ink-muted">
          {[p.surface && `Surface ${p.surface}`, p.details, p.papers && `Papiers : ${p.papers}`]
            .filter(Boolean)
            .join(' · ')}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
          <p className="font-display text-[1.65rem] font-light tabular-nums tracking-tight text-ink">
            {formatFcfa(p.price)}
            <span className="ml-1.5 font-sans text-xs font-semibold uppercase tracking-label text-ink-muted">
              F CFA{p.perMonth && ' / mois'}
            </span>
          </p>
          <span aria-hidden className="mb-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-8 transition-colors duration-300 group-hover:decoration-copper">
            Voir les détails
          </span>
        </div>
      </div>
    </article>
  );
}
