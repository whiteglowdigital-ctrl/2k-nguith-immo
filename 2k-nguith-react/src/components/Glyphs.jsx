// Tracés fins faits main : flèches, lecture, et marques géométriques qui remplacent les icônes.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1, strokeLinecap: 'square', 'aria-hidden': true };

export function Arrow({ className = 'h-3 w-8' }) {
  return (
    <svg viewBox="0 0 32 12" className={className} {...base}>
      <path d="M0 6h31M25 1l6 5-6 5" />
    </svg>
  );
}

export function ArrowUpRight({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 14 14" className={className} {...base}>
      <path d="M1 13 13 1M4 1h9v9" />
    </svg>
  );
}

export function Plus({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base}>
      <path d="M8 0v16M0 8h16" />
    </svg>
  );
}

export function Play({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 12 14" className={className} aria-hidden fill="currentColor">
      <path d="M0 0v14l12-7z" />
    </svg>
  );
}

// Point ambre : le seul usage de la couleur d'accent, un micro-détail.
export function Dot({ className = '' }) {
  return <span aria-hidden className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber ${className}`} />;
}

// Marques géométriques (une par argument) : ligne, carré, cercle, triangle.
export function Mark({ shape, className = 'h-10 w-10' }) {
  const shapes = {
    line: <path d="M2 38 38 2" />,
    square: <rect x="6" y="6" width="28" height="28" />,
    circle: <circle cx="20" cy="20" r="15" />,
    triangle: <path d="M20 5 36 34H4z" />,
  };
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      {shapes[shape]}
    </svg>
  );
}
