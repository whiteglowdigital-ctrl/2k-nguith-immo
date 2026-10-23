import { useEffect, useRef } from 'react';
import { FileText, MapPin, Maximize, MessageCircle, Phone, X } from 'lucide-react';
import { contact, typeLabels } from '../data/site.js';
import { formatFcfa, whatsappLink } from '../lib/utils.js';

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

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="dialog-titre"
      className="m-auto w-[min(56rem,calc(100%-2rem))] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm open:motion-safe:animate-rise"
    >
      {p && (
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img src={p.image} alt={p.alt} className="h-full w-full object-cover" />
            <span className="ph-tag absolute bottom-4 left-4">[Photo à remplacer]</span>
          </div>
          <div className="flex flex-col p-7 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <span className="label">{typeLabels[p.type]}</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="-mr-3 -mt-3 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-mist"
              >
                <X aria-hidden strokeWidth={1.5} />
              </button>
            </div>
            <h2 id="dialog-titre" className="mt-3 font-display text-3xl font-light leading-tight tracking-tight">
              {p.title}
            </h2>
            <p className="mt-5 font-display text-3xl font-light tabular-nums">{price}</p>

            <dl className="mt-8 divide-y divide-line border-y border-line text-[0.95rem]">
              <Row Icon={MapPin} term="Quartier" value={p.location} />
              <Row Icon={Maximize} term="Surface" value={p.surface} />
              {p.details && <Row Icon={Maximize} term="Détails" value={p.details} hideIcon />}
              {p.papers && <Row Icon={FileText} term="Papiers" value={p.papers} />}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn-dark flex-1">
                <MessageCircle aria-hidden strokeWidth={1.5} className="h-4 w-4" />
                Je suis intéressé
              </a>
              <a href={`tel:${contact.phoneIntl}`} className="btn-light">
                <Phone aria-hidden strokeWidth={1.5} className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function Row({ Icon, term, value, hideIcon }) {
  return (
    <div className="flex items-start gap-3 py-3.5">
      <Icon aria-hidden strokeWidth={1.5} className={`mt-0.5 h-4 w-4 shrink-0 text-ink-muted ${hideIcon ? 'invisible' : ''}`} />
      <dt className="w-24 shrink-0 text-ink-muted">{term}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
