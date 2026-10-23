import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ambiance, contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

// Appel à l'action final : photo de nuit en fond, carte de contact blanche à droite.
export default function Contact() {
  const rows = [
    { Icon: Phone, term: 'WhatsApp et appel', value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    { Icon: MapPin, term: 'Adresse', value: contact.address, href: contact.mapsUrl, external: true },
    { Icon: Clock, term: 'Horaires', value: '[à confirmer]' },
  ];

  return (
    <section id="contact" aria-labelledby="titre-contact" className="relative isolate overflow-hidden bg-navy py-24 text-white md:py-32 lg:py-40">
      <img src={ambiance.contact} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker-light">Contact</p>
          <h2 id="titre-contact" className="title">
            Venez <span className="text-gold">nous voir</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-300 md:text-lg">Cité Atepa, près VDN 3, Malibu, face au terrain Las Palmas. Ou écrivez-nous directement sur WhatsApp.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-gold">
              <MessageCircle aria-hidden className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={`tel:${contact.phoneIntl}`} className="btn-ghost">
              <Phone aria-hidden className="h-4 w-4" />
              Appeler
            </a>
            <a href={contact.mapsUrl} target="_blank" rel="noopener" className="btn-ghost">
              Voir sur Google Maps
              <ArrowRight aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>

        <ul className="space-y-3 rounded-3xl border border-black/5 bg-white p-5 text-ink shadow-2xl sm:p-7 lg:ml-auto lg:max-w-md">
          {rows.map(({ Icon, term, value, href, external }) => (
            <li key={term} className="flex items-start gap-4 rounded-2xl p-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-soft text-brand">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{term}</span>
                {href ? (
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})} className="text-sm font-light text-slate-500 hover:text-brand hover:underline">
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-light text-slate-500">{value}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
