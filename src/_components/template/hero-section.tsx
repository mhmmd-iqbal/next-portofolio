import { MARQUEE, PERSON_JSON_LD, PROJECTS } from '@/src/lib/template-data';
import type { MouseEvent } from 'react';

type HeroSectionProps = {
  onNavigate: (event: MouseEvent<HTMLElement>, id: 'projects' | 'contact') => void;
};

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="hero" aria-labelledby="hero-h1">
      <div className="hero-inner">
        <div className="avail-badge">
          <div className="avail-dot"></div>
          Available for new projects
        </div>
        <div className="hero-tag">{PERSON_JSON_LD.jobTitle} </div>
        <h1 className="hero-h1" id="hero-h1">
          <span className="block">{PERSON_JSON_LD.firstName}</span>
          <span className="block outline">{PERSON_JSON_LD.lastName}</span>
        </h1>
        <p className="hero-desc">
          I build scalable backend systems, real-time applications, and modern web platforms. 5+
          years crafting products across fintech, ERP, CRM, and AI-driven spaces.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary" onClick={(event) => onNavigate(event, 'projects')}>
            View Projects →
          </a>
          <a href="#contact" className="btn-ghost" onClick={(event) => onNavigate(event, 'contact')}>
            Get in touch
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <div className="stat-num">{PROJECTS.length}+</div>
            <div className="stat-label">Projects Shipped</div>
          </div>
          <div>
            <div className="stat-num">8+</div>
            <div className="stat-label">Companies Served</div>
          </div>
          <div>
            <div className="stat-num">{MARQUEE.length}+</div>
            <div className="stat-label">Tech Mastered</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line"></div>
        <span className="hero-scroll-text">scroll</span>
      </div>
    </section>
  );
}
