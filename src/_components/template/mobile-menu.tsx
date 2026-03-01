import type { MouseEvent } from 'react';

import type { NavItem, SectionId } from '@/src/_components/template/template-config';
import type { Theme } from '@/src/_hooks/use-theme';

type MobileMenuProps = {
  open: boolean;
  navItems: NavItem[];
  theme: Theme;
  onNavigate: (event: MouseEvent<HTMLElement>, id: SectionId) => void;
  onClose: () => void;
  onToggleTheme: () => void;
};

export default function MobileMenu({
  open,
  navItems,
  theme,
  onNavigate,
  onClose,
  onToggleTheme,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={open ? 'open' : ''}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      inert={!open}
    >
      <nav className="mobile-nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="mobile-nav-link"
            onClick={(event) => onNavigate(event, item.id)}
          >
            <span>{item.num}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mobile-bottom">
        <a href="mailto:mhmmd.iqbal.june@gmail.com" className="mobile-hire" onClick={onClose}>
          Hire Me →
        </a>
        <div className="mobile-contacts">
          <a href="tel:+6282165678664" className="mobile-contact-pill" onClick={onClose}>
            📱 WhatsApp
          </a>
          <a
            href="https://linkedin.com/in/mhmmd-iqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-contact-pill"
            onClick={onClose}
          >
            in LinkedIn
          </a>
        </div>
        <button className="theme-toggle mobile-theme-toggle" aria-label="Toggle theme" onClick={onToggleTheme}>
          {theme === 'dark' ? '☀️  Switch to Light Mode' : '🌙  Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
}
