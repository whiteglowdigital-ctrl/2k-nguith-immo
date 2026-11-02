import { Quote, Star } from 'lucide-react';
import { reviews } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// Section blanche, cartes très légères. Avis d'exemple (voir data/site.js) : signalés comme tels tant qu'ils ne sont pas réels.
export default function Testimonials() {
  return (
    <section aria-labelledby="titre-avis" className="section section-light">
      <div className="container">
        <SectionHead id="titre-avis" kicker="Témoignages" title="Ce que disent" glow="nos clients" />
        <ul className="rail md:grid-cols-3 md:gap-6">
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={i * 120}
              className="arch relative flex flex-col bg-[#F9FAFB] p-7 pb-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label={`${r.rating} étoiles sur 5`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} aria-hidden className={s < r.rating ? 'h-4 w-4 fill-[#F59E0B] text-[#F59E0B]' : 'h-4 w-4 text-slate-200'} />
                  ))}
                </div>
                <Quote aria-hidden className="h-8 w-8 fill-amber-100 text-amber-100" />
              </div>
              <p className="mt-6 flex-1 text-[0.95rem] leading-relaxed text-[#0F172A]">« {r.text} »</p>
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-200/70 pt-5">
                <span className="flex items-center gap-3">
                  <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-serif text-lg font-semibold text-amber-400">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block whitespace-nowrap text-sm font-semibold text-[#0F172A]">{r.name}</span>
                    <span className="block text-xs text-slate-500">{r.city}</span>
                  </span>
                </span>
                <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[0.65rem] text-slate-500 ring-1 ring-slate-200">Avis d'exemple</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
