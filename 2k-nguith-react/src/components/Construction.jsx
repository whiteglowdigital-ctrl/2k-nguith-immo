import { ArrowDown, Hammer } from 'lucide-react';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

// Bandeau court : les photos de chantiers sont regroupées dans « Nos réalisations », en bas de page.
export default function Construction({ onNavigate }) {
  return (
    <section id="construction" aria-labelledby="titre-construction" className="section bg-panel/60">
      <Reveal className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="kicker">
            <span aria-hidden className="h-px w-8 bg-gold" />
            Construction et rénovation
          </p>
          <h2 id="titre-construction" className="title">
            Un terrain ou un bien <span className="glow-word">à rénover ?</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-silver md:text-lg">Notre équipe construit et rénove pour vous, du devis à la remise des clés.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink('Bonjour 2K Nguith, je souhaite un devis pour une construction ou une rénovation.')} target="_blank" rel="noopener" className="btn-gold">
            <Hammer aria-hidden className="h-4 w-4" />
            Demander un devis
          </a>
          <a
            href="#realisations"
            onClick={(e) => {
              e.preventDefault();
              onNavigate({ href: '#realisations' });
            }}
            className="btn-ghost"
          >
            Nos réalisations
            <ArrowDown aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
