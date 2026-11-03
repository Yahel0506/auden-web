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

export default function Home() {
  return (
    <>
      <Icons />
      <Nav />
      <main id="top">
        <Hero />
        <Fork />
        <Tour />
        <Dj />
        <LiveLyrics />
        <Library />
        {/* Hidden until TV, Wear OS and Web are tested; remove `hidden` in Platforms.tsx to show it. */}
        <Platforms />
        <Download />
      </main>
      <Footer />
      <Interactions />
    </>
  );
}
