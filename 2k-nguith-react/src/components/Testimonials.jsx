import { Quote, Star, UserRound } from 'lucide-react';
import SectionHead from './SectionHead.jsx';

// Gabarit prêt : remplacer chaque entrée par un vrai avis (texte, note, nom, ville, photo).
// Aucun avis n'est inventé : tant qu'il n'y en a pas, les cartes restent marquées [à ajouter].
const reviews = [null, null, null];

export default function Testimonials() {
  return (
    <section aria-labelledby="titre-avis" className="section bg-cloud">
      <div className="container">
        <SectionHead id="titre-avis" kicker="Témoignages" title="Ce que disent" accent="nos clients" center />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <li key={i} className="flex flex-col rounded-2xl bg-white p-7 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label={r ? `${r.rating} étoiles sur 5` : 'Note à ajouter'}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} aria-hidden className={r && s < r.rating ? 'h-5 w-5 fill-gold text-gold' : 'h-5 w-5 text-ink/20'} />
                  ))}
                </div>
                <Quote aria-hidden className="h-8 w-8 text-forest/20" />
              </div>
              <p className="mt-5 flex-1 leading-relaxed text-ink-muted">« {r?.text ?? '[Avis client à ajouter]'} »</p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                {r?.photo ? (
                  <img src={r.photo} alt="" className="h-12 w-12 rounded-full object-cover" />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-soft text-forest">
                    <UserRound aria-hidden className="h-6 w-6" />
                  </span>
                )}
                <span>
                  <span className="block font-bold">{r?.name ?? '[Nom du client]'}</span>
                  <span className="block text-sm text-ink-muted">{r?.city ?? '[Ville]'}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
