import Dj from '@/components/Dj';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import Fork from '@/components/Fork';
import Hero from '@/components/Hero';
import Icons from '@/components/Icons';
import Interactions from '@/components/Interactions';
import Library from '@/components/Library';
import LiveLyrics from '@/components/LiveLyrics';
import Nav from '@/components/Nav';
import Platforms from '@/components/Platforms';
import Tour from '@/components/Tour';
import type { Copy } from '@/lib/copy';

export default function Landing({ t }: { t: Copy }) {
  return (
    <>
      <Icons />
      <Nav t={t} />
      <main id="top">
        <Hero t={t} />
        <Fork t={t} />
        <Tour t={t} />
        <Dj t={t} />
        <LiveLyrics t={t} />
        <Library t={t} />
        {/* Hidden until TV, Wear OS and Web are tested; remove `hidden` in Platforms.tsx to show it. */}
        <Platforms t={t} />
        <Download t={t} />
      </main>
      <Footer t={t} />
      <Interactions js={t.js} />
    </>
  );
}
