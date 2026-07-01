import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { footerColumns } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>我们专注于技术创新与应用，为全球领先企业提供数字化产品与解决方案。</p>
        </div>
        {footerColumns.map(([title, ...items]) => (
          <div className="footer-col" key={title}>
            <h4>{title}</h4>
            {items.map((item) => (
              <a href="#" key={item}>{item}</a>
            ))}
          </div>
        ))}
        <div className="footer-col contact">
          <h4>联系我们</h4>
          <span><Phone size={16} />400-888-9999</span>
          <span><Mail size={16} />contact@novatech.com</span>
          <span><MapPin size={16} />北京市海淀区中关村大街1号创新大厦18层</span>
          <button className="primary-pill">获取解决方案</button>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 NovaTech. 保留所有权利.</span>
        <span>隐私政策</span>
        <span>使用条款</span>
        <span>网站地图</span>
        <span>京ICP备12345678号-1</span>
      </div>
    </footer>
  );
}
