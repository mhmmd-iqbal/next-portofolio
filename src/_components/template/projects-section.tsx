import Image from 'next/image';

import type { FilterItem, ProjectItem } from '@/src/lib/template-data';

import SectionHeader from '@/src/_components/template/section-header';

type ProjectsSectionProps = {
  filters: FilterItem[];
  projects: ProjectItem[];
  activeFilter: FilterItem['val'];
  onSelectFilter: (filter: FilterItem['val']) => void;
};

export default function ProjectsSection({
  filters,
  projects,
  activeFilter,
  onSelectFilter,
}: ProjectsSectionProps) {
  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.cat === activeFilter);

  return (
    <section id="projects" aria-labelledby="proj-title">
      <div className="container">
        <SectionHeader number="03" title="Selected Projects" titleId="proj-title" />
        <div className="filter-row reveal" id="filter-row">
          {filters.map((filter) => (
            <button
              key={filter.val}
              type="button"
              className={`filter-btn ${filter.val === activeFilter ? 'active' : ''}`.trim()}
              onClick={() => onSelectFilter(filter.val)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="projects-grid" id="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.name} className={`proj-card ${project.featured ? 'featured' : ''}`.trim()}>
              <div className="proj-img">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? `${project.name} project preview`}
                      fill
                      className="proj-img-photo"
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="proj-img-overlay" aria-hidden="true"></div>
                  </>
                ) : (
                  <>
                    <div className="proj-img-bg" style={{ background: project.grad }}></div>
                    <div className="proj-img-text" aria-hidden="true">
                      {project.name.split(' ')[0]}
                    </div>
                  </>
                )}
              </div>
              <div className="proj-body">
                <div className="proj-cat">{project.catLabel}</div>
                <h3 className="proj-name">{project.name}</h3>
                <p className="proj-desc">{project.desc}</p>
                <div className="proj-footer">
                  <div className="proj-stack">
                    {project.tech.map((tech) => (
                      <span className="stack-pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="proj-arrow" aria-hidden="true">
                    →
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
