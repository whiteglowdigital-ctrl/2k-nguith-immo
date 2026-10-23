import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

const steps = [
  { title: 'Choisir', text: 'Vous choisissez un bien ou nous décrivez votre besoin.' },
  { title: 'Recevoir', text: 'On vous envoie photos, vidéos et documents sur WhatsApp.' },
  { title: 'Visiter', text: 'On organise la visite.' },
  { title: 'Signer', text: "On vous accompagne jusqu'à la signature." },
];

export default function Steps() {
  return (
    <section aria-labelledby="titre-etapes" className="section">
      <div className="container">
        <SectionHead id="titre-etapes" kicker="Notre méthode" title="Comment ça" glow="marche" />
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="card group p-7 transition-colors duration-500 hover:border-gold/20">
              <span className="font-serif text-4xl font-semibold text-gold/80 transition-colors duration-500 group-hover:text-gold">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
