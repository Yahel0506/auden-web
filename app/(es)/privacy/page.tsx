import type { Metadata } from 'next';
import Privacy from '@/components/Privacy';

export const metadata: Metadata = { title: 'Política de privacidad — Auden' };

export default function Page() {
  return <Privacy lang="es" />;
}
