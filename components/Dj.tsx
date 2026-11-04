import type { CSSProperties } from 'react';
import type { Copy } from '@/lib/copy';

export default function Dj({ t }: { t: Copy }) {
  const d = t.dj;
  return (
    <section className="dj" id={t.ids.dj}>
      <div className="wrap grid">
        <div>
          <div className="head">
            <span className="chip"><svg><use href="#wave" /></svg>Auden DJ</span>
            <h2>{d.h2a} <span className="dim">{d.h2b}</span></h2>
            <p>{d.lede}</p>
          </div>
          <p className="line" aria-live="polite"><span className="src" id="dj-src">{t.js.djLines[0][0]}</span><span id="dj-text" /><span className="caret" aria-hidden="true" /></p>
          <div className="facts">
            {d.chips.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
        <div className="visual">
          <canvas data-orb="bright" aria-hidden="true" />
          <div className="phone" id="dj-phone" style={{ '--w': '290px' } as CSSProperties}><div className="screen"><img src={t.lang === 'en' ? '/img/s4-en.jpg' : '/img/s4.jpg'} alt={d.alt} /><span className="sheen" /></div></div>
        </div>
      </div>
    </section>
  );
}
