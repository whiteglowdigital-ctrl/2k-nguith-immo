import { useState } from 'react';
import { Banknote, ChevronDown, Home, MapPin, Search } from 'lucide-react';
import { budgets, heroImage, properties, slogans } from '../data/site.js';

const quartiers = [...new Set(properties.map((p) => p.location.split(' (')[0]))];

// Un champ de la barre de recherche : icône dans un cercle, libellé, sélecteur.
function SearchField({ id, label, Icon, value, onChange, children }) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3 px-2 py-1.5 md:px-4 md:py-2">
      <span className="flex h-8 w-8 shrink-0 md:h-11 md:w-11 items-center justify-center rounded-full bg-navy-soft text-brand">
        <Icon aria-hidden className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
      </span>
      <div className="relative min-w-0 flex-1">
        <label htmlFor={id} className="block text-[0.7rem] font-semibold text-ink md:text-xs">
          {label}
        </label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none truncate border-0 bg-transparent p-0 pr-6 text-sm font-light text-slate-500 focus:outline-none focus:ring-0"
        >
          {children}
        </select>
        <ChevronDown aria-hidden className="pointer-events-none absolute bottom-0.5 right-0 h-4 w-4 text-ink-muted" />
      </div>
    </div>
  );
}

export default function Hero({ onSearch }) {
  const [type, setType] = useState('vente');
  const [quartier, setQuartier] = useState('');
  const [budget, setBudget] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch({ type, quartier, budget });
  };

  return (
    <section id="accueil" aria-labelledby="titre-accueil" className="relative isolate overflow-hidden bg-night text-white">
      <img src={heroImage} alt="" fetchpriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-night/90 via-night/60 to-night/10" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-night/70 to-transparent" />

      <div className="container pb-36 pt-32 md:pb-44 md:pt-48">
        <p className="kicker-light">{slogans.main}</p>
        <h1 id="titre-accueil" className="mt-2 max-w-3xl font-serif text-[2.4rem] font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Trouvez le bien <span className="text-gold">de vos rêves</span> avec nous
        </h1>
        <p className="mt-6 max-w-xl text-base font-light text-slate-300 md:text-lg">
          {slogans.hero}. Vente, location, gérance et terrains à Dakar et environs.
        </p>

        {/* Barre de recherche blanche, massive */}
        <form
          role="search"
          aria-label="Rechercher un bien"
          onSubmit={submit}
          className="mt-16 flex max-w-4xl flex-col gap-1 rounded-2xl bg-white p-3 text-ink shadow-2xl md:mt-12 md:gap-2 md:p-4 md:flex-row md:items-center md:divide-x md:divide-ink/10"
        >
          <SearchField id="s-quartier" label="Localisation" Icon={MapPin} value={quartier} onChange={setQuartier}>
            <option value="">Tous les quartiers</option>
            {quartiers.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </SearchField>
          <SearchField id="s-type" label="Type de bien" Icon={Home} value={type} onChange={setType}>
            <option value="vente">À acheter</option>
            <option value="location">À louer</option>
            <option value="terrain">Terrain</option>
          </SearchField>
          <SearchField id="s-budget" label="Budget" Icon={Banknote} value={budget} onChange={setBudget}>
            <option value="">Tous les prix</option>
            {budgets.slice(1).map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </SearchField>
          <div className="pt-1 md:pl-3 md:pt-0">
            <button type="submit" className="btn-navy w-full px-7 md:w-auto">
              <Search aria-hidden className="h-4 w-4" />
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
