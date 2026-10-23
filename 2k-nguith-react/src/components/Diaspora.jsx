import { ArrowRight } from 'lucide-react';
import { ambiance } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

export default function Diaspora() {
  return (
    <section aria-labelledby="titre-diaspora" className="py-16 md:py-24">
      <div className="container">
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-white/10 px-7 py-16 md:px-14 md:py-20">
          <img src={ambiance.diaspora} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-void via-void/85 to-void/40" />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 id="titre-diaspora" className="title">
                Vous êtes à <span className="glow-word">l'étranger</span>&nbsp;?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-silver md:text-lg">Achetez, louez ou faites gérer votre bien à distance&nbsp;: photos, vidéos et documents envoyés sur WhatsApp.</p>
            </div>
            <a href={whatsappLink("Bonjour 2K Nguith, je vis à l'étranger et j'ai un projet immobilier à Dakar.")} target="_blank" rel="noopener" className="btn-gold shrink-0 self-start md:self-auto">
              Nous écrire
              <ArrowRight aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
