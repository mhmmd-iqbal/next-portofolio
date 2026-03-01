import type { MouseEvent } from 'react';

import type { SectionId } from '@/src/_components/template/template-config';

type TemplateFooterProps = {
  year: number;
  onNavigate: (event: MouseEvent<HTMLElement>, id: SectionId) => void;
};

export default function TemplateFooter({ year, onNavigate }: TemplateFooterProps) {
  return (
    <footer>
      <div className="footer-left">
        © {year} Muhammad Iqbal<span>.</span> Built with passion in Yogyakarta.
      </div>
      <div className="footer-links">
        <a href="mailto:mhmmd.iqbal.june@gmail.com" className="footer-link">
          Email
        </a>
        <a href="https://linkedin.com/in/mhmmd-iqbal" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="#hero" className="footer-link" id="back-top" onClick={(event) => onNavigate(event, 'hero')}>
          ↑ Top
        </a>
      </div>
    </footer>
  );
}
