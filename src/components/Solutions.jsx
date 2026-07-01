import SectionIntro from './SectionIntro.jsx';
import SolutionCard from './SolutionCard.jsx';
import { solutionCards } from '../data/siteData.js';

export default function Solutions({ onOpenSolution }) {
  return (
    <section className="solutions section-pad" id="solutions">
      <div className="shell solutions-layout">
        <SectionIntro
          label="产品与解决方案"
          title="以技术创新满足多样化需求"
          linkText="查看全部产品"
        />
        <div className="solution-grid">
          {solutionCards.map((item) => (
            <SolutionCard item={item} onOpen={onOpenSolution} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
