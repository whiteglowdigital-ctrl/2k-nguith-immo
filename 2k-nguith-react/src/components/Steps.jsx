import SectionHeading from './SectionHeading.jsx';

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
        <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-10">
          {/* Fil qui relie les étapes */}
          <span aria-hidden className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-line lg:left-5 lg:right-0 lg:h-px lg:w-auto" />
          {steps.map((text, i) => (
            <li key={text} className="relative flex gap-6 lg:flex-col">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink bg-mist font-display text-lg tabular-nums text-ink">
                {i + 1}
              </span>
              <p className="pt-1.5 text-lg leading-relaxed text-ink lg:max-w-[16rem] lg:pt-0">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
