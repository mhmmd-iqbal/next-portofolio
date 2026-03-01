'use client';

import { useEffect, useState } from 'react';

export function useActiveSection<T extends string>(sectionIds: readonly T[], initial: T) {
  const [activeSection, setActiveSection] = useState<T>(initial);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as T);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
