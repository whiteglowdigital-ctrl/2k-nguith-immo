import { ArrowUpRight, Building2, HardHat, Home, KeyRound, Map } from 'lucide-react';

const services = [
  { label: 'Vente', href: '#biens', filter: 'vente', Icon: Home },
  { label: 'Location', href: '#biens', filter: 'location', Icon: KeyRound },
  { label: 'Terrains', href: '#biens', filter: 'terrain', Icon: Map },
  { label: 'Gérance', href: '#gerance', Icon: Building2 },
  { label: 'Construction et rénovation', href: '#construction', Icon: HardHat },
];

export default function Services({ onFilter }) {
  return (
    <section aria-labelledby="titre-services" className="border-b border-line bg-white">
      <div className="container-site">
        <h2 id="titre-services" className="sr-only">
          Tout au même endroit
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {services.map(({ label, href, filter, Icon }, i) => (
            <li
              key={label}
              className={
                'border-line ' +
                (i === services.length - 1 ? 'col-span-2 sm:col-span-1 ' : '') +
                'border-b lg:border-b-0 lg:[&:not(:first-child)]:border-l'
              }
            >
              <a
                href={href}
                onClick={() => filter && onFilter(filter)}
                className="group flex min-h-28 items-center justify-between gap-4 px-2 py-6 transition-colors duration-300 sm:px-6 lg:min-h-36 lg:flex-col lg:items-start lg:justify-start lg:py-9"
              >
                <span className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <Icon aria-hidden strokeWidth={1.25} className="h-7 w-7 text-ink transition-transform duration-500 ease-soft group-hover:-translate-y-0.5" />
                  <span className="text-[0.95rem] font-semibold leading-snug text-ink">{label}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0 text-ink-muted transition-all duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink lg:hidden"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
