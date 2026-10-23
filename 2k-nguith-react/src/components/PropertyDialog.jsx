import { useEffect, useRef } from 'react';
import { contact, typeLabels } from '../data/site.js';
import { formatFcfa, whatsappLink } from '../lib/utils.js';
import { Close } from './Icons.jsx';

// Fiche d'un bien : les détails (surface, papiers) sont ici, pas sur les cartes.
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
  const rows = p ? [['Quartier', p.location], ['Surface', p.surface], p.details && ['Détails', p.details], p.papers && ['Papiers', p.papers]].filter(Boolean) : [];

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="dialog-titre"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(56rem,calc(100%-2rem))] overflow-y-auto rounded-2xl bg-white p-0 text-ink shadow-xl backdrop:bg-ink/60"
    >
      {p && (
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] bg-mist md:aspect-auto">
            <img src={p.image} alt={p.alt} className="h-full w-full object-cover" />
            <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{typeLabels[p.type]}</p>
              <button type="button" onClick={onClose} aria-label="Fermer" className="-mr-2 -mt-2 flex h-11 w-11 items-center justify-center rounded-lg hover:bg-mist">
                <Close className="h-5 w-5" />
              </button>
            </div>
            <h2 id="dialog-titre" className="font-serif text-3xl font-medium">
              {p.title}
            </h2>
            <p className="mt-2 text-xl font-bold tabular-nums">{price}</p>
            <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10 text-sm">
              {rows.map(([term, value]) => (
                <div key={term} className="flex justify-between gap-6 py-3">
                  <dt className="text-ink-muted">{term}</dt>
                  <dd className="text-right font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn-dark flex-1">
                Je suis intéressé
              </a>
              <a href={`tel:${contact.phoneIntl}`} className="btn-outline tabular-nums">
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
