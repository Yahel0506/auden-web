import type { CSSProperties } from 'react';

export default function Dj() {
  return (
    <section className="dj" id="dj">
      <div className="wrap grid">
        <div>
          <div className="head">
            <span className="chip"><svg><use href="#wave" /></svg>Auden DJ</span>
            <h2>Tu música, con alguien que la presenta.</h2>
            <p>Sets temáticos que salen de tu biblioteca y se ponen en cola como cualquier canción. Cada uno abre con una razón: algo sobre ti y sobre la canción con la que arranca.</p>
          </div>
          <p className="line" aria-live="polite"><span className="src" id="dj-src">español.zip</span><span id="dj-text" /><span className="caret" aria-hidden="true" /></p>
          <div className="facts">
            <span>Habla en español o inglés</span>
            <span>Voces de Fish Audio</span>
            <span>Sin clave de API, el texto sale en pantalla</span>
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
