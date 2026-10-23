import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const steps = [
  'Vous choisissez un bien ou nous décrivez votre besoin.',
  'On vous envoie photos, vidéos et documents sur WhatsApp.',
  'On organise la visite.',
  "On vous accompagne jusqu'à la signature.",
];

export default function Steps() {
  return (
    <section aria-labelledby="titre-etapes" className="section">
      <div className="container-site">
        <SectionHeading id="titre-etapes" title="Comment ça marche" />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((text, i) => (
            <Reveal
              as="li"
              key={text}
              delay={i * 100}
              className="flex flex-col gap-10 border-t border-ink/10 py-10 sm:pr-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="font-display text-6xl font-light tabular-nums leading-none text-ink/20">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-lg leading-relaxed text-ink">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
