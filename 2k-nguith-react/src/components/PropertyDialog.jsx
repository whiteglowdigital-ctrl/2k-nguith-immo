import { useEffect, useRef, useState } from 'react';
import { Bath, BedDouble, Car, CookingPot, Droplets, MapPinned, MessageCircle, Phone, Route, Sofa, X, Zap } from 'lucide-react';
import { contact, typeLabels } from '../data/site.js';
import { cn, formatFcfa, whatsappLink } from '../lib/utils.js';
import PhotoCarousel from './PhotoCarousel.jsx';

const FADE = 300; // durée du fondu de fermeture

// Bloc d'informations : titre discret, puis lignes icône / libellé / valeur.
function Block({ title, rows }) {
  return (
    <section className="mt-6">
      <h3 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">{title}</h3>
      <dl className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.03] px-4 text-sm">
        {rows.map(({ Icon, term, value }) => (
          <div key={term} className="flex items-center justify-between gap-6 py-3">
            <dt className="flex items-center gap-2.5 text-silver">
              {Icon && <Icon aria-hidden strokeWidth={1.5} className="h-4 w-4 shrink-0 text-gold/80" />}
              {term}
            </dt>
            <dd className={cn('text-right', String(value).startsWith('[') && 'text-silver')}>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// Fiche détaillée : photos, informations pour rassurer le client, contact WhatsApp pré-rempli.
export default function PropertyDialog({ property, onClose }) {
  const ref = useRef(null);
  const [p, setP] = useState(property); // garde le bien affiché pendant le fondu de fermeture
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (property) {
      setP(property);
      setClosing(false);
      if (!dialog.open) dialog.showModal();
      return undefined;
    }
    if (!dialog.open) return undefined;
    // Fermeture : fondu, puis fermeture réelle de la fenêtre
    setClosing(true);
    const t = setTimeout(() => {
      dialog.close();
      setClosing(false);
      setP(null);
    }, FADE);
    return () => clearTimeout(t);
  }, [property]);

  // Échap : on garde le fondu au lieu de la fermeture brutale du navigateur
  const onCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const price = p && `${formatFcfa(p.price)} F CFA${p.perMonth ? ' / mois' : ''}`;
  const message =
    p && `Bonjour 2K Nguith, je suis intéressé par « ${p.title} » à ${p.location.split(' (')[0]}, au prix de ${price}. Est-il toujours disponible ? Je souhaite plus d'informations et une visite.`;
  const main = p ? [['Quartier', p.location], ['Surface', p.surface], p.details && ['Détails', p.details], p.papers && ['Papiers', p.papers]].filter(Boolean) : [];
  const a = p?.amenities;
  const l = p?.layout;

  return (
    <dialog
      ref={ref}
      onCancel={onCancel}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="dialog-titre"
      className={cn(
        'm-auto max-h-[calc(100dvh-2rem)] w-[min(58rem,calc(100%-2rem))] overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-panel p-0 text-white shadow-deep',
        'backdrop:bg-black/80 backdrop:backdrop-blur-sm open:animate-fade-in open:backdrop:animate-fade-in',
        'transition-opacity duration-300 ease-in-out backdrop:transition-opacity backdrop:duration-300',
        closing && 'opacity-0 backdrop:opacity-0',
      )}
    >
      {p && (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <PhotoCarousel
            key={p.id}
            images={p.gallery ?? [p.image]}
            alt={p.alt}
            className="aspect-[4/3] md:sticky md:top-0 md:aspect-auto md:h-[min(54rem,calc(100dvh-2rem))] md:self-start"
          >
            <span className="ph-tag absolute left-3 top-3">[Photos à remplacer]</span>
          </PhotoCarousel>

          <div className="flex flex-col">
            <div className="p-6 pb-2 sm:p-8 sm:pb-2">
              <div className="flex items-start justify-between gap-4">
                <span className="kicker mb-0">
                  {typeLabels[p.type]}
                  {p.example && <span className="font-light normal-case tracking-normal text-silver">· bien d'exemple</span>}
                </span>
                <button type="button" onClick={onClose} aria-label="Fermer" className="-mr-2 -mt-2 flex h-11 w-11 items-center justify-center rounded-full text-silver hover:bg-white/5 hover:text-white">
                  <X aria-hidden className="h-5 w-5" />
                </button>
              </div>
              <h2 id="dialog-titre" className="mt-3 font-serif text-2xl font-semibold">
                {p.title}
              </h2>
              <p className="mt-2 font-serif text-3xl font-semibold tabular-nums text-gold">{price}</p>
              {p.description && <p className="mt-4 text-sm leading-relaxed text-white/80">{p.description}</p>}

              <dl className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.03] px-4 text-sm">
                {main.map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-6 py-3">
                    <dt className="text-silver">{term}</dt>
                    <dd className="text-right">{value}</dd>
                  </div>
                ))}
              </dl>

              {a && (
                <Block
                  title="Commodités"
                  rows={[
                    { Icon: Droplets, term: 'Eau', value: a.water },
                    { Icon: Zap, term: 'Électricité', value: a.power },
                    { Icon: Route, term: 'Accès', value: a.access },
                  ]}
                />
              )}
              {l && (
                <Block
                  title="Distribution"
                  rows={[
                    { Icon: BedDouble, term: 'Chambres', value: l.bedrooms },
                    { Icon: Sofa, term: 'Salons', value: l.livings },
                    { Icon: Bath, term: 'Salles de bain', value: l.baths },
                    { Icon: CookingPot, term: 'Cuisine', value: l.kitchen },
                    { Icon: Car, term: 'Garage', value: l.garage },
                  ]}
                />
              )}
              {p.nearby?.length ? (
                <section className="mt-6">
                  <h3 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">Localisation clé</h3>
                  <ul className="space-y-2.5 text-sm">
                    {p.nearby.map((n) => (
                      <li key={n} className={cn('flex items-start gap-2.5', n.startsWith('[') && 'text-silver')}>
                        <MapPinned aria-hidden strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {/* Vrais biens : détails rédigés pour la maquette, à vérifier par l'agence */}
              {p.indicative && <p className="mt-6 text-xs text-silver">Détails indicatifs, confirmés lors de la visite.</p>}
            </div>

            {/* Action principale : fixée en bas de la fiche pendant la lecture */}
            <div className="sticky bottom-0 mt-auto bg-gradient-to-t from-panel via-panel to-panel/0 px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
              <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn-gold min-h-14 w-full text-base shadow-glow">
                <MessageCircle aria-hidden className="h-5 w-5" />
                Je suis intéressé
              </a>
              <p className="mt-2 text-center text-xs text-silver">
                Ouvre WhatsApp avec le nom et le prix du bien déjà écrits.{' '}
                <a href={`tel:${contact.phoneIntl}`} className="inline-flex items-center gap-1 whitespace-nowrap font-medium text-white underline-offset-4 hover:underline">
                  <Phone aria-hidden className="h-3 w-3" />
                  {contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
