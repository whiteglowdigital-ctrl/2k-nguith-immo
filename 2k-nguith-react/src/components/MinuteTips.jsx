import { ArrowRight, Play } from 'lucide-react';
import { contact, tips } from '../data/site.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function MinuteTips() {
  return (
    <section id="minute-2k" aria-labelledby="titre-minute" className="section">
      <div className="container">
        <SectionHead id="titre-minute" kicker="Conseils vidéo" title="Minute" glow="2K">
          <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="link-gold">
            Toutes les vidéos sur TikTok
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </SectionHead>
        <ul className="rail md:grid-cols-3 md:gap-6">
          {tips.map((tip, i) => (
            <Reveal as="li" key={tip.title} delay={i * 120}>
              <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="arch group relative block aspect-[4/5] overflow-hidden border border-white/5">
                {/* Couverture provisoire : à remplacer par la miniature réelle de la vidéo */}
                <img src={tip.cover} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/20" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-void">
                  <Play aria-hidden className="ml-0.5 h-5 w-5 fill-current" />
                </span>
                <span className="ph-tag absolute left-3 top-3">[Miniature à remplacer]</span>
                <h3 className="absolute inset-x-5 bottom-5 font-serif text-xl font-semibold leading-snug">{tip.title}</h3>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
