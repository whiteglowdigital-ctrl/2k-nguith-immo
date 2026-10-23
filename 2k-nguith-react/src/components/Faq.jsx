import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { Plus } from './Glyphs.jsx';
import { faq } from '../data/site.js';
import { cn } from '../lib/utils.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="titre-faq" className="block-y border-t border-ink/10">
      <div className="wrap grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <h2 id="titre-faq" className="h-section lg:text-7xl">
            Questions fréquentes
          </h2>
        </Reveal>
        <Reveal as="ul" className="border-t border-ink/10 lg:col-span-7 lg:col-start-6">
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
                    className="group flex min-h-24 w-full items-center justify-between gap-8 py-8 text-left"
                  >
                    <span className="display text-2xl sm:text-[2rem]">{q}</span>
                    <Plus className={cn('h-4 w-4 shrink-0 transition-transform duration-700 ease-out', isOpen ? 'rotate-45 text-amber' : 'group-hover:rotate-90')} />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={cn('grid transition-[grid-template-rows] duration-700 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                >
                  <div className="overflow-hidden">
                    <p className={cn('max-w-xl pb-10 text-ink-muted', !isOpen && 'invisible')}>{a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
