import Reveal from './Reveal.jsx';
import { Arrow, Dot } from './Glyphs.jsx';
import { typeLabels } from '../data/site.js';
import { caption, formatFcfa } from '../lib/utils.js';

// Propriété vitrine : image sur toute la largeur, texte posé dans l'angle inférieur gauche.
export default function ShowcaseProperty({ property: p, onOpen }) {
  return (
    <Reveal as="article" className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 sm:aspect-[16/10] lg:aspect-[21/10]">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span className="ph-tag absolute right-4 top-4">[Photo à remplacer]</span>
      </div>

      {/* Encart blanc découpé dans l'angle : il « mord » sur l'image */}
      <div className="relative -mt-24 mr-8 bg-white pr-6 pt-8 sm:mr-auto sm:max-w-xl sm:pr-12 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:max-w-2xl lg:pr-16 lg:pt-12">
        <p className="caps flex items-center gap-3">
          <Dot />
          {typeLabels[p.type]}
        </p>
        <h3 className="mt-6">
          <button
            type="button"
            onClick={() => onOpen(p)}
            className="display text-left text-5xl after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-1 focus-visible:after:outline-amber sm:text-7xl"
          >
            {p.short}
          </button>
        </h3>
        <p className="mt-5 text-ink-muted">{caption(p, { withName: false })}</p>
        <div className="mt-8 flex items-end justify-between gap-8 border-t border-ink/10 pt-6">
          <p className="display text-4xl tabular-nums sm:text-5xl">
            {formatFcfa(p.price)}
            <span className="caps ml-3 align-middle">F CFA{p.perMonth && ' / mois'}</span>
          </p>
          <span aria-hidden className="mb-2 hidden items-center gap-3 text-[0.78rem] uppercase tracking-caps sm:flex">
            Découvrir
            <Arrow className="h-2.5 w-7 transition-transform duration-700 ease-out group-hover:translate-x-2" />
          </span>
        </div>
      </div>
    </Reveal>
  );
}
