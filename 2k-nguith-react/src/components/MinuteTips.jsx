import { ArrowUpRight, Play } from 'lucide-react';
import { contact, tips } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';

export default function MinuteTips() {
  return (
    <section id="minute-2k" aria-labelledby="titre-minute" className="section bg-mist">
      <div className="container-site">
        <SectionHeading id="titre-minute" title="Minute 2K">
          <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="link-arrow">
            Toutes les vidéos sur TikTok
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
          </a>
        </SectionHeading>

        <ul className="grid gap-8 md:grid-cols-3">
          {tips.map((title, i) => (
            <li key={title}>
              <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="group block">
                {/* Vignette type « playlist » : à remplacer par la miniature réelle de la vidéo */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
                  <div aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,#1E293B_0%,#0F172A_60%)] transition-transform duration-[1200ms] ease-soft group-hover:scale-105" />
                  <span aria-hidden className="absolute -bottom-10 -right-4 select-none font-display text-[11rem] font-light leading-none text-white/[0.04]">
                    2K
                  </span>
                  <div className="relative flex h-full flex-col justify-between p-7">
                    <div className="flex items-center justify-between text-white/70">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-label">Minute 2K</span>
                      <span className="font-display text-sm tabular-nums">{String(i + 1).padStart(2, '0')} / {String(tips.length).padStart(2, '0')}</span>
                    </div>
                    <span className="flex h-16 w-16 items-center justify-center self-center rounded-full border border-white/30 text-white backdrop-blur transition-all duration-500 ease-soft group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                      <Play aria-hidden strokeWidth={1.5} className="ml-0.5 h-5 w-5" />
                    </span>
                    <h3 className="font-display text-2xl font-light leading-snug text-white">{title}</h3>
                  </div>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Voir la vidéo
                  <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
