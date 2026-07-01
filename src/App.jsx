import { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import HardwarePage from './pages/HardwarePage.jsx';
import { solutionCards } from './data/siteData.js';

export default function App() {
  const [route, setRoute] = useState({ name: 'home' });

  const activeSolution = useMemo(
    () => solutionCards.find((item) => item.id === route.id),
    [route]
  );

  const openSolution = (id) => {
    const targetSolution = solutionCards.find((item) => item.id === id);

    if (targetSolution?.details) {
      setRoute({ name: 'solution', id });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById('solutions');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigate = (href) => {
    setRoute({ name: 'home' });
    window.setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return (
    <div className="app">
      <Header onLogoClick={() => handleNavigate('#home')} onNavigate={handleNavigate} />
      {route.name === 'solution' && activeSolution ? (
        <main>
          <button className="back-float" onClick={() => setRoute({ name: 'home' })}>
            <ArrowLeft size={18} />
            返回首页
          </button>
          <HardwarePage solution={activeSolution} />
        </main>
      ) : (
        <HomePage onOpenSolution={openSolution} />
      )}
      <Footer />
    </div>
  );
}
