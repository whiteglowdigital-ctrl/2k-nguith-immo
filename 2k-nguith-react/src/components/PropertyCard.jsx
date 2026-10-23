import { BedDouble, FileCheck2, MapPin, Ruler } from 'lucide-react';
import { typeLabels } from '../data/site.js';
import { formatFcfa } from '../lib/utils.js';

// Mini-caractéristiques : seulement ce qui est connu (aucune donnée inventée).
function specs(p) {
  const list = [];
  if (p.surface && !p.surface.startsWith('[')) list.push({ Icon: Ruler, text: p.surface });
  if (p.bedrooms) list.push({ Icon: BedDouble, text: `${p.bedrooms} ch.` });
  if (p.papers) list.push({ Icon: FileCheck2, text: p.papers.startsWith('[') ? 'Papiers [à préciser]' : 'Papiers OK' });
  return list;
}

// Carte blanche à ombre douce : l'image domine, le prix en grand en dessous.
export default function PropertyCard({ property: p, onOpen }) {
  const place = p.location.split(' (')[0];

  return (
    <article className="arch group relative flex h-full flex-col overflow-hidden border border-slate-100 bg-white shadow-soft transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-lift active:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-white backdrop-blur-md">
          {typeLabels[p.type]}
        </span>
        <p className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/85">
          <MapPin aria-hidden strokeWidth={1.5} className="h-3.5 w-3.5 text-gold" />
          {place}
        </p>
        <span className="ph-tag absolute bottom-3 right-3">[Photo à remplacer]</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5">
        <h3>
          {/* Toute la carte ouvre la fiche */}
          <button type="button" onClick={() => onOpen(p)} className="text-left after:absolute after:inset-0">
            <span className="block font-serif text-[1.7rem] font-semibold leading-none tabular-nums text-ink">
              {formatFcfa(p.price)} <span className="font-sans text-xs font-medium text-slate-500">F CFA{p.perMonth && ' / mois'}</span>
            </span>
            <span className="sr-only">{p.title}</span>
            {/* Bien d'exemple (maquette) : mention discrète, à retirer avec les vrais biens */}
            {p.example && <span className="mt-1.5 block text-[0.7rem] font-light text-slate-500">Bien d'exemple</span>}
          </button>
        </h3>
        <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-xs font-light text-slate-600">
          {specs(p).map(({ Icon, text }) => (
            <li key={text} className="inline-flex items-center gap-1.5">
              <Icon aria-hidden strokeWidth={1.25} className="h-4 w-4 text-amber-600" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
