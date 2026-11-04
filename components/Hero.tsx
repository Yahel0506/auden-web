import type { Copy } from '@/lib/copy';

export default function Hero({ t }: { t: Copy }) {
  const h = t.hero;
  return (
    <section className="hero" style={{paddingBottom: 0}}>
      <div className="wash" style={{backgroundImage: 'url(/img/cover-wash.png)'}} aria-hidden="true" />
      <div className="wash-fade" aria-hidden="true" />
      <div className="wrap">
        <h1 className="rise"><span>{h.h1a}</span><span className="dim">{h.h1b}</span></h1>
        <div className="row">
          <div className="rise d1">
            <p className="lede">{h.lede}</p>
          </div>
          <div className="ctas rise d2">
            <a className="pill white" href="https://github.com/Yahel0506/Auden/releases/latest/download/Auden.apk" target="_blank" rel="noopener"><svg><use href="#android" /></svg>{h.apk}</a>
            <a className="pill glass" href="https://github.com/Yahel0506/Auden" target="_blank" rel="noopener"><svg><use href="#gh" /></svg>{h.source}</a>
          </div>
        </div>
      </div>
      <div className="stage" id="stage" aria-label={h.stage}>
        <div className="phone p-left" data-fan={-1}><div className="screen"><img src="/img/s5.jpg" alt={h.altLeft} /><span className="sheen" /></div></div>
        <div className="phone p-mid" data-fan={0}><div className="screen"><img src="/img/s0.jpg" alt={h.altMid} /><span className="sheen" /></div></div>
        <div className="phone p-right" data-fan={1}><div className="screen"><img src="/img/s6.jpg" alt={h.altRight} /><span className="sheen" /></div></div>
        <div className="stage-fade" aria-hidden="true" />
      </div>
    </section>
  );
}
