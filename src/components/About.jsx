import { ArrowRight, Clock, Globe2, Shield, UsersRound } from 'lucide-react';
import SectionIntro from './SectionIntro.jsx';
import { news, stats } from '../data/siteData.js';

const icons = [Clock, UsersRound, Shield, Globe2];

export default function About() {
  return (
    <section className="about enterprise section-pad" id="enterprise">
      <div className="shell about-layout">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82"
            alt="NovaTech office building"
          />
        </div>
        <div className="about-copy">
          <p className="section-label">关于企业</p>
          <h2>用科技改善生活 用创新引领未来</h2>
          <p>
            NovaTech 成立于 2012 年，是一家全球领先的科技创新企业，专注于智能硬件、软件平台、云服务和人工智能等领域，为客户提供全方位的数字化解决方案。
          </p>
          <div className="stats-grid">
            {stats.map(([value, label], index) => {
              const Icon = icons[index];
              return (
                <div className="stat" key={label}>
                  <Icon size={26} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
          <button className="cta-button soft">
            了解更多关于企业
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="shell enterprise-news news-layout">
        <SectionIntro label="企业动态" title="洞察产业进化" linkText="查看全部动态" />
        <div className="news-grid">
          {news.map((item) => (
            <article className="news-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <ArrowRight size={17} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
