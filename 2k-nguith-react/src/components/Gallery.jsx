import SectionHeader from './SectionHeader.jsx';
import { gallery } from '../data/site.js';

export default function Gallery() {
  return (
    <section aria-labelledby="titre-galerie" className="section border-t border-ink/10">
      <div className="wrap">
        <SectionHeader id="titre-galerie" title="2K Nguith en images" />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {gallery.map((photo) => (
            <li key={photo.src} className="relative aspect-square overflow-hidden rounded-xl bg-mist">
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <span className="ph-tag absolute bottom-2 left-2 right-2 w-fit">[Photo à remplacer par une vraie photo de l'agence]</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
