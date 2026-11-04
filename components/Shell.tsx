import type { ReactNode } from 'react';
import { dmSans, geistMono, interTight } from '@/lib/fonts';
import type { Lang } from '@/lib/copy';

/** The document shell shared by both languages: only `lang` changes. */
export default function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${interTight.variable} ${geistMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
