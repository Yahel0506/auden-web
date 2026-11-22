import type { Copy } from '@/lib/copy';

/**
 * Glass elements of the app, rebuilt in CSS over a moving backdrop: round buttons, the navigation bar with its player,
 * and an iOS 26-style alert. Each swells and lights while pressed and stays so while held (`:active`), as they do in the app.
 */
export default function GlassShowcase({ t }: { t: Copy }) {
  const g = t.glass;
  return (
    <section className="glass-section" id={t.ids.glass}>
      <video className="glass-video" src="/video/drops_loop.mp4" autoPlay muted loop playsInline aria-hidden="true" />
      <div className="wrap glass-grid">
        <div className="head">
          <h2>{g.h2a} <span className="dim">{g.h2b}</span></h2>
          <p>{g.lede}</p>
        </div>
        <div className="glass-stage" role="group" aria-label={g.label}>
          <div className="glass-top">
            <button type="button" className="gbtn round" aria-label={g.back}><svg viewBox="0 0 24 24"><path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <button type="button" className="gbtn round" aria-label={g.share}><svg viewBox="0 0 24 24"><path d="M12 15V4m0 0L8 8m4-4 4 4M6 12v7h12v-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
          <div className="gbtn alert" role="group">
            <b>{g.alertTitle}</b>
            <p>{g.alertText}</p>
            <div className="alert-actions">
              <button type="button" className="gbtn capsule">{g.cancel}</button>
              <button type="button" className="gbtn capsule main">{g.confirm}</button>
            </div>
          </div>
          <div className="glass-bottom">
            <button type="button" className="gbtn mini">
              <img src="/img/cover.jpg" alt="" width={44} height={44} />
              <span><b>{g.mini.title}</b><small>{g.mini.artist}</small></span>
              <svg viewBox="0 0 56 46" aria-hidden="true"><use href="#pause" /></svg>
              <svg viewBox="0 0 56 46" aria-hidden="true"><use href="#next" /></svg>
            </button>
          </div>
        </div>
      </div>
      <p className="wrap hint center">{g.hint}</p>
    </section>
  );
}
