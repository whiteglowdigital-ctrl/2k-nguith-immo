import { ArrowUpRight } from 'lucide-react';
import { contact, tips } from '../data/site.js';
import { cn } from '../lib/utils.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

// Bouton lecture : cercle fin + triangle. Doré sur la vidéo principale.
function PlayButton({ large }) {
  return (
    <span className={cn('relative flex items-center justify-center', large ? 'h-24 w-24 sm:h-28 sm:w-28' : 'h-14 w-14')}>
      <span aria-hidden className={cn('absolute inset-0 rounded-full border transition-all duration-700 ease-soft group-hover:scale-125 group-hover:opacity-0', large ? 'border-copper/60' : 'border-white/40')} />
      <span
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-500 ease-soft group-hover:scale-105',
          large ? 'border-copper bg-copper shadow-[0_10px_40px_rgba(217,119,6,0.45)]' : 'border-white/80 bg-white/5 group-hover:border-copper',
        )}
      >
        <svg aria-hidden viewBox="0 0 24 24" className={cn('ml-1 transition-colors duration-500', large ? 'h-7 w-7 fill-white' : 'h-4 w-4 fill-white group-hover:fill-copper')}>
          <path d="M7 4.5v15a.6.6 0 0 0 .92.5l11.5-7.5a.6.6 0 0 0 0-1L7.92 4a.6.6 0 0 0-.92.5Z" />
        </svg>
      </span>
    </span>
  );
}

function TipCard({ tip, index, large, className }) {
  return (
    <Reveal delay={index * 120} className={className}>
      <a
        href={contact.socials.tiktok}
        target="_blank"
        rel="noopener"
        className="group relative flex h-full min-h-[18rem] overflow-hidden rounded-2xl bg-ink shadow-air"
      >
        {/* Couverture provisoire : à remplacer par la miniature réelle de la vidéo */}
        <img
          src={tip.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-soft group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/40" />

        <div className={cn('relative flex w-full flex-col justify-between', large ? 'p-8 sm:p-12' : 'p-7')}>
          <div className="flex items-center justify-between text-white/85">
            <span className="text-[0.68rem] font-semibold uppercase tracking-label">Minute 2K</span>
            <span className="ph-tag">[Miniature à remplacer]</span>
          </div>

          {large ? (
            <span className="self-center">
              <PlayButton large />
            </span>
          ) : null}

          <div className={cn('flex items-end gap-6', large ? 'justify-between' : 'justify-between')}>
            <h3 className={cn('font-display font-light leading-snug text-white', large ? 'max-w-xl text-3xl sm:text-[2.6rem] sm:leading-[1.1]' : 'text-2xl')}>
              {tip.title}
            </h3>
            {large ? (
              <ArrowUpRight aria-hidden strokeWidth={1.25} className="h-7 w-7 shrink-0 text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            ) : (
              <span className="shrink-0">
                <PlayButton />
              </span>
            )}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function MinuteTips() {
  const [main, ...others] = tips;
  return (
    <section id="minute-2k" aria-labelledby="titre-minute" className="section">
      <div className="container-site">
        <SectionHeading id="titre-minute" title="Minute 2K">
          <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="link-arrow">
            Toutes les vidéos sur TikTok
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
          </a>
        </SectionHeading>

        {/* Bento : une grande vidéo, deux plus petites empilées */}
        <div className="grid gap-5 lg:h-[44rem] lg:grid-cols-[1.7fr_1fr] lg:grid-rows-2 lg:gap-6">
          <TipCard tip={main} index={0} large className="min-h-[30rem] lg:row-span-2 lg:min-h-0" />
          {others.map((tip, i) => (
            <TipCard key={tip.title} tip={tip} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
