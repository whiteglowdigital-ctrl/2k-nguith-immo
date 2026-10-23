import { ArrowRight, Check } from 'lucide-react';
import { ambiance } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

const strengths = [
  { title: 'Tout au même endroit', text: 'Vente, location, terrains et gérance.' },
  { title: 'Papiers indiqués', text: 'Le type de papiers est indiqué pour chaque bien.' },
  { title: 'Une seule équipe', text: 'Construction et rénovation par la même équipe.' },
  { title: 'Diaspora accompagnée', text: 'Photos, vidéos et documents envoyés sur WhatsApp, à distance.' },
];

// Mobile : fond blanc, arguments séparés par de fines lignes grises.
// Ordinateur : section bleu nuit immersive avec photo.
export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="section relative overflow-hidden bg-white lg:bg-navy lg:text-white">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 hidden h-[30rem] w-[30rem] rounded-full bg-brand/30 blur-3xl lg:block" />
      <div className="container relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="kicker lg:text-gold">Pourquoi 2K Nguith</p>
          <h2 id="titre-pourquoi" className="title">
            Pourquoi nous <span className="text-gold-dark lg:text-gold">choisir</span>&nbsp;?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-500 md:text-lg lg:text-slate-400">
            Votre souci d'habitat, notre raison d'être&nbsp;: on vous trouve le toit parfait, et on reste à vos côtés jusqu'à la signature.
          </p>
          <div className="relative mt-12 hidden aspect-[16/10] overflow-hidden rounded-2xl lg:block">
            <img src={ambiance.why} alt="Villa éclairée au crépuscule" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
          </div>
        </div>

        <div>
          <ul className="divide-y divide-slate-200 border-y border-slate-200 lg:grid lg:grid-cols-2 lg:gap-5 lg:divide-y-0 lg:border-0">
            {strengths.map((s) => (
              <li
                key={s.title}
                className="flex gap-4 py-7 lg:flex-col lg:gap-0 lg:rounded-2xl lg:border lg:border-white/10 lg:bg-white/5 lg:p-7 lg:transition lg:hover:border-gold/30 lg:hover:bg-white/10"
              >
                <Check aria-hidden strokeWidth={1.75} className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark lg:h-6 lg:w-6 lg:text-gold" />
                <div className="lg:mt-5">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500 lg:text-slate-400">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-navy mt-12 lg:bg-gold lg:text-navy lg:hover:bg-gold-dark">
            Parler à un conseiller
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
