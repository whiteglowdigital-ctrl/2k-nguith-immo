import { whatsappLink } from '../lib/utils.js';

export default function Diaspora() {
  return (
    <section aria-labelledby="titre-diaspora" className="section">
      <div className="wrap">
        <div className="flex flex-col gap-6 rounded-2xl border border-ink/10 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <h2 id="titre-diaspora" className="heading">
              Vous êtes à l'étranger&nbsp;?
            </h2>
            <p className="mt-3 text-ink-muted">
              Achetez, louez ou faites gérer votre bien à distance&nbsp;: photos, vidéos et documents envoyés sur WhatsApp.
            </p>
          </div>
          <a href={whatsappLink("Bonjour 2K Nguith, je vis à l'étranger et j'ai un projet immobilier à Dakar.")} target="_blank" rel="noopener" className="btn-dark shrink-0 self-start md:self-auto">
            Nous écrire
          </a>
        </div>
      </div>
    </section>
  );
}
