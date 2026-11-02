import { useState } from 'react';
import { Banknote, ChevronDown, Home, MapPin, Search } from 'lucide-react';
import { budgets, heroImage, properties, slogans } from '../data/site.js';

const quartiers = [...new Set(properties.map((p) => p.location.split(' (')[0]))];

function Field({ id, label, Icon, value, onChange, children, className = '' }) {
  return (
    <div className={`relative flex min-w-0 flex-1 items-center gap-3 px-4 py-3 ${className}`}>
      <Icon aria-hidden strokeWidth={1.5} className="hidden h-5 w-5 shrink-0 text-gold md:block" />
      <div className="relative min-w-0 flex-1">
        <label htmlFor={id} className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-silver">
          {label}
        </label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-0.5 w-full cursor-pointer appearance-none truncate border-0 bg-transparent p-0 pr-6 text-sm font-medium text-white focus:outline-none focus:ring-0"
        >
          {children}
        </select>
        <ChevronDown aria-hidden className="pointer-events-none absolute bottom-0.5 right-0 h-4 w-4 text-silver" />
      </div>
    </div>
  );
}

// Délai d'animation qui tient compte de l'écran d'entrée (--intro, posé par Preloader.jsx).
const after = (ms) => ({ animationDelay: `calc(var(--intro, 0s) + ${ms}ms)` });

// Titre révélé mot par mot, chaque mot remontant depuis un masque.
function Words({ text, start, step = 90 }) {
  return text.split(' ').map((w, i) => (
    <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span className="inline-block motion-safe:animate-word motion-safe:opacity-0" style={after(start + i * step)}>
        {w}
      </span>
      {'\u00a0'}
    </span>
  ));
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
    <section id="accueil" aria-labelledby="titre-accueil" className="relative isolate flex min-h-[85vh] items-end overflow-hidden">
      <img src={heroImage} alt="" fetchpriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_75%] motion-safe:animate-kenburns" style={after(0)} />
      {/* Voiles : le texte reste lisible, la villa reste lumineuse */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-void/30 to-void/70" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-void/80 via-void/20 to-transparent" />

      <div className="container pb-16 pt-36 md:pb-24">
        <p className="kicker text-[0.6rem] tracking-[0.12em] motion-safe:animate-rise md:text-[0.7rem]" style={after(0)}>
          <span aria-hidden className="hidden h-px w-0 bg-gold motion-safe:animate-grow motion-reduce:w-8 md:block" style={after(300)} />
          {slogans.main}
        </p>
        <h1
          id="titre-accueil"
          className="max-w-4xl font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[5.5rem]"
        >
          <Words text="Trouvez le bien de vos" start={150} />
          <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span className="shine-word inline-block motion-safe:animate-[word_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards,shimmer_4s_linear_infinite] motion-safe:opacity-0" style={after(600)}>
              rêves
            </span>
            {'\u00a0'}
          </span>
          <Words text="avec nous" start={690} />
        </h1>
        <p className="mt-6 max-w-lg text-sm text-silver motion-safe:animate-rise md:text-lg" style={after(900)}>
          Vente, location, gérance et terrains à Dakar et environs.
        </p>

        {/* Panneau sombre translucide */}
        <form
          role="search"
          aria-label="Rechercher un bien"
          onSubmit={submit}
          className="mt-10 grid max-w-4xl grid-cols-2 rounded-2xl border border-white/10 bg-slate-900/60 p-2 shadow-deep backdrop-blur-xl motion-safe:animate-rise md:mt-12 md:flex md:items-center md:divide-x md:divide-white/10 md:p-3"
          style={after(1050)}
        >
          <Field id="s-quartier" label="Localisation" Icon={MapPin} value={quartier} onChange={setQuartier} className="col-span-2 border-b border-white/10 md:border-b-0">
            <option value="">Tous les quartiers</option>
            {quartiers.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </Field>
          <Field id="s-type" label="Type de bien" Icon={Home} value={type} onChange={setType} className="border-r border-white/10 md:border-r-0">
            <option value="vente">À acheter</option>
            <option value="location">À louer</option>
            <option value="terrain">Terrain</option>
          </Field>
          <Field id="s-budget" label="Budget" Icon={Banknote} value={budget} onChange={setBudget}>
            <option value="">Tous les prix</option>
            {budgets.slice(1).map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </Field>
          <div className="col-span-2 p-1 md:pl-3">
            <button type="submit" className="btn-gold w-full motion-safe:animate-pulseGold md:w-auto md:px-8">
              <Search aria-hidden className="h-4 w-4" />
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
