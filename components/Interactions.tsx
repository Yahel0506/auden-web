'use client';

import { useEffect } from 'react';
import { initDjSubtitle } from '@/lib/djSubtitle';
import { initLyrics } from '@/lib/lyrics';
import { initOrbs } from '@/lib/orb';
import { initScene } from '@/lib/scene';

/** Starts every animation once the page's markup is on screen, and stops them on unmount. */
export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stops = [initScene(reduce), initOrbs(reduce), initDjSubtitle(reduce), initLyrics(reduce)];
    return () => stops.forEach((stop) => stop());
  }, []);
  return null;
}
