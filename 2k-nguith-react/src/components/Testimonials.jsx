import { Quote, Star, UserRound } from 'lucide-react';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// Gabarit prêt : remplacer chaque entrée par un vrai avis (texte, note, nom, ville, photo).
// Aucun avis n'est inventé : tant qu'il n'y en a pas, les cartes restent marquées [à ajouter].
const reviews = [null, null, null];

export default function Testimonials() {
  return (
    <section aria-labelledby="titre-avis" className="section bg-cloud">
      <div className="container">
        <SectionHead id="titre-avis" kicker="Témoignages" title="Ce que disent" accent="nos clients" />
        <ul className="rail md:grid-cols-3 md:gap-8">
          {reviews.map((r, i) => (
            <Reveal as="li" key={i} delay={i * 120} className="flex flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label={r ? `${r.rating} étoiles sur 5` : 'Note à ajouter'}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} aria-hidden className={r && s < r.rating ? 'h-5 w-5 fill-gold text-gold' : 'h-5 w-5 text-ink/20'} />
                  ))}
                </div>
                <Quote aria-hidden className="h-8 w-8 text-brand/15" />
              </div>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-slate-500 md:text-base">« {r?.text ?? '[Avis client à ajouter]'} »</p>
              <div className="mt-8 flex items-center gap-3 border-t border-ink/5 pt-6">
                {r?.photo ? (
                  <img src={r.photo} alt="" className="h-12 w-12 rounded-full object-cover" />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-soft text-brand">
                    <UserRound aria-hidden className="h-6 w-6" />
                  </span>
                )}
                <span>
                  <span className="block text-sm font-semibold">{r?.name ?? '[Nom du client]'}</span>
                  <span className="block text-xs font-light text-slate-500">{r?.city ?? '[Ville]'}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
