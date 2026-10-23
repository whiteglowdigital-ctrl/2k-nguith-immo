import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faq } from '../data/site.js';
import { cn } from '../lib/utils.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="titre-faq" className="section bg-panel/60">
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead id="titre-faq" kicker="FAQ" title="Questions" glow="fréquentes" />
        </div>
        <Reveal as="ul" className="divide-y divide-white/5 border-y border-white/5">
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
                    className="flex min-h-16 w-full items-center justify-between gap-4 py-6 text-left text-base font-medium"
                  >
                    {q}
                    <Plus aria-hidden className={cn('h-5 w-5 shrink-0 transition-transform duration-300', isOpen ? 'rotate-45 text-gold' : 'text-silver')} />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                  <p className="pb-6 pr-10 text-sm leading-relaxed text-silver md:text-base">{a}</p>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
