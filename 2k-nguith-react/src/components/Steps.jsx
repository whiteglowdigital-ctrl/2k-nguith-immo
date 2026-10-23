import SectionHeader from './SectionHeader.jsx';

const steps = [
  { title: 'Choisir', text: 'Vous choisissez un bien ou nous décrivez votre besoin.' },
  { title: 'Recevoir', text: 'On vous envoie photos, vidéos et documents sur WhatsApp.' },
  { title: 'Visiter', text: 'On organise la visite.' },
  { title: 'Signer', text: "On vous accompagne jusqu'à la signature." },
];

export default function Steps() {
  return (
    <section aria-labelledby="titre-etapes" className="section bg-mist">
      <div className="wrap">
        <SectionHeader id="titre-etapes" title="Comment ça marche" />
        <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              {/* Grand numéro ambre : texte de grande taille, contraste suffisant (3,2:1) */}
              <span className="block font-serif text-5xl font-medium text-amber [font-variant-numeric:lining-nums_tabular-nums]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
