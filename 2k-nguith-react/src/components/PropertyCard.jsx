import { useState } from 'react';
import { ArrowRight, BedDouble, FileCheck2, Heart, MapPin, Ruler } from 'lucide-react';
import { typeLabels } from '../data/site.js';
import { cn, formatFcfa } from '../lib/utils.js';

// Point de couleur dans le badge en verre : bleu du logo, bleu clair, orange.
const dotColor = {
  vente: 'bg-brand',
  location: 'bg-sky-500',
  terrain: 'bg-gold',
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="glass absolute left-4 top-4 inline-flex items-center gap-1.5">
          <span aria-hidden className={cn('h-1.5 w-1.5 rounded-full', dotColor[p.type])} />
          {typeLabels[p.type]}
        </span>
        <button
          type="button"
          onClick={() => setFav((v) => !v)}
          aria-pressed={fav}
          aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/60 text-navy backdrop-blur-md transition hover:scale-105"
        >
          <Heart aria-hidden strokeWidth={1.5} className={cn('h-5 w-5', fav && 'fill-gold text-gold')} />
        </button>
        <span className="ph-tag absolute bottom-3 right-3">[Photo à remplacer]</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-serif text-[1.85rem] font-bold leading-none tabular-nums text-navy md:text-3xl">
          {formatFcfa(p.price)} <span className="font-sans text-xs font-semibold text-slate-500">F CFA{p.perMonth && ' / mois'}</span>
        </p>
        <h3 className="mt-3 text-sm font-medium text-ink">
          {/* Toute la carte ouvre la fiche */}
          <button type="button" onClick={() => onOpen(p)} className="text-left after:absolute after:inset-0">
            {p.title}
          </button>
        </h3>
        <p className="mb-5 mt-1 flex items-center gap-1 text-xs text-slate-500">
          <MapPin aria-hidden strokeWidth={1.5} className="h-3.5 w-3.5 shrink-0 text-gold" />
          {p.location}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-ink/5 pt-5">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-light text-slate-500">
            {features(p).map(({ Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-1.5">
                <Icon aria-hidden className="h-4 w-4 text-slate-400" strokeWidth={1.5} />
                {text}
              </li>
            ))}
          </ul>
          <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white transition duration-300 group-hover:bg-gold group-hover:text-navy">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
