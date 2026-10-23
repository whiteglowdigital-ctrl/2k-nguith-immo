import { ArrowRight, MessageCircle } from 'lucide-react';
import { typeLabels } from '../data/site.js';
import { formatFcfa, whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

// Bien mis en avant : grande rangée horizontale, image à gauche, détails à droite.
export default function FeaturedProperty({ property: p, onOpen }) {
  const price = `${formatFcfa(p.price)} F CFA${p.perMonth ? ' / mois' : ''}`;
  const rows = [
    ['Quartier', p.location],
    ['Surface', p.surface],
    p.details && ['Construction', p.details],
    p.papers && ['Papiers', p.papers],
  ].filter(Boolean);

  return (
    <Reveal as="article" className="group grid overflow-hidden rounded-2xl bg-white shadow-air transition-shadow duration-700 ease-soft hover:shadow-air-lg lg:grid-cols-[1.35fr_1fr]">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:aspect-auto lg:min-h-[36rem]">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-soft group-hover:scale-105"
        />
        <span className="ph-tag absolute bottom-5 right-5">[Photo à remplacer]</span>
      </div>

      <div className="flex flex-col justify-between gap-12 p-8 sm:p-12 lg:p-14">
        <div>
          <p className="label">{typeLabels[p.type]}</p>
          <h3 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-5xl">{p.title}</h3>
          <dl className="mt-10 border-t border-ink/10">
            {rows.map(([term, value]) => (
              <div key={term} className="flex justify-between gap-6 border-b border-ink/10 py-4 text-[0.95rem]">
                <dt className="text-ink-muted">{term}</dt>
                <dd className="text-right text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="font-display text-[2.6rem] font-light leading-none tabular-nums tracking-tight text-ink">
            {formatFcfa(p.price)}
            <span className="ml-2 font-sans text-xs font-semibold uppercase tracking-label text-ink-muted">F CFA{p.perMonth && ' / mois'}</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={whatsappLink(`Bonjour 2K Nguith, je suis intéressé par ce bien : ${p.title}, ${p.location}, ${price}. Est-il toujours disponible ?`)}
              target="_blank"
              rel="noopener"
              className="btn-dark"
            >
              <MessageCircle aria-hidden strokeWidth={1.5} className="h-4 w-4" />
              Je suis intéressé
            </a>
            <button type="button" onClick={() => onOpen(p)} className="link-arrow group/link">
              Voir les détails
              <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
