import { ArrowRight } from 'lucide-react';

export default function SectionIntro({ label, title, linkText }) {
  return (
    <div className="section-intro">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {linkText && (
        <a href="#" className="section-link">
          {linkText}
          <ArrowRight size={16} />
        </a>
      )}
    </div>
  );
}
