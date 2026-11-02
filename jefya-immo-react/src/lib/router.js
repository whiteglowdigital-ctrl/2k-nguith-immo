import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

// Deux vues : l'accueil et la page « Tous nos biens » (#catalogue).
// Les autres ancres (#gerance, #biens…) sont des sections de l'accueil.
const CATALOGUE = 'catalogue';

function currentPage() {
  return window.location.hash.replace('#', '') === CATALOGUE ? 'catalogue' : 'home';
}

const FADE_OUT = 250; // fondu de sortie avant de changer de vue

function scrollToId(id, behavior = 'smooth') {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior, block: 'start' });
  else window.scrollTo({ top: 0, behavior });
}

export function useRouter() {
  const [page, setPage] = useState(currentPage);
  const [fading, setFading] = useState(false);

  // Change de vue sans saut : fondu de sortie, échange et placement, puis fondu d'entrée.
  const swap = useCallback((change) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return change();
    setFading(true);
    setTimeout(() => {
      change();
      requestAnimationFrame(() => requestAnimationFrame(() => setFading(false)));
    }, FADE_OUT);
  }, []);

  useEffect(() => {
    const onHash = () => setPage(currentPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Ouvre la page catalogue, en haut de page.
  const openCatalogue = useCallback(() => {
    swap(() => {
      history.pushState(null, '', `#${CATALOGUE}`);
      setPage('catalogue');
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [swap]);

  // Défile en douceur vers une section de l'accueil, en revenant d'abord à l'accueil si besoin.
  const goTo = useCallback(
    (id) => {
      if (page === 'catalogue') {
        // Retour à l'accueil : placement direct sur la section, caché par le fondu
        swap(() => {
          history.replaceState(null, '', `#${id}`);
          flushSync(() => setPage('home'));
          scrollToId(id, 'instant');
        });
      } else {
        history.replaceState(null, '', `#${id}`);
        scrollToId(id);
      }
    },
    [page, swap],
  );

  return { page, fading, openCatalogue, goTo };
}
