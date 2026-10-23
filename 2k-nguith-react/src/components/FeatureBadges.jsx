import { FileCheck2, Globe2, HardHat, MessageCircle } from 'lucide-react';

// 4 petites cartes posées à cheval sur le bas du hero. Aucun argument inventé.
const badges = [
  { Icon: FileCheck2, title: 'Papiers indiqués', text: 'Pour chaque bien proposé' },
  { Icon: MessageCircle, title: 'Réponse sur WhatsApp', text: 'Photos, vidéos et documents' },
  { Icon: Globe2, title: 'Diaspora accompagnée', text: 'Achat et gérance à distance' },
  { Icon: HardHat, title: 'Une seule équipe', text: 'Construction et rénovation' },
];

export default function FeatureBadges() {
  return (
    <section aria-label="Nos engagements" className="relative z-10 -mt-20">
      <div className="container">
        <ul className="grid grid-cols-1 gap-4 rounded-2xl bg-white p-4 shadow-lift sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink/10 lg:p-6">
          {badges.map(({ Icon, title, text }) => (
            <li key={title} className="flex items-center gap-4 rounded-xl p-2 lg:px-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
                <Icon aria-hidden className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm font-bold text-ink">{title}</span>
                <span className="block text-sm text-ink-muted">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
