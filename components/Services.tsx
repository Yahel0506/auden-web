import type { Copy } from '@/lib/copy';

/**
 * The services a library can be brought over from. Each one has its own mark, in the colour its own brand wears, and
 * its name; Apple Music's is the white note of its icon.
 */
export default function Services({ t }: { t: Copy }) {
  const s = t.services;
  return (
    <section className="services" id={t.ids.services}>
      <div className="wrap">
        <div className="head">
          <h2>{s.h2a} <span className="dim">{s.h2b}</span></h2>
          <p>{s.lede}</p>
        </div>
        <ul className="svc-grid" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li className="svc"><span className="mark" style={{ background: 'linear-gradient(145deg,#ff4e45,#d5001c)' }}><svg aria-hidden="true"><use href="#ytm" /></svg></span><b>YouTube Music</b><small>{s.items.ytm}</small></li>
          <li className="svc"><span className="mark" style={{ background: 'linear-gradient(145deg,#3be477,#169c46)' }}><svg aria-hidden="true"><use href="#spotify" /></svg></span><b>Spotify</b><small>{s.items.spotify}</small></li>
          <li className="svc"><span className="mark" style={{ background: 'linear-gradient(145deg,#ff6b81,#fa233b)' }}><img src="/icons/apple-music.png" alt="" width={36} height={36} /></span><b>Apple Music</b><small>{s.items.apple}</small></li>
          <li className="svc"><span className="mark" style={{ background: 'linear-gradient(145deg,#3a3a40,#0b0b0d)' }}><svg aria-hidden="true"><use href="#tidal" /></svg></span><b>Tidal</b><small>{s.items.tidal}</small></li>
        </ul>
        <div className="svc-more">
          {s.more.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>
    </section>
  );
}
