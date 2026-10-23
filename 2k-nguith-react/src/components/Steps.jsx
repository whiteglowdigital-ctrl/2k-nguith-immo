import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

const steps = [
  { title: 'Choisir', text: 'Vous choisissez un bien ou nous décrivez votre besoin.' },
  { title: 'Recevoir', text: 'On vous envoie photos, vidéos et documents sur WhatsApp.' },
  { title: 'Visiter', text: 'On organise la visite.' },
  { title: 'Signer', text: "On vous accompagne jusqu'à la signature." },
];

// Section blanche : grands numéros gris très clair en arrière-plan, texte noir par-dessus.
export default function Steps() {
  return (
    <section aria-labelledby="titre-etapes" className="section section-light">
      <div className="container">
        <SectionHead id="titre-etapes" kicker="Notre méthode" title="Comment ça" glow="marche" />
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 120}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 pt-24 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1"
            >
              <span aria-hidden className="pointer-events-none absolute -top-3 left-4 select-none font-serif text-[7.5rem] font-bold leading-none text-slate-100 transition-colors duration-500 group-hover:text-amber-50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="sr-only">Étape {i + 1} : </span>
              <h3 className="relative text-xl font-semibold text-ink">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
