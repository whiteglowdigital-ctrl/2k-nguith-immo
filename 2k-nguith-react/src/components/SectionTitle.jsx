import Reveal from './Reveal.jsx';
import { Dot } from './Glyphs.jsx';
import { cn } from '../lib/utils.js';

// Titre de section : rubrique en petites capitales, grand titre serif, action éventuelle à droite.
export default function SectionTitle({ id, kicker, title, dark = false, children, className }) {
  return (
    <Reveal className={cn('mb-20 flex flex-col gap-10 sm:mb-28 lg:flex-row lg:items-end lg:justify-between', className)}>
      <div>
        {kicker && (
          <p className={cn('caps mb-8 flex items-center gap-3', dark && 'text-white/60')}>
            <Dot />
            {kicker}
          </p>
        )}
        <h2 id={id} className={cn('h-section max-w-4xl', dark && 'text-white')}>
          {title}
        </h2>
      </div>
      {children}
    </Reveal>
  );
}
