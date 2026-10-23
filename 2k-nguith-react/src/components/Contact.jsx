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
    <section id="contact" aria-labelledby="titre-contact" className="relative isolate overflow-hidden bg-forest-deep py-20 text-white md:py-28">
      <img src={ambiance.contact} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-forest-deep/50" />
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker-light">Contact</p>
          <h2 id="titre-contact" className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Venez <span className="text-gold">nous voir</span>
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/80">Cité Atepa, près VDN 3, Malibu, face au terrain Las Palmas. Ou écrivez-nous directement sur WhatsApp.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

        <ul className="space-y-3 rounded-3xl bg-white p-5 text-ink shadow-2xl sm:p-7 lg:ml-auto lg:max-w-md">
          {rows.map(({ Icon, term, value, href, external }) => (
            <li key={term} className="flex items-start gap-4 rounded-2xl p-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-soft text-forest">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">{term}</span>
                {href ? (
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})} className="text-sm text-ink-muted hover:text-forest hover:underline">
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-ink-muted">{value}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
