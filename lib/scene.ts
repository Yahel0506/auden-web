import { clamp, lerp, smooth } from './util';

/**
 * Scroll choreography: the hero fan stands up and opens, the tour phone stays
 * pinned and turns between chapters, and the DJ / lyrics phones and library
 * tiles move with the scroll.
 */
export function initScene(reduce: boolean): () => void {
  const stage = document.getElementById('stage');
  const tour = document.getElementById('tour');
  const tourPhone = document.getElementById('tour-phone');
  const djPhone = document.getElementById('dj-phone');
  const livePhone = document.getElementById('live-phone');
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!stage || !tour || !tourPhone || !djPhone || !livePhone || !hero) return () => {};

  const fan = [...stage.querySelectorAll<HTMLElement>('[data-fan]')];
  const tourImgs = [...tourPhone.querySelectorAll<HTMLElement>('.screen > img')];
  const tourArts = [...tour.querySelectorAll<HTMLElement>('.tour-copy article')];
  const tourDots = [...tour.querySelectorAll<HTMLElement>('.tour-dots i')];
  const tourGlow = tour.querySelector<HTMLElement>('.tour-glow');
  const tiles = [...document.querySelectorAll<HTMLElement>('[data-par]')];
  const wash = hero.querySelector<HTMLElement>('.wash');

  function scene() {
    const H = window.innerHeight;
    const narrow = window.innerWidth < 860;

    // Hero fan: lies back and closed at rest, stands up and opens as it reaches the top.
    const r = stage!.getBoundingClientRect();
    const u = reduce ? 1 : smooth(clamp((H * 0.62 - r.top) / (H * 0.62)));
    fan.forEach((p) => {
      const s = Number(p.dataset.fan);
      p.style.transform =
        s === 0
          ? `translateY(${lerp(0, -10, u)}px) rotateX(${lerp(26, 0, u)}deg) scale(${lerp(0.94, 1, u)})`
          : `translateX(${s * lerp(150, 238, u)}px) translateY(${lerp(80, 20, u)}px) rotateY(${-s * lerp(34, 14, u)}deg) rotateX(${lerp(26, 4, u)}deg) rotateZ(${s * lerp(2, 5, u)}deg)`;
    });
    if (wash) wash.style.transform = `scale(1.2) translateY(${Math.max(0, -hero!.getBoundingClientRect().top) * 0.25}px)`;

    // Sticky tour: one phone, persistent, turning between chapters.
    const tr = tour!.getBoundingClientRect();
    const P = clamp(-tr.top / (tr.height - H));
    const N = tourImgs.length;
    const cc = clamp(P * (N - 1) * 1.08 - 0.04, 0, N - 1);
    const side = Math.cos(cc * Math.PI); // +1: phone right of the text, -1: left
    const turn = Math.sin(cc * Math.PI); // peaks between chapters
    const idx = Math.round(cc);
    if (narrow) {
      tourPhone!.style.transform = `rotateY(${turn * 26}deg) rotateX(${Math.abs(turn) * 6}deg) scale(${1 - Math.abs(turn) * 0.05})`;
    } else {
      const dx = Math.min(window.innerWidth * 0.2, 260);
      tourPhone!.style.transform = `translateX(${side * dx}px) rotateY(${-side * 14 + turn * 18}deg) rotateX(${4 - Math.abs(turn) * 6}deg) rotateZ(${turn * -2}deg) scale(${1 - Math.abs(turn) * 0.06})`;
    }
    tourPhone!.style.setProperty('--sheen', (0.06 + Math.abs(turn) * 0.16).toFixed(3));
    if (tourGlow) tourGlow.style.transform = narrow ? '' : `translateX(${side * 18}%)`;
    tourImgs.forEach((im, i) => im.classList.toggle('on', i === idx));
    tourDots.forEach((d, i) => d.classList.toggle('on', i === idx));
    tourArts.forEach((a, i) => {
      const d = cc - i;
      a.style.opacity = String(clamp(1 - Math.abs(d) * 2.4));
      a.style.transform = narrow ? `translateY(${d * -40}px)` : `translateY(calc(-50% + ${d * -70}px))`;
    });

    // DJ and live phones turn as they pass through the viewport.
    ([[djPhone, 16], [livePhone, 12]] as const).forEach(([el, deg]) => {
      const b = el!.getBoundingClientRect();
      const t = clamp((H - b.top) / (H + b.height)) * 2 - 1; // -1 entering, +1 leaving
      el!.style.transform = reduce ? '' : `rotateY(${-t * deg}deg) rotateX(${t * 5}deg) translateY(${t * -24}px)`;
    });
    tiles.forEach((el) => {
      const b = el.getBoundingClientRect();
      const t = clamp((H - b.top) / (H + b.height)) * 2 - 1;
      el.style.transform = reduce ? '' : `translateY(${t * -H * Number(el.dataset.par)}px)`;
    });
  }

  let ticking = false;
  let raf = 0;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    raf = requestAnimationFrame(() => {
      ticking = false;
      scene();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  scene();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}
