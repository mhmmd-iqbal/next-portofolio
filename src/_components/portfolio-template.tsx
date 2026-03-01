'use client';

import type { SubmitEvent, MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import {
  AboutSection,
  ContactSection,
  Decorations,
  ExperienceSection,
  HeroSection,
  MarqueeStrip,
  MobileMenu,
  Navbar,
  ProjectsSection,
  SchemaJsonLd,
  TemplateFooter,
} from '@/src/_components/template';
import { NAV_ITEMS, SECTION_IDS, type SectionId } from '@/src/_components/template/template-config';
import {
  useActiveSection,
  useBodyScrollLock,
  useCustomCursor,
  useNavbarScrolled,
  useRevealOnScroll,
  useTheme,
} from '@/src/_hooks';
import { EXPERIENCES, FILTERS, MARQUEE, PROJECTS, SKILL_GROUPS } from '@/src/lib/template-data';

type FilterValue = (typeof FILTERS)[number]['val'];

export default function PortfolioTemplate() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [sent, setSent] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const sentTimerRef = useRef<number | undefined>(undefined);

  const isScrolled = useNavbarScrolled();
  const activeSection = useActiveSection(SECTION_IDS, 'hero');

  useBodyScrollLock(menuOpen);
  useRevealOnScroll(activeFilter);
  useCustomCursor(cursorRef, cursorRingRef);

  useEffect(() => {
    return () => {
      if (sentTimerRef.current) {
        window.clearTimeout(sentTimerRef.current);
      }
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id: SectionId) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSectionLink = (event: MouseEvent<HTMLElement>, id: SectionId) => {
    event.preventDefault();
    scrollToSection(id);
    closeMenu();
  };

  const handleContactSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:mhmmd.iqbal.june@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    form.reset();

    if (sentTimerRef.current) {
      window.clearTimeout(sentTimerRef.current);
    }

    sentTimerRef.current = window.setTimeout(() => {
      setSent(false);
    }, 3500);
  };

  const year = new Date().getFullYear();

  return (
    <>
      <SchemaJsonLd />
      <Decorations cursorRef={cursorRef} cursorRingRef={cursorRingRef} />

      <Navbar
        isScrolled={isScrolled}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        theme={theme}
        menuOpen={menuOpen}
        onNavigate={handleSectionLink}
        onToggleTheme={toggleTheme}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
      />

      <MobileMenu
        open={menuOpen}
        navItems={NAV_ITEMS}
        theme={theme}
        onNavigate={handleSectionLink}
        onClose={closeMenu}
        onToggleTheme={toggleTheme}
      />

      <HeroSection onNavigate={handleSectionLink} />
      <MarqueeStrip items={MARQUEE} />
      <AboutSection skillGroups={SKILL_GROUPS} />
      <ExperienceSection experiences={EXPERIENCES} />
      <ProjectsSection
        filters={FILTERS}
        projects={PROJECTS}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />
      <ContactSection sent={sent} onSubmit={handleContactSubmit} />
      <TemplateFooter year={year} onNavigate={handleSectionLink} />
    </>
  );
}
