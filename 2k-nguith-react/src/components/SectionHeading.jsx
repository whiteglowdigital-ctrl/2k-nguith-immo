import { cn } from '../lib/utils.js';

export default function SectionHeading({ id, title, intro, align = 'left', dark = false, children }) {
  return (
    <div
      className={cn(
        'mb-16 flex flex-col gap-8 sm:mb-24 lg:flex-row lg:items-end lg:justify-between',
        align === 'center' && 'items-center text-center lg:flex-col lg:items-center',
      )}
    >
      <div className="max-w-3xl">
        <h2 id={id} className={cn('title', dark && 'text-white')}>
          {title}
        </h2>
        {intro && (
          <p className={cn('mt-6 max-w-xl text-lg leading-relaxed', dark ? 'text-white/75' : 'text-ink-muted')}>
            {intro}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
