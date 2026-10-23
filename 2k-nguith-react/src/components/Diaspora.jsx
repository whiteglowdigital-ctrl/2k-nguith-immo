import Reveal from './Reveal.jsx';
import { Arrow } from './Glyphs.jsx';
import { whatsappLink } from '../lib/utils.js';

export default function Diaspora() {
  return (
    <section aria-labelledby="titre-diaspora" className="border-y border-ink/10">
      <Reveal className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <h2 id="titre-diaspora" className="display text-[3rem] sm:text-7xl lg:col-span-7 lg:text-[6rem]">
          Vous êtes à <em className="italic">l'étranger</em>&nbsp;?
        </h2>
        <div className="flex flex-col items-start gap-10 lg:col-span-4 lg:col-start-9">
          <p className="text-ink-muted">Achetez, louez ou faites gérer votre bien à distance&nbsp;: photos, vidéos et documents envoyés sur WhatsApp.</p>
          <a href={whatsappLink("Bonjour 2K Nguith, je vis à l'étranger et j'ai un projet immobilier à Dakar.")} target="_blank" rel="noopener" className="link-line group">
            Nous écrire
            <Arrow className="h-2.5 w-7 transition-transform duration-700 ease-out group-hover:translate-x-1.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
