import SectionHeader from './SectionHeader.jsx';

// Aucun avis inventé : ajouter ici les vrais avis clients.
const reviews = [null, null, null];

export default function Reviews() {
  return (
    <section aria-labelledby="titre-avis" className="section">
      <div className="wrap">
        <SectionHeader id="titre-avis" title="Avis clients" />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <li key={i} className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-ink/20 p-6 text-center text-ink-muted">
              {review ?? '[Avis client à ajouter]'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
