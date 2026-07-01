import { Menu, Search } from 'lucide-react';
import Logo from './Logo.jsx';
import { navItems } from '../data/siteData.js';

export default function Header({ onLogoClick, onNavigate }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <button className="logo-button" onClick={onLogoClick} aria-label="返回首页">
          <Logo />
        </button>
        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="搜索">
            <Search size={20} />
          </button>
          <a
            className="primary-pill"
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('#contact');
            }}
          >
            获取方案
          </a>
          <button className="icon-button mobile-menu" aria-label="菜单">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
