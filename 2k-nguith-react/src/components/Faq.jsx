import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faq } from '../data/site.js';
import { cn } from '../lib/utils.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="titre-faq" className="section bg-white">
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
        <h2 id="titre-faq" className="title border-t border-ink/10 pt-8 lg:sticky lg:top-32 lg:self-start">
          Questions fréquentes
        </h2>
        <ul className="border-t border-ink/10">
          {faq.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <li key={q} className="border-b border-ink/10">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex min-h-20 w-full items-center justify-between gap-6 py-7 text-left font-display text-xl font-normal text-ink sm:text-2xl"
                  >
                    {q}
                    <Plus
                      aria-hidden
                      strokeWidth={1.25}
                      className={cn('h-6 w-6 shrink-0 transition-transform duration-500 ease-soft', isOpen && 'rotate-45')}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-500 ease-soft',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className={cn('max-w-2xl pb-7 text-lg leading-relaxed text-ink-muted', !isOpen && 'invisible')}>{a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
