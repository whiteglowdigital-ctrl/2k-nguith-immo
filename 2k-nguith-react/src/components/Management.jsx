import { useState } from 'react';
import { ArrowRight, Chevron } from './Icons.jsx';
import { managementImage } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

const perks = ['Recherche de locataires', 'Suivi du bien', 'Encaissement des loyers [à confirmer]'];
const types = ['Appartement', 'Maison', 'Immeuble', 'Local commercial', 'Terrain'];

// Champs du formulaire sombre
const darkInput =
  'block w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none focus:ring-0 aria-[invalid=true]:border-amber';

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
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
    <section id="gerance" aria-labelledby="titre-gerance" className="section">
      <div className="wrap grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Colonne gauche : une seule image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist md:aspect-auto md:h-full md:min-h-[28rem]">
          <img src={managementImage} alt="Clés remises devant une maison" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          <span className="ph-tag absolute left-3 top-3">[Photo à remplacer]</span>
        </div>

        {/* Colonne droite : titre, avantages, formulaire sombre */}
        <div>
          <h2 id="titre-gerance" className="heading">
            Vous êtes propriétaire&nbsp;?
          </h2>
          <p className="mt-2 font-serif text-2xl text-ink-muted">Confiez-nous votre bien.</p>
          <ul className="mt-6 space-y-2">
            {perks.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                {t}
              </li>
            ))}
          </ul>

          <form onSubmit={submit} noValidate className="mt-8 rounded-2xl bg-ink p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="g-nom" label="Votre nom">
                <input id="g-nom" type="text" autoComplete="name" value={values.nom} onChange={set('nom')} aria-invalid={bad('nom')} className={darkInput} />
              </Field>
              <Field id="g-tel" label="Téléphone WhatsApp">
                <input id="g-tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="77 000 00 00" value={values.tel} onChange={set('tel')} aria-invalid={bad('tel')} className={darkInput} />
              </Field>
              <Field id="g-type" label="Type de bien">
                <div className="relative">
                  <select id="g-type" value={values.type} onChange={set('type')} aria-invalid={bad('type')} className={`${darkInput} cursor-pointer appearance-none pr-10 [&>option]:text-ink`}>
                    <option value="">Choisir</option>
                    {types.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  <Chevron className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
                </div>
              </Field>
              <Field id="g-quartier" label="Quartier">
                <input id="g-quartier" type="text" value={values.quartier} onChange={set('quartier')} aria-invalid={bad('quartier')} className={darkInput} />
              </Field>
            </div>

            {invalid.length > 0 && (
              <p role="alert" className="mt-4 text-sm text-white">
                Merci de remplir tous les champs.
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-black px-6 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60"
            >
              Confier mon bien
              <ArrowRight />
            </button>
            {link && (
              <a href={link} target="_blank" rel="noopener" className="mt-3 block text-center text-sm text-white underline underline-offset-4">
                WhatsApp ne s'est pas ouvert&nbsp;? Ouvrir ma demande
              </a>
            )}
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              Vos informations servent uniquement à répondre à votre demande et ne sont pas conservées sur ce site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
