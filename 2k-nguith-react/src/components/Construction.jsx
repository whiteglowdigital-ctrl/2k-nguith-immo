import { ArrowRight } from 'lucide-react';
import { constructionPhotos } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

export default function Construction() {
  const [main, ...rest] = constructionPhotos;
  return (
    <section id="construction" aria-labelledby="titre-construction" className="section">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <h2 id="titre-construction" className="title">
            Construction et rénovation
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-muted">
            Vous avez un terrain ou un bien à rénover ? Notre équipe construit et rénove pour vous.
          </p>
          <a
            href={whatsappLink('Bonjour 2K Nguith, je souhaite un devis pour une construction ou une rénovation.')}
            target="_blank"
            rel="noopener"
            className="btn-dark group mt-10"
          >
            Demander un devis
            <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <Photo {...main} className="col-span-2 aspect-[16/9]" />
          {rest.map((p) => (
            <Photo key={p.src} {...p} className="aspect-square" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Photo({ src, alt, className }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl bg-mist ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]" />
      <figcaption className="ph-tag absolute bottom-3 right-3">[Photo à remplacer]</figcaption>
    </figure>
  );
}
