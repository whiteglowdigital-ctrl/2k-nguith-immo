import { gallery } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';

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
    <section aria-labelledby="titre-galerie" className="section bg-white">
      <div className="container-site">
        <SectionHeading id="titre-galerie" title="2K Nguith en images" />
        <div className="grid auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[14rem]">
          {gallery.map((photo, i) => (
            <figure key={photo.src} className={`group relative overflow-hidden rounded-2xl bg-line ${layout[i]}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]"
              />
              <figcaption className="ph-tag absolute bottom-3 left-3 right-3 w-fit max-w-[calc(100%-1.5rem)]">
                [Photo à remplacer par une vraie photo de l'agence]
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
