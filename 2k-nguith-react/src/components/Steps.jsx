import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

const steps = [
  { title: 'Choisir', text: 'Vous choisissez un bien ou nous décrivez votre besoin.' },
  { title: 'Recevoir', text: 'On vous envoie photos, vidéos et documents sur WhatsApp.' },
  { title: 'Visiter', text: 'On organise la visite.' },
  { title: 'Signer', text: "On vous accompagne jusqu'à la signature." },
];

// Lecture légère : petits numéros, texte fin, lignes de séparation discrètes.
export default function Steps() {
  return (
    <section aria-labelledby="titre-etapes" className="section bg-cloud">
      <div className="container">
        <SectionHead id="titre-etapes" kicker="Notre méthode" title="Comment ça" accent="marche" />
        <ol className="divide-y divide-slate-200 border-y border-slate-200 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {steps.map(({ title, text }, i) => (
            <Reveal as="li" delay={i * 120} key={title} className="flex gap-6 py-8 lg:flex-col lg:gap-10 lg:px-8 lg:py-10 lg:first:pl-0">
              <span className="w-8 shrink-0 pt-0.5 text-sm font-normal tabular-nums tracking-widest text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
