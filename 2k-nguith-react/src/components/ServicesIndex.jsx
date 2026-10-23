import Reveal from './Reveal.jsx';
import { ArrowUpRight, Dot } from './Glyphs.jsx';

// « Tout au même endroit » : un sommaire typographique, chaque entrée mène à sa section.
const services = [
  { label: 'Vente', href: '#biens', filter: 'vente' },
  { label: 'Location', href: '#biens', filter: 'location' },
  { label: 'Terrains', href: '#biens', filter: 'terrain' },
  { label: 'Gérance', href: '#gerance' },
  { label: 'Construction & rénovation', href: '#construction' },
];

export default function ServicesIndex({ onFilter }) {
  return (
    <section aria-labelledby="titre-services" className="border-y border-ink/10">
      <h2 id="titre-services" className="sr-only">
        Tout au même endroit
      </h2>
      <Reveal as="ul" className="wrap grid grid-cols-2 lg:grid-cols-5">
        {services.map((s, i) => (
          <li
            key={s.label}
            className={
              'border-ink/10 ' +
              (i % 2 === 1 ? 'border-l ' : '') +
              (i < services.length - 1 ? 'border-b lg:border-b-0 ' : 'col-span-2 lg:col-span-1 ') +
              (i > 0 ? 'lg:border-l' : '')
            }
          >
            <a
              href={s.href}
              onClick={() => s.filter && onFilter(s.filter)}
              className={
                'group flex h-full min-h-28 flex-col justify-between gap-6 py-6 lg:min-h-40 lg:py-8 ' +
                (i % 2 === 1 ? 'pl-5 sm:pl-6 ' : 'pr-5 ') +
                (i === 0 ? 'lg:pl-0 lg:pr-8' : 'lg:px-8')
              }
            >
              <span className="flex items-center justify-end">
                <span className="flex items-center gap-2 text-ink/40 transition-colors duration-700 ease-out group-hover:text-ink">
                  <Dot className="scale-0 transition-transform duration-700 ease-out group-hover:scale-100" />
                  <ArrowUpRight />
                </span>
              </span>
              <span className="display text-2xl transition-transform duration-700 ease-out group-hover:translate-x-1 sm:text-3xl">{s.label}</span>
            </a>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
