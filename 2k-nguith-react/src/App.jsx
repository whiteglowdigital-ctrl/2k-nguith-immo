import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Properties from './components/Properties.jsx';
import PropertyDialog from './components/PropertyDialog.jsx';
import WhyUs from './components/WhyUs.jsx';
import Stats from './components/Stats.jsx';
import Steps from './components/Steps.jsx';
import Categories from './components/Categories.jsx';
import Management from './components/Management.jsx';
import Construction from './components/Construction.jsx';
import Diaspora from './components/Diaspora.jsx';
import MinuteTips from './components/MinuteTips.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

const ALL = { type: 'tous', quartier: '', budget: '' };

export default function App() {
  const [filters, setFilters] = useState(ALL);
  const [selected, setSelected] = useState(null);

  // Menu et catégories : filtre par type uniquement.
  const showType = useCallback((type) => setFilters({ ...ALL, type }), []);

  // Recherche du hero : localisation + type + budget, puis défilement vers les biens.
  const search = useCallback((criteria) => {
    setFilters(criteria);
    document.getElementById('biens')?.scrollIntoView();
  }, []);

  return (
    <>
      <a href="#contenu" className="sr-only rounded-lg bg-night px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]">
        Aller au contenu
      </a>
      <Header onFilter={showType} />
      <main id="contenu">
        <Hero onSearch={search} />
        <Properties filters={filters} onType={showType} onReset={() => setFilters(ALL)} onOpen={setSelected} />
        <WhyUs />
        <Stats />
        <Steps />
        <Categories onFilter={showType} />
        <Management />
        <Construction />
        <Diaspora />
        <MinuteTips />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <PropertyDialog property={selected} onClose={() => setSelected(null)} />
    </>
  );
}
