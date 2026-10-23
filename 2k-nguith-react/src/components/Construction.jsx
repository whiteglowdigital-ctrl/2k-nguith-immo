import { Hammer } from 'lucide-react';
import { constructionPhotos } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Construction() {
  const [main, ...rest] = constructionPhotos;
  return (
    <section id="construction" aria-labelledby="titre-construction" className="section bg-panel/60">
      <div className="container">
        <SectionHead id="titre-construction" kicker="Construction et rénovation" title="Un terrain ou un bien" glow="à rénover ?">
          <a href={whatsappLink('Bonjour 2K Nguith, je souhaite un devis pour une construction ou une rénovation.')} target="_blank" rel="noopener" className="btn-gold">
            <Hammer aria-hidden className="h-4 w-4" />
            Demander un devis
          </a>
        </SectionHead>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {[main, ...rest].map((p, i) => (
            <Reveal
              as="figure"
              key={p.src}
              delay={i * 120}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${i === 0 ? 'col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto' : 'aspect-square md:aspect-[4/3]'}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <figcaption className="ph-tag absolute left-3 top-3">[Photo à remplacer]</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
