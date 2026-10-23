import { Check } from 'lucide-react';
import { ambiance } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// Arguments pensés pour rassurer, en particulier la diaspora.
// [à confirmer] : ne garder que les engagements réellement tenus par l'agence.
const strengths = [
  {
    title: 'Tout au même endroit',
    text: 'Achat, location, terrain, gérance, construction : un seul interlocuteur suit votre projet de bout en bout, sans multiplier les intermédiaires ni les frais.',
  },
  {
    title: 'Papiers indiqués et vérifiés',
    text: 'Le type de papier (titre foncier, bail, acte administratif) est annoncé dès le départ. Avant toute signature, le dossier est vérifié au cadastre et auprès de la conservation foncière, sur le livre foncier, et vous recevez une copie des documents.',
  },
  {
    title: 'Une seule équipe pour construire',
    text: 'Après l’achat, nos équipes de construction et de rénovation prennent le relais : devis clair, suivi du chantier en photos et en vidéos.',
  },
  {
    title: 'Diaspora accompagnée',
    text: 'Vous vivez à l’étranger ? Visites en vidéo, documents envoyés sur WhatsApp, signature accompagnée : vous suivez chaque étape à distance, en toute sérénité.',
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="section bg-void">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="arch group relative order-2 aspect-[4/3] overflow-hidden border border-white/5 lg:order-1 lg:aspect-[4/5]">
          <img src={ambiance.why} alt="Villa éclairée au crépuscule" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
          <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHead id="titre-pourquoi" kicker="2K Nguith" title="Pourquoi nous" glow="choisir ?" />
          <ul className="divide-y divide-white/5 border-y border-white/5">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="flex gap-4 py-6">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Check aria-hidden strokeWidth={2} className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold md:text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
