import type { MouseEvent } from 'react';

import { PERSON_JSON_LD, type NavItem, type SectionId } from '@/src/lib/template-data';
import type { Theme } from '@/src/_hooks/use-theme';

type NavbarProps = {
  isScrolled: boolean;
  navItems: NavItem[];
  activeSection: SectionId;
  theme: Theme;
  menuOpen: boolean;
  onNavigate: (event: MouseEvent<HTMLElement>, id: SectionId) => void;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
};

export default function Navbar({
  isScrolled,
  navItems,
  activeSection,
  theme,
  menuOpen,
  onNavigate,
  onToggleTheme,
  onToggleMenu,
}: NavbarProps) {
  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo" onClick={(event) => onNavigate(event, 'hero')}>
        MI<span>.</span>
      </a>

      <ul className="nav-center" role="list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? 'is-active' : ''}
              onClick={(event) => onNavigate(event, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          id="themeToggle"
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <a href={`mailto:${PERSON_JSON_LD.email}`} className="nav-hire">
          Hire Me
        </a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          id="hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={onToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
