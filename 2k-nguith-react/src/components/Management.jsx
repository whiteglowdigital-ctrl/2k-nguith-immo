import { useState } from 'react';
import { ArrowRight, ChevronDown, ClipboardCheck, Users, Wallet } from 'lucide-react';
import { whatsappLink } from '../lib/utils.js';

const perks = [
  { Icon: Users, text: 'Recherche de locataires' },
  { Icon: ClipboardCheck, text: 'Suivi du bien' },
  { Icon: Wallet, text: 'Encaissement des loyers [à confirmer]' },
];

const types = ['Appartement', 'Maison', 'Immeuble', 'Local commercial', 'Terrain'];

const inputClass =
  'peer w-full border-0 border-b border-white/25 bg-transparent px-0 pb-3 pt-2 text-base text-white placeholder-white/40 transition-colors duration-300 focus:border-white focus:outline-none focus:ring-0 aria-[invalid=true]:border-copper-light';

function Field({ id, label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[0.7rem] font-semibold uppercase tracking-label text-white/70">
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

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

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
        `Nom : ${values.nom.trim()}\n` +
        `Téléphone WhatsApp : ${values.tel.trim()}\n` +
        `Type de bien : ${values.type}\n` +
        `Quartier : ${values.quartier.trim()}`,
    );
    setLink(url);
    try {
      window.open(url, '_blank', 'noopener');
    } catch {
      /* ouverture bloquée : le lien affiché sous le bouton prend le relais */
    }
  };

  const bad = (k) => invalid.includes(k) || undefined;

  return (
    <section id="gerance" aria-labelledby="titre-gerance" className="section bg-ink text-white">
      <div className="container-site grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <h2 id="titre-gerance" className="title text-white">
            Vous êtes propriétaire ?
            <span className="block text-white/60">Confiez-nous votre bien</span>
          </h2>
          <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {perks.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-5 py-5 text-lg">
                <Icon aria-hidden strokeWidth={1.25} className="h-6 w-6 text-white/80" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} noValidate className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
          <Field id="g-nom" label="Votre nom">
            <input id="g-nom" type="text" autoComplete="name" value={values.nom} onChange={set('nom')} aria-invalid={bad('nom')} className={inputClass} />
          </Field>
          <Field id="g-tel" label="Téléphone WhatsApp">
            <input id="g-tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="77 000 00 00" value={values.tel} onChange={set('tel')} aria-invalid={bad('tel')} className={inputClass} />
          </Field>
          <Field id="g-type" label="Type de bien">
            <div className="relative">
              <select id="g-type" value={values.type} onChange={set('type')} aria-invalid={bad('type')} className={`${inputClass} cursor-pointer appearance-none pr-8`}>
                <option value="">Choisir</option>
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <ChevronDown aria-hidden strokeWidth={1.5} className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
            </div>
          </Field>
          <Field id="g-quartier" label="Quartier">
            <input id="g-quartier" type="text" value={values.quartier} onChange={set('quartier')} aria-invalid={bad('quartier')} className={inputClass} />
          </Field>

          {invalid.length > 0 && (
            <p role="alert" className="text-sm text-white">
              Merci de remplir tous les champs.
            </p>
          )}

          <button type="submit" className="btn group bg-white text-ink hover:bg-mist">
            Confier mon bien
            <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          {link && (
            <a href={link} target="_blank" rel="noopener" className="-mt-4 text-center text-sm font-semibold text-white underline underline-offset-4">
              WhatsApp ne s'est pas ouvert ? Ouvrir ma demande
            </a>
          )}
          <p className="text-sm leading-relaxed text-white/70">
            Vos informations servent uniquement à répondre à votre demande et ne sont pas conservées sur ce site.
          </p>
        </form>
      </div>
    </section>
  );
}
