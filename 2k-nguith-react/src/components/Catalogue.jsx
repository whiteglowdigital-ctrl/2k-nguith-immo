import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, SlidersHorizontal, X } from 'lucide-react';
import { paperTypes, properties, typeLabels } from '../data/site.js';
import { cn, formatFcfa, whatsappLink } from '../lib/utils.js';
import PropertyCard from './PropertyCard.jsx';
import Reveal from './Reveal.jsx';

const priceSteps = [
  { value: 0, label: 'Tous les prix' },
  { value: 500000, label: "Jusqu'à 500 000 F" },
  { value: 10000000, label: "Jusqu'à 10 M F" },
  { value: 50000000, label: "Jusqu'à 50 M F" },
  { value: 100000000, label: "Jusqu'à 100 M F" },
  { value: 200000000, label: "Jusqu'à 200 M F" },
];
const roomSteps = [
  { value: 0, label: 'Toutes' },
  { value: 1, label: '1+' },
  { value: 2, label: '2+' },
  { value: 3, label: '3+' },
  { value: 4, label: '4+' },
];
const EMPTY = { type: 'tous', maxPrice: 0, papers: [], rooms: 0 };

function Group({ title, children }) {
  const id = `f-${title.replace(/\W+/g, '-').toLowerCase()}`;
  return (
    <div role="group" aria-labelledby={id} className="border-b border-slate-100 py-6 first:pt-0 last:border-0 last:pb-0">
      <p id={id} className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'min-h-10 rounded-full px-4 text-sm transition-all duration-300 active:scale-95',
        active ? 'bg-ink font-semibold text-white' : 'border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-ink',
      )}
    >
      {children}
    </button>
  );
}

// Page « Tous nos biens » : filtres à gauche, grande grille à droite.
export default function Catalogue({ initialType = 'tous', onOpen, onBack }) {
  const [f, setF] = useState({ ...EMPTY, type: initialType });
  const [panel, setPanel] = useState(false); // panneau de filtres sur mobile
  const set = (patch) => setF((v) => ({ ...v, ...patch }));

  useEffect(() => {
    document.title = 'Tous nos biens | 2K Nguith Immo';
    return () => {
      document.title = '2K Nguith Immo | Agence immobilière à Dakar : vente, location, terrains, gérance';
    };
  }, []);

  const list = useMemo(
    () =>
      properties.filter(
        (p) =>
          (f.type === 'tous' || p.type === f.type) &&
          (!f.maxPrice || p.price <= f.maxPrice) &&
          (!f.papers.length || f.papers.includes(p.paperType)) &&
          (!f.rooms || (p.bedrooms ?? 0) >= f.rooms),
      ),
    [f],
  );
  const active = f.type !== 'tous' || f.maxPrice || f.papers.length || f.rooms;
  const togglePaper = (t) => set({ papers: f.papers.includes(t) ? f.papers.filter((x) => x !== t) : [...f.papers, t] });

  const filters = (
    <div>
      <Group title="Type de bien">
        <div className="flex flex-wrap gap-2">
          {['tous', 'vente', 'location', 'terrain'].map((t) => (
            <Chip key={t} active={f.type === t} onClick={() => set({ type: t })}>
              {t === 'tous' ? 'Tous' : typeLabels[t]}
            </Chip>
          ))}
        </div>
      </Group>
      <Group title="Prix maximum">
        <label htmlFor="c-prix" className="sr-only">
          Prix maximum
        </label>
        <select
          id="c-prix"
          value={f.maxPrice}
          onChange={(e) => set({ maxPrice: Number(e.target.value) })}
          className="block w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink focus:border-amber-500 focus:outline-none focus:ring-0 [color-scheme:light]"
        >
          {priceSteps.map((s) => (
            <option key={s.value} value={s.value} className="bg-white text-ink">
              {s.label}
            </option>
          ))}
        </select>
      </Group>
      <Group title="Type de papier">
        <ul className="space-y-1">
          {paperTypes.map((t) => (
            <li key={t}>
              <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-slate-700">
                <input type="checkbox" checked={f.papers.includes(t)} onChange={() => togglePaper(t)} className="h-4 w-4 rounded border-slate-300 accent-amber-500" />
                {t}
              </label>
            </li>
          ))}
        </ul>
      </Group>
      <Group title="Nombre de chambres">
        <div className="flex flex-wrap gap-2">
          {roomSteps.map((s) => (
            <Chip key={s.value} active={f.rooms === s.value} onClick={() => set({ rooms: s.value })}>
              {s.label}
            </Chip>
          ))}
        </div>
      </Group>
      {active ? (
        <button type="button" onClick={() => setF(EMPTY)} className="mt-2 min-h-11 text-sm font-semibold text-amber-700 underline underline-offset-4">
          Effacer les filtres
        </button>
      ) : null}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-28 text-ink [color-scheme:light] md:pt-32">
      <div className="container">
        <button type="button" onClick={onBack} className="inline-flex min-h-11 items-center gap-2 text-sm text-slate-600 transition-colors hover:text-ink">
          <ArrowLeft aria-hidden className="h-4 w-4" />
          Retour à l'accueil
        </button>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-serif text-4xl font-semibold md:text-5xl">
            Tous nos <span className="text-amber-600">biens</span>
          </h1>
          <p aria-live="polite" className="text-sm text-slate-600">
            {list.length} bien{list.length > 1 ? 's' : ''} sur {properties.length}
          </p>
        </div>

        {/* Mobile : bouton qui ouvre les filtres */}
        <button
          type="button"
          onClick={() => setPanel((v) => !v)}
          aria-expanded={panel}
          aria-controls="filtres"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold lg:hidden"
        >
          {panel ? <X aria-hidden className="h-4 w-4" /> : <SlidersHorizontal aria-hidden className="h-4 w-4" />}
          Filtres{active ? ' (actifs)' : ''}
        </button>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[17rem_1fr]">
          <aside
            id="filtres"
            aria-label="Filtres de recherche"
            className={cn('rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] lg:sticky lg:top-28 lg:block lg:self-start', !panel && 'hidden')}
          >
            {filters}
          </aside>

          <div>
            {list.length ? (
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {list.map((p, i) => (
                  <Reveal as="li" key={p.id} delay={(i % 3) * 100}>
                    <PropertyCard property={p} onOpen={onOpen} />
                  </Reveal>
                ))}
              </ul>
            ) : (
              <div className="rounded-2xl border border-slate-100 bg-white p-10 text-center">
                <p className="font-serif text-2xl">Aucun bien ne correspond à ces filtres.</p>
                <p className="mt-2 text-sm text-slate-600">Décrivez-nous votre besoin, on cherche pour vous.</p>
                <a href={whatsappLink('Bonjour 2K Nguith, je cherche un bien et je ne le trouve pas dans votre catalogue.')} target="_blank" rel="noopener" className="btn-gold mt-6">
                  Écrire sur WhatsApp
                </a>
              </div>
            )}
            <p className="mt-10 text-xs text-slate-500">
              Prix affichés : de {formatFcfa(Math.min(...properties.map((p) => p.price)))} à {formatFcfa(Math.max(...properties.map((p) => p.price)))} F CFA. Les biens marqués « Exemple » sont des exemples de maquette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
