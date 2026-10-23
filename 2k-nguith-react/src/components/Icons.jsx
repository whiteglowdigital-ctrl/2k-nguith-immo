// Quelques tracés simples, sans bibliothèque d'icônes.
const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...line}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Play({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M8 5.5v13a.5.5 0 0 0 .77.42l10-6.5a.5.5 0 0 0 0-.84l-10-6.5A.5.5 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function Plus({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...line}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Menu({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...line}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...line}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Chevron({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...line}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
