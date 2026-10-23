import { Quote, Star, UserRound } from 'lucide-react';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// Gabarit prêt à remplir : aucun avis n'est inventé.
// Remplacer chaque null par { text, rating, name, city, photo }.
const reviews = [null, null, null];

export default function Testimonials() {
  return (
    <section aria-labelledby="titre-avis" className="section bg-panel/60">
      <div className="container">
        <SectionHead id="titre-avis" kicker="Témoignages" title="Ce que disent" glow="nos clients" />
        <ul className="rail md:grid-cols-3 md:gap-6">
          {reviews.map((r, i) => (
            <Reveal as="li" key={i} delay={i * 120} className="card flex flex-col p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label={r ? `${r.rating} étoiles sur 5` : 'Note à ajouter'}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} aria-hidden className={r && s < r.rating ? 'h-4 w-4 fill-gold text-gold' : 'h-4 w-4 text-white/15'} />
                  ))}
                </div>
                <Quote aria-hidden className="h-7 w-7 text-gold/20" />
              </div>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-silver">« {r?.text ?? '[Avis client à ajouter]'} »</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-5">
                {r?.photo ? (
                  <img src={r.photo} alt="" className="h-11 w-11 rounded-full object-cover" />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-silver">
                    <UserRound aria-hidden className="h-5 w-5" />
                  </span>
                )}
                <span>
                  <span className="block text-sm font-semibold">{r?.name ?? '[Nom du client]'}</span>
                  <span className="block text-xs text-silver">{r?.city ?? '[Ville]'}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
