import { gallery } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

// Mosaïque : 1 grande photo, puis 5 photos de tailles variées.
const layout = [
  'col-span-2 row-span-2',
  'col-span-1',
  'col-span-1',
  'col-span-2 lg:col-span-2',
  'col-span-1 lg:col-span-2',
  'col-span-1 lg:col-span-2',
];

export default function Gallery() {
  return (
    <section aria-labelledby="titre-galerie" className="section">
      <div className="container-site">
        <SectionHeading id="titre-galerie" title="2K Nguith en images" />
        <div className="grid auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[14rem]">
          {gallery.map((photo, i) => (
            <Reveal as="figure" key={photo.src} delay={(i % 3) * 100} className={`group relative overflow-hidden rounded-2xl bg-white shadow-air ${layout[i]}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-soft group-hover:scale-105"
              />
              <figcaption className="ph-tag absolute bottom-3 left-3 right-3 w-fit max-w-[calc(100%-1.5rem)]">
                [Photo à remplacer par une vraie photo de l'agence]
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
