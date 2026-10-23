import { useState } from 'react';
import { Arrow, Dot } from './Glyphs.jsx';
import { budgets, contact, heroImage, properties } from '../data/site.js';

const quartiers = [...new Set(properties.map((p) => p.location.split(' (')[0]))];

// Sélecteur texte : pas de fond, pas de cadre, un filet d'un pixel dessous.
function Inline({ id, label, value, onChange, children }) {
  return (
    <div className="relative w-full min-w-0 sm:w-auto sm:flex-1">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="field cursor-pointer truncate pr-4 text-[0.95rem]">
        {children}
      </select>
      <span aria-hidden className="pointer-events-none absolute bottom-3.5 right-0 h-1.5 w-1.5 rotate-45 border-b border-r border-ink/60" />
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
    <section id="accueil" aria-labelledby="titre-accueil" className="grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[40fr_60fr]">
      {/* 40 % : blanc pur */}
      <div className="flex flex-col justify-between gap-16 px-5 pb-14 pt-16 sm:px-10 lg:py-14 lg:pl-16 lg:pr-12 2xl:pl-[max(4rem,calc((100vw-88rem)/2+4rem))]">
        <p className="caps flex items-center gap-3 motion-safe:animate-rise">
          <Dot />
          Dakar · Sénégal
        </p>

        <div>
          <h1
            id="titre-accueil"
            className="display text-[3.6rem] leading-[0.9] motion-safe:animate-rise sm:text-[5.5rem] lg:text-[clamp(4.5rem,7.4vw,8.5rem)]"
            style={{ animationDelay: '150ms' }}
          >
            On vous trouve le toit <em className="font-display italic">parfait</em>
          </h1>

          <form
            role="search"
            aria-label="Rechercher un bien"
            onSubmit={submit}
            className="mt-14 flex flex-wrap items-end gap-x-5 gap-y-6 motion-safe:animate-rise sm:flex-nowrap lg:mt-20"
            style={{ animationDelay: '300ms' }}
          >
            <Inline id="s-type" label="Je veux" value={type} onChange={setType}>
              <option value="vente">Acheter</option>
              <option value="location">Louer</option>
              <option value="terrain">Un terrain</option>
            </Inline>
            <span aria-hidden className="hidden pb-3 text-ink/30 sm:block">•</span>
            <Inline id="s-quartier" label="Localisation" value={quartier} onChange={setQuartier}>
              <option value="">Localisation</option>
              {quartiers.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </Inline>
            <span aria-hidden className="hidden pb-3 text-ink/30 sm:block">•</span>
            <Inline id="s-budget" label="Budget" value={budget} onChange={setBudget}>
              <option value="">Budget</option>
              {budgets.slice(1).map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </Inline>
            <button
              type="submit"
              aria-label="Rechercher"
              className="group flex h-12 w-full shrink-0 sm:h-11 sm:w-14 items-center justify-center bg-ink text-white transition-colors duration-700 ease-out hover:bg-black"
            >
              <Arrow className="h-2.5 w-6 transition-transform duration-700 ease-out group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/10 pt-6 text-sm text-ink-muted motion-safe:animate-rise sm:flex-row sm:justify-between" style={{ animationDelay: '450ms' }}>
          <span>Vente, location, gérance et terrains à Dakar et environs.</span>
          <a href={`tel:${contact.phoneIntl}`} className="tabular-nums text-ink hover:underline">
            {contact.phoneDisplay}
          </a>
        </div>
      </div>

      {/* 60 % : photo verticale pleine hauteur, sans texte */}
      <div className="relative min-h-[36rem] overflow-hidden bg-ink/5 sm:min-h-[48rem] lg:min-h-0">
        <img
          src={heroImage}
          alt="Villa moderne et lumineuse avec piscine"
          fetchpriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[62%_50%] motion-safe:animate-unveil"
        />
      </div>
    </section>
  );
}
