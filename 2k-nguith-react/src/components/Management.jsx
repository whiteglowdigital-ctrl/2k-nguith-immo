import { useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { managementImage } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

const perks = ['Recherche de locataires', 'Suivi du bien', 'Encaissement des loyers [à confirmer]'];
const types = ['Appartement', 'Maison', 'Immeuble', 'Local commercial', 'Terrain'];
const input =
  'block w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/30 transition-colors focus:border-gold/60 focus:outline-none focus:ring-0 aria-[invalid=true]:border-gold';

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-silver">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Management() {
  const [values, setValues] = useState({ nom: '', tel: '', type: '', quartier: '' });
  const [invalid, setInvalid] = useState([]);
  const [link, setLink] = useState('');
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const bad = (k) => invalid.includes(k) || undefined;

  const submit = (e) => {
    e.preventDefault();
    const missing = Object.keys(values).filter((k) => !values[k].trim());
    setInvalid(missing);
    if (missing.length) {
      document.getElementById(`g-${missing[0]}`)?.focus();
      return;
    }
    const url = whatsappLink(
      'Bonjour 2K Nguith, je souhaite vous confier mon bien en gérance.\n' +
        `Nom : ${values.nom.trim()}\nTéléphone WhatsApp : ${values.tel.trim()}\nType de bien : ${values.type}\nQuartier : ${values.quartier.trim()}`,
    );
    setLink(url);
    try {
      window.open(url, '_blank', 'noopener');
    } catch {
      /* ouverture bloquée : le lien affiché sous le bouton prend le relais */
    }
  };

  return (
    <section id="gerance" aria-labelledby="titre-gerance" className="section">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="kicker">
            <span aria-hidden className="h-px w-8 bg-gold" />
            Gérance
          </p>
          <h2 id="titre-gerance" className="title">
            Vous êtes propriétaire&nbsp;? <span className="glow-word">Confiez-nous votre bien</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {perks.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-white/85 md:text-base">
                <Check aria-hidden strokeWidth={2} className="h-4 w-4 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>
          <div className="arch group relative mt-10 hidden aspect-[16/10] overflow-hidden border border-white/5 lg:block">
            <img src={managementImage} alt="Clés remises devant une maison" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105" />
            <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
          </div>
        </Reveal>

        <Reveal as="form" delay={150} onSubmit={submit} noValidate className="card p-6 shadow-deep sm:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="g-nom" label="Votre nom">
              <input id="g-nom" type="text" autoComplete="name" value={values.nom} onChange={set('nom')} aria-invalid={bad('nom')} className={input} />
            </Field>
            <Field id="g-tel" label="Téléphone WhatsApp">
              <input id="g-tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="77 000 00 00" value={values.tel} onChange={set('tel')} aria-invalid={bad('tel')} className={input} />
            </Field>
            <Field id="g-type" label="Type de bien">
              <div className="relative">
                <select id="g-type" value={values.type} onChange={set('type')} aria-invalid={bad('type')} className={`${input} cursor-pointer appearance-none pr-10`}>
                  <option value="">Choisir</option>
                  {types.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-silver" />
              </div>
            </Field>
            <Field id="g-quartier" label="Quartier">
              <input id="g-quartier" type="text" value={values.quartier} onChange={set('quartier')} aria-invalid={bad('quartier')} className={input} />
            </Field>
          </div>
          {invalid.length > 0 && (
            <p role="alert" className="mt-4 text-sm text-gold">
              Merci de remplir tous les champs.
            </p>
          )}
          <button type="submit" className="btn-gold mt-6 w-full">
            Confier mon bien
            <ArrowRight aria-hidden className="h-4 w-4" />
          </button>
          {link && (
            <a href={link} target="_blank" rel="noopener" className="mt-3 block text-center text-sm text-white underline underline-offset-4">
              WhatsApp ne s'est pas ouvert&nbsp;? Ouvrir ma demande
            </a>
          )}
          <p className="mt-5 text-xs leading-relaxed text-silver">Vos informations servent uniquement à répondre à votre demande et ne sont pas conservées sur ce site.</p>
        </Reveal>
      </div>
    </section>
  );
}
