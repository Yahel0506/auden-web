import type { Copy } from '@/lib/copy';

export default function Nav({ t }: { t: Copy }) {
  return (
    <header className="nav">
      <div className="wrap">
        <nav className="bar" aria-label={t.nav.label}>
          <a className="logo" href="#top" aria-label={t.nav.logo}><svg><use href="#logo" /></svg>Auden</a>
          <div className="links">
            <a href={`#${t.ids.fork}`}>{t.nav.fork}</a>
            <a href={`#${t.ids.dj}`}>Auden DJ</a>
            <a href={`#${t.ids.lyrics}`}>{t.nav.lyrics}</a>
            <a href={`#${t.ids.library}`}>{t.nav.library}</a>
            <a href="https://github.com/Yahel0506/Auden" target="_blank" rel="noopener">GitHub</a>
          </div>
          <a className="pill white" href={`#${t.ids.download}`}><svg><use href="#down" /></svg>{t.nav.download}</a>
        </nav>
      </div>
    </header>
  );
}
