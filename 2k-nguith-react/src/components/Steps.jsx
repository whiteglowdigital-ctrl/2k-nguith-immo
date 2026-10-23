import { ArrowRight, CalendarCheck, PenLine, Search, Smartphone } from 'lucide-react';
import SectionHead from './SectionHead.jsx';

const steps = [
  { Icon: Search, title: 'Choisir', text: 'Vous choisissez un bien ou nous décrivez votre besoin.' },
  { Icon: Smartphone, title: 'Recevoir', text: 'On vous envoie photos, vidéos et documents sur WhatsApp.' },
  { Icon: CalendarCheck, title: 'Visiter', text: 'On organise la visite.' },
  { Icon: PenLine, title: 'Signer', text: "On vous accompagne jusqu'à la signature." },
];

export default function Steps() {
  return (
    <section aria-labelledby="titre-etapes" className="section bg-cloud">
      <div className="container">
        <SectionHead id="titre-etapes" kicker="Notre méthode" title="Comment ça" accent="marche" center />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ Icon, title, text }, i) => (
            <li key={title} className="relative rounded-2xl bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-soft text-forest">
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <span className="text-4xl font-extrabold tabular-nums text-gold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
              {i < steps.length - 1 && (
                <span aria-hidden className="absolute -right-5 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest text-white shadow lg:flex">
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
