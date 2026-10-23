import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { budgets, properties } from '../data/site.js';

const quartiers = [...new Set(properties.map((p) => p.location.split(' (')[0]))];

function Field({ id, label, children }) {
  return (
    <div className="group relative flex min-w-0 flex-1 flex-col justify-center px-5 py-3 sm:py-2">
      <label htmlFor={id} className="text-[0.7rem] font-semibold uppercase tracking-label text-white/70">
        {label}
      </label>
      <div className="relative">
        {children}
        <ChevronDown
          aria-hidden
          strokeWidth={1.5}
          className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70 transition-transform duration-300 group-focus-within:rotate-180"
        />
      </div>
    </div>
  );
}

const selectClass =
  'w-full cursor-pointer appearance-none bg-transparent py-1 pr-6 text-base font-medium text-white focus:outline-none';

export default function SearchBar({ onSearch }) {
  const [type, setType] = useState('vente');
  const [quartier, setQuartier] = useState('');
  const [budget, setBudget] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch({ type, quartier, budget });
  };

  return (
    <form
      role="search"
      aria-label="Rechercher un bien"
      onSubmit={submit}
      className="mx-auto flex max-w-5xl flex-col divide-y divide-white/10 rounded-3xl border border-white/10 bg-slate-900/40 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/5 backdrop-blur-lg sm:flex-row sm:items-stretch sm:divide-x sm:divide-y-0 sm:rounded-full"
    >
      <Field id="s-type" label="Type de bien">
        <select id="s-type" value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
          <option value="vente">Acheter</option>
          <option value="location">Louer</option>
          <option value="terrain">Terrain</option>
        </select>
      </Field>
      <Field id="s-quartier" label="Quartier">
        <select id="s-quartier" value={quartier} onChange={(e) => setQuartier(e.target.value)} className={selectClass}>
          <option value="">Tous les quartiers</option>
          {quartiers.map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
      </Field>
      <Field id="s-budget" label="Budget">
        <select id="s-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={selectClass}>
          {budgets.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </Field>
      <div className="flex items-center p-1 pt-3 sm:pt-1">
        <button
          type="submit"
          className="btn group w-full rounded-full bg-white px-8 text-ink hover:bg-white/90 hover:shadow-glow active:scale-[0.98] sm:w-auto"
        >
          Rechercher
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-copper" strokeWidth={1.75} />
        </button>
      </div>
    </form>
  );
}
