import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

// Aucun avis inventé : ajouter ici les vrais avis clients.
const reviews = [null, null, null];

export default function Reviews() {
  return (
    <section aria-labelledby="titre-avis" className="section bg-white">
      <div className="container-site">
        <SectionHeading id="titre-avis" title="Avis clients" />
        <ul className="grid md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 120}
              className="flex min-h-56 flex-col gap-8 border-b border-ink/10 py-10 md:border-b-0 md:border-l md:px-10 md:py-4 md:first:border-l-0 md:first:pl-0"
            >
              <Quote aria-hidden strokeWidth={1} className="h-8 w-8 text-ink/25" />
              <p className="font-display text-xl font-light text-ink-muted">{review ?? '[Avis client à ajouter]'}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
