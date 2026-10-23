import { ArrowRight } from 'lucide-react';
import { budgets, homeLimit, properties } from '../data/site.js';
import { cn, normalize, whatsappLink } from '../lib/utils.js';
import SectionHead from './SectionHead.jsx';
import PropertyCard from './PropertyCard.jsx';
import Reveal from './Reveal.jsx';

const tabs = [
  { value: 'tous', label: 'Tous' },
  { value: 'vente', label: 'Vente' },
  { value: 'location', label: 'Location' },
  { value: 'terrain', label: 'Terrains' },
];

const intent = { vente: 'acheter un bien', location: 'louer un bien', terrain: 'acheter un terrain', tous: 'trouver un bien' };

// Accueil : une sélection de biens ; le catalogue complet est sur la page « Tous nos biens ».
export default function Properties({ filters, onType, onReset, onOpen, onOpenCatalogue }) {
  const { type, quartier, budget } = filters;
  const max = Number(budget) || 0;
  const isSearch = Boolean(quartier || max);

  const list = properties.filter(
    (p) =>
      (type === 'tous' || p.type === type) &&
      (!quartier || normalize(p.location).includes(normalize(quartier))) &&
      (!max || p.price <= max),
  );
  const shown = list.slice(0, homeLimit);
  const budgetLabel = budgets.find((b) => b.value === budget)?.label;
  const need =
    `Bonjour 2K Nguith, je souhaite ${intent[type]}` + (quartier ? ` à ${quartier}` : '') + (budgetLabel && max ? `, budget ${budgetLabel.toLowerCase()}` : '') + '.';

  const catalogueButton = (
    <button type="button" onClick={onOpenCatalogue} className="link-gold">
      Voir tous nos biens ({properties.length})
      <ArrowRight aria-hidden className="h-4 w-4" />
    </button>
  );

  return (
    <section id="biens" aria-labelledby="titre-biens" className="section section-light">
      <div className="container">
        <SectionHead id="titre-biens" kicker="Biens disponibles" title="Nos biens" glow="à la une">
          {catalogueButton}
        </SectionHead>

        <div role="group" aria-label="Filtrer les biens" className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:px-0">
          {tabs.map((t) => {
            const active = type === t.value && !isSearch;
            return (
              <button
                key={t.value}
                type="button"
                aria-pressed={active}
                onClick={() => onType(t.value)}
                className={cn(
                  'min-h-10 shrink-0 rounded-full px-5 text-sm transition-all duration-300 active:scale-95',
                  active ? 'bg-ink font-semibold text-white' : 'border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-ink',
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {isSearch && (
          <p aria-live="polite" className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <span>
              {list.length} résultat{list.length > 1 ? 's' : ''}
              {quartier && ` · ${quartier}`}
              {max ? ` · ${budgetLabel.toLowerCase()}` : ''}
            </span>
            <button type="button" onClick={onReset} className="min-h-11 font-semibold text-amber-700 underline underline-offset-4">
              Voir tous les biens
            </button>
          </p>
        )}

        {list.length === 0 ? (
          <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] md:p-12">
            <p className="font-serif text-2xl">Aucun bien ne correspond pour le moment. Décrivez-nous votre besoin, on cherche pour vous.</p>
            <a href={whatsappLink(need)} target="_blank" rel="noopener" className="btn-gold">
              Décrire mon besoin sur WhatsApp
            </a>
          </Reveal>
        ) : (
          <ul className="rail md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal as="li" key={p.id} delay={(i % 3) * 120}>
                <PropertyCard property={p} onOpen={onOpen} />
              </Reveal>
            ))}
          </ul>
        )}

        <div className="mt-12 flex justify-center">
          <button type="button" onClick={onOpenCatalogue} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 active:scale-95">
            Voir tous nos biens
            <ArrowRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
