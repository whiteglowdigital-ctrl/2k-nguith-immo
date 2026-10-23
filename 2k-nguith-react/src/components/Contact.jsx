import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

export default function Contact() {
  const rows = [
    { term: 'Adresse', value: contact.address },
    { term: 'WhatsApp et appel', value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    { term: 'Horaires', value: '[à confirmer]' },
  ];

  return (
    <section id="contact" aria-labelledby="titre-contact" className="section">
      <div className="container-site grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <Reveal className="border-t border-ink/10 pt-8">
          <h2 id="titre-contact" className="title">
            Venez nous voir
          </h2>
          <dl className="mt-14 border-t border-ink/10">
            {rows.map(({ term, value, href }) => (
              <div key={term} className="grid gap-2 border-b border-ink/10 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="label pt-1">{term}</dt>
                <dd className="text-lg text-ink">
                  {href ? (
                    <a href={href} className="hover:underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
        </Reveal>

        {/* Plan stylisé : pas d'iframe Google, aucun cookie chargé sans action du visiteur. */}
        <Reveal delay={150}>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener"
            aria-label="Ouvrir l'adresse de l'agence dans Google Maps"
            className="group relative flex h-full min-h-[26rem] overflow-hidden rounded-2xl bg-white shadow-air transition-shadow duration-700 hover:shadow-air-lg"
          >
            <svg aria-hidden className="absolute inset-0 h-full w-full text-ink/15 transition-transform duration-[1500ms] ease-soft group-hover:scale-105" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M-20 120 C 80 100, 160 160, 420 110" />
                <path d="M-20 250 C 120 230, 220 290, 420 240" strokeWidth="3" />
                <path d="M90 -20 C 110 120, 70 260, 120 420" />
                <path d="M260 -20 C 240 140, 300 260, 270 420" strokeWidth="3" />
                <path d="M-20 340 L 420 300" />
                <path d="M330 -20 L 380 420" />
                <path d="M-20 40 L 420 60" />
                <path d="M170 -20 L 190 420" />
              </g>
            </svg>
            {/* Repère de l'agence au croisement des deux grands axes */}
            <span aria-hidden className="absolute left-[64%] top-[60%] flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="absolute h-12 w-12 rounded-full bg-copper/15 motion-safe:animate-ping" />
              <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-copper shadow" />
            </span>
            <div className="relative mt-auto flex w-full items-end justify-between gap-6 border-t border-ink/10 bg-white/90 p-7 backdrop-blur sm:p-8">
              <p className="font-display text-2xl font-light leading-snug text-ink">
                Cité Atepa, Malibu
                <span className="block text-ink-muted">face au terrain Las Palmas</span>
              </p>
              <ArrowUpRight aria-hidden strokeWidth={1.25} className="h-7 w-7 shrink-0 text-ink transition-all duration-500 ease-soft group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-copper" />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
