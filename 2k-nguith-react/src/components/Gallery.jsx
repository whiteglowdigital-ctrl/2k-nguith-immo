import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { gallery } from '../data/site.js';
import { cn } from '../lib/utils.js';

// Planche éditoriale : formats et hauteurs volontairement différents, beaucoup de blanc.
const layout = [
  'col-span-12 lg:col-span-7 aspect-[4/3]',
  'col-span-7 col-start-6 lg:col-span-4 lg:col-start-9 lg:mt-40 aspect-[3/4]',
  'col-span-6 lg:col-span-3 lg:col-start-2 lg:-mt-24 aspect-square',
  'col-span-6 lg:col-span-4 lg:col-start-6 lg:mt-16 aspect-[4/5]',
  'col-span-12 lg:col-span-5 lg:col-start-1 lg:mt-8 aspect-[16/10]',
  'col-span-8 col-start-5 lg:col-span-5 lg:col-start-8 lg:-mt-20 aspect-[4/3]',
];

export default function Gallery() {
  return (
    <section aria-labelledby="titre-galerie" className="block-y">
      <div className="wrap">
        <SectionTitle id="titre-galerie" title="2K Nguith en images" />
        <div className="grid grid-cols-12 gap-x-4 gap-y-10 sm:gap-x-8 lg:gap-y-16">
          {gallery.map((photo, i) => (
            <Reveal as="figure" key={photo.src} delay={(i % 2) * 150} className={cn('group relative overflow-hidden bg-ink/5', layout[i])}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="ph-tag absolute left-3 top-3 max-w-[calc(100%-1.5rem)]">[Photo à remplacer par une vraie photo de l'agence]</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
