import type { CSSProperties } from 'react';

export default function Dj() {
  return (
    <section className="dj" id="dj">
      <div className="wrap grid">
        <div>
          <div className="head">
            <span className="chip"><svg><use href="#wave" /></svg>Auden DJ</span>
            <h2>Tu música ya tiene DJ. <span className="dim">Y habla español.</span></h2>
            <p>Para cuando no sabes qué poner: el DJ arma sets con tu propia música y te explica con voz por qué suenan. Rescata canciones que tenías olvidadas y, si le pides algo que no tienes, lo busca en YouTube Music siguiendo tus gustos.</p>
          </div>
          <p className="line" aria-live="polite"><span className="src" id="dj-src">español.zip</span><span id="dj-text" /><span className="caret" aria-hidden="true" /></p>
          <div className="facts">
            <span>Habla español o inglés</span>
            <span>Pídele con tus palabras</span>
            <span>Rescata canciones olvidadas</span>
          </div>
        </div>
        <div className="visual">
          <canvas data-orb="bright" aria-hidden="true" />
          <div className="phone" id="dj-phone" style={{ '--w': '290px' } as CSSProperties}><div className="screen"><img src="/img/s4.jpg" alt="Pantalla de Auden DJ hablando en español" /><span className="sheen" /></div></div>
        </div>
      </div>
    </section>
  );
}
