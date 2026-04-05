/**
 * useLenisSmoothScroll - darkroomengineering/lenis (#69) + GSAP ScrollTrigger
 * Ultra-smooth scroll with GSAP integration. Premium sitelerin vazgeçilmezi.
 * Kurulu: @studio-freight/lenis@1.0.42, gsap@3.14.2
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

    // Sync with GSAP ScrollTrigger
    if (typeof window !== 'undefined') {
      const initGSAP = async () => {
        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
        gsap.registerPlugin(ScrollTrigger);

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      };
      initGSAP();
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
