import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { ArrowUpRight, Play } from './Glyphs.jsx';
import { contact, tips } from '../data/site.js';

// Sommaire de vidéos : une ligne par conseil ; la couverture se dévoile au survol.
export default function MinuteTips() {
  return (
    <section id="minute-2k" aria-labelledby="titre-minute" className="block-y">
      <div className="wrap">
        <SectionTitle id="titre-minute" kicker="Conseils vidéo" title="Minute 2K">
          <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="link-line">
            Toutes les vidéos sur TikTok
            <ArrowUpRight />
          </a>
        </SectionTitle>

        <ul className="border-t border-ink/10">
          {tips.map((tip, i) => (
            <Reveal as="li" key={tip.title} delay={i * 120} className="border-b border-ink/10">
              <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="group grid items-center gap-6 py-8 sm:grid-cols-[1fr_auto] lg:grid-cols-[14rem_1fr_auto] lg:gap-12 lg:py-10">
                {/* Couverture provisoire : à remplacer par la miniature réelle */}
                <span className="relative block aspect-[16/10] overflow-hidden bg-ink/5 sm:hidden lg:block">
                  <img
                    src={tip.cover}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="ph-tag absolute left-2 top-2">[Miniature à remplacer]</span>
                </span>
                <h3 className="display text-[2rem] leading-[1.05] transition-transform duration-700 ease-out group-hover:translate-x-2 sm:text-5xl">{tip.title}</h3>
                <span className="flex items-center gap-4 text-[0.78rem] uppercase tracking-caps">
                  <span className="hidden sm:inline">Voir la vidéo</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/25 transition-colors duration-700 ease-out group-hover:border-amber group-hover:text-amber">
                    <Play className="ml-0.5 h-3 w-3" />
                    <span className="sr-only">Voir la vidéo</span>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
