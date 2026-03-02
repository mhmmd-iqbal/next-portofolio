import type { MouseEvent } from 'react';

import { PERSON_JSON_LD, type SectionId } from '@/src/lib/template-data';

type TemplateFooterProps = {
  year: number;
  onNavigate: (event: MouseEvent<HTMLElement>, id: SectionId) => void;
};

export default function TemplateFooter({ year, onNavigate }: TemplateFooterProps) {
  return (
    <footer>
      <div className="footer-left">
        © {year} {PERSON_JSON_LD.name}<span>.</span> Built with passion in {PERSON_JSON_LD.address.addressLocality}.
      </div>
      <div className="footer-links">
        <a href={`mailto:${PERSON_JSON_LD.email}`} className="footer-link">
          Email
        </a>
        <a href={PERSON_JSON_LD.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="#hero" className="footer-link" id="back-top" onClick={(event) => onNavigate(event, 'hero')}>
          ↑ Top
        </a>
      </div>
    </footer>
  );
}
