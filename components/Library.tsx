export default function Library() {
  return (
    <section id="biblioteca" style={{paddingTop: 60}}>
      <div className="wrap">
        <div className="head">
          <h2>Tus archivos, en orden. <span className="dim">Sin cuenta.</span></h2>
          <p>Un indexador incremental llena la base de datos desde MediaStore y las carpetas que elijas. Lo que descargas acaba en una carpeta que abre cualquier gestor de archivos.</p>
        </div>
        <div className="bento">
          <div className="tile span2 spot" data-par="0.04">
            <h3>Spotify, importado</h3>
            <p>Acceso de solo lectura, con coincidencias que recuerda y que puedes corregir a mano.</p>
            <div className="sync"><i>♥</i><span><b>Sincronizar playlists guardadas</b>2 en este dispositivo</span></div>
          </div>
          <div className="tile span2" data-par="0.07">
            <h3>Descargas con plantilla</h3>
            <p>Portada y letra al lado de cada canción.</p>
            <div className="path">Music/Auden/
              <em>Nirvana</em>/<em>Nevermind (1991)</em>/
              05 Lounge Act.opus
              05 Lounge Act.lrc
              cover.jpg</div>
          </div>
          <div className="tile span2 wide" data-par="0.1">
            <h3>Una cola que no se rinde</h3>
            <p>Reintentos con espera, pausa y concurrencia ajustable. Sobrevive a reinicios.</p>
            <div className="dl-card"><b>BAD INTENCIONES</b><div className="m">Nsqk · WEBM · 2:50 · Descargando</div><div className="bar"><i /></div></div>
          </div>
          <div className="tile span3" data-par="0.05">
            <h3>Playlists que salen contigo</h3>
            <p>Importa y exporta, y haz copia de toda la biblioteca local.</p>
            <div className="formats"><span>M3U8</span><span>XSPF</span><span>Auden JSON</span><span>Copia de seguridad</span></div>
          </div>
          <div className="tile span3 wide" data-par="0.08">
            <h3>Etiquetas completas</h3>
            <p>Artista del álbum, pista, disco, año y enlace de origen escritos en cada archivo. Separa artistas múltiples y enlaza lo que ya tienes con lo que escuchas en streaming.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
