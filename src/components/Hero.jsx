import { ArrowRight } from 'lucide-react';
import heroImage from '../../png/2.png';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-image"
        src={`${heroImage}?v=202607011930`}
        alt="科技驱动未来 创新成就价值"
      />
      <div className="hero-content" aria-label="科技驱动未来 创新成就价值">
        <h1>
          科技驱动<span>未来</span>
          <br />
          创新成就价值
        </h1>
        <p>我们用前沿技术与智能解决方案，助力企业和社会迈向数字化未来</p>
        <a className="hero-solution-button" href="#solutions" aria-label="探索我们的解决方案">
          <span>探索我们的解决方案</span>
          <i>
            <ArrowRight size={20} />
          </i>
        </a>
      </div>
    </section>
  );
}

