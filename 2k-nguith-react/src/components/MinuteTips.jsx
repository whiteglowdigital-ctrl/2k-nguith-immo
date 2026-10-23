import { ArrowUpRight } from 'lucide-react';
import { contact, tips } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';

// Bouton lecture : cercle fin + triangle, dessiné en SVG pour un trait net.
function PlayButton() {
  return (
    <span className="relative flex h-20 w-20 items-center justify-center">
      <span aria-hidden className="absolute inset-0 rounded-full border border-white/40 transition-all duration-700 ease-soft group-hover:scale-125 group-hover:opacity-0" />
      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/80 bg-white/5 backdrop-blur-sm transition-all duration-500 ease-soft group-hover:scale-105 group-hover:border-copper group-hover:bg-white/10">
        <svg aria-hidden viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white transition-colors duration-500 group-hover:fill-copper">
          <path d="M7 4.5v15a.6.6 0 0 0 .92.5l11.5-7.5a.6.6 0 0 0 0-1L7.92 4a.6.6 0 0 0-.92.5Z" />
        </svg>
      </span>
    </span>
  );
}

export default function MinuteTips() {
  return (
    <section id="minute-2k" aria-labelledby="titre-minute" className="section bg-white">
      <div className="container-site">
        <SectionHeading id="titre-minute" title="Minute 2K">
          <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="link-arrow">
            Toutes les vidéos sur TikTok
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
          </a>
        </SectionHeading>

        <ul className="grid gap-8 md:grid-cols-3">
          {tips.map(({ title, cover }, i) => (
            <li key={title}>
              <a
                href={contact.socials.tiktok}
                target="_blank"
                rel="noopener"
                className="group block rounded-2xl transition-transform duration-500 ease-soft hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-soft transition-shadow duration-500 group-hover:shadow-lift">
                  {/* Couverture provisoire : à remplacer par la miniature réelle de la vidéo */}
                  <img
                    src={cover}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/90 transition-colors duration-500 group-hover:via-ink/20" />

                  <div className="relative flex h-full flex-col justify-between p-7">
                    <div className="flex items-center justify-between text-white/85">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-label">Minute 2K</span>
                      <span className="font-display text-sm tabular-nums">
                        {String(i + 1).padStart(2, '0')} / {String(tips.length).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="self-center">
                      <PlayButton />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-light leading-snug text-white">{title}</h3>
                      <span className="ph-tag mt-4 inline-block">[Miniature à remplacer]</span>
                    </div>
                  </div>
                </div>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink">
                  Voir la vidéo
                  <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
