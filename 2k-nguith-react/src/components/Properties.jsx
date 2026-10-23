import { budgets, properties, propertySlots } from '../data/site.js';
import { cn, normalize, whatsappLink } from '../lib/utils.js';
import SectionHeader from './SectionHeader.jsx';
import PropertyCard from './PropertyCard.jsx';
import { ArrowRight } from './Icons.jsx';

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
      <div className="wrap">
        <SectionHeader id="titre-biens" title="Biens disponibles">
          <div role="group" aria-label="Filtrer les biens" className="flex flex-wrap gap-x-6">
            {tabs.map((t) => {
              const active = type === t.value && !isSearch;
              return (
                <button
                  key={t.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onType(t.value)}
                  className={cn(
                    'min-h-11 border-b-2 text-sm font-semibold transition-colors duration-300',
                    active ? 'border-amber text-ink' : 'border-transparent text-ink-muted hover:text-ink',
                  )}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </SectionHeader>

        {isSearch && (
          <p aria-live="polite" className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
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

        {list.length === 0 ? (
          <div className="rounded-2xl bg-mist p-8 md:p-12">
            <p className="font-serif text-2xl">Aucun bien ne correspond pour le moment. Décrivez-nous votre besoin, on cherche pour vous.</p>
            <a href={whatsappLink(need)} target="_blank" rel="noopener" className="btn-dark mt-6">
              Décrire mon besoin sur WhatsApp
            </a>
          </div>
        ) : (
          // Grille fixe : 1 colonne sur mobile, 2 sur ordinateur
          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {list.map((p) => (
              <li key={p.id}>
                <PropertyCard property={p} onOpen={onOpen} />
              </li>
            ))}
            {Array.from({ length: slots }, (_, i) => (
              <li key={`slot-${i}`}>
                <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-ink/20 text-sm text-ink-muted">
                  [Bien à ajouter]
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 flex justify-center">
          <a href={whatsappLink('Bonjour 2K Nguith, je souhaite recevoir la liste de tous vos biens disponibles.')} target="_blank" rel="noopener" className="btn-outline">
            Voir tous nos biens
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
