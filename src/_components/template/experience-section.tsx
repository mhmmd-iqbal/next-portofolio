import type { ExperienceItem } from '@/src/lib/template-data';

import SectionHeader from '@/src/_components/template/section-header';

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" aria-labelledby="exp-title">
      <div className="container">
        <SectionHeader number="02" title="Experience" titleId="exp-title" />
        <div className="exp-list reveal" id="exp-list">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className={`exp-item reveal ${index === 0 ? '' : `d${Math.min(index, 4)}`}`.trim()}
            >
              <div className="exp-meta">
                <div className="exp-period">{experience.period}</div>
                <span className={`exp-badge ${experience.type === 'freelance' ? 'freelance' : ''}`}>
                  {experience.type === 'full-time' ? 'Full-time' : 'Freelance'}
                </span>
              </div>
              <div>
                <div className="exp-company">{experience.company}</div>
                <div className="exp-role">
                  {experience.role} · {experience.location}
                </div>
                <ul className="exp-ul">
                  {experience.desc.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tech-chips">
                  {experience.tech.map((tech) => (
                    <span className="tech-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
