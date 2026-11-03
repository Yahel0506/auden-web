export default function Footer() {
  return (
    <footer>
      <div className="wrap row">
        <div className="legal">
          <p style={{display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fg)', fontWeight: 700, fontSize: 15, marginBottom: 10}}><svg width={40} height={18}><use href="#logo" /></svg>Auden</p>
          <p>Auden es un cliente de terceros, independiente y hecho por la comunidad. No está afiliado, respaldado ni conectado con Google, YouTube, YouTube Music ni Spotify. Úsalo bajo tu propio criterio.</p>
          <p style={{marginTop: 8}}>Fork de <a href="https://github.com/kushagrasinghx/BitChord" target="_blank" rel="noopener">BitChord</a> por kushagrasinghx. Distribuido bajo GPL-3.0. Portada de <i>Nevermind</i> y fragmento de «Lounge Act» © Nirvana / DGC, mostrados como ejemplo de uso.</p>
        </div>
        <div style={{display: 'grid', gap: 6, alignContent: 'start'}}>
          <a href="https://github.com/Yahel0506/Auden" target="_blank" rel="noopener">Repositorio</a>
          <a href="https://github.com/Yahel0506/Auden/releases" target="_blank" rel="noopener">Releases</a>
          <a href="https://github.com/Yahel0506/Auden/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">Contribuir</a>
          <a href="https://github.com/Yahel0506/Auden/blob/main/LICENSE" target="_blank" rel="noopener">Licencia</a>
        </div>
      </div>
    </footer>
  );
}
