import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// « Tout au même endroit » : vignettes verticales, nom posé sur l'image.
export default function Categories({ onNavigate }) {
  return (
    <section aria-labelledby="titre-categories" className="section bg-panel/60">
      <div className="container">
        <SectionHead id="titre-categories" kicker="Tout au même endroit" title="Un seul interlocuteur pour" glow="tous vos projets" />
        <ul className="rail [&>*]:w-[62%] md:grid-cols-3 md:gap-5 md:[&>*]:w-auto lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 100}>
              <a
                href={c.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(c);
                }}
                className="arch group relative block aspect-[3/4] overflow-hidden border border-white/5"
              >
                <img src={c.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                <span className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <span className="font-serif text-xl font-semibold">{c.label}</span>
                  <ArrowUpRight aria-hidden className="h-5 w-5 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
