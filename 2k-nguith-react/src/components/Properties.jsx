import { ArrowRight, ImagePlus } from 'lucide-react';
import { budgets, properties, propertySlots } from '../data/site.js';
import { cn, normalize, whatsappLink } from '../lib/utils.js';
import SectionHeading from './SectionHeading.jsx';
import PropertyCard from './PropertyCard.jsx';

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
  const showSlots = type === 'tous' && !isSearch;
  const budgetLabel = budgets.find((b) => b.value === budget)?.label;

  const need =
    `Bonjour 2K Nguith, je souhaite ${intent[type]}` +
    (quartier ? ` à ${quartier}` : '') +
    (budgetLabel && max ? `, budget ${budgetLabel.toLowerCase()}` : '') +
    '.';

  return (
    <section id="biens" aria-labelledby="titre-biens" className="section">
      <div className="container-site">
        <SectionHeading id="titre-biens" title="Biens disponibles">
          <div role="group" aria-label="Filtrer les biens" className="-mx-1 flex gap-1 overflow-x-auto sm:gap-2">
            {tabs.map((t) => {
              const active = type === t.value && !isSearch;
              return (
                <button
                  key={t.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onType(t.value)}
                  className={cn(
                    'relative min-h-11 shrink-0 px-3 text-[0.95rem] font-semibold transition-colors duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:transition-all after:duration-300 after:ease-soft',
                    active ? 'text-ink after:bg-copper' : 'text-ink-muted after:scale-x-0 after:bg-ink hover:text-ink',
                  )}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </SectionHeading>

        {isSearch && (
          <p aria-live="polite" className="-mt-8 mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-muted">
            <span>
              {list.length} résultat{list.length > 1 ? 's' : ''}
              {quartier && ` · ${quartier}`}
              {max ? ` · ${budgetLabel.toLowerCase()}` : ''}
            </span>
            <button type="button" onClick={onReset} className="min-h-11 font-semibold text-ink underline underline-offset-4">
              Voir tous les biens
            </button>
          </p>
        )}

        {list.length > 0 ? (
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {list.map((p) => (
              <li key={p.id}>
                <PropertyCard property={p} onOpen={onOpen} />
              </li>
            ))}
            {showSlots &&
              Array.from({ length: propertySlots }, (_, i) => (
                <li key={`slot-${i}`} aria-label="Emplacement pour un bien à ajouter">
                  <div className="flex h-full min-h-[26rem] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink/15 text-ink-muted">
                    <ImagePlus aria-hidden strokeWidth={1} className="h-10 w-10" />
                    <span className="text-sm font-medium">[Bien à ajouter]</span>
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-white p-10 shadow-soft sm:p-14">
            <p className="max-w-lg font-display text-2xl font-light text-ink">
              Aucun bien ne correspond pour le moment. Décrivez-nous votre besoin, on cherche pour vous.
            </p>
            <a href={whatsappLink(need)} target="_blank" rel="noopener" className="btn-dark">
              Décrire mon besoin sur WhatsApp
            </a>
          </div>
        )}

        <div className="mt-20 flex justify-center">
          <a
            href={whatsappLink('Bonjour 2K Nguith, je souhaite recevoir la liste de tous vos biens disponibles.')}
            target="_blank"
            rel="noopener"
            className="btn-light group shadow-soft"
          >
            Voir tous nos biens
            <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
