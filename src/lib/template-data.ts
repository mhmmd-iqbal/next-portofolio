export type SkillGroup = {
  cat: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'full-time' | 'freelance';
  desc: string[];
  tech: string[];
};

export type ProjectItem = {
  name: string;
  cat: 'enterprise' | 'fintech' | 'ai' | 'govtech';
  catLabel: string;
  featured: boolean;
  image?: string;
  imageAlt?: string;
  tech: string[];
  grad: string;
  desc: string;
};

export type FilterItem = {
  label: string;
  val: 'all' | 'enterprise' | 'fintech' | 'ai' | 'govtech';
};

export type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'contact';

export type NavItem = {
  id: Exclude<SectionId, 'hero'>;
  label: string;
  num: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'experience', label: 'Experience', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'contact', label: 'Contact', num: '04' },
];

export const SECTION_IDS: SectionId[] = ['hero', 'about', 'experience', 'projects', 'contact'];

export const PORTFOLIO_PREVIEW_URL =
  'https://drive.google.com/file/d/1AIQN1ICP91EXq81S5qRa9s81e0ZsfDcx/view?usp=sharing';

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Iqbal',
  firstName: 'Muhammad',
  lastName: 'Iqbal',
  jobTitle: 'Full-Stack Engineer',
  email: 'mhmmd.iqbal.june@gmail.com',
  telephone: '+62 821-6567-8664',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yogyakarta',
    addressCountry: 'ID',
  },
  url: 'https://mhmmd-iqbal.vercel.app',
  linkedin: 'https://linkedin.com/in/mhmmd-iqbal',
} as const;


export const MARQUEE = [
  'Laravel',
  'Livewire',
  'Filament',
  'CodeIgniter',
  'Node.js',
  'AdonisJS',
  'HapiJS',
  'Go GIN',
  'Next.js',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Redis',
];

