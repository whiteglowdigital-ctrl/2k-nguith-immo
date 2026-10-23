import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

// Aucun avis inventé : ajouter ici les vrais avis clients.
const reviews = [null, null, null];

export default function Reviews() {
  return (
    <section aria-labelledby="titre-avis" className="block-y border-t border-ink/10">
      <div className="wrap">
        <SectionTitle id="titre-avis" title="Avis clients" />
        <ul className="grid md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 120}
              className="flex min-h-64 flex-col justify-between gap-10 border-t border-ink/10 py-10 md:border-l md:border-t-0 md:px-10 md:py-2 md:first:border-l-0 md:first:pl-0"
            >
              <span aria-hidden className="display text-7xl leading-none text-ink/10">“</span>
              <p className="display text-2xl text-ink-muted">{review ?? '[Avis client à ajouter]'}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
