import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faq } from '../data/site.js';
import SectionHead from './SectionHead.jsx';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="titre-faq" className="section">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead id="titre-faq" kicker="FAQ" title="Questions" accent="fréquentes" intro="Une autre question ? Écrivez-nous sur WhatsApp." />
        </div>
        <ul className="space-y-3">
          {faq.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <li key={q} className={isOpen ? 'rounded-2xl bg-forest-soft ring-1 ring-forest/15' : 'rounded-2xl bg-cloud ring-1 ring-ink/5'}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold"
                  >
                    {q}
                    <span className={isOpen ? 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-white' : 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-sm'}>
                      {isOpen ? <Minus aria-hidden className="h-4 w-4" /> : <Plus aria-hidden className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                  <p className="px-5 pb-5 text-ink-muted">{a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
