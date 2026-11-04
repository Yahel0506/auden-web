import type { Copy } from '@/lib/copy';

export default function Footer({ t }: { t: Copy }) {
  const f = t.footer;
  return (
    <footer>
      <div className="wrap row">
        <div className="legal">
          <p style={{display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fg)', fontWeight: 700, fontSize: 15, marginBottom: 10}}><svg width={40} height={18}><use href="#logo" /></svg>Auden</p>
          <p>{f.legal}</p>
          <p style={{marginTop: 8}}>{f.credits}</p>
        </div>
        <div className="foot-side">
          <a className="devcard" href="https://yahel.dev" target="_blank" rel="noopener">
            <span className="paper">
              <small>{f.madeBy}</small>
              <img src="/img/yahel-dev.svg" alt="yahel.dev" width={103} height={26} />
            </span>
          </a>
          <div style={{display: 'grid', gap: 6, alignContent: 'start'}}>
            <a href="https://github.com/Yahel0506/Auden" target="_blank" rel="noopener">{f.repo}</a>
            <a href="https://github.com/Yahel0506/Auden/releases" target="_blank" rel="noopener">Releases</a>
            <a href="https://github.com/Yahel0506/Auden/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">{f.contribute}</a>
            <a href="https://github.com/Yahel0506/Auden/blob/main/LICENSE" target="_blank" rel="noopener">{f.license}</a>
            <a href={f.switchTo.href} hrefLang={f.switchTo.lang} lang={f.switchTo.lang}>{f.switchTo.label}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
