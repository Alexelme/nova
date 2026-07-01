import { ArrowRight } from 'lucide-react';
import heroImage from '../../png/2.jpg';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-image"
        src={`${heroImage}?v=202607011149`}
        alt="科技驱动未来 创新成就价值"
      />
      <a className="hero-solution-button" href="#solutions" aria-label="探索我们的解决方案">
        <span>探索我们的解决方案</span>
        <i>
          <ArrowRight size={20} />
        </i>
      </a>
    </section>
  );
}
