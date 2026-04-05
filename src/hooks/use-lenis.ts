/**
 * useLenisSmoothScroll - darkroomengineering/lenis (#69)
 * Ultra-smooth scroll. Premium sitelerin vazgeçilmezi.
 * Kurulu: @studio-freight/lenis@1.0.42
 */
'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenisSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
