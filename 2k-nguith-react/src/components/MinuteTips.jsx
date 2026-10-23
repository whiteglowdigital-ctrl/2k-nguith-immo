import { ArrowRight, Play } from 'lucide-react';
import { contact, tips } from '../data/site.js';
import SectionHead from './SectionHead.jsx';

export default function MinuteTips() {
  return (
    <section id="minute-2k" aria-labelledby="titre-minute" className="section">
      <div className="container">
        <SectionHead id="titre-minute" kicker="Conseils vidéo" title="Minute" accent="2K" intro="Nos conseils immobiliers en vidéo courte.">
          <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="link-arrow">
            Toutes les vidéos sur TikTok
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </SectionHead>
        <ul className="rail md:grid-cols-3 md:gap-8">
          {tips.map((tip) => (
            <li key={tip.title}>
              <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-video overflow-hidden">
                  {/* Couverture provisoire : à remplacer par la miniature réelle de la vidéo */}
                  <img src={tip.cover} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span aria-hidden className="absolute inset-0 bg-night/35" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-navy ring-1 ring-white/60 backdrop-blur-md group-hover:bg-gold transition group-hover:scale-110">
                      <Play aria-hidden className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </span>
                  <span className="ph-tag absolute left-3 top-3">[Miniature à remplacer]</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand">Minute 2K</span>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug">{tip.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand">
                    Voir la vidéo
                    <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
