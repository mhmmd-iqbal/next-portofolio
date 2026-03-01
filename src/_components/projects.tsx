import type { Project } from '@/src/lib/portfolio-data';
import { panelNumber } from '@/src/lib/portfolio-data';

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <>
      <div className="section-tag">Selected work</div>
      <div className="proj-reel">
        {projects.map((project, index) => (
          <div key={project.name} className="proj-c">
            <div className="pc-num">{panelNumber(index)}</div>
            <div className="pc-cat">{project.category}</div>
            <div className="pc-name">{project.name}</div>
            <div className="pc-desc">{project.description}</div>
            <div className="pc-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="pc-t">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
