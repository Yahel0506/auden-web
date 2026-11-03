import { frameCap } from './util';

/** The Auden DJ ring: layered loops that wobble, drawn on every `canvas[data-orb]`. */

type Layer = { c: string[]; a: number; s: number; o: [number, number]; w: number };

const LAYERS: Layer[] = [
  { c: ['#8ea5e6', '#b3c3f2'], a: 0.55, s: 1.06, o: [-0.05, 0.03], w: 0.15 },
  { c: ['#efb2da', '#f4c9e6'], a: 0.6, s: 1.0, o: [-0.03, 0.0], w: 0.15 },
  { c: ['#9fdccb', '#bfe9dc'], a: 0.75, s: 0.98, o: [0.0, 0.03], w: 0.15 },
  { c: ['#ffffff', '#ffe3f2', '#d9e8ff'], a: 1, s: 0.94, o: [0.04, -0.03], w: 0.14 },
];

type Orb = { cv: HTMLCanvasElement; ctx: CanvasRenderingContext2D; seed: number; visible: boolean; drawn: boolean; fit: () => void };

function blob(ctx: CanvasRenderingContext2D, cx: number, cy: number, R: number, t: number, k: number) {
  ctx.beginPath();
  for (let i = 0; i <= 120; i++) {
    const th = (i / 120) * Math.PI * 2;
    const r = R * (1 + 0.09 * Math.sin(2 * th + t * 0.7 + k) + 0.06 * Math.sin(3 * th - t * 0.9 + k * 1.7) + 0.035 * Math.sin(5 * th + t * 1.3 + k * 0.6));
    const x = cx + r * Math.cos(th);
    const y = cy + r * Math.sin(th);
    if (i) ctx.lineTo(x, y);
    else ctx.moveTo(x, y);
  }
  ctx.closePath();
}

function drawOrb(o: Orb, time: number) {
  const { ctx, cv } = o;
  const W = cv.width;
  const H = cv.height;
  const t = time / 1000 + o.seed;
  ctx.clearRect(0, 0, W, H);
  const R = Math.min(W, H) * 0.3;
  LAYERS.forEach((L, i) => {
    const cx = W / 2 + L.o[0] * W * (1 + 0.4 * Math.sin(t * 0.4 + i));
    const cy = H / 2 + L.o[1] * H * (1 + 0.4 * Math.cos(t * 0.5 + i));
    blob(ctx, cx, cy, R * L.s, t * (0.8 + i * 0.08), i * 1.9);
    const g = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
    L.c.forEach((c, j) => g.addColorStop(j / (L.c.length - 1 || 1), c));
    ctx.strokeStyle = g;
    ctx.globalAlpha = L.a;
    ctx.lineWidth = R * L.w * (1 + 0.06 * Math.sin(t * 1.1 + i));
    ctx.lineJoin = 'round';
    if (i === 3) {
      ctx.shadowColor = 'rgba(255,255,255,.35)';
      ctx.shadowBlur = R * 0.08;
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
  ctx.globalAlpha = 1;
}

export function initOrbs(reduce: boolean): () => void {
  const orbs: Orb[] = [...document.querySelectorAll<HTMLCanvasElement>('canvas[data-orb]')].flatMap((cv) => {
    const ctx = cv.getContext('2d');
    if (!ctx) return [];
    const fit = () => {
      const r = cv.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.max(1, r.width * d);
      cv.height = Math.max(1, r.height * d);
    };
    fit();
    return [{ cv, ctx, seed: Math.random() * 10, visible: true, drawn: false, fit }];
  });
  const onResize = () => orbs.forEach((o) => o.fit());
  window.addEventListener('resize', onResize);

  const io = new IntersectionObserver((es) =>
    es.forEach((e) => {
      const o = orbs.find((x) => x.cv === e.target);
      if (o) o.visible = e.isIntersecting;
    }),
  );
  orbs.forEach((o) => io.observe(o.cv));

  let raf = 0;
  const due = frameCap();
  const frame = (now: number) => {
    if (due(now))
      orbs.forEach((o) => {
        if (o.visible || !o.drawn) {
          drawOrb(o, now);
          o.drawn = true;
        }
      });
    if (!reduce) raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    io.disconnect();
    window.removeEventListener('resize', onResize);
  };
}
