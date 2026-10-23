import { useCallback, useEffect, useState } from 'react';

// Deux vues : l'accueil et la page « Tous nos biens » (#catalogue).
// Les autres ancres (#gerance, #biens…) sont des sections de l'accueil.
const CATALOGUE = 'catalogue';

function currentPage() {
  return window.location.hash.replace('#', '') === CATALOGUE ? 'catalogue' : 'home';
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useRouter() {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const onHash = () => setPage(currentPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Ouvre la page catalogue, en haut de page.
  const openCatalogue = useCallback(() => {
    if (window.location.hash !== `#${CATALOGUE}`) window.location.hash = CATALOGUE;
    setPage('catalogue');
    window.scrollTo({ top: 0 });
  }, []);

  // Défile en douceur vers une section de l'accueil, en revenant d'abord à l'accueil si besoin.
  const goTo = useCallback(
    (id) => {
      if (page === 'catalogue') {
        history.replaceState(null, '', `#${id}`);
        setPage('home');
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)));
      } else {
        history.replaceState(null, '', `#${id}`);
        scrollToId(id);
      }
    },
    [page],
  );

  return { page, openCatalogue, goTo };
}
