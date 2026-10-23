import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { heroImage, properties, slogans } from '../data/site.js';

const quartiers = [...new Set(properties.map((p) => p.location.split(' (')[0]))];

// Index des services : remplace la rangée de raccourcis, à la manière d'un sommaire de magazine.
const index = [
  { label: 'Vente', href: '#biens', filter: 'vente' },
  { label: 'Location', href: '#biens', filter: 'location' },
  { label: 'Terrains', href: '#biens', filter: 'terrain' },
  { label: 'Gérance', href: '#gerance' },
  { label: 'Construction et rénovation', href: '#construction' },
];

function Select({ id, label, value, onChange, children }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="relative">
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="field-line cursor-pointer pr-7 font-medium">
          {children}
        </select>
        <ChevronDown aria-hidden strokeWidth={1.5} className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
      </div>
    </div>
  );
}

export default function Hero({ onSearch, onFilter }) {
  const [type, setType] = useState('vente');
  const [quartier, setQuartier] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch({ type, quartier, budget: '' });
  };

  return (
    <section id="accueil" aria-labelledby="titre-accueil" className="grid bg-white lg:min-h-[calc(100svh-7.25rem)] lg:grid-cols-[45fr_55fr]">
      {/* Colonne gauche : blanc pur, titre et recherche */}
      <div className="flex flex-col justify-between gap-16 px-5 pb-12 pt-14 sm:px-8 lg:py-16 lg:pl-12 lg:pr-16 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
        <div className="motion-safe:animate-rise">
          <p className="label">Agence immobilière · Dakar et environs</p>
          <h1
            id="titre-accueil"
            className="mt-8 font-display text-[3.1rem] font-light leading-[0.98] tracking-[-0.02em] text-ink sm:text-7xl xl:text-[5.6rem]"
          >
            {slogans.hero}
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-muted">Vente, location, gérance et terrains à Dakar et environs.</p>

          <form role="search" aria-label="Rechercher un bien" onSubmit={submit} className="mt-12 flex max-w-lg items-end gap-6">
            <Select id="s-type" label="Je veux" value={type} onChange={setType}>
              <option value="vente">Acheter</option>
              <option value="location">Louer</option>
              <option value="terrain">Un terrain</option>
            </Select>
            <Select id="s-quartier" label="Quartier" value={quartier} onChange={setQuartier}>
              <option value="">Tous</option>
              {quartiers.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </Select>
            <button
              type="submit"
              aria-label="Rechercher"
              className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-all duration-300 ease-soft hover:scale-105 hover:bg-ink-soft"
            >
              <ArrowRight aria-hidden strokeWidth={1.5} className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>

        <nav aria-label="Nos services">
          <h2 className="sr-only">Tout au même endroit</h2>
          <ul className="flex flex-wrap gap-x-7 border-y border-ink/10 py-3">
            {index.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => item.filter && onFilter(item.filter)}
                  className="group flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                  <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4 shrink-0 opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Colonne droite : photo verticale pleine hauteur, sans texte */}
      <div className="relative min-h-[34rem] overflow-hidden bg-mist sm:min-h-[44rem] lg:min-h-0">
        <img
          src={heroImage}
          alt="Villa moderne et lumineuse avec piscine"
          fetchpriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[60%_50%] motion-safe:animate-[heroZoom_14s_ease-out_both]"
        />
      </div>
    </section>
  );
}
