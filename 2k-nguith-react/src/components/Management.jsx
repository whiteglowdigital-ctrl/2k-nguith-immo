import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { Arrow, Dot } from './Glyphs.jsx';
import { managementImage } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

const perks = ['Recherche de locataires', 'Suivi du bien', 'Encaissement des loyers [à confirmer]'];
const types = ['Appartement', 'Maison', 'Immeuble', 'Local commercial', 'Terrain'];

// Champs sur fond noir : texte blanc, filet blanc d'un pixel.
const fieldDark =
  'w-full appearance-none rounded-none border-0 border-b border-white/25 bg-transparent px-0 pb-2.5 pt-1 text-base font-normal text-white transition-colors duration-700 ease-out placeholder:text-white/35 focus:border-white focus:outline-none focus:ring-0 aria-[invalid=true]:border-amber';

function Field({ id, label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="caps text-white/60">
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

  return (
    <section id="gerance" aria-labelledby="titre-gerance" className="bg-ink text-white">
      <div className="grid lg:grid-cols-[40fr_60fr]">
        {/* Photo verticale, en miroir du hero */}
        <div className="relative hidden overflow-hidden lg:block">
          <img src={managementImage} alt="Clés remises devant une maison" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <span className="ph-tag absolute left-4 top-4">[Photo à remplacer]</span>
        </div>

        <div className="px-5 py-28 sm:px-10 sm:py-36 lg:px-20 lg:py-44">
          <Reveal>
            <p className="caps mb-8 flex items-center gap-3 text-white/60">
              <Dot />
              Gérance
            </p>
            <h2 id="titre-gerance" className="h-section max-w-2xl">
              Vous êtes propriétaire&nbsp;? <em className="italic text-white/60">Confiez-nous votre bien</em>
            </h2>
          </Reveal>

          <Reveal as="ul" className="mt-16 grid border-t border-white/15 sm:grid-cols-3">
            {perks.map((text) => (
              <li key={text} className="border-b border-white/15 py-5 text-white/85 sm:border-b-0 sm:border-r sm:px-6 sm:py-6 sm:first:pl-0 sm:last:border-r-0">
                {text}
              </li>
            ))}
          </Reveal>

          <Reveal as="form" onSubmit={submit} noValidate className="mt-20 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            <Field id="g-nom" label="Votre nom">
              <input id="g-nom" type="text" autoComplete="name" value={values.nom} onChange={set('nom')} aria-invalid={bad('nom')} className={fieldDark} />
            </Field>
            <Field id="g-tel" label="Téléphone WhatsApp">
              <input id="g-tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="77 000 00 00" value={values.tel} onChange={set('tel')} aria-invalid={bad('tel')} className={fieldDark} />
            </Field>
            <Field id="g-type" label="Type de bien">
              <div className="relative">
                <select id="g-type" value={values.type} onChange={set('type')} aria-invalid={bad('type')} className={`${fieldDark} cursor-pointer pr-6`}>
                  <option value="">Choisir</option>
                  {types.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <span aria-hidden className="pointer-events-none absolute bottom-3.5 right-0 h-1.5 w-1.5 rotate-45 border-b border-r border-white/60" />
              </div>
            </Field>
            <Field id="g-quartier" label="Quartier">
              <input id="g-quartier" type="text" value={values.quartier} onChange={set('quartier')} aria-invalid={bad('quartier')} className={fieldDark} />
            </Field>

            <div className="flex flex-col gap-6 sm:col-span-2">
              {invalid.length > 0 && (
                <p role="alert" className="text-sm text-white">
                  Merci de remplir tous les champs.
                </p>
              )}
              <div className="flex flex-col gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-sm text-white/60">
                  Vos informations servent uniquement à répondre à votre demande et ne sont pas conservées sur ce site.
                </p>
                <button
                  type="submit"
                  className="group inline-flex min-h-12 items-center justify-center gap-4 bg-white px-7 text-[0.78rem] uppercase tracking-caps text-ink transition-colors duration-700 ease-out hover:bg-white/85"
                >
                  Confier mon bien
                  <Arrow className="h-2.5 w-6 transition-transform duration-700 ease-out group-hover:translate-x-1" />
                </button>
              </div>
              {link && (
                <a href={link} target="_blank" rel="noopener" className="text-sm text-white underline underline-offset-4">
                  WhatsApp ne s'est pas ouvert&nbsp;? Ouvrir ma demande
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
