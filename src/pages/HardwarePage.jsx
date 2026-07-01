import { ArrowRight, Check, Cpu, Network, ShieldCheck } from 'lucide-react';

export default function HardwarePage({ solution }) {
  return (
    <section className="hardware-page">
      <div className="shell hardware-hero">
        <div className="hardware-copy">
          <p className="eyebrow">{solution.kicker}</p>
          <h1>{solution.details.title}</h1>
          <p>{solution.details.subtitle}</p>
          <div className="hardware-actions">
            <button className="cta-button">
              获取方案
              <ArrowRight size={18} />
            </button>
            <button className="ghost-button">下载产品手册</button>
          </div>
        </div>
        <div className="hardware-device" aria-hidden="true">
          <div className="device-board">
            <span className="device-chip"><Cpu size={42} /></span>
            <i className="trace trace-a" />
            <i className="trace trace-b" />
            <i className="trace trace-c" />
            <span className="port port-a" />
            <span className="port port-b" />
            <span className="port port-c" />
          </div>
          <div className="floating-spec spec-a"><Network size={18} /> 5G Mesh</div>
          <div className="floating-spec spec-b"><ShieldCheck size={18} /> Secure Boot</div>
        </div>
      </div>

      <div className="shell metric-band">
        {solution.details.metrics.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="shell hardware-section">
        <div>
          <p className="section-label">核心能力</p>
          <h2>为真实业务场景设计</h2>
        </div>
        <div className="feature-grid">
          {solution.details.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <Icon size={26} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="shell scenario-panel">
        <div>
          <p className="section-label">典型场景</p>
          <h2>从单点能力到全域数字化协同</h2>
        </div>
        <div className="scenario-list">
          {solution.details.scenario.map((item) => (
            <span key={item}><Check size={17} />{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
