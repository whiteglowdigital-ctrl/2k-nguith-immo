import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { Mark } from './Glyphs.jsx';

// Chaque argument est porté par une forme géométrique fine, pas par une icône.
const points = [
  { shape: 'square', title: 'Papiers transparents', text: 'Le type de papiers est indiqué pour chaque bien.' },
  { shape: 'circle', title: 'Diaspora accompagnée', text: 'Photos, vidéos et documents envoyés sur WhatsApp, où que vous soyez.' },
  { shape: 'line', title: 'Tout au même endroit', text: 'Vente, location, terrains et gérance.' },
  { shape: 'triangle', title: 'Une seule équipe', text: 'Construction et rénovation par la même équipe.' },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="block-y border-t border-ink/10">
      <div className="wrap">
        <SectionTitle id="titre-pourquoi" title="Pourquoi choisir 2K Nguith" />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ shape, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 120}
              className="group border-t border-ink/10 py-12 sm:pr-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-4 lg:first:border-l-0 lg:first:pl-0"
            >
              <Mark shape={shape} className="h-12 w-12 text-ink transition-transform duration-700 ease-out group-hover:rotate-45" />
              <h3 className="display mt-14 text-[1.9rem]">{title}</h3>
              <p className="mt-4 max-w-xs text-ink-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
