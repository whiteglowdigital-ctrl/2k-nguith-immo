import { ArrowRight } from 'lucide-react';
import { categories } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// « Tout au même endroit » : 5 cartes photo sur fond bleu nuit.
export default function Categories({ onFilter }) {
  return (
    <section aria-labelledby="titre-categories" className="section bg-night text-white">
      <div className="container">
        <SectionHead id="titre-categories" kicker="Tout au même endroit" title="Un seul interlocuteur pour" accent="tous vos projets" dark />
        <ul className="rail [&>*]:w-[62%] md:grid-cols-3 md:gap-4 md:[&>*]:w-auto lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 80}>
              <a
                href={c.href}
                onClick={() => c.filter && onFilter(c.filter)}
                className="group block overflow-hidden rounded-2xl bg-white text-ink transition duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
                  <img src={c.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between gap-2 p-4">
                  <span className="font-semibold">{c.label}</span>
                  <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-soft text-navy transition group-hover:bg-gold">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
