import { constructionPhotos, gallery } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// « Nos réalisations » : chantiers, rénovations et photos de l'agence, juste avant le pied de page.
const photos = [...constructionPhotos, ...gallery];

export default function Gallery() {
  return (
    <section id="realisations" aria-labelledby="titre-realisations" className="section bg-void">
      <div className="container">
        <SectionHead id="titre-realisations" kicker="Construction · Rénovation" title="Nos" glow="réalisations" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((p, i) => (
            <Reveal
              as="figure"
              key={p.src}
              delay={(i % 4) * 100}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <figcaption className="ph-tag absolute bottom-2 left-2 right-2 w-fit">[Photo à remplacer]</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
