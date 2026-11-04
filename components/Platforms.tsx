import type { Copy } from '@/lib/copy';

const ICONS = [
  <svg key="android" viewBox="0 0 24 24"><rect x={6} y={2} width={12} height={20} rx={3} /><circle cx={12} cy="4.6" r=".5" /></svg>,
  <svg key="tv" viewBox="0 0 24 24"><rect x={2} y={4} width={20} height={13} rx={2} /><path d="M8 21h8" /></svg>,
  <svg key="wear" viewBox="0 0 24 24"><circle cx={12} cy={12} r={6} /><path d="M9 6l1-4h4l1 4M9 18l1 4h4l1-4" /></svg>,
  <svg key="web" viewBox="0 0 24 24"><circle cx={12} cy={12} r={9} /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></svg>,
];
const CODES = ['dev.auden.app', 'tv/', 'wearos/', 'web/'];

export default function Platforms({ t }: { t: Copy }) {
  const p = t.platforms;
  return (
    <section style={{paddingTop: 40}} hidden>
      <div className="wrap">
        <div className="head"><h2>{p.h2a} <span className="dim">{p.h2b}</span></h2></div>
        <div className="plats">
          {p.items.map((it, i) => (
            <div className="plat" key={it.name}>{ICONS[i]}<b>{it.name}</b><span>{it.text}</span><code>{CODES[i]}</code></div>
          ))}
        </div>
      </div>
    </section>
  );
}
