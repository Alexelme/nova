import About from '../components/About.jsx';
import Hero from '../components/Hero.jsx';
import Partners from '../components/Partners.jsx';
import Solutions from '../components/Solutions.jsx';
import Technology from '../components/Technology.jsx';

export default function HomePage({ onOpenSolution }) {
  return (
    <main>
      <Hero />
      <Solutions onOpenSolution={onOpenSolution} />
      <Technology />
      <About />
      <Partners />
    </main>
  );
}
