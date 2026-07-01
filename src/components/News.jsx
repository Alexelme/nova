import { ArrowRight } from 'lucide-react';
import SectionIntro from './SectionIntro.jsx';
import { news } from '../data/siteData.js';

export default function News() {
  return (
    <section className="news section-pad" id="news">
      <div className="shell news-layout">
        <SectionIntro label="新闻中心" title="洞察产业进化" linkText="查看全部新闻" />
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
