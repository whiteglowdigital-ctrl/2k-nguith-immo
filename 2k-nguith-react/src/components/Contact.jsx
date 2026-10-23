import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

export default function Contact() {
  const rows = [
    { Icon: MapPin, term: 'Adresse', value: contact.address },
    { Icon: Phone, term: 'WhatsApp et appel', value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    { Icon: Clock, term: 'Horaires', value: '[à confirmer]' },
  ];

  return (
    <section id="contact" aria-labelledby="titre-contact" className="section bg-white">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 id="titre-contact" className="title">
            Venez nous voir
          </h2>
          <dl className="mt-14 divide-y divide-line border-y border-line">
            {rows.map(({ Icon, term, value, href }) => (
              <div key={term} className="flex gap-5 py-6">
                <Icon aria-hidden strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-ink" />
                <div>
                  <dt className="label">{term}</dt>
                  <dd className="mt-2 text-lg text-ink">
                    {href ? (
                      <a href={href} className="hover:underline">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-dark">
              <MessageCircle aria-hidden strokeWidth={1.5} className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={`tel:${contact.phoneIntl}`} className="btn-light">
              <Phone aria-hidden strokeWidth={1.5} className="h-4 w-4" />
              Appeler
            </a>
            <a href={contact.mapsUrl} target="_blank" rel="noopener" className="btn-light">
              Voir sur Google Maps
              <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Pas d'iframe Google : aucun contenu tiers ni cookie chargé sans action du visiteur. */}
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener"
          aria-label="Ouvrir l'adresse de l'agence dans Google Maps"
          className="group relative flex min-h-[22rem] overflow-hidden rounded-[2rem] bg-ink text-white"
        >
          <svg aria-hidden className="absolute inset-0 h-full w-full opacity-25 transition-transform duration-[1500ms] ease-soft group-hover:scale-105" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="#FFFFFF" strokeWidth="0.75">
              <path d="M-20 120 C 80 100, 160 160, 420 110" />
              <path d="M-20 250 C 120 230, 220 290, 420 240" strokeWidth="2" />
              <path d="M90 -20 C 110 120, 70 260, 120 420" />
              <path d="M260 -20 C 240 140, 300 260, 270 420" strokeWidth="2" />
              <path d="M-20 340 L 420 300" />
              <path d="M330 -20 L 380 420" />
              <path d="M-20 40 L 420 60" />
            </g>
          </svg>
          <div className="relative mt-auto flex w-full items-end justify-between gap-6 p-8 sm:p-10">
            <div>
              <MapPin aria-hidden strokeWidth={1.25} className="h-8 w-8" />
              <p className="mt-5 font-display text-2xl font-light leading-snug sm:text-3xl">
                Cité Atepa, Malibu
                <br />
                face au terrain Las Palmas
              </p>
            </div>
            <ArrowUpRight aria-hidden strokeWidth={1.25} className="h-8 w-8 shrink-0 transition-transform duration-500 ease-soft group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </a>
      </div>
    </section>
  );
}
