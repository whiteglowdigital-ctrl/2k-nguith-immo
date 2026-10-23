import { Hammer } from 'lucide-react';
import { constructionPhotos } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Construction() {
  const [main, ...rest] = constructionPhotos;
  return (
    <section id="construction" aria-labelledby="titre-construction" className="section bg-cloud">
      <div className="container">
        <SectionHead
          id="titre-construction"
          kicker="Construction et rénovation"
          title="Vous avez un terrain ou un bien"
          accent="à rénover ?"
          intro="Notre équipe construit et rénove pour vous."
        >
          <a href={whatsappLink('Bonjour 2K Nguith, je souhaite un devis pour une construction ou une rénovation.')} target="_blank" rel="noopener" className="btn-navy">
            <Hammer aria-hidden className="h-4 w-4" />
            Demander un devis
          </a>
        </SectionHead>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          <Reveal as="figure" className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 md:aspect-auto">
            <img src={main.src} alt={main.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <figcaption className="ph-tag absolute left-3 top-3">[Photo à remplacer]</figcaption>
          </Reveal>
          {rest.map((p) => (
            <Reveal as="figure" key={p.src} delay={120} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <figcaption className="ph-tag absolute left-3 top-3">[Photo à remplacer]</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
