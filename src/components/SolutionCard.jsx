import { ArrowRight } from 'lucide-react';
import TechVisual from './TechVisual.jsx';

export default function SolutionCard({ item, onOpen }) {
  const Icon = item.icon;

  return (
    <article className="solution-card" data-testid={`solution-card-${item.id}`}>
      <TechVisual id={item.id} />
      <div className="solution-body">
        <div className="solution-title-row">
          <Icon size={21} />
          <h3>{item.title}</h3>
        </div>
        <p>{item.summary}</p>
        <button
          onClick={() => onOpen(item.id)}
          className="text-link"
          data-testid={`solution-link-${item.id}`}
        >
          了解更多
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}
