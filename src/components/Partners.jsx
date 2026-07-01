import { ChevronLeft, ChevronRight } from 'lucide-react';
import { partners } from '../data/siteData.js';

export default function Partners() {
  return (
    <section className="partners">
      <div className="shell partners-inner">
        <strong>全球合作伙伴</strong>
        <ChevronLeft className="muted-icon" size={20} />
        <div className="partner-row">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
        <ChevronRight className="muted-icon" size={20} />
      </div>
    </section>
  );
}
