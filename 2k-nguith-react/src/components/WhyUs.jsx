import { FileCheck2, Globe2, HardHat, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const points = [
  {
    Icon: FileCheck2,
    title: 'Papiers transparents',
    text: 'Le type de papiers est indiqué pour chaque bien.',
  },
  {
    Icon: Globe2,
    title: 'Diaspora accompagnée',
    text: 'Photos, vidéos et documents envoyés sur WhatsApp, où que vous soyez.',
  },
  {
    Icon: Layers,
    title: 'Tout au même endroit',
    text: 'Vente, location, terrains et gérance.',
  },
  {
    Icon: HardHat,
    title: 'Une seule équipe',
    text: 'Construction et rénovation par la même équipe.',
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="section border-t border-line bg-white">
      <div className="container-site">
        <SectionHeading id="titre-pourquoi" title="Pourquoi choisir 2K Nguith" />
        <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ Icon, title, text }) => (
            <li key={title} className="group border-t border-ink/15 pt-8 transition-colors duration-500 hover:border-ink">
              <Icon aria-hidden strokeWidth={1} className="h-9 w-9 text-ink transition-transform duration-500 ease-soft group-hover:-translate-y-1" />
              <h3 className="mt-8 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
