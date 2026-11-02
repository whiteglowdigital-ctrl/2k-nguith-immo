import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ambiance, contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

export default function Contact() {
  const rows = [
    { Icon: Phone, term: 'WhatsApp et appel', value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    { Icon: MapPin, term: 'Adresse', value: contact.address, href: contact.mapsUrl, external: true },
    { Icon: Clock, term: 'Horaires', value: '[à confirmer]' },
  ];

  return (
    <section id="contact" aria-labelledby="titre-contact" className="relative isolate overflow-hidden py-24 md:py-32 lg:py-36">
      <img src={ambiance.contact} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-void via-void/80 to-void" />
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="kicker">
            <span aria-hidden className="h-px w-8 bg-gold" />
            Contact
          </p>
          <h2 id="titre-contact" className="title">
            Venez <span className="glow-word">nous voir</span>
          </h2>
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
              Google Maps
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal as="ul" delay={150} className="card space-y-2 p-4 sm:p-6 lg:ml-auto lg:w-full lg:max-w-md">
          {rows.map(({ Icon, term, value, href, external }) => (
            <li key={term} className="flex items-start gap-4 rounded-xl p-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon aria-hidden strokeWidth={1.5} className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{term}</span>
                {href ? (
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})} className="text-sm text-silver hover:text-gold hover:underline">
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-silver">{value}</span>
                )}
              </span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
