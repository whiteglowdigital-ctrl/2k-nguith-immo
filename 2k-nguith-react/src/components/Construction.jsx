import { constructionPhotos } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

export default function Construction() {
  return (
    <section id="construction" aria-labelledby="titre-construction" className="section bg-mist">
      <div className="wrap">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 id="titre-construction" className="heading">
              Construction et rénovation
            </h2>
            <p className="mt-3 text-ink-muted">Vous avez un terrain ou un bien à rénover&nbsp;? Notre équipe construit et rénove pour vous.</p>
          </div>
          <a
            href={whatsappLink('Bonjour 2K Nguith, je souhaite un devis pour une construction ou une rénovation.')}
            target="_blank"
            rel="noopener"
            className="btn-dark self-start md:self-auto"
          >
            Demander un devis
          </a>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {constructionPhotos.map((photo) => (
            <li key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
