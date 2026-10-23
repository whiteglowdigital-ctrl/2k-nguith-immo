import { useState } from 'react';
import { Plus } from './Icons.jsx';
import { faq } from '../data/site.js';
import { cn } from '../lib/utils.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="titre-faq" className="section bg-mist">
      <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="titre-faq" className="heading">
          Questions fréquentes
        </h2>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {faq.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <li key={q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold"
                  >
                    {q}
                    <Plus className={cn('h-5 w-5 shrink-0 transition-transform duration-300', isOpen && 'rotate-45 text-amber')} />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                  <p className="pb-5 text-ink-muted">{a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
