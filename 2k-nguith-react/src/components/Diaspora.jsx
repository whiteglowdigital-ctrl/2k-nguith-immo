import { ArrowRight, Globe2 } from 'lucide-react';
import { ambiance } from '../data/site.js';
import { whatsappLink } from '../lib/utils.js';

// Bandeau immersif : photo de fond sous un voile vert forêt.
export default function Diaspora() {
  return (
    <section aria-labelledby="titre-diaspora" className="py-12 md:py-16">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-3xl bg-forest-deep px-6 py-14 text-white md:px-14 md:py-16">
          <img src={ambiance.diaspora} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/30" />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="kicker-light">
                <Globe2 aria-hidden className="h-3.5 w-3.5" />
                Diaspora
              </p>
              <h2 id="titre-diaspora" className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Vous êtes à <span className="text-gold">l'étranger</span>&nbsp;?
              </h2>
              <p className="mt-4 text-lg text-white/80">Achetez, louez ou faites gérer votre bien à distance&nbsp;: photos, vidéos et documents envoyés sur WhatsApp.</p>
            </div>
            <a href={whatsappLink("Bonjour 2K Nguith, je vis à l'étranger et j'ai un projet immobilier à Dakar.")} target="_blank" rel="noopener" className="btn-gold shrink-0 self-start md:self-auto">
              Nous écrire
              <ArrowRight aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
