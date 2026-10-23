import { ArrowRight, ImagePlus } from 'lucide-react';
import { budgets, featuredPropertyId, properties, propertySlots } from '../data/site.js';
import { cn, normalize, whatsappLink } from '../lib/utils.js';
import SectionHeading from './SectionHeading.jsx';
import PropertyCard from './PropertyCard.jsx';
import FeaturedProperty from './FeaturedProperty.jsx';
import Reveal from './Reveal.jsx';

const tabs = [
  { value: 'tous', label: 'Tous' },
  { value: 'vente', label: 'Vente' },
  { value: 'location', label: 'Location' },
  { value: 'terrain', label: 'Terrains' },
];

const intent = { vente: 'acheter un bien', location: 'louer un bien', terrain: 'acheter un terrain', tous: 'trouver un bien' };

// Hauteurs d'image qui alternent pour casser l'alignement du catalogue.
const ratios = ['aspect-[4/5]', 'aspect-[4/3]', 'aspect-[4/3]', 'aspect-[4/5]'];

function Slot() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink/15 text-ink-muted">
        <ImagePlus aria-hidden strokeWidth={1} className="h-9 w-9" />
        <span className="text-sm font-medium">[Bien à ajouter]</span>
      </div>
    </div>
  );
}

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
  const featured = list.find((p) => p.id === featuredPropertyId);
  const rest = list.filter((p) => p !== featured);

  // Grille éditoriale : 2 colonnes, la droite décalée vers le bas.
  const columns = [rest.filter((_, i) => i % 2 === 0), rest.filter((_, i) => i % 2 === 1)];
  // Emplacements vides à la fin, pour que les vrais biens passent toujours en premier sur mobile.
  const slots = type === 'tous' && !isSearch ? propertySlots : 0;

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
          <div role="group" aria-label="Filtrer les biens" className="-mx-1 flex gap-1 overflow-x-auto">
            {tabs.map((t) => {
              const active = type === t.value && !isSearch;
              return (
                <button
                  key={t.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onType(t.value)}
                  className={cn(
                    'relative min-h-11 shrink-0 px-3 text-[0.95rem] font-medium transition-colors duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:transition-transform after:duration-500 after:ease-soft',
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
          <p aria-live="polite" className="-mt-10 mb-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-muted">
            <span>
              {list.length} résultat{list.length > 1 ? 's' : ''}
              {quartier && ` · ${quartier}`}
              {max ? ` · ${budgetLabel.toLowerCase()}` : ''}
            </span>
            <button type="button" onClick={onReset} className="min-h-11 font-semibold text-ink underline decoration-ink/20 underline-offset-4">
              Voir tous les biens
            </button>
          </p>
        )}

        {list.length === 0 ? (
          <Reveal className="flex flex-col items-start gap-8 rounded-2xl bg-white p-10 shadow-air sm:p-16">
            <p className="max-w-xl font-display text-3xl font-light leading-snug text-ink">
              Aucun bien ne correspond pour le moment. Décrivez-nous votre besoin, on cherche pour vous.
            </p>
            <a href={whatsappLink(need)} target="_blank" rel="noopener" className="btn-dark">
              Décrire mon besoin sur WhatsApp
            </a>
          </Reveal>
        ) : (
          <>
            {featured && <FeaturedProperty property={featured} onOpen={onOpen} />}

            {rest.length > 0 && (
              <div className={cn('grid gap-10 md:grid-cols-2 lg:gap-16', featured && 'mt-16 lg:mt-24')}>
                {columns.map((col, c) => (
                  <ul key={c} className={cn('flex flex-col gap-10 lg:gap-16', c === 1 && 'md:pt-24 lg:pt-40')}>
                    {col.map((p, i) => (
                      <Reveal as="li" key={p.id} delay={c * 120}>
                        <PropertyCard property={p} ratio={ratios[(i * 2 + c) % ratios.length]} onOpen={onOpen} />
                      </Reveal>
                    ))}
                  </ul>
                ))}
              </div>
            )}

            {slots > 0 && (
              <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-16 lg:gap-16">
                {Array.from({ length: slots }, (_, i) => (
                  <Reveal as="li" key={i} delay={i * 120} aria-label="Emplacement pour un bien à ajouter">
                    <Slot />
                  </Reveal>
                ))}
              </ul>
            )}
          </>
        )}

        <Reveal className="mt-24 flex justify-center border-t border-ink/10 pt-12">
          <a
            href={whatsappLink('Bonjour 2K Nguith, je souhaite recevoir la liste de tous vos biens disponibles.')}
            target="_blank"
            rel="noopener"
            className="link-arrow group text-base"
          >
            Voir tous nos biens
            <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
