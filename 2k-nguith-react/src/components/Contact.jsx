import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

export default function Contact() {
  const rows = [
    { term: 'Adresse', value: contact.address },
    { term: 'WhatsApp et appel', value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    { term: 'Horaires', value: '[à confirmer]' },
  ];

  return (
    <section id="contact" aria-labelledby="titre-contact" className="section">
      <div className="wrap grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 id="titre-contact" className="heading">
            Venez nous voir
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-dark">
              WhatsApp
            </a>
            <a href={`tel:${contact.phoneIntl}`} className="btn-outline">
              Appeler
            </a>
            <a href={contact.mapsUrl} target="_blank" rel="noopener" className="btn-outline">
              Voir sur Google Maps
            </a>
          </div>
        </div>
        <dl className="divide-y divide-ink/10 border-y border-ink/10">
          {rows.map(({ term, value, href }) => (
            <div key={term} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-ink-muted">{term}</dt>
              <dd>
                {href ? (
                  <a href={href} className="font-medium tabular-nums hover:underline">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
