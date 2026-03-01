import type { SkillGroup } from '@/src/lib/template-data';

import SectionHeader from '@/src/_components/template/section-header';

type AboutSectionProps = {
  skillGroups: SkillGroup[];
};

export default function AboutSection({ skillGroups }: AboutSectionProps) {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader number="01" title="About Me" titleId="about-title" />
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I&apos;m a full-stack engineer based in Yogyakarta, Indonesia, with over 5 years
              building production-grade web systems. My core focus is backend architecture,
              designing APIs and services that are clean, scalable, and maintainable long-term.
            </p>
            <p>
              I&apos;ve shipped products across diverse industries: fintech platforms handling real
              transactions, enterprise ERP modules for <strong>Telkom Indonesia</strong>, AI-powered
              image generation tools, and government digital systems. I care deeply about code
              quality and system reliability.
            </p>
            <p>
              Currently at <strong>PT. Media Digitech Indonesia</strong>, building AI platforms and
              enterprise systems. Previously at Majoo Teknologi and Via Pulsa Global, leading
              full-stack development of complex multi-module applications.
            </p>
            <p>
              Outside code, I&apos;ve competed nationally in informatics olympiads and represented my
              polytechnic in English competitions. Great engineering starts with clear thinking and
              clear communication.
            </p>
          </div>
          <div className="reveal d2" id="skills-grid">
            {skillGroups.map((group) => (
              <div className="skills-group" key={group.cat}>
                <div className="skills-cat">{group.cat}</div>
                <div className="skills-tags">
                  {group.items.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
