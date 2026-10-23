import { formatFcfa } from '../lib/utils.js';

// Carte épurée : la photo, puis le titre et le prix. Rien d'autre.
export default function PropertyCard({ property: p, onOpen }) {
  const place = p.location.split(' (')[0];
  return (
    <article className="group">
      <button type="button" onClick={() => onOpen(p)} className="block w-full text-left">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist">
          <img
            src={p.image}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="ph-tag absolute right-3 top-3">[Photo à remplacer]</span>
        </div>
        <h3 className="mt-4 text-lg font-medium text-ink">
          {p.short} — {place}
        </h3>
        <p className="mt-1 text-lg font-bold tabular-nums text-ink">
          {formatFcfa(p.price)} F CFA{p.perMonth && ' / mois'}
        </p>
      </button>
    </article>
  );
}
