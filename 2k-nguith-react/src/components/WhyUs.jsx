import SectionHeader from './SectionHeader.jsx';

const points = [
  { title: 'Papiers transparents', text: 'Le type de papiers est indiqué pour chaque bien.' },
  { title: 'Diaspora accompagnée', text: 'Photos, vidéos et documents envoyés sur WhatsApp, où que vous soyez.' },
  { title: 'Tout au même endroit', text: 'Vente, location, terrains et gérance.' },
  { title: 'Une seule équipe', text: 'Construction et rénovation par la même équipe.' },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="titre-pourquoi" className="section border-t border-ink/10">
      <div className="wrap">
        <SectionHeader id="titre-pourquoi" title="Pourquoi choisir 2K Nguith" />
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((pt) => (
            <li key={pt.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-lg font-semibold">{pt.title}</h3>
              <p className="mt-2 text-ink-muted">{pt.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
