import { useEffect, useRef } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { contact, typeLabels } from '../data/site.js';
import { formatFcfa, whatsappLink } from '../lib/utils.js';

// Fiche détaillée d'un bien, avec les papiers.
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
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(56rem,calc(100%-2rem))] overflow-y-auto rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-night/70 backdrop:backdrop-blur-sm"
    >
      {p && (
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img src={p.image} alt={p.alt} className="h-full w-full object-cover" />
            <span className="ph-tag absolute bottom-3 left-3">[Photo à remplacer]</span>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand">{typeLabels[p.type]}</span>
              <button type="button" onClick={onClose} aria-label="Fermer" className="-mr-2 -mt-2 flex h-11 w-11 items-center justify-center rounded-full hover:bg-cloud">
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>
            <h2 id="dialog-titre" className="mt-3 font-serif text-2xl font-semibold">
              {p.title}
            </h2>
            <p className="mt-2 font-serif text-2xl font-bold tabular-nums text-navy">{price}</p>
            <dl className="mt-6 divide-y divide-ink/10 rounded-2xl bg-cloud px-4 text-sm">
              {rows.map(([term, value]) => (
                <div key={term} className="flex justify-between gap-6 py-3">
                  <dt className="text-ink-muted">{term}</dt>
                  <dd className="text-right font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn-gold flex-1">
                <MessageCircle aria-hidden className="h-4 w-4" />
                Je suis intéressé
              </a>
              <a href={`tel:${contact.phoneIntl}`} className="btn-line tabular-nums">
                <Phone aria-hidden className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
