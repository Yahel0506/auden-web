/** The DJ's spoken intro, typed out like a subtitle and cycling through example sets. */

export function initDjSubtitle(reduce: boolean, lines: [string, string][]): () => void {
  const txt = document.getElementById('dj-text');
  const src = document.getElementById('dj-src');
  if (!txt || !src) return () => {};

  let line = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const typeLine = () => {
    const [set, text] = lines[line];
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
          line = (line + 1) % lines.length;
          typeLine();
        }, 3200);
    };
    step();
  };
  typeLine();

  return () => clearTimeout(timer);
}
