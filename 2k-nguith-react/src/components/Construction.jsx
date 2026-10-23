import Reveal from './Reveal.jsx';
import { Arrow } from './Glyphs.jsx';
import useParallax from '../hooks/useParallax.js';
import { constructionPhotos } from '../data/site.js';
import { cn, whatsappLink } from '../lib/utils.js';

function Photo({ src, alt, speed, className, frameClassName }) {
  const ref = useParallax(speed);
  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      <figure className={cn('group relative overflow-hidden bg-ink/5', frameClassName)}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        <figcaption className="ph-tag absolute left-3 top-3">[Photo à remplacer]</figcaption>
      </figure>
    </div>
  );
}

// Titre collé à gauche contre un filet vertical ; photos décalées qui se chevauchent, en parallaxe.
export default function Construction() {
  const [a, b, c] = constructionPhotos;
  return (
    <section id="construction" aria-labelledby="titre-construction" className="block-y overflow-hidden">
      <div className="wrap grid gap-20 lg:grid-cols-12 lg:gap-0">
        <Reveal className="relative border-l border-ink/20 pl-6 sm:pl-10 lg:col-span-4 lg:self-start lg:pt-4">
          <span aria-hidden className="absolute -left-px top-0 h-24 w-px bg-amber" />
          <h2 id="titre-construction" className="h-section lg:text-6xl xl:text-7xl">
            Construction <span className="italic">&amp;</span> rénovation
          </h2>
          <p className="mt-10 max-w-xs text-ink-muted">Vous avez un terrain ou un bien à rénover&nbsp;? Notre équipe construit et rénove pour vous.</p>
          <a
            href={whatsappLink('Bonjour 2K Nguith, je souhaite un devis pour une construction ou une rénovation.')}
            target="_blank"
            rel="noopener"
            className="btn-ink group mt-12"
          >
            Demander un devis
            <Arrow className="h-2.5 w-6 transition-transform duration-700 ease-out group-hover:translate-x-1" />
          </a>
        </Reveal>

        {/* Composition : grands vides, chevauchements, marges négatives */}
        <div className="relative grid grid-cols-12 lg:col-span-8 lg:col-start-6">
          <Photo {...a} speed={0.04} className="col-span-10 lg:col-span-8" frameClassName="aspect-[4/5]" />
          <Photo {...b} speed={0.12} className="relative z-10 col-span-6 col-start-7 -mt-28 sm:-mt-48 lg:col-span-5 lg:col-start-8 lg:-mt-[28rem]" frameClassName="aspect-[3/4] outline outline-[10px] outline-white" />
          <Photo {...c} speed={0.07} className="col-span-7 col-start-2 mt-16 sm:mt-24 lg:col-span-5 lg:col-start-3" frameClassName="aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}
