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
              building production-grade web systems. My strongest focus is backend architecture:
              designing APIs and services that stay clean, scalable, and maintainable as products
              grow.
            </p>
            <p>
              I&apos;ve shipped products across enterprise platforms, AI-powered tools, and
              public-sector digital services. I care deeply about code quality, clear system
              design, and reliability in production.
            </p>
            <p>
              Currently at <strong>PT. Media Digitech Indonesia</strong>, I build AI platforms and
              enterprise systems. Previously at Majoo Teknologi and Via Pulsa Global, I led
              full-stack delivery for complex multi-module applications.
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
