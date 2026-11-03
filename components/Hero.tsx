export default function Hero() {
  return (
    <section className="hero" style={{paddingBottom: 0}}>
      <div className="wash" style={{backgroundImage: 'url(/img/cover-wash.png)'}} aria-hidden="true" />
      <div className="wash-fade" aria-hidden="true" />
      <div className="wrap">
        <h1 className="rise"><span>Streaming y local.</span><span className="dim">Por fin juntos.</span></h1>
        <div className="row">
          <div className="rise d1">
            <p className="lede">Pon cualquier canción de YouTube Music, trae tus playlists de Spotify y suma los archivos que ya tienes, todo en la misma app. Las playlists que armas aquí se quedan en tu teléfono, sin crear cuenta. Es un fork de <a href="https://github.com/kushagrasinghx/BitChord" target="_blank" rel="noopener">BitChord</a>, gratis y de código abierto.</p>
          </div>
          <div className="ctas rise d2">
            <a className="pill white" href="https://github.com/Yahel0506/Auden/releases/latest/download/Auden.apk" target="_blank" rel="noopener"><svg><use href="#android" /></svg>Descargar APK</a>
            <a className="pill glass" href="https://github.com/Yahel0506/Auden" target="_blank" rel="noopener"><svg><use href="#gh" /></svg>Código fuente</a>
          </div>
        </div>
      </div>
      <div className="stage" id="stage" aria-label="Capturas de Auden en teléfonos Samsung Galaxy">
        <div className="phone p-left" data-fan={-1}><div className="screen"><img src="/img/s5.jpg" alt="Reproductor con la portada a pantalla completa" /><span className="sheen" /></div></div>
        <div className="phone p-mid" data-fan={0}><div className="screen"><img src="/img/s0.jpg" alt="Inicio de Auden con la tarjeta de Auden DJ" /><span className="sheen" /></div></div>
        <div className="phone p-right" data-fan={1}><div className="screen"><img src="/img/s6.jpg" alt="Letras sincronizadas palabra por palabra" /><span className="sheen" /></div></div>
        <div className="stage-fade" aria-hidden="true" />
      </div>
    </section>
  );
}
