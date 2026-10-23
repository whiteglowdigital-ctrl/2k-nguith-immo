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
    <section aria-labelledby="titre-services" className="pb-8 pt-16 sm:pt-24">
      <div className="container-site">
        <h2 id="titre-services" className="sr-only">
          Tout au même endroit
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {services.map(({ label, href, filter, Icon }, i) => (
            <li key={label} className={i === services.length - 1 ? 'col-span-2 sm:col-span-1' : undefined}>
              <a
                href={href}
                onClick={() => filter && onFilter(filter)}
                className="group flex h-full min-h-[9.5rem] flex-col justify-between gap-6 rounded-2xl bg-white p-5 shadow-soft transition-all duration-500 ease-soft hover:-translate-y-1 hover:bg-ink hover:shadow-lift sm:p-6"
              >
                <span className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist transition-colors duration-500 group-hover:bg-white/10">
                    <Icon
                      aria-hidden
                      strokeWidth={1.25}
                      className="h-6 w-6 text-ink transition-all duration-500 ease-soft group-hover:scale-110 group-hover:text-copper"
                    />
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="h-5 w-5 text-ink-muted transition-all duration-500 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper"
                  />
                </span>
                <span className="text-[0.95rem] font-semibold leading-snug text-ink transition-colors duration-500 group-hover:text-white">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
