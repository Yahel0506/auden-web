import type { Copy } from '@/lib/copy';

/** The launcher icons, in the order the app's icon picker lists them (see AppIcon in the app). */
const ICONS = ['glass-dark', 'glass-light', 'black', 'white', 'blue', 'green', 'lime', 'yellow', 'orange', 'red', 'pink', 'magenta', 'violet'];
/** 4, 5 and 4 across, the middle row offset, so the wall reads as one shape (the app's welcome does the same). */
const ROWS = [ICONS.slice(0, 4), ICONS.slice(4, 9), ICONS.slice(9)];

export default function Rebrand({ t }: { t: Copy }) {
  const r = t.rebrand;
  return (
    <section className="rebrand" id={t.ids.rebrand}>
      <video className="rebrand-video" src="/video/drops_loop.mp4" autoPlay muted loop playsInline aria-hidden="true" />
      <div className="rebrand-shade" aria-hidden="true" />
      <div className="wrap">
        <div className="head center">
          <span className="chip"><svg><use href="#logo" /></svg>{r.kicker}</span>
          <h2>{r.h2a} <span className="dim">{r.h2b}</span></h2>
          <p>{r.lede}</p>
        </div>
        <div className="icon-wall" role="list" aria-label={r.iconsTitle}>
          {ROWS.map((row, i) => (
            <div className="icon-row" key={i}>
              {row.map((name) => {
                const index = ICONS.indexOf(name);
                const glass = name.startsWith('glass');
                return (
                  <img
                    key={name}
                    role="listitem"
                    className={`app-icon${glass ? ' glass' : ''}`}
                    src={`/icons/${name}.png`}
                    alt={r.iconNames[index]}
                    width={96}
                    height={96}
                    loading="lazy"
                  />
                );
              })}
            </div>
          ))}
        </div>
        <p className="icon-note"><b>{r.iconsTitle}.</b> {r.iconsText}</p>
      </div>
    </section>
  );
}
