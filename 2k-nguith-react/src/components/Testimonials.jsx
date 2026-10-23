import { Quote, Star } from 'lucide-react';
import { reviews } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// Avis d'exemple (voir data/site.js) : signalés comme tels tant qu'ils ne sont pas réels.
export default function Testimonials() {
  return (
    <section aria-labelledby="titre-avis" className="section bg-panel/60">
      <div className="container">
        <SectionHead id="titre-avis" kicker="Témoignages" title="Ce que disent" glow="nos clients" />
        <ul className="rail md:grid-cols-3 md:gap-6">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 120} className="card relative flex flex-col p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label={`${r.rating} étoiles sur 5`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} aria-hidden className={s < r.rating ? 'h-4 w-4 fill-gold text-gold' : 'h-4 w-4 text-white/15'} />
                  ))}
                </div>
                <Quote aria-hidden className="h-7 w-7 text-gold/20" />
              </div>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-white/85">« {r.text} »</p>
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/5 pt-5">
                <span className="flex items-center gap-3">
                  <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-serif text-lg font-semibold text-gold">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{r.name}</span>
                    <span className="block text-xs text-silver">{r.city}</span>
                  </span>
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] text-silver">Avis d'exemple</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
