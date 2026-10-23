import { useState } from 'react';
import { ArrowRight, BedDouble, FileCheck2, Heart, MapPin, Ruler } from 'lucide-react';
import { typeLabels } from '../data/site.js';
import { cn, formatFcfa } from '../lib/utils.js';

const badgeColor = {
  vente: 'bg-forest text-white',
  location: 'bg-blue-600 text-white',
  terrain: 'bg-gold text-ink',
};

// Caractéristiques connues uniquement : rien n'est inventé.
function features(p) {
  const list = [];
  if (p.surface) list.push({ Icon: Ruler, text: p.surface.startsWith('[') ? 'Surface [à préciser]' : p.surface });
  if (p.bedrooms) list.push({ Icon: BedDouble, text: `${p.bedrooms} chambres` });
  else if (p.details) list.push({ Icon: BedDouble, text: p.details });
  if (p.papers) list.push({ Icon: FileCheck2, text: p.papers.startsWith('[') ? 'Papiers [à préciser]' : 'Papiers indiqués' });
  return list.slice(0, 3);
}

export default function PropertyCard({ property: p, onOpen }) {
  const [fav, setFav] = useState(false);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className={cn('absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow', badgeColor[p.type])}>{typeLabels[p.type]}</span>
        <button
          type="button"
          onClick={() => setFav((v) => !v)}
          aria-pressed={fav}
          aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow transition hover:scale-105"
        >
          <Heart aria-hidden className={cn('h-5 w-5', fav && 'fill-red-500 text-red-500')} />
        </button>
        <span className="ph-tag absolute bottom-3 right-3">[Photo à remplacer]</span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-2xl font-extrabold tabular-nums text-forest">
          {formatFcfa(p.price)} <span className="text-sm font-bold">F CFA{p.perMonth && ' / mois'}</span>
        </p>
        <h3 className="mt-1 text-lg font-bold text-ink">
          {/* Toute la carte ouvre la fiche */}
          <button type="button" onClick={() => onOpen(p)} className="text-left after:absolute after:inset-0">
            {p.title}
          </button>
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
          <MapPin aria-hidden className="h-4 w-4 shrink-0 text-forest" />
          {p.location}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-ink/10 pt-4">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-ink-muted">
            {features(p).map(({ Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-1.5">
                <Icon aria-hidden className="h-4 w-4 text-ink" strokeWidth={1.75} />
                {text}
              </li>
            ))}
          </ul>
          <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-night text-white transition group-hover:bg-forest">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
