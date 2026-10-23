import Reveal from './Reveal.jsx';

// En-tête de section façon cabinet d'architecte : filet d'un pixel, titre serif, action à droite.
export default function SectionHeading({ id, label, title, children }) {
  return (
    <Reveal className="mb-16 border-t border-ink/10 pt-8 sm:mb-24">
      {label && <p className="label mb-8">{label}</p>}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 id={id} className="title max-w-3xl">
          {title}
        </h2>
        {children}
      </div>
    </Reveal>
  );
}
