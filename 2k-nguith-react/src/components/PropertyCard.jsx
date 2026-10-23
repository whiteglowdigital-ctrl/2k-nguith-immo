import { useState } from 'react';
import { BedDouble, FileCheck2, Heart, MapPin, Ruler } from 'lucide-react';
import { typeLabels } from '../data/site.js';
import { cn, formatFcfa } from '../lib/utils.js';

// Mini-caractéristiques : seulement ce qui est connu (aucune donnée inventée).
function specs(p) {
  const list = [];
  if (p.surface && !p.surface.startsWith('[')) list.push({ Icon: Ruler, text: p.surface });
  if (p.bedrooms) list.push({ Icon: BedDouble, text: `${p.bedrooms} ch.` });
  if (p.papers) list.push({ Icon: FileCheck2, text: p.papers.startsWith('[') ? 'Papiers [à préciser]' : 'Papiers OK' });
  return list;
}

// Carte « écran de cinéma » : l'image domine, le prix doré en dessous.
export default function PropertyCard({ property: p, onOpen }) {
  const [fav, setFav] = useState(false);
  const place = p.location.split(' (')[0];

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/20 hover:shadow-deep">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-white backdrop-blur-md">
          {typeLabels[p.type]}
        </span>
        <button
          type="button"
          onClick={() => setFav((v) => !v)}
          aria-pressed={fav}
          aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:scale-105"
        >
          <Heart aria-hidden strokeWidth={1.5} className={cn('h-5 w-5', fav && 'fill-gold text-gold')} />
        </button>
        <p className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/85">
          <MapPin aria-hidden strokeWidth={1.5} className="h-3.5 w-3.5 text-gold" />
          {place}
        </p>
        <span className="ph-tag absolute bottom-3 right-3">[Photo à remplacer]</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3>
          {/* Toute la carte ouvre la fiche */}
          <button type="button" onClick={() => onOpen(p)} className="text-left after:absolute after:inset-0">
            <span className="block font-serif text-[1.7rem] font-semibold leading-none tabular-nums text-gold">
              {formatFcfa(p.price)} <span className="font-sans text-xs font-medium text-silver">F CFA{p.perMonth && ' / mois'}</span>
            </span>
            <span className="sr-only">{p.title}</span>
          </button>
        </h3>
        <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-white/5 pt-4 text-xs font-light text-white/85">
          {specs(p).map(({ Icon, text }) => (
            <li key={text} className="inline-flex items-center gap-1.5">
              <Icon aria-hidden strokeWidth={1.25} className="h-4 w-4 text-white" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
