import { ArrowRight } from './Icons.jsx';

// « Tout au même endroit » : 5 raccourcis, chacun mène à sa section.
const services = [
  { label: 'Vente', href: '#biens', filter: 'vente' },
  { label: 'Location', href: '#biens', filter: 'location' },
  { label: 'Terrains', href: '#biens', filter: 'terrain' },
  { label: 'Gérance', href: '#gerance' },
  { label: 'Construction et rénovation', href: '#construction' },
];

export default function Services({ onFilter }) {
  return (
    <section aria-labelledby="titre-services" className="border-b border-ink/10">
      <div className="wrap py-8">
        <h2 id="titre-services" className="sr-only">
          Tout au même endroit
        </h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {services.map((s, i) => (
            <li key={s.label} className={i === services.length - 1 ? 'col-span-2 md:col-span-1' : undefined}>
              <a
                href={s.href}
                onClick={() => s.filter && onFilter(s.filter)}
                className="group flex h-full min-h-14 items-center justify-between gap-3 rounded-xl border border-ink/10 px-4 py-3 text-sm font-semibold transition-colors duration-300 hover:border-ink"
              >
                {s.label}
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted transition-colors duration-300 group-hover:text-amber" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
