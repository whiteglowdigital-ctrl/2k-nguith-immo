import { useState } from 'react';
import { Banknote, ChevronDown, Home, MapPin, Search } from 'lucide-react';
import { budgets, heroImage, properties, slogans } from '../data/site.js';

const quartiers = [...new Set(properties.map((p) => p.location.split(' (')[0]))];

// Un champ de la barre de recherche : icône dans un cercle, libellé, sélecteur.
function SearchField({ id, label, Icon, value, onChange, children }) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 md:px-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-soft text-forest">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <div className="relative min-w-0 flex-1">
        <label htmlFor={id} className="block text-xs font-bold text-ink">
          {label}
        </label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none truncate border-0 bg-transparent p-0 pr-6 text-sm text-ink-muted focus:outline-none focus:ring-0"
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

      <div className="container pb-36 pt-36 md:pb-44 md:pt-48">
        <p className="kicker-light">{slogans.main}</p>
        <h1 id="titre-accueil" className="mt-2 max-w-3xl text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Trouvez le bien <span className="text-gold">de vos rêves</span> avec nous
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          {slogans.hero}. Vente, location, gérance et terrains à Dakar et environs.
        </p>

        {/* Barre de recherche blanche, massive */}
        <form
          role="search"
          aria-label="Rechercher un bien"
          onSubmit={submit}
          className="mt-10 flex max-w-4xl flex-col gap-2 rounded-2xl bg-white p-4 text-ink shadow-2xl md:flex-row md:items-center md:divide-x md:divide-ink/10"
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
          <div className="pt-2 md:pl-3 md:pt-0">
            <button type="submit" className="btn-forest w-full px-7 md:w-auto">
              <Search aria-hidden className="h-4 w-4" />
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
