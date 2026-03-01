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

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Iqbal',
  jobTitle: 'Full-Stack Engineer',
  email: 'mhmmd.iqbal.june@gmail.com',
  telephone: '+62 821-6567-8664',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yogyakarta',
    addressCountry: 'ID',
  },
  url: 'https://mhmmd-iqbal.dev',
  sameAs: ['https://linkedin.com/in/mhmmd-iqbal'],
} as const;
