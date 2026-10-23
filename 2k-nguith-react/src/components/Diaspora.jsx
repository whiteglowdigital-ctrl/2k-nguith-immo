import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

export default function Diaspora() {
  return (
    <section aria-labelledby="titre-diaspora" className="bg-white">
      <div className="container-site">
        <Reveal className="grid gap-10 border-y border-ink/10 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-24">
          <h2 id="titre-diaspora" className="font-display text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Vous êtes à l'étranger&nbsp;?
          </h2>
          <div className="flex flex-col items-start gap-8">
            <p className="text-lg leading-relaxed text-ink-muted">
              Achetez, louez ou faites gérer votre bien à distance&nbsp;: photos, vidéos et documents envoyés sur WhatsApp.
            </p>
            <a
              href={whatsappLink("Bonjour 2K Nguith, je vis à l'étranger et j'ai un projet immobilier à Dakar.")}
              target="_blank"
              rel="noopener"
              className="btn-dark group"
            >
              Nous écrire
              <ArrowRight aria-hidden strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
