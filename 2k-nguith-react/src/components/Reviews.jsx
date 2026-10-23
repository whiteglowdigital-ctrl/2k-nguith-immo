import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

// Aucun avis inventé : ajouter ici les vrais avis clients.
const reviews = [null, null, null];

export default function Reviews() {
  return (
    <section aria-labelledby="titre-avis" className="section bg-white">
      <div className="container-site">
        <SectionHeading id="titre-avis" title="Avis clients" />
        <ul className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <li key={i} className="flex min-h-56 flex-col gap-6 rounded-2xl border border-dashed border-line p-8">
              <Quote aria-hidden strokeWidth={1} className="h-8 w-8 text-ink/30" />
              <p className="text-ink-muted">{review ?? '[Avis client à ajouter]'}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
