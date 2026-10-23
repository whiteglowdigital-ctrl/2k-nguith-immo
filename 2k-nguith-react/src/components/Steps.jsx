import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const steps = [
  'Vous choisissez un bien ou nous décrivez votre besoin.',
  'On vous envoie photos, vidéos et documents sur WhatsApp.',
  'On organise la visite.',
  "On vous accompagne jusqu'à la signature.",
];

// Numéros géants en filigrane (opacité 5 %) derrière chaque étape, reliés par un filet.
export default function Steps() {
  return (
    <section aria-labelledby="titre-etapes" className="block-y overflow-hidden bg-white">
      <div className="wrap">
        <SectionTitle id="titre-etapes" title="Comment ça marche" />
        <ol className="relative grid gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden className="absolute inset-x-0 top-0 hidden h-px bg-ink/10 lg:block" />
          {steps.map((text, i) => (
            <Reveal as="li" key={text} delay={i * 150} className="relative min-h-[16rem] pt-12 sm:pr-10 lg:min-h-[22rem]">
              <span aria-hidden className="display pointer-events-none absolute -top-2 left-0 select-none text-[11rem] leading-none text-ink/5 sm:text-[14rem] lg:-left-3 lg:text-[16rem]">
                {i + 1}
              </span>
              {/* Repère sur le filet commun */}
              <span aria-hidden className="absolute left-0 top-0 hidden h-px w-12 bg-ink lg:block" />
              <span className="caps relative tabular-nums text-ink">Étape {i + 1}</span>
              <p className="display relative mt-24 max-w-[15rem] text-[1.7rem] leading-[1.15] lg:mt-40">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
