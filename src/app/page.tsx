'use client';

import type {
  CSSProperties,
  FormEvent,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent,
} from 'react';
import { useEffect, useMemo, useState } from 'react';

const PANELS = ['Home', 'About', 'Experience', 'Projects', 'Contact'] as const;

const SKILLS = [
  { name: 'Backend', level: '92%' },
  { name: 'Frontend', level: '78%' },
  { name: 'Database', level: '85%' },
  { name: 'DevOps', level: '70%' },
  { name: 'System Design', level: '80%' },
];

const EXPERIENCES = [
  {
    date: 'Oct 2024 - Present',
    company: 'PT. Media Digitech Indonesia',
    role: 'Full-Stack Engineer · Yogyakarta',
    points: ['AI image/video platforms', 'ERP & CMS applications', 'DB optimization & API tuning'],
  },
  {
    date: 'Nov 2023 - Aug 2024',
    company: 'PT. Via Pulsa Global',
    role: 'Full-Stack Engineer · Yogyakarta',
    points: ['Fintech web panels', 'API reliability engineering', 'System optimization'],
  },
  {
    date: 'Feb 2022 - Jun 2023',
    company: 'PT. Majoo Teknologi',
    role: 'Full-Stack Engineer · Malang',
    points: ['CRM systems & B2B APIs', 'Legacy refactoring', 'Performance improvements'],
  },
  {
    date: 'Aug 2020 - Feb 2022',
    company: 'PT. Bursaku Finansial',
    role: 'Backend Engineer · Medan',
    points: ['CMS panel & mobile backend', '3rd-party API integrations'],
  },
];

const PROJECTS = [
  {
    category: 'AI Platform',
    name: 'Viwonder.ai',
    description:
      'AI image & video generator. Background remover, object replacer, corporate headshots. Real production users.',
    tech: ['ExpressJS', 'ReactJS', 'Filament', 'PostgreSQL'],
  },
  {
    category: 'Fintech',
    name: 'Viapulsa Panel',
    description:
      'Internal management + end-user system for pulsa conversion. SSO, transaction history, multi-module.',
    tech: ['NextJS', 'ExpressJS', 'MongoDB'],
  },
  {
    category: 'Gov-Tech',
    name: 'e-pengantar KEMNAKER',
    description:
      'Ministry of Manpower digital platform. Examinations, training tracking, competency mapping.',
    tech: ['Laravel', 'MySQL'],
  },
  {
    category: 'Enterprise ERP',
    name: 'DiGASS: Rekon',
    description:
      'Telkom Medan Branch workflow from application request through BAST & BAUT verification.',
    tech: ['Laravel', 'Livewire', 'MySQL'],
  },
  {
    category: 'Health-Tech POS',
    name: 'Banowati POS',
    description:
      'All-in-one clinic system: sales, procurement, patient data management in one platform.',
    tech: ['Laravel', 'PostgreSQL'],
  },
  {
    category: 'CRM System',
    name: 'Majoo CRM',
    description:
      'B2B CRM: RBAC, products, promotions, discounts, invoice management for enterprise clients.',
    tech: ['CodeIgniter', 'MySQL', 'MongoDB'],
  },
];

const clampPanel = (value: number) => Math.max(0, Math.min(PANELS.length - 1, value));
const panelNumber = (index: number) => String(index + 1).padStart(2, '0');

