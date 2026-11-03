import type { CSSProperties } from 'react';

export default function Tour() {
  return (
    <section className="tour" id="tour" style={{ '--n': '5' } as CSSProperties} aria-label="Recorrido por la app">
      <div className="tour-stage">
        <div className="tour-glow" aria-hidden="true" />
        <div className="phone" id="tour-phone"><div className="screen">
            <img className="on" src="/img/s0.jpg" alt="Inicio híbrido" />
            <img src="/img/s5.jpg" alt="Reproductor con la portada a pantalla completa" />
            <img src="/img/s1.jpg" alt="Selector de proveedor de letras" />
            <img src="/img/s2.jpg" alt="Menú de canción con descarga y variantes de letra" />
            <img src="/img/s3.jpg" alt="Biblioteca de Spotify importada" />
            <span className="sheen" /></div></div>
        <div className="tour-copy">
          <article className="l"><h3>Local y streaming en un mismo inicio.</h3><p>Tu música del teléfono y lo que te recomienda YouTube Music, en la misma pantalla. Arriba, el DJ listo para armarte un set.</p></article>
          <article className="r"><h3>Se ve tan bien como suena.</h3><p>La portada llena la pantalla y le da sus colores al reproductor. Abajo ves por dónde sale el audio y si llega intacto a tu DAC.</p></article>
          <article className="l"><h3>Elige de dónde sale la letra.</h3><p>BetterLyrics, Musixmatch, LRCLIB, KuGou y más. Cada proveedor se guarda como una variante.</p></article>
          <article className="r"><h3>Descarga, revisa, borra.</h3><p>Todo desde el menú de la canción, sin buscar en carpetas. Ahí mismo cambias qué letra usa.</p></article>
          <article className="l"><h3>Tu Spotify, en el teléfono.</h3><p>Las playlists que guardas se sincronizan solas. Solo lectura: Auden nunca borra nada.</p></article>
        </div>
        <div className="tour-dots" aria-hidden="true"><i className="on" /><i /><i /><i /><i /></div>
      </div>
    </section>
  );
}
