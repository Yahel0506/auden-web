/** The DJ's spoken intro, typed out like a subtitle and cycling through example sets. */

const LINES: [string, string][] = [
  ['español.zip', 'Qué horas. Bueno, que la música te haga compañía. De español.zip, tu playlist, va un poco. Empieza DANCE CRIP, la de Trueno.'],
  ['Para la noche', 'Llevas tres días volviendo a lo mismo, así que hoy bajamos el ritmo. Arrancamos con algo que guardaste hace tiempo y casi no pones.'],
  ['Feeling Blue', 'Esto va para cuando no quieres hablar con nadie. Canciones tristes, pero de las buenas. Primero, una que ya te sabes de memoria.'],
];

export function initDjSubtitle(reduce: boolean): () => void {
  const txt = document.getElementById('dj-text');
  const src = document.getElementById('dj-src');
  if (!txt || !src) return () => {};

  let line = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const typeLine = () => {
    const [set, text] = LINES[line];
    src.textContent = set;
    if (reduce) {
      txt.textContent = text;
      return;
    }
    let i = 0;
    txt.textContent = '';
    const step = () => {
      i++;
      txt.textContent = text.slice(0, i);
      if (i < text.length) timer = setTimeout(step, text[i - 1] === '.' ? 260 : 32);
      else
        timer = setTimeout(() => {
          line = (line + 1) % LINES.length;
          typeLine();
        }, 3200);
    };
    step();
  };
  typeLine();

  return () => clearTimeout(timer);
}
