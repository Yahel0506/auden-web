import type { CSSProperties } from 'react';
import type { Copy } from '@/lib/copy';

const SIDES = ['l', 'r', 'l', 'r', 'l'];
const SHOTS = ['/img/s0.jpg', '/img/s5.jpg', '/img/s1.jpg', '/img/s2.jpg', '/img/s3.jpg'];

export default function Tour({ t }: { t: Copy }) {
  const { slides } = t.tour;
  return (
    <section className="tour" id="tour" style={{ '--n': '5' } as CSSProperties} aria-label={t.tour.label}>
      <div className="tour-stage">
        <div className="tour-glow" aria-hidden="true" />
        <div className="phone" id="tour-phone"><div className="screen">
            {SHOTS.map((src, i) => <img key={src} className={i === 0 ? 'on' : undefined} src={src} alt={slides[i].alt} />)}
            <span className="sheen" /></div></div>
        <div className="tour-copy">
          {slides.map((s, i) => <article key={s.h} className={SIDES[i]}><h3>{s.h}</h3><p>{s.p}</p></article>)}
        </div>
        <div className="tour-dots" aria-hidden="true"><i className="on" /><i /><i /><i /><i /></div>
      </div>
    </section>
  );
}
