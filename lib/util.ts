export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const smooth = (f: number) => f * f * (3 - 2 * f);

export type Easing = (t: number) => number;

/** A CSS-style cubic-bezier easing, solved with Newton's method. */
export function bezier(x1: number, y1: number, x2: number, y2: number): Easing {
  const bx = (u: number) => 3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u;
  const by = (u: number) => 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u;
  const dx = (u: number) => 3 * (1 - u) * (1 - u) * x1 + 6 * (1 - u) * u * (x2 - x1) + 3 * u * u * (1 - x2);
  return (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    let u = t;
    for (let i = 0; i < 8; i++) {
      const e = bx(u) - t;
      if (Math.abs(e) < 1e-5) break;
      const d = dx(u);
      if (Math.abs(d) < 1e-6) break;
      u = clamp(u - e / d);
    }
    return by(u);
  };
}

/** Auden's one curve for every lyric handover: CubicBezierEasing(0.41, 0, 0.12, 0.99). */
export const LYRIC_EASING = bezier(0.41, 0, 0.12, 0.99);
