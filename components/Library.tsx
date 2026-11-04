import type { Copy } from '@/lib/copy';

export default function Library({ t }: { t: Copy }) {
  const l = t.library;
  return (
    <section id={t.ids.library} style={{paddingTop: 60}}>
      <div className="wrap">
        <div className="head">
          <h2>{l.h2a} <span className="dim">{l.h2b}</span></h2>
          <p>{l.lede}</p>
        </div>
        <div className="bento">
          <div className="tile span2 spot" data-par="0.04">
            <h3>{l.spotifyTitle}</h3>
            <p>{l.spotifyText}</p>
            <div className="sync"><i>♥</i><span><b>{l.syncTitle}</b>{l.syncText}</span></div>
          </div>
          <div className="tile span2" data-par="0.07">
            <h3>{l.templateTitle}</h3>
            <p>{l.templateText}</p>
            <div className="path">Music/Auden/
              <em>Nirvana</em>/<em>Nevermind (1991)</em>/
              05 Lounge Act.opus
              05 Lounge Act.lrc
              cover.jpg</div>
          </div>
          <div className="tile span2 wide" data-par="0.1">
            <h3>{l.queueTitle}</h3>
            <p>{l.queueText}</p>
            <div className="dl-card"><b>BAD INTENCIONES</b><div className="m">{l.queueStatus}</div><div className="bar"><i /></div></div>
          </div>
          <div className="tile span3" data-par="0.05">
            <h3>{l.playlistsTitle}</h3>
            <p>{l.playlistsText}</p>
            <div className="formats"><span>M3U8</span><span>XSPF</span><span>Auden JSON</span><span>{l.backup}</span></div>
          </div>
          <div className="tile span3 wide" data-par="0.08">
            <h3>{l.tagsTitle}</h3>
            <p>{l.tagsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
