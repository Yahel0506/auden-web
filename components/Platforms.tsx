export default function Platforms() {
  return (
    <section style={{paddingTop: 40}} hidden>
      <div className="wrap">
        <div className="head"><h2>Del bolsillo <span className="dim">a la tele.</span></h2></div>
        <div className="plats">
          <div className="plat"><svg viewBox="0 0 24 24"><rect x={6} y={2} width={12} height={20} rx={3} /><circle cx={12} cy="4.6" r=".5" /></svg><b>Android</b><span>La app principal, con todo.</span><code>dev.auden.app</code></div>
          <div className="plat"><svg viewBox="0 0 24 24"><rect x={2} y={4} width={20} height={13} rx={2} /><path d="M8 21h8" /></svg><b>Android TV</b><span>Interfaz pensada para el control remoto.</span><code>tv/</code></div>
          <div className="plat"><svg viewBox="0 0 24 24"><circle cx={12} cy={12} r={6} /><path d="M9 6l1-4h4l1 4M9 18l1 4h4l1-4" /></svg><b>Wear OS</b><span>Mando a distancia y altavoz en la muñeca.</span><code>wearos/</code></div>
          <div className="plat"><svg viewBox="0 0 24 24"><circle cx={12} cy={12} r={9} /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></svg><b>Web</b><span>Reproductor en React y extensión de navegador.</span><code>web/</code></div>
        </div>
      </div>
    </section>
  );
}
