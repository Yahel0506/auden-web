export default function Download() {
  return (
    <section className="download" id="descargar">
      <div className="wrap">
        <div className="orbwrap"><canvas data-orb="bright" aria-hidden="true" /></div>
        <h2>Llévatelo.</h2>
        <p className="lede">Siempre la última versión publicada, firmada y directa desde GitHub Releases. Después, la app te avisa sola cuando sale otra.</p>
        <a className="big-dl" href="https://github.com/Yahel0506/Auden/releases/latest/download/Auden.apk" target="_blank" rel="noopener">
          <svg><use href="#android" /></svg>
          <span>Descargar para Android<small>Última versión · APK universal</small></span>
        </a>
        <div className="variants">
          <a href="https://github.com/Yahel0506/Auden/releases/latest/download/Auden_arm64-v8a.apk" target="_blank" rel="noopener"><span>arm64-v8a<small>La mayoría de teléfonos actuales, más ligero</small></span><span className="sz">APK</span><svg><use href="#down" /></svg></a>
          <a href="https://github.com/Yahel0506/Auden/releases/latest/download/AudenTV.apk" target="_blank" rel="noopener"><span>Android TV<small>Para Google TV y Android TV</small></span><span className="sz">APK</span><svg><use href="#down" /></svg></a>
          <a href="https://github.com/Yahel0506/Auden/releases/latest/download/AudenWear.apk" target="_blank" rel="noopener"><span>Wear OS<small>Para el reloj</small></span><span className="sz">APK</span><svg><use href="#down" /></svg></a>
          <a href="https://github.com/Yahel0506/Auden/releases/latest" target="_blank" rel="noopener"><span>Todas las versiones<small>Notas de la versión, armeabi-v7a y x86_64</small></span><span className="sz">GitHub</span><svg><use href="#gh" /></svg></a>
        </div>
        <p className="note">Para instalarlo, activa «Instalar apps desconocidas» en la app con la que lo descargues. Los hashes SHA-256 de cada archivo están en la página de la versión en GitHub.</p>
      </div>
    </section>
  );
}
