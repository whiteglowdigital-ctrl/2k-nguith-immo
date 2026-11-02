import Reveal from './Reveal.jsx';

// Étiquette dorée + grand titre serif (avec mot lumineux) + action optionnelle à droite.
export default function SectionHead({ id, kicker, title, glow, children }) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {kicker && (
          <p className="kicker">
            <span aria-hidden className="h-px w-8 bg-gold" />
            {kicker}
          </p>
        )}
        <h2 id={id} className="title">
          {title} {glow && <span className="glow-word">{glow}</span>}
        </h2>
      </div>
      {children}
    </Reveal>
  );
}
