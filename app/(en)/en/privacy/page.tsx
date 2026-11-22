import type { Metadata } from 'next';
import Privacy from '@/components/Privacy';

export const metadata: Metadata = { title: 'Privacy policy — Auden' };

export default function Page() {
  return <Privacy lang="en" />;
}
