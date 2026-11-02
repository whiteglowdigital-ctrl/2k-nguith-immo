import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils.js';

// Fondu vers le haut quand l'élément entre à l'écran (doigt ou souris).
// Ce qui est déjà visible au chargement s'affiche tout de suite.
export default function Reveal({ as: Tag = 'div', delay = 0, className, children, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.left < window.innerWidth) return;

    setState('hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('in');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={state === 'in' && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        state !== 'idle' && 'transition-all duration-700 ease-out',
        state === 'hidden' && 'translate-y-8 opacity-0',
        state === 'in' && 'translate-y-0 opacity-100',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
