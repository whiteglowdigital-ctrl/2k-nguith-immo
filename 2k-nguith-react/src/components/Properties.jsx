import { ArrowRight, ImagePlus } from 'lucide-react';
import { budgets, properties, propertySlots } from '../data/site.js';
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

export default function Properties({ filters, onType, onReset, onOpen }) {
  const { type, quartier, budget } = filters;
  const max = Number(budget) || 0;
  const isSearch = Boolean(quartier || max);

  const list = properties.filter(
    (p) =>
      (type === 'tous' || p.type === type) &&
      (!quartier || normalize(p.location).includes(normalize(quartier))) &&
      (!max || p.price <= max),
  );
  const slots = type === 'tous' && !isSearch ? propertySlots : 0;
  const budgetLabel = budgets.find((b) => b.value === budget)?.label;
  const need =
    `Bonjour 2K Nguith, je souhaite ${intent[type]}` + (quartier ? ` à ${quartier}` : '') + (budgetLabel && max ? `, budget ${budgetLabel.toLowerCase()}` : '') + '.';

  return (
    <section id="biens" aria-labelledby="titre-biens" className="section">
      <div className="container">
        <SectionHead id="titre-biens" kicker="Biens disponibles" title="Nos biens" accent="à la une" intro="Vente, location et terrains à Dakar et environs.">
          <a href={whatsappLink('Bonjour 2K Nguith, je souhaite recevoir la liste de tous vos biens disponibles.')} target="_blank" rel="noopener" className="link-arrow">
            Voir tous nos biens
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </SectionHead>

        <div role="group" aria-label="Filtrer les biens" className="-mx-5 -mt-6 mb-10 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:mb-12 md:flex-wrap md:px-0">
          {tabs.map((t) => {
            const active = type === t.value && !isSearch;
            return (
              <button
                key={t.value}
                type="button"
                aria-pressed={active}
                onClick={() => onType(t.value)}
                className={cn(
                  'min-h-10 shrink-0 rounded-full px-4 text-[0.8rem] transition md:min-h-11 md:px-5 md:text-sm',
                  active ? 'bg-navy font-semibold text-white' : 'font-light text-slate-500 ring-1 ring-ink/10 hover:text-ink',
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {isSearch && (
          <p aria-live="polite" className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
            <span>
              {list.length} résultat{list.length > 1 ? 's' : ''}
              {quartier && ` · ${quartier}`}
              {max ? ` · ${budgetLabel.toLowerCase()}` : ''}
            </span>
            <button type="button" onClick={onReset} className="min-h-11 font-bold text-brand underline underline-offset-4">
              Voir tous les biens
            </button>
          </p>
        )}

        {list.length === 0 ? (
          <div className="flex flex-col items-start gap-5 rounded-2xl bg-navy-soft p-8 md:p-12">
            <p className="text-xl font-bold">Aucun bien ne correspond pour le moment. Décrivez-nous votre besoin, on cherche pour vous.</p>
            <a href={whatsappLink(need)} target="_blank" rel="noopener" className="btn-navy">
              Décrire mon besoin sur WhatsApp
            </a>
          </div>
        ) : (
          <ul className="rail md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal as="li" key={p.id} delay={(i % 3) * 120}>
                <PropertyCard property={p} onOpen={onOpen} />
              </Reveal>
            ))}
            {Array.from({ length: slots }, (_, i) => (
              <li key={`slot-${i}`}>
                <div className="flex h-full min-h-72 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink/15 text-slate-400">
                  <ImagePlus aria-hidden className="h-7 w-7" strokeWidth={1.25} />
                  <span className="text-sm font-light">[Bien à ajouter]</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
