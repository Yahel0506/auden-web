import { DM_Sans, Geist_Mono, Inter_Tight } from 'next/font/google';

// yahel.dev's body face, used only by the portfolio card in the footer. Not preloaded: it sits below the fold.
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: false,
});

export const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});
