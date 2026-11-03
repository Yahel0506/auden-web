export default function Hero() {
  return (
    <section className="hero" style={{paddingBottom: 0}}>
      <div className="wash" style={{backgroundImage: 'url(/img/cover.jpg)'}} aria-hidden="true" />
      <div className="wash-fade" aria-hidden="true" />
      <div className="wrap">
        <h1 className="rise"><span>Escucha todo.</span><span className="dim">Quédate con lo tuyo.</span></h1>
        <div className="row">
          <div className="rise d1">
            <p className="lede">Auden es un reproductor para Android que junta YouTube Music y los archivos de tu teléfono. Es un fork de <a href="https://github.com/kushagrasinghx/BitChord" target="_blank" rel="noopener">BitChord</a>: conserva su reproductor y sus letras, y suma biblioteca local, descargas ordenadas y un DJ que te habla.</p>
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
