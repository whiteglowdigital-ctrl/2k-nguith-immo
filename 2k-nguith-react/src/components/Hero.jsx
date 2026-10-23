import { heroImage, slogans } from '../data/site.js';
import SearchBar from './SearchBar.jsx';

export default function Hero({ onSearch }) {
  return (
    <section id="accueil" aria-labelledby="titre-accueil" className="relative isolate flex min-h-[44rem] flex-col overflow-hidden bg-ink text-white sm:min-h-[52rem]">
      <img
        src={heroImage}
        alt=""
        fetchpriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center motion-safe:animate-[heroZoom_14s_ease-out_both]"
      />
      {/* Voile : lisibilité du texte sans éteindre la photo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/80" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/60 to-transparent" />

      <div className="container-site flex flex-1 flex-col justify-center pb-10 pt-36 sm:pb-48 sm:pt-48">
        <p className="label text-white/75 motion-safe:animate-rise">Agence immobilière · Dakar</p>
        <h1
          id="titre-accueil"
          className="mt-6 max-w-4xl font-display text-[2.9rem] font-light leading-[1.02] tracking-tight motion-safe:animate-rise sm:text-7xl lg:text-[6.5rem]"
          style={{ animationDelay: '120ms' }}
        >
          {slogans.hero}
        </h1>
        <p
          className="mt-8 max-w-xl text-lg font-normal text-white/85 motion-safe:animate-rise sm:text-xl"
          style={{ animationDelay: '240ms' }}
        >
          Vente, location, gérance et terrains à Dakar et environs.
        </p>
      </div>

      <div className="container-site relative pb-8 sm:absolute sm:inset-x-0 sm:bottom-12 sm:pb-0">
        <SearchBar onSearch={onSearch} />
      </div>
    </section>
  );
}
