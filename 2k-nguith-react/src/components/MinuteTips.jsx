import SectionHeader from './SectionHeader.jsx';
import { Play } from './Icons.jsx';
import { contact, tips } from '../data/site.js';

export default function MinuteTips() {
  return (
    <section id="minute-2k" aria-labelledby="titre-minute" className="section bg-mist">
      <div className="wrap">
        <SectionHeader id="titre-minute" title="Minute 2K">
          <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="text-sm font-semibold underline underline-offset-4">
            Toutes les vidéos sur TikTok
          </a>
        </SectionHeader>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tips.map((tip) => (
            <li key={tip.title}>
              <a href={contact.socials.tiktok} target="_blank" rel="noopener" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  {/* Couverture provisoire : à remplacer par la miniature réelle de la vidéo */}
                  <img src={tip.cover} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  <span aria-hidden className="absolute inset-0 bg-ink/30" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5" />
                    </span>
                  </span>
                  <span className="ph-tag absolute left-3 top-3">[Miniature à remplacer]</span>
                </div>
                <h3 className="mt-4 text-lg font-medium">{tip.title}</h3>
                <p className="mt-1 text-sm font-semibold text-ink-muted">Voir la vidéo</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
