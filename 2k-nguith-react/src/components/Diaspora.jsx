import { ArrowRight, Globe2 } from 'lucide-react';
import { ambiance } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';
import Reveal from './Reveal.jsx';

// Bandeau immersif : photo de fond sous un voile bleu nuit.
export default function Diaspora() {
  return (
    <section aria-labelledby="titre-diaspora" className="py-16 md:py-24">
      <div className="container">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-navy px-7 py-16 text-white md:px-14 md:py-20">
          <img src={ambiance.diaspora} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="kicker-light">
                <Globe2 aria-hidden className="h-3.5 w-3.5" />
                Diaspora
              </p>
              <h2 id="titre-diaspora" className="font-serif text-[1.6rem] font-semibold tracking-tight md:text-4xl">
                Vous êtes à <span className="text-gold">l'étranger</span>&nbsp;?
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-300 md:text-lg">Achetez, louez ou faites gérer votre bien à distance&nbsp;: photos, vidéos et documents envoyés sur WhatsApp.</p>
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
