// En-tête de section : titre à gauche, action éventuelle à droite, sur la même ligne.
export default function SectionHeader({ id, title, intro, children }) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 id={id} className="heading">
          {title}
        </h2>
        {intro && <p className="mt-3 text-ink-muted">{intro}</p>}
      </div>
      {children}
    </div>
  );
}
