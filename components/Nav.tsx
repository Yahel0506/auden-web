export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <nav className="bar" aria-label="Principal">
          <a className="logo" href="#top" aria-label="Auden, inicio"><svg><use href="#logo" /></svg>Auden</a>
          <div className="links">
            <a href="#fork">Fork de BitChord</a>
            <a href="#dj">Auden DJ</a>
            <a href="#letras">Letras</a>
            <a href="#biblioteca">Biblioteca</a>
            <a href="https://github.com/Yahel0506/Auden" target="_blank" rel="noopener">GitHub</a>
          </div>
          <a className="pill white" href="#descargar"><svg><use href="#down" /></svg>Descargar</a>
        </nav>
      </div>
    </header>
  );
}
