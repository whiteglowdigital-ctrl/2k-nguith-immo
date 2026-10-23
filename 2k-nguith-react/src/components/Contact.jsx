import Reveal from './Reveal.jsx';
import { Arrow, ArrowUpRight, Dot } from './Glyphs.jsx';
import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

export default function Contact() {
  const rows = [
    { term: 'Adresse', value: contact.address },
    { term: 'WhatsApp et appel', value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    { term: 'Horaires', value: '[à confirmer]' },
  ];

  return (
    <section id="contact" aria-labelledby="titre-contact" className="block-y border-t border-ink/10">
      <div className="wrap grid gap-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="caps mb-8 flex items-center gap-3">
            <Dot />
            Contact
          </p>
          <h2 id="titre-contact" className="h-section">
            Venez nous voir
          </h2>
          <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-ink group">
              WhatsApp
              <Arrow className="h-2.5 w-6 transition-transform duration-700 ease-out group-hover:translate-x-1" />
            </a>
            <a href={`tel:${contact.phoneIntl}`} className="btn-line">
              Appeler
            </a>
            <a href={contact.mapsUrl} target="_blank" rel="noopener" className="btn-line">
              Voir sur Google Maps
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <dl className="border-t border-ink/10">
            {rows.map(({ term, value, href }) => (
              <div key={term} className="border-b border-ink/10 py-8">
                <dt className="caps">{term}</dt>
                <dd className="display mt-4 text-[1.75rem] leading-snug">
                  {href ? (
                    <a href={href} className="tabular-nums hover:underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
