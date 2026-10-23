import { Check } from 'lucide-react';
import { ambiance } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

const strengths = ['Tout au même endroit', 'Papiers indiqués', 'Une seule équipe', 'Diaspora accompagnée'];

export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="section bg-panel/60">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="group relative order-2 aspect-[4/3] overflow-hidden rounded-3xl border border-white/5 lg:order-1 lg:aspect-[4/5]">
          <img src={ambiance.why} alt="Villa éclairée au crépuscule" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
          <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHead id="titre-pourquoi" kicker="2K Nguith" title="Pourquoi nous" glow="choisir ?" />
          <ul className="divide-y divide-white/5 border-y border-white/5">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 100} className="flex items-center gap-4 py-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Check aria-hidden strokeWidth={2} className="h-4 w-4" />
                </span>
                <span className="text-base font-medium md:text-lg">{s}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
