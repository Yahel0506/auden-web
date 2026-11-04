import type { Copy } from '@/lib/copy';

export default function Fork({ t }: { t: Copy }) {
  const f = t.fork;
  return (
    <section className="fork" id={t.ids.fork}>
      <div className="wrap grid">
        <div className="head">
          <h2>{f.h2a} <span className="dim">{f.h2b}</span></h2>
          <p>{f.lede}</p>
        </div>
        <div>
          <div className="lineage">
            <a href="https://github.com/kushagrasinghx/BitChord" target="_blank" rel="noopener">
              <span className="node bc"><svg viewBox="0 0 1024 1024" role="img" aria-label={f.bitchordIcon}><defs><linearGradient id="bcg" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#FB5C74" /><stop offset={1} stopColor="#FA233B" /></linearGradient></defs><rect width={1024} height={1024} rx={229} fill="url(#bcg)" /><path transform="translate(512 512) scale(0.66) translate(-512 -512)" fill="#fff" d="M142.673,587.458C156.137,564.68 185.634,557.171 208.339,570.696H208.363C373.538,668.803 646.056,677.824 803.759,629.96C829.083,622.28 855.863,636.576 863.537,661.9C871.211,687.236 856.927,713.999 831.585,721.698C650.553,776.654 349.61,766.036 159.441,653.143C136.614,639.624 129.148,610.206 142.673,587.458ZM213.749,425.386C225.316,406.567 249.917,400.631 268.705,412.198C406.463,496.89 616.454,521.412 779.396,471.951C800.527,465.569 822.846,477.478 829.26,498.574C835.624,519.705 823.709,541.982 802.614,548.408C616.491,604.882 385.105,577.526 226.906,480.312C208.118,468.745 202.183,444.15 213.749,425.386ZM276.478,285.823C285.657,270.768 305.363,265.994 320.418,275.235C440.747,348.734 592.225,365.381 770.619,324.622C787.81,320.706 804.946,331.476 808.862,348.673C812.797,365.87 802.069,383.005 784.836,386.922C589.612,431.542 422.154,412.32 287.064,329.763C272.01,320.522 267.237,300.877 276.478,285.823Z" /></svg></span>
              <span><b>kushagrasinghx/BitChord</b><small>{f.bitchordNote}</small></span>
              <span className="arr">↗</span>
            </a>
            <a className="ours" href="https://github.com/Yahel0506/Auden" target="_blank" rel="noopener">
              <span className="node"><svg viewBox="0 0 1254 1254" role="img" aria-label={f.audenIcon}><rect width={1254} height={1254} rx={280} fill="#000" /><g transform="translate(627 627) scale(0.8) translate(-625 -617)" fill="none" stroke="#fff"><path d="M150 709 H235 C270 709 290 685 310 650 L390 470 C405 440 420 436 437 436 C455 436 470 455 480 480 L600 785 Q622 812 645 785 L715 590 C725 568 735 570 748 570 C765 570 780 595 790 620 L850 750 Q870 790 890 760 L930 680 Q945 660 960 675 Q975 690 1025 709 H1100" strokeWidth={44} strokeLinecap="round" strokeLinejoin="round" /><path d="M330 624 H530" strokeWidth={37} /></g></svg></span>
              <span><b>Yahel0506/Auden</b><small>{f.audenNote}</small></span>
              <span className="arr">↗</span>
            </a>
          </div>
          <ul className="adds">
            {f.adds.map((a) => <li key={a.title}><b>{a.title}</b>{a.text}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