export default function Home() {
  const [currentPanel, setCurrentPanel] = useState(0);

  const reelStyle = useMemo(
    () => ({ transform: `translateX(-${currentPanel * 100}vw)` }),
    [currentPanel]
  );

  const goTo =
    (nextPanel: number) => (event?: MouseEvent<HTMLElement>) => {
      event?.preventDefault();
      setCurrentPanel(clampPanel(nextPanel));
    };

  const onDotKeyDown =
    (nextPanel: number) => (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setCurrentPanel(clampPanel(nextPanel));
      }
    };

  const sendContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();

    if (!name || !email) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Iqbal,\n\nMy name is ${name} and my email is ${email}.\n`);
    window.location.href = `mailto:mhmmd.iqbal.june@gmail.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setCurrentPanel((prev) => clampPanel(prev + 1));
      }
      if (event.key === 'ArrowLeft') {
        setCurrentPanel((prev) => clampPanel(prev - 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <div id="nav">
        <div className="nav-logo">
          Muhammad <em>Iqbal</em>
        </div>
        <div className="nav-dots">
          {PANELS.map((label, index) => (
            <div
              key={label}
              className={`ndot ${currentPanel === index ? 'active' : ''}`}
              onClick={goTo(index)}
              onKeyDown={onDotKeyDown(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to ${label}`}
            >
              <div className="ndot-circle"></div>
              <span className="ndot-label">{label}</span>
            </div>
          ))}
        </div>
        <div id="slide-counter">
          {panelNumber(currentPanel)} / {String(PANELS.length).padStart(2, '0')}
        </div>
      </div>

      <button
        id="prev"
        className={currentPanel === 0 ? 'hidden' : ''}
        onClick={goTo(currentPanel - 1)}
        aria-label="Previous section"
      >
        ←
      </button>
      <button
        id="next"
        className={currentPanel === PANELS.length - 1 ? 'hidden' : ''}
        onClick={goTo(currentPanel + 1)}
        aria-label="Next section"
      >
        →
      </button>

      <div id="reel" style={reelStyle}>
        <div className={`panel p1 ${currentPanel === 0 ? 'visible' : ''}`}>
          <div className="panel-num">01</div>
          <div className="panel-content">
            <div className="section-tag">Full-Stack Engineer</div>
            <h1 className="hero-h1">
              Muhammad <em>Iqbal</em>
            </h1>
            <p className="hero-sub">
              Building scalable backend systems, real-time apps, and modern platforms. 5+ years
              across fintech, ERP, AI, and enterprise.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-o" onClick={goTo(3)}>
                View Projects
              </a>
              <a href="#contact" className="btn-ghost-o" onClick={goTo(4)}>
                Get in touch
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hstat-n">
                  5<span>+</span>
                </div>
                <div className="hstat-l">Years</div>
              </div>
              <div>
                <div className="hstat-n">
                  13<span>+</span>
                </div>
                <div className="hstat-l">Projects</div>
              </div>
              <div>
                <div className="hstat-n">
                  8<span>+</span>
                </div>
                <div className="hstat-l">Companies</div>
              </div>
              <div>
                <div className="hstat-n">
                  10<span>+</span>
                </div>
                <div className="hstat-l">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`panel p2 ${currentPanel === 1 ? 'visible' : ''}`}>
          <div className="panel-num">02</div>
          <div className="panel-content">
            <div className="about-left">
              <div className="big-quote">
                Engineering is about <em>precision</em> and <em>intention.</em>
              </div>
              <p className="about-body">
                Full-stack engineer based in Yogyakarta, Indonesia. My core focus is backend
                architecture, designing APIs and services that are clean, scalable, and
                maintainable.
              </p>
              <p className="about-body">
                Shipped products for Telkom Indonesia, PT. Majoo, Viapulsa, PT. Media Digitech,
                and more. Currently building AI platforms at a Yogyakarta-based startup.
              </p>
              <div className="about-badges">
                <span className="badge">Laravel</span>
                <span className="badge">Node.js</span>
                <span className="badge">Next.js</span>
                <span className="badge">PostgreSQL</span>
                <span className="badge">Redis</span>
                <span className="badge">Socket.IO</span>
                <span className="badge">CI/CD</span>
              </div>
            </div>
            <div className="about-right">
              <div className="about-right-head">PROFICIENCY</div>
              <div className="skill-rows">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-wrap">
                      <div
                        className="skill-bar"
                        style={{ '--w': skill.level } as CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`panel p3 ${currentPanel === 2 ? 'visible' : ''}`}>
          <div className="panel-num">03</div>
          <div className="panel-content">
            <div className="section-tag">Work history</div>
            <div className="exp-grid">
              {EXPERIENCES.map((experience) => (
                <div key={experience.company} className="exp-card">
                  <div className="ec-date">{experience.date}</div>
                  <div className="ec-co">{experience.company}</div>
                  <div className="ec-role">{experience.role}</div>
                  <ul className="ec-ul">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="projects" className={`panel p4 ${currentPanel === 3 ? 'visible' : ''}`}>
          <div className="panel-num">04</div>
          <div className="panel-content">
            <div className="section-tag">Selected work</div>
            <div className="proj-reel">
              {PROJECTS.map((project, index) => (
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
          </div>
        </div>

        <div id="contact" className={`panel p5 ${currentPanel === 4 ? 'visible' : ''}`}>
          <div className="panel-num">05</div>
          <div className="panel-content">
            <div className="section-tag">Let&apos;s connect</div>
            <div className="contact-h">
              Ready to
              <br />
              build <em>together?</em>
            </div>
            <div className="contact-row">
              <a href="mailto:mhmmd.iqbal.june@gmail.com" className="contact-pill">
                ✉ mhmmd.iqbal.june@gmail.com
              </a>
              <a href="tel:+6282165678664" className="contact-pill">
                📱 +62 821-6567-8664
              </a>
              <a
                href="https://linkedin.com/in/mhmmd-iqbal"
                target="_blank"
                rel="noreferrer"
                className="contact-pill"
              >
                in LinkedIn
              </a>
            </div>
            <form className="contact-form-inline" onSubmit={sendContact}>
              <div className="ci-group">
                <label htmlFor="cn">Your name</label>
                <input
                  className="ci-input"
                  id="cn"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="ci-group">
                <label htmlFor="ce">Your email</label>
                <input
                  className="ci-input"
                  id="ce"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <button className="ci-btn" type="submit" id="csend">
                Send →
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
