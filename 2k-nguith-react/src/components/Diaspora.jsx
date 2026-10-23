import { ArrowRight, Globe2 } from 'lucide-react';
import { whatsappLink } from '../lib/utils.js';

export default function Diaspora() {
  return (
    <section aria-labelledby="titre-diaspora" className="bg-white pb-24 sm:pb-32">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-mist px-7 py-14 sm:px-14 sm:py-20">
          <Globe2 aria-hidden strokeWidth={0.5} className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-ink/[0.06] sm:h-[28rem] sm:w-[28rem]" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="titre-diaspora" className="font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
                Vous êtes à l'étranger ?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Achetez, louez ou faites gérer votre bien à distance : photos, vidéos et documents envoyés sur WhatsApp.
              </p>
            </div>
            <a
              href={whatsappLink("Bonjour 2K Nguith, je vis à l'étranger et j'ai un projet immobilier à Dakar.")}
              target="_blank"
              rel="noopener"
              className="btn-dark group shrink-0"
            >
              Nous écrire
              <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
