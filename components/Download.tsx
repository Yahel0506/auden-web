import type { Copy } from '@/lib/copy';

const RELEASES = 'https://github.com/Yahel0506/Auden/releases/latest';
const VARIANT_LINKS = [`${RELEASES}/download/Auden_arm64-v8a.apk`, `${RELEASES}/download/AudenTV.apk`, `${RELEASES}/download/AudenWear.apk`, RELEASES];
const VARIANT_KIND = ['APK', 'APK', 'APK', 'GitHub'];

export default function Download({ t }: { t: Copy }) {
  const d = t.download;
  return (
    <section className="download" id={t.ids.download}>
      <div className="wrap">
        <div className="orbwrap"><canvas data-orb="bright" aria-hidden="true" /></div>
        <h2>{d.h2}</h2>
        <p className="lede">{d.lede}</p>
        <a className="big-dl" href={`${RELEASES}/download/Auden.apk`} target="_blank" rel="noopener">
          <svg><use href="#android" /></svg>
          <span>{d.button}<small>{d.buttonNote}</small></span>
        </a>
        <div className="variants">
          {d.variants.map((v, i) => (
            <a key={v.name} href={VARIANT_LINKS[i]} target="_blank" rel="noopener"><span>{v.name}<small>{v.text}</small></span><span className="sz">{VARIANT_KIND[i]}</span><svg><use href={i === 3 ? '#gh' : '#down'} /></svg></a>
          ))}
        </div>
        <p className="note">{d.note}</p>
      </div>
    </section>
  );
}
