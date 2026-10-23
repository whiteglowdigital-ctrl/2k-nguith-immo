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
    <section aria-label="Nos engagements" className="relative z-10 -mt-16 md:-mt-20">
      <div className="container">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl bg-white px-5 py-6 shadow-lift lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink/5 lg:p-6">
          {badges.map(({ Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4 lg:px-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-dark lg:h-12 lg:w-12">
                <Icon aria-hidden className="h-4 w-4 lg:h-5 lg:w-5" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-[0.8rem] font-semibold leading-snug text-ink lg:text-sm">{title}</span>
                <span className="mt-0.5 block text-xs font-light text-slate-500 lg:text-sm">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
