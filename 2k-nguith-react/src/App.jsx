import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Properties from './components/Properties.jsx';
import PropertyDialog from './components/PropertyDialog.jsx';
import Catalogue from './components/Catalogue.jsx';
import WhyUs from './components/WhyUs.jsx';
import Steps from './components/Steps.jsx';
import Categories from './components/Categories.jsx';
import Management from './components/Management.jsx';
import Construction from './components/Construction.jsx';
import Diaspora from './components/Diaspora.jsx';
import MinuteTips from './components/MinuteTips.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import Preloader from './components/Preloader.jsx';
import { useRouter } from './lib/router.js';

const ALL = { type: 'tous', quartier: '', budget: '' };

export default function App() {
  const [filters, setFilters] = useState(ALL);
  const [selected, setSelected] = useState(null);
  const { page, openCatalogue, goTo } = useRouter();

  // Lien du menu, d'une catégorie ou du pied de page : applique le filtre éventuel,
  // puis défile en douceur jusqu'à la section (en revenant à l'accueil si besoin).
  const navigate = useCallback(
    (item) => {
      if (item.filter) setFilters({ ...ALL, type: item.filter });
      goTo(item.href.replace('#', ''));
    },
    [goTo],
  );

  const showType = useCallback((type) => setFilters({ ...ALL, type }), []);

  // Recherche du hero : localisation + type + budget, puis défilement vers les biens.
  const search = useCallback(
    (criteria) => {
      setFilters(criteria);
      goTo('biens');
    },
    [goTo],
  );

  return (
    <>
      <Preloader />
      <a href="#contenu" className="sr-only rounded-lg bg-gold px-5 py-3 text-void focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]">
        Aller au contenu
      </a>
      <Header onNavigate={navigate} solidAlways={page === 'catalogue'} />
      <main id="contenu">
        {page === 'catalogue' ? (
          <Catalogue initialType={filters.type} onOpen={setSelected} onBack={() => goTo('biens')} />
        ) : (
          <>
            {/* Alternance : sombre (luxe) / blanc (clarté) */}
            <Hero onSearch={search} />
            <Properties filters={filters} onType={showType} onReset={() => setFilters(ALL)} onOpen={setSelected} onOpenCatalogue={openCatalogue} />
            <WhyUs />
            <Steps />
            <Categories onNavigate={navigate} />
            <Management />
            <Construction onNavigate={navigate} />
            <Diaspora />
            <MinuteTips />
            <Testimonials />
            <Contact />
            <Gallery />
          </>
        )}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppFab />
      <PropertyDialog property={selected} onClose={() => setSelected(null)} />
    </>
  );
}