export const SKILL_GROUPS: SkillGroup[] = [
  { cat: 'Backend', items: ['Laravel', 'CodeIgniter', 'Node.js', 'Express.js', 'AdonisJS', 'HapiJS', 'Go GIN'] },
  { cat: 'Frontend', items: ['Next.js', 'Livewire', 'Filament', 'TailwindCSS'] },
  { cat: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'] },
  { cat: 'DevOps & Tools', items: ['VPS / Linux', 'CI/CD', 'Docker', 'Minio Storage', 'Supervisor'] },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'PT. Media Digitech Indonesia',
    role: 'Full-Stack Engineer',
    period: 'Oct 2024 - Present',
    location: 'Yogyakarta',
    type: 'full-time',
    desc: [
      'Built and maintained AI image/video platforms, ERP modules, and CMS applications.',
      'Improved database queries and optimized API performance across multiple products.',
      'Integrated external APIs and developed reusable service layers.',
    ],
    tech: ['NodeJS', 'NextJS', 'Laravel', 'Filament', 'Livewire', 'PostgreSQL', 'SocketIO', 'Docker'],
  },
  {
    company: 'PT. Via Pulsa Global Indonesia',
    role: 'Full-Stack Engineer',
    period: 'Nov 2023 - Aug 2024',
    location: 'Yogyakarta',
    type: 'full-time',
    desc: [
      'Developed web panel modules and backend features for internal and customer-facing apps.',
      'Improved API reliability and ensured clean documentation for internal teams.',
      'Optimized system workflows and resolved critical issues across multiple modules.',
    ],
    tech: ['MongoDB', 'NextJS', 'NodeJS', 'SocketIO', 'PHP', 'CI/CD'],
  },
  {
    company: 'PT. Majoo Teknologi Indonesia',
    role: 'Full-Stack Engineer',
    period: 'Feb 2022 - Jun 2023',
    location: 'Malang',
    type: 'full-time',
    desc: [
      'Developed and maintained CRM systems and internal APIs supporting B2B operations.',
      'Refactored legacy components into more modular, reusable structures.',
      'Enhanced backend performance and implemented well-structured documentation.',
    ],
    tech: ['CodeIgniter 3', 'MySQL'],
  },
  {
    company: 'PT. Bursaku Finansial Teknologi',
    role: 'Backend Engineer',
    period: 'Aug 2020 - Feb 2022',
    location: 'Medan',
    type: 'full-time',
    desc: [
      'Built CMS panel and backend system for mobile apps and frontend web.',
      'Integrated third-party APIs and improved system reliability.',
      'Optimized API endpoints and collaborated with frontend/mobile teams.',
    ],
    tech: ['Laravel', 'PostgreSQL', 'VPS', 'CI/CD'],
  },
  {
    company: 'Freelance Projects',
    role: 'Wesclic · Katra.tech · PT. Telkom Indonesia · Esteh Creative · Platon',
    period: '2022 - Present',
    location: 'Remote',
    type: 'freelance',
    desc: [
      'Enhanced social media platform APIs and fixed critical bugs (Wesclic Technology).',
      "Built add-on features for Telkom's Digital Asset ERP with Laravel + Redis + S3.",
      'Developed government apps, ERP modules, and online assessment platforms.',
    ],
    tech: ['Laravel', 'MySQL', 'PostgreSQL', 'Redis', 'Livewire', 'S3'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Viwonder.ai',
    cat: 'ai',
    catLabel: 'AI Platform',
    featured: false,
    tech: ['ExpressJS', 'ReactJS', 'Filament', 'PostgreSQL'],
    grad: 'linear-gradient(135deg,#1a1220,#0d0a18,#12201a)',
    desc: 'AI image and video generator with background remover, object replacer, and AI corporate headshot features. Full production platform serving real users.',
  },
  {
    name: 'Viapulsa',
    cat: 'fintech',
    catLabel: 'Fintech Solution',
    featured: false,
    tech: ['NextJS', 'ExpressJS', 'MongoDB'],
    grad: 'linear-gradient(135deg,#0a1a12,#071510)',
    desc: 'Internal management panel and end-user system for pulsa conversion, including SSO and transaction history.',
  },
  {
    name: 'DiGASS: Rekon',
    cat: 'enterprise',
    catLabel: 'Enterprise Module',
    featured: false,
    tech: ['Laravel', 'Livewire', 'MySQL'],
    grad: 'linear-gradient(135deg,#0a0e1a,#0d1520)',
    desc: 'Module for Telkom Medan Branch managing application requests through BAST & BAUT document verification.',
  },
  {
    name: 'Gamas: BODP',
    cat: 'enterprise',
    catLabel: 'Enterprise Module',
    featured: false,
    tech: ['Laravel', 'Livewire', 'MySQL'],
    grad: 'linear-gradient(135deg,#0a1218,#0a1520)',
    desc: 'Module automating the workflow from ticket creation to approval for Telkom Medan Branch.',
  },
  {
    name: 'e-pengantar',
    cat: 'govtech',
    catLabel: 'Gov-Tech',
    featured: false,
    tech: ['Laravel', 'MySQL'],
    grad: 'linear-gradient(135deg,#0f1a0a,#0a180d)',
    desc: "Digital platform for Indonesia's Ministry of Manpower (KEMNAKER) to streamline employee management, examinations and competency mapping.",
  },
  {
    name: 'Majoo CRM',
    cat: 'enterprise',
    catLabel: 'CRM System',
    featured: false,
    tech: ['CodeIgniter', 'MySQL', 'MongoDB'],
    grad: 'linear-gradient(135deg,#1a0a0a,#180d0d)',
    desc: 'Customer Relations Management system managing RBACs, products, promotions, discounts, and invoices for B2B operations.',
  },
  {
    name: 'Nutrifood',
    cat: 'enterprise',
    catLabel: 'Supply-Chain',
    featured: false,
    tech: ['Laravel', 'PostgreSQL'],
    grad: 'linear-gradient(135deg,#0d1a12,#0a1a10)',
    desc: "Internal procurement system managing goods purchasing at Nutrifood Indonesia's Medan Branch.",
  },
  {
    name: 'Banowati POS',
    cat: 'enterprise',
    catLabel: 'Health-Tech POS',
    featured: false,
    tech: ['Laravel', 'PostgreSQL'],
    grad: 'linear-gradient(135deg,#0a0f1a,#081020)',
    desc: 'All-in-one clinic solution integrating sales, procurement, and patient data management.',
  },
  {
    name: 'SIPETIK',
    cat: 'govtech',
    catLabel: 'Chatbot Utility',
    featured: false,
    tech: ['PHP', 'MySQL', 'Telegram API'],
    grad: 'linear-gradient(135deg,#1a100a,#180e08)',
    desc: "Flight ticket booking system utilizing the Telegram Bot API and Telkom's Bigbox AI platform.",
  },
];

export const FILTERS: FilterItem[] = [
  { label: 'All', val: 'all' },
  { label: 'Enterprise', val: 'enterprise' },
  { label: 'Fintech', val: 'fintech' },
  { label: 'AI', val: 'ai' },
  { label: 'Gov-Tech', val: 'govtech' },
];
