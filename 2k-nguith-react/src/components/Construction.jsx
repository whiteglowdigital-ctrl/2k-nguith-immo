import { ArrowRight } from 'lucide-react';
import { constructionPhotos } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

// Collage asymétrique : une grande photo, deux plus petites qui débordent.
export default function Construction() {
  const [main, second, third] = constructionPhotos;
  return (
    <section id="construction" aria-labelledby="titre-construction" className="section">
      <div className="container-site grid items-center gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal className="border-t border-ink/10 pt-8">
          <h2 id="titre-construction" className="title">
            Construction et rénovation
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-muted">
            Vous avez un terrain ou un bien à rénover&nbsp;? Notre équipe construit et rénove pour vous.
          </p>
          <a
            href={whatsappLink('Bonjour 2K Nguith, je souhaite un devis pour une construction ou une rénovation.')}
            target="_blank"
            rel="noopener"
            className="btn-dark group mt-12"
          >
            Demander un devis
            <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="grid grid-cols-6 grid-rows-[auto_auto] gap-4 sm:gap-6">
          <Reveal className="col-span-6 sm:col-span-4 sm:row-span-2">
            <Photo {...main} className="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={120} className="col-span-3 sm:col-span-2 sm:mt-16">
            <Photo {...second} className="aspect-[3/4]" />
          </Reveal>
          <Reveal delay={240} className="col-span-3 sm:col-span-2">
            <Photo {...third} className="aspect-square" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Photo({ src, alt, className }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl bg-white shadow-air ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-soft group-hover:scale-105" />
      <figcaption className="ph-tag absolute bottom-3 right-3">[Photo à remplacer]</figcaption>
    </figure>
  );
}
