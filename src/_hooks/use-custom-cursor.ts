'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';

export function useCustomCursor(
  cursorRef: RefObject<HTMLDivElement | null>,
  ringRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer:fine)');
    if (!pointerQuery.matches) {
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) {
      return;
    }

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = window.requestAnimationFrame(animateRing);
    };

    const onHover = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a,button,[data-hover],.proj-card,.skill-tag');

      if (interactive) {
        cursor.style.transform = 'translate(-50%,-50%) scale(2.4)';
        cursor.style.background = 'rgba(240,180,41,0.3)';
        ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
      } else {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        cursor.style.background = 'var(--accent)';
        ring.style.transform = 'translate(-50%,-50%) scale(1)';
      }
    };

    const onTouchStart = () => {
      cursor.style.display = 'none';
      ring.style.display = 'none';
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onHover);
    window.addEventListener('touchstart', onTouchStart, { once: true, passive: true });
    rafId = window.requestAnimationFrame(animateRing);

    return () => {
      window.cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onHover);
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, [cursorRef, ringRef]);
}
