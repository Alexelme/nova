import { ArrowRight, Atom, CircuitBoard, Microscope } from 'lucide-react';
import { technologyItems } from '../data/siteData.js';

const icons = [Microscope, CircuitBoard, Atom];

export default function Technology() {
  return (
    <section className="technology section-pad" id="technology">
      <div className="shell technology-layout">
        <div className="technology-copy">
          <p className="section-label">技术创新</p>
          <h2>以长期研发能力构建智能化基础设施</h2>
          <p>
            NovaTech 将硬件工程、云原生平台和人工智能模型融合到统一技术体系中，让企业在复杂场景中获得稳定、可验证、可持续迭代的创新能力。
          </p>
          <a href="#contact" className="section-link compact-link">
            预约技术交流
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="technology-panel">
          <div className="technology-list">
            {technologyItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <article className="technology-card" key={item.title}>
                  <div className="technology-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <strong>{item.value}</strong>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
