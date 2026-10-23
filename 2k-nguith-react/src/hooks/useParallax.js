import { useEffect, useRef } from 'react';

// Décalage vertical léger lié au défilement (effet parallaxe).
// speed > 0 : l'élément monte plus vite que la page. Désactivé si l'utilisateur limite les animations.
export default function useParallax(speed = 0.08, max = 70) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const raw = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      // Borné : hors de l'écran, l'élément reste proche de sa place réelle.
      const offset = Math.max(-max, Math.min(max, raw));
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed, max]);

  return ref;
}
