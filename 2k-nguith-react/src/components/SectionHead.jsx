import { cn } from '../lib/utils.js';

// Étiquette + grand titre + phrase, avec une action optionnelle à droite.
export default function SectionHead({ id, kicker, title, accent, intro, dark = false, center = false, children }) {
  return (
    <div className={cn('mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between', center && 'items-center text-center md:flex-col md:items-center')}>
      <div className="max-w-2xl">
        {kicker && <p className={dark ? 'kicker-light' : 'kicker'}>{kicker}</p>}
        <h2 id={id} className={cn('title', dark ? 'text-white' : 'text-ink')}>
          {title} {accent && <span className={dark ? 'text-gold' : 'text-forest'}>{accent}</span>}
        </h2>
        {intro && <p className={cn('mt-4 text-base leading-relaxed md:text-lg', dark ? 'text-white/75' : 'text-ink-muted')}>{intro}</p>}
      </div>
      {children}
    </div>
  );
}
