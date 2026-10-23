import { Building2, Home, KeyRound, Users } from 'lucide-react';
import { properties } from '../data/site.js';

// Chiffres : seulement ce qui est vrai aujourd'hui, le reste reste [à confirmer].
const stats = [
  { Icon: Home, value: String(properties.length), label: 'Biens disponibles' },
  { Icon: Building2, value: '5', label: 'Services au même endroit' },
  { Icon: Users, value: '[à confirmer]', label: 'Clients accompagnés' },
  { Icon: KeyRound, value: '[à confirmer]', label: 'Biens en gérance' },
];

export default function Stats() {
  return (
    <section aria-label="2K Nguith en chiffres" className="border-b border-ink/10 bg-white">
      <div className="container">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ Icon, value, label }, i) => (
            <li
              key={label}
              className={
                'flex flex-col items-center gap-3 px-4 py-14 text-center ' +
                (i % 2 === 1 ? 'border-l border-ink/10 ' : '') +
                (i > 1 ? 'border-t border-ink/10 lg:border-t-0 ' : '') +
                (i === 2 ? 'lg:border-l' : '')
              }
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
                <Icon aria-hidden className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <span className={value.startsWith('[') ? 'text-base font-light text-slate-400' : 'font-serif text-4xl font-bold tabular-nums text-navy md:text-5xl'}>{value}</span>
              <span className="text-xs font-light text-slate-500 md:text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
