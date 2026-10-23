import { useEffect, useRef } from 'react';
import { contact, typeLabels } from '../data/site.js';
import { caption, formatFcfa, whatsappLink } from '../lib/utils.js';
import { Arrow, Dot, Plus } from './Glyphs.jsx';

// Fiche d'un bien. Les détails administratifs (surface, papiers) sont ici, pas sur les vignettes.
export default function PropertyDialog({ property: p, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (p && !dialog.open) dialog.showModal();
    if (!p && dialog.open) dialog.close();
  }, [p]);

  const price = p && `${formatFcfa(p.price)} F CFA${p.perMonth ? ' / mois' : ''}`;
  const message = p && `Bonjour 2K Nguith, je suis intéressé par ce bien : ${p.title}, ${p.location}, ${price}. Est-il toujours disponible ?`;
  const rows = p
    ? [['Quartier', p.location], ['Surface', p.surface], p.details && ['Détails', p.details], p.papers && ['Papiers', p.papers]].filter(Boolean)
    : [];

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="dialog-titre"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(64rem,calc(100%-2rem))] overflow-y-auto bg-white p-0 text-ink backdrop:bg-ink/70 backdrop:backdrop-blur-sm open:motion-safe:animate-rise"
    >
      {p && (
        <div className="grid md:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/3] bg-ink/5 md:aspect-auto">
            <img src={p.image} alt={p.alt} className="h-full w-full object-cover" />
            <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
          </div>
          <div className="flex flex-col p-8 sm:p-12">
            <div className="flex items-center justify-between">
              <p className="caps flex items-center gap-3">
                <Dot />
                {typeLabels[p.type]}
              </p>
              <button type="button" onClick={onClose} aria-label="Fermer" className="-mr-3 flex h-11 w-11 items-center justify-center">
                <Plus className="h-4 w-4 rotate-45" />
              </button>
            </div>
            <h2 id="dialog-titre" className="display mt-8 text-5xl">
              {p.short}
            </h2>
            <p className="mt-3 text-ink-muted">{caption(p, { withName: false })}</p>
            <p className="display mt-8 text-4xl tabular-nums">{price}</p>

            <dl className="mt-10 border-t border-ink/10 text-[0.95rem]">
              {rows.map(([term, value]) => (
                <div key={term} className="flex justify-between gap-6 border-b border-ink/10 py-4">
                  <dt className="caps pt-0.5">{term}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn-ink flex-1">
                Je suis intéressé
                <Arrow className="h-2.5 w-6" />
              </a>
              <a href={`tel:${contact.phoneIntl}`} className="btn-line tabular-nums">
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
