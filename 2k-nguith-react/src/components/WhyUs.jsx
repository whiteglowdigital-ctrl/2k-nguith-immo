import { FileCheck2, Globe2, HardHat, Layers } from 'lucide-react';
import Reveal from './Reveal.jsx';

const points = [
  { Icon: FileCheck2, title: 'Papiers transparents', text: 'Le type de papiers est indiqué pour chaque bien.' },
  { Icon: Globe2, title: 'Diaspora accompagnée', text: 'Photos, vidéos et documents envoyés sur WhatsApp, où que vous soyez.' },
  { Icon: Layers, title: 'Tout au même endroit', text: 'Vente, location, terrains et gérance.' },
  { Icon: HardHat, title: 'Une seule équipe', text: 'Construction et rénovation par la même équipe.' },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="section bg-white">
      <div className="container-site grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <Reveal className="border-t border-ink/10 pt-8 lg:sticky lg:top-32 lg:self-start">
          <h2 id="titre-pourquoi" className="title">
            Pourquoi choisir 2K Nguith
          </h2>
        </Reveal>

        <ul className="grid border-t border-ink/10 sm:grid-cols-2">
          {points.map(({ Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 2) * 120}
              className="group border-b border-ink/10 py-10 sm:px-8 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0"
            >
              <Icon aria-hidden strokeWidth={1} className="h-9 w-9 text-ink transition-all duration-500 ease-soft group-hover:-translate-y-1 group-hover:text-copper" />
              <h3 className="mt-10 font-display text-2xl font-normal tracking-tight text-ink">{title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-ink-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
