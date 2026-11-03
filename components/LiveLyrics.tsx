import type { CSSProperties } from 'react';

export default function LiveLyrics() {
  return (
    <section className="lyrics" id="letras">
      <div className="wash" style={{backgroundImage: 'url(/img/cover.jpg)'}} aria-hidden="true" />
      <div className="wrap grid">
        <div className="head">
          <h2>Cada palabra, <span className="dim">a su tiempo.</span></h2>
          <p>El barrido avanza dentro de cada palabra, la palabra que suena se levanta un poco y las notas largas crecen letra por letra con su propio brillo. Las demás líneas se apartan con desenfoque.</p>
          <div className="providers" aria-label="Proveedores de letras">
            <span className="on">BetterLyrics</span><span>BetterLyrics Portato</span><span>Musixmatch</span><span>BiniLyrics</span><span>LyricsPlus</span><span>LRCLIB</span><span>KuGou</span><span>lrc.red</span>
          </div>
          <p className="hint">El teléfono de la derecha no es un vídeo: es el panel de letras de Auden reconstruido con sus mismas curvas y tiempos de animación. Toca una línea para saltar a ella.</p>
        </div>
        <div className="live-wrap">
          <div className="phone" id="live-phone"><div className="screen" id="live-screen">
              <div className="app" id="app">
                <div className="bd" style={{backgroundImage: 'url(/img/cover.jpg)'}} />
                <div className="shade" />
                <div className="sb"><span>11:27</span><span className="bat">5G <i /></span></div>
                <div className="grab" />
                <div className="art" style={{backgroundImage: 'url(/img/cover.jpg)'}} role="img" aria-label="Portada de Nevermind" />
                <div className="ti">Lounge Act<small>Nirvana</small></div>
                <div className="cbtn" style={{left: 291}}><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinejoin="round"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8z" /></svg></div>
                <div className="cbtn" style={{left: 339}}><svg viewBox="0 0 24 24" fill="#fff"><circle cx={5} cy={12} r={2} /><circle cx={12} cy={12} r={2} /><circle cx={19} cy={12} r={2} /></svg></div>
                <canvas id="lyr" aria-label="Letra sincronizada de Lounge Act" />
                <div className="lb" style={{left: 35}}><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx={12} cy={12} r={9} /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></svg></div>
                <div className="lb" style={{left: 337}}><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"><path d="M3 5h9M7.5 3v2M5 5c1 4 4 7 7 8M10 5c-1 4-4 7-7 8M13 21l4-10 4 10M14.5 17.5h5" /></svg></div>
                <span className="credit">Letra de BetterLyrics</span>
                <div className="prog"><i id="prog" /></div>
                <div className="times"><span id="t-a">0:13</span><span id="t-b">-2:23</span></div>
                <div className="ctl">
                  <button id="b-prev" aria-label="Volver al principio"><svg><use href="#prev" /></svg></button>
                  <button id="b-play" aria-label="Pausar"><svg><use id="b-play-ico" href="#pause" /></svg></button>
                  <button id="b-next" aria-label="Siguiente línea"><svg><use href="#next" /></svg></button>
                </div>
                <div className="vol"><svg viewBox="0 0 24 24" fill="#fff"><path d="M4 9h4l5-4v14l-5-4H4z" /></svg><div className="t"><i /></div><svg viewBox="0 0 24 24" fill="#fff"><path d="M3 9h4l5-4v14l-5-4H3z" /><path d="M15.5 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" stroke="#fff" strokeWidth="1.8" fill="none" /></svg></div>
                <div className="bot">
                  <span className="sq"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"><path d="M4 5h16v11H11l-4 3.5V16H4z" /><path d="M9 9.5v2M14 9.5v2" strokeLinecap="round" /></svg></span>
                  <span className="mid"><span><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M3 7V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-6M3 11a9 9 0 019 9M3 15a5 5 0 015 5M3 19h.01" /></svg></span><span><svg viewBox="0 0 24 24" fill="#fff"><circle cx={12} cy={8} r={4} /><path d="M4 20c0-4 4-6 8-6s8 2 8 6z" /></svg></span></span>
                  <span><svg viewBox="0 0 24 24"><use href="#wave" style={{color: '#fff'}} /></svg></span>
                </div>
                <div className="dev">Galaxy S25</div>
                <div className="home" />
              </div>
              <span className="sheen" style={{ '--sheen': '.06' } as CSSProperties} />
            </div></div>
        </div>
      </div>
    </section>
  );
}
