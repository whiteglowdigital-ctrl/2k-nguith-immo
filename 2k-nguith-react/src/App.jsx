import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Properties from './components/Properties.jsx';
import PropertyDialog from './components/PropertyDialog.jsx';
import WhyUs from './components/WhyUs.jsx';
import Steps from './components/Steps.jsx';
import Management from './components/Management.jsx';
import Construction from './components/Construction.jsx';
import Diaspora from './components/Diaspora.jsx';
import MinuteTips from './components/MinuteTips.jsx';
import Reviews from './components/Reviews.jsx';
import Gallery from './components/Gallery.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MobileBar from './components/MobileBar.jsx';

const ALL = { type: 'tous', quartier: '', budget: '' };

export default function App() {
  const [filters, setFilters] = useState(ALL);
  const [selected, setSelected] = useState(null);

  // Menu, raccourcis et onglets : filtre par type uniquement.
  const showType = useCallback((type) => setFilters({ ...ALL, type }), []);

  // Barre de recherche : type + quartier + budget, puis défilement vers les biens.
  const search = useCallback((criteria) => {
    setFilters(criteria);
    document.getElementById('biens')?.scrollIntoView();
  }, []);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only rounded-full bg-white px-5 py-3 font-semibold text-ink shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Aller au contenu
      </a>
      <Header onFilter={showType} />
      <main id="contenu">
        <Hero onSearch={search} />
        <Services onFilter={showType} />
        <Properties filters={filters} onType={showType} onReset={() => setFilters(ALL)} onOpen={setSelected} />
        <WhyUs />
        <Steps />
        <Management />
        <Construction />
        <Diaspora />
        <MinuteTips />
        <Reviews />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <PropertyDialog property={selected} onClose={() => setSelected(null)} />
    </>
  );
}
