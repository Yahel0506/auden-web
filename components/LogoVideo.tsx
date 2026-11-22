'use client';

import { useState } from 'react';

/**
 * The logo's own animation: the intro once, then the loop of the drops for as long as the page is open, as the app's
 * welcome plays them. The clips are on black and the page is too, so they are blended in with `screen` and show only
 * the glass. Muted and inline so phones play them; with reduced motion the clip is not shown at all.
 */
export default function LogoVideo({ label }: { label: string }) {
  const [loop, setLoop] = useState(false);
  return (
    <video
      className="logo-video"
      key={loop ? 'loop' : 'intro'}
      src={loop ? '/video/logo_loop.mp4' : '/video/intro.mp4'}
      autoPlay
      muted
      playsInline
      loop={loop}
      onEnded={() => setLoop(true)}
      aria-label={label}
      role="img"
    />
  );
}
