import type { Metadata, Viewport } from 'next';
import { DM_Sans, Geist_Mono, Inter_Tight, Playfair_Display } from 'next/font/google';
import './globals.css';

// The two faces of yahel.dev, used only by the portfolio card in the footer. Not preloaded: it sits below the fold.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: false,
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Auden',
  description:
    'Auden es un reproductor para Android que junta YouTube Music y los archivos de tu teléfono. Fork de BitChord.',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${interTight.variable} ${geistMono.variable} ${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
