import { ArrowRight } from 'lucide-react';
import { categories } from '../data/site.js';
import SectionHead from './SectionHead.jsx';

// « Tout au même endroit » : 5 cartes photo sur fond bleu nuit.
export default function Categories({ onFilter }) {
  return (
    <section aria-labelledby="titre-categories" className="section bg-night text-white">
      <div className="container">
        <SectionHead id="titre-categories" kicker="Tout au même endroit" title="Un seul interlocuteur pour" accent="tous vos projets" intro="Vente, location, terrains, gérance, construction et rénovation." dark />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c, i) => (
            <li key={c.label} className={i === categories.length - 1 ? 'col-span-2 md:col-span-1' : undefined}>
              <a
                href={c.href}
                onClick={() => c.filter && onFilter(c.filter)}
                className="group block overflow-hidden rounded-2xl bg-white text-ink shadow-lg transition duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between gap-2 p-4">
                  <span>
                    <span className="block font-bold">{c.label}</span>
                    <span className="block text-xs text-ink-muted">{c.sub}</span>
                  </span>
                  <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-white transition group-hover:bg-gold group-hover:text-ink">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
