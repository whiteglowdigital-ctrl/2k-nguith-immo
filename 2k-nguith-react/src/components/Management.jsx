import { useState } from 'react';
import { ArrowRight, ChevronDown, ClipboardCheck, Users, Wallet } from 'lucide-react';
import { managementImage } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

const perks = [
  { Icon: Users, text: 'Recherche de locataires' },
  { Icon: ClipboardCheck, text: 'Suivi du bien' },
  { Icon: Wallet, text: 'Encaissement des loyers [à confirmer]' },
];

const types = ['Appartement', 'Maison', 'Immeuble', 'Local commercial', 'Terrain'];

const fieldClass = 'field-line aria-[invalid=true]:border-copper';

function Field({ id, label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="label">
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
    <section id="gerance" aria-labelledby="titre-gerance" className="section bg-white">
      <div className="container-site grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Image verticale décalée, à la manière d'une double page */}
        <Reveal className="relative hidden lg:block">
          <div className="sticky top-32 aspect-[3/4] overflow-hidden rounded-2xl bg-mist">
            <img src={managementImage} alt="Clés remises devant une maison" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <span className="ph-tag absolute bottom-5 right-5">[Photo à remplacer]</span>
          </div>
        </Reveal>

        <div>
          <Reveal className="border-t border-ink/10 pt-8">
            <h2 id="titre-gerance" className="title">
              Vous êtes propriétaire&nbsp;?
              <span className="mt-2 block text-ink/45">Confiez-nous votre bien</span>
            </h2>
          </Reveal>

          <Reveal as="ul" className="mt-14 grid border-t border-ink/10 sm:grid-cols-3">
            {perks.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-4 border-b border-ink/10 py-5 sm:flex-col sm:items-start sm:border-b-0 sm:border-r sm:px-6 sm:py-7 sm:first:pl-0 sm:last:border-r-0">
                <Icon aria-hidden strokeWidth={1.25} className="h-6 w-6 shrink-0 text-ink" />
                <span className="text-[0.95rem] font-medium text-ink">{text}</span>
              </li>
            ))}
          </Reveal>

          <Reveal as="form" onSubmit={submit} noValidate className="mt-14 grid gap-10 rounded-2xl bg-mist p-7 sm:grid-cols-2 sm:p-10">
            <Field id="g-nom" label="Votre nom">
              <input id="g-nom" type="text" autoComplete="name" value={values.nom} onChange={set('nom')} aria-invalid={bad('nom')} className={fieldClass} />
            </Field>
            <Field id="g-tel" label="Téléphone WhatsApp">
              <input id="g-tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="77 000 00 00" value={values.tel} onChange={set('tel')} aria-invalid={bad('tel')} className={fieldClass} />
            </Field>
            <Field id="g-type" label="Type de bien">
              <div className="relative">
                <select id="g-type" value={values.type} onChange={set('type')} aria-invalid={bad('type')} className={`${fieldClass} cursor-pointer pr-8`}>
                  <option value="">Choisir</option>
                  {types.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown aria-hidden strokeWidth={1.5} className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              </div>
            </Field>
            <Field id="g-quartier" label="Quartier">
              <input id="g-quartier" type="text" value={values.quartier} onChange={set('quartier')} aria-invalid={bad('quartier')} className={fieldClass} />
            </Field>

            <div className="flex flex-col gap-5 sm:col-span-2">
              {invalid.length > 0 && (
                <p role="alert" className="text-sm font-medium text-ink">
                  Merci de remplir tous les champs.
                </p>
              )}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
                  Vos informations servent uniquement à répondre à votre demande et ne sont pas conservées sur ce site.
                </p>
                <button type="submit" className="btn-dark group">
                  Confier mon bien
                  <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              {link && (
                <a href={link} target="_blank" rel="noopener" className="text-sm font-semibold text-ink underline underline-offset-4">
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
