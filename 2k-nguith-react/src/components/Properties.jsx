import { budgets, featuredPropertyId, properties, propertySlots } from '../data/site.js';
import { cn, normalize, whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import ShowcaseProperty from './ShowcaseProperty.jsx';
import PropertyTile from './PropertyTile.jsx';
import { Arrow, Dot } from './Glyphs.jsx';

const tabs = [
  { value: 'tous', label: 'Tous' },
  { value: 'vente', label: 'Vente' },
  { value: 'location', label: 'Location' },
  { value: 'terrain', label: 'Terrains' },
];

const intent = { vente: 'acheter un bien', location: 'louer un bien', terrain: 'acheter un terrain', tous: 'trouver un bien' };

// Bento : une grande vignette verticale à côté de deux vignettes horizontales, puis la suite par paires.
const shapes = ['tall', 'wide', 'wide'];

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
  const showcase = list.find((p) => p.id === featuredPropertyId) ?? list[0];
  const rest = list.filter((p) => p !== showcase);
  const [first, ...more] = rest;
  const slots = type === 'tous' && !isSearch ? propertySlots : 0;

  const budgetLabel = budgets.find((b) => b.value === budget)?.label;
  const need =
    `Bonjour 2K Nguith, je souhaite ${intent[type]}` + (quartier ? ` à ${quartier}` : '') + (budgetLabel && max ? `, budget ${budgetLabel.toLowerCase()}` : '') + '.';

  return (
    <section id="biens" aria-labelledby="titre-biens" className="block-y">
      <div className="wrap">
        <SectionTitle id="titre-biens" kicker="Sélection" title="Biens disponibles">
          <div role="group" aria-label="Filtrer les biens" className="flex flex-wrap gap-x-8">
            {tabs.map((t) => {
              const active = type === t.value && !isSearch;
              return (
                <button
                  key={t.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onType(t.value)}
                  className={cn(
                    'flex min-h-11 items-center gap-2.5 text-[0.78rem] uppercase tracking-caps transition-colors duration-700 ease-out',
                    active ? 'text-ink' : 'text-ink-muted hover:text-ink',
                  )}
                >
                  <Dot className={cn('transition-transform duration-700 ease-out', active ? 'scale-100' : 'scale-0')} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </SectionTitle>

        {isSearch && (
          <p aria-live="polite" className="-mt-12 mb-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
            <span>
              {list.length} résultat{list.length > 1 ? 's' : ''}
              {quartier && ` · ${quartier}`}
              {max ? ` · ${budgetLabel.toLowerCase()}` : ''}
            </span>
            <button type="button" onClick={onReset} className="link-line">
              Voir tous les biens
            </button>
          </p>
        )}

        {list.length === 0 ? (
          <Reveal className="border-y border-ink/10 py-20">
            <p className="display max-w-3xl text-4xl sm:text-5xl">Aucun bien ne correspond pour le moment. Décrivez-nous votre besoin, on cherche pour vous.</p>
            <a href={whatsappLink(need)} target="_blank" rel="noopener" className="btn-ink mt-12">
              Décrire mon besoin sur WhatsApp
              <Arrow className="h-2.5 w-6" />
            </a>
          </Reveal>
        ) : (
          <>
            <ShowcaseProperty property={showcase} onOpen={onOpen} />

            {first && (
              <ul className="mt-20 grid gap-x-10 gap-y-16 lg:mt-28 lg:grid-cols-12 lg:gap-x-16">
                {/* Grande vignette verticale */}
                <Reveal as="li" className="lg:col-span-5 lg:row-span-2">
                  <PropertyTile property={first} shape={shapes[0]} onOpen={onOpen} />
                </Reveal>
                {/* Vignettes horizontales, décalées vers le bas */}
                {more.map((p, i) => (
                  <Reveal as="li" key={p.id} delay={120 * (i + 1)} className={cn('lg:col-span-7', i === 0 && 'lg:mt-24')}>
                    <PropertyTile property={p} shape={shapes[(i + 1) % shapes.length]} onOpen={onOpen} />
                  </Reveal>
                ))}
              </ul>
            )}

            {slots > 0 && (
              <ul className="mt-20 grid gap-10 sm:grid-cols-2 lg:mt-28 lg:gap-16">
                {Array.from({ length: slots }, (_, i) => (
                  <Reveal as="li" key={i} delay={i * 120} className="flex h-56 items-center justify-center border border-ink/10 text-sm text-ink-muted">
                    [Bien à ajouter]
                  </Reveal>
                ))}
              </ul>
            )}
          </>
        )}

        <Reveal className="mt-24 flex justify-end border-t border-ink/10 pt-8">
          <a href={whatsappLink('Bonjour 2K Nguith, je souhaite recevoir la liste de tous vos biens disponibles.')} target="_blank" rel="noopener" className="link-line group">
            Voir tous nos biens
            <Arrow className="h-2.5 w-7 transition-transform duration-700 ease-out group-hover:translate-x-1.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
