import type { Metadata, Viewport } from 'next';
import '../../globals.css';
import Shell from '@/components/Shell';
import { copy } from '@/lib/copy';

export const metadata: Metadata = {
  title: copy.en.meta.title,
  description: copy.en.meta.description,
};

export const viewport: Viewport = {
  themeColor: '#000000',
  viewportFit: 'cover',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
