import { useState } from 'react';
import { ArrowRight, Chevron } from './Icons.jsx';
import { budgets, heroImage, properties, slogans } from '../data/site.js';

const quartiers = [...new Set(properties.map((p) => p.location.split(' (')[0]))];

function SelectField({ id, label, value, onChange, children }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="relative">
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="input cursor-pointer appearance-none pr-10">
          {children}
        </select>
        <Chevron className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
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
    <section id="accueil" aria-labelledby="titre-accueil" className="relative">
      <img src={heroImage} alt="Villa moderne avec piscine" fetchpriority="high" className="h-[80vh] min-h-[38rem] w-full object-cover" />

      {/* Boîte blanche alignée à gauche, posée sur l'image, dans le conteneur principal */}
      <div className="absolute inset-0 flex items-center">
        <div className="wrap">
          <div className="max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <h1 id="titre-accueil" className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
              {slogans.hero}
            </h1>
            <p className="mt-3 text-ink-muted">Vente, location, gérance et terrains à Dakar et environs.</p>

            <form role="search" aria-label="Rechercher un bien" onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-3">
              <SelectField id="s-type" label="Je veux" value={type} onChange={setType}>
                <option value="vente">Acheter</option>
                <option value="location">Louer</option>
                <option value="terrain">Terrain</option>
              </SelectField>
              <SelectField id="s-quartier" label="Quartier" value={quartier} onChange={setQuartier}>
                <option value="">Tous</option>
                {quartiers.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </SelectField>
              <SelectField id="s-budget" label="Budget" value={budget} onChange={setBudget}>
                <option value="">Tous</option>
                {budgets.slice(1).map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </SelectField>
              <button type="submit" className="btn-dark sm:col-span-3">
                Rechercher
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
