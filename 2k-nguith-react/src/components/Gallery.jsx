import { gallery } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

// Mosaïque sur fond bleu nuit : une grande photo, deux à droite, trois en dessous.
export default function Gallery() {
  const [main, ...rest] = gallery;
  return (
    <section aria-labelledby="titre-galerie" className="section bg-night text-white">
      <div className="container">
        <SectionHead id="titre-galerie" kicker="Galerie" title="2K Nguith" accent="en images" dark />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          <Reveal as="figure" className="relative col-span-2 aspect-[4/3] group overflow-hidden rounded-3xl md:row-span-2 md:aspect-auto">
            <img src={main.src} alt={main.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105" />
            <figcaption className="ph-tag absolute bottom-3 left-3">[Photo à remplacer par une vraie photo de l'agence]</figcaption>
          </Reveal>
          {rest.map((p) => (
            <Reveal as="figure" key={p.src} delay={120} className="relative aspect-square group overflow-hidden rounded-3xl">
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105" />
              <figcaption className="ph-tag absolute bottom-2 left-2 right-2 w-fit">[Photo à remplacer par une vraie photo de l'agence]</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
