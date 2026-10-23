import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ambiance } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

const strengths = [
  { title: 'Tout au même endroit', text: 'Vente, location, terrains et gérance.' },
  { title: 'Papiers indiqués', text: 'Le type de papiers est indiqué pour chaque bien.' },
  { title: 'Une seule équipe', text: 'Construction et rénovation par la même équipe.' },
  { title: 'Diaspora accompagnée', text: 'Photos, vidéos et documents envoyés sur WhatsApp, à distance.' },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="section relative overflow-hidden bg-forest-deep text-white">
      {/* Halo décoratif */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-forest/60 blur-3xl" />
      <div className="container relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker-light">Pourquoi 2K Nguith</p>
          <h2 id="titre-pourquoi" className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            Pourquoi nous <span className="text-gold">choisir</span>&nbsp;?
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/75">Votre souci d'habitat, notre raison d'être&nbsp;: on vous trouve le toit parfait, et on reste à vos côtés jusqu'à la signature.</p>
          <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-2xl lg:block">
            <img src={ambiance.why} alt="Villa éclairée au crépuscule" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
          </div>
        </div>

        <div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-gold/40 hover:bg-white/10">
                <CheckCircle2 aria-hidden className="h-7 w-7 text-emerald-400" />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
              </li>
            ))}
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-gold mt-8">
            Parler à un conseiller
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
