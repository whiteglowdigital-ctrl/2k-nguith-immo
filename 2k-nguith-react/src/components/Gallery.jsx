import { gallery } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Gallery() {
  return (
    <section aria-labelledby="titre-galerie" className="section">
      <div className="container">
        <SectionHead id="titre-galerie" kicker="Galerie" title="2K Nguith" glow="en images" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((p, i) => (
            <Reveal
              as="figure"
              key={p.src}
              delay={(i % 3) * 100}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${i === 0 ? 'col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto' : 'aspect-square'}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <figcaption className="ph-tag absolute bottom-2 left-2 right-2 w-fit">[Photo à remplacer par une vraie photo de l'agence]</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
