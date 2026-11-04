import { clamp, frameCap, LYRIC_EASING, smooth, type Easing } from './util';

/*
 * Auden's synced-lyrics panel, rebuilt on a canvas.
 * Constants are the app's own (sharedUi …/player/PlayerLyrics.kt and
 * shared …/data/lyrics/LyricLine.kt), in dp, drawn on a 411 dp wide screen.
 */

const UNSUNG_ALPHA = 0.45;
const GLOW_ALPHA = 0.62;
const GLOW_RADIUS = 6;
const WIPE_FEATHER = 30;
const WORD_RISE = 2;
const FALLOFF_ALPHA = [1, 0.74, 0.6, 0.48, 0.4, 0.34];
const FALLOFF_BLUR = [0, 1, 1, 1.7, 2.4];
const INACTIVE_SCALE = 0.98;
const SETTLE = 400;
const GLOW_FADE = 420;
const STAGGER_STEPS = 3;
const STAGGER_FRACTION = 0.06;
const LEAD_MIN = 350;
const LEAD_MAX = 500;
const RISE_MS = 700;
const RISE_MIN_MS = 250;
const LIFT_QUICK = 150;
const LIFT_HELD = 900;
const LIFT_FLOOR = 0.25;
const G = {
  MAX: 7, SOLO: 1100, SHORT: 1360, STEP: 140, FOUR: 1050, LONG: 900, PER: 200,
  D_LONG_CH: 5, D_QUICK: 1200, D_QFLOOR: 800, D_LONG: 0.4, D_Q: 0.3, D_QT: 0.1, D_MAX: 0.7,
  STAG: 0.09, SPAN: 1.5, IN: 0.25, HOLD: 0.3, OUT: 0.75, REST: 1, RMIN: 400, RMAX: 3000,
  BS: 0.05, BL: 0.04, RANGE: 0.08, CEIL: 0.1, TRIM: 0.98, SHIFT: 25 / 34,
  BF: 0.35, BR: 0.45, BP: 1500, BPM: 1.1, BSH: 0.85, BLO: 1.1, LP: 2000, LF: 0.3,
};
const GAP_DOTS = 3;
const GAP_DOT = 13;
const GAP_DOT_GAP = 5;
const GAP_REST = 0.25;
const GAP_ROW = 40;
const GAP_SPACE = 16;

// Panel metrics measured off the app's own phone screenshot (411 dp wide).
const FS = 38;
const LH = 46;
const ROWGAP = 25;
const LEFT = 35;
const WRAPW = 342;
const FOCUS = 69;
const PADX = 12;
const PADY = 20;
const CANVAS_H = 384;
const PW = WRAPW + PADX * 2 + 30;
const PH = LH * 3 + PADY * 2;

// Lounge Act (Nirvana), opening verse. Word timings are hand-placed, in ms.
const SONG = 156000;
const LOOP_FROM = 12600;
const LOOP_AT = 33600;
const RAW: [string, number, number][][] = [
  [['Truth', 17200, 17560], ['covered', 17620, 18160], ['in', 18220, 18400], ['security', 18460, 20300]],
  [['I', 20900, 21040], ["can't", 21100, 21360], ['let', 21420, 21600], ['you', 21650, 21950], ['smother', 22000, 22700], ['me', 22760, 24250]],
  [['Like', 24600, 24850], ['to', 24900, 25050], ['but', 25100, 25300], ['it', 25350, 25500], ["couldn't", 25560, 26200], ['work', 26280, 27600]],
  [["Tradin'", 28000, 28450], ['off', 28500, 28760], ['and', 28800, 29000], ["takin'", 29050, 29620], ['turns', 29700, 31500]],
];

type Word = { text: string; s: number; e: number };
type Growth = { scale: number; shift: number; rise: number; bloom: number };
type Grow = { index: number; s: number; e: number; restsAt: number; sample: (ci: number, pos: number, o: Growth) => void };
type VLine = { start: number; endV: number; endAll: number; text: string; xs: number[]; width: number };
type Line = {
  gap: false; words: Word[]; text: string; spans: [number, number][]; vls: VLine[];
  time: number; end: number; h: number; top: number; grows: (Grow | null)[]; untilMs: number;
};
type Gap = { gap: true; time: number; end: number; h: number; top: number };
type Row = Line | Gap;
type Tween = { from: number; to: number; t0: number; dur: number; ease: Easing; v: number };
type RowState = { alpha: Tween; blur: Tween; scale: Tween; glow: Tween; sFrom: number; sNow: number };
type Run = { to: number; t0: number; dur: number; dir: number; focus: number };

function liftHeight(w: Word) {
  const th = clamp((w.e - w.s - LIFT_QUICK) / (LIFT_HELD - LIFT_QUICK));
  return LIFT_FLOOR + (1 - LIFT_FLOOR) * smooth(th);
}

function canGrow(w: Word) {
  const n = w.text.length;
  const held = w.e - w.s;
  if (!n || n > G.MAX || w.text.includes('-')) return false;
  if (n === 1) return held >= G.SOLO;
  if (n <= 3) return held >= G.SHORT + (n - 2) * G.STEP;
  if (n === 4) return held >= G.FOUR;
  return held >= G.LONG && held >= n * G.PER;
}

function decayRate(n: number, held: number) {
  const long = n > G.D_LONG_CH;
  const quick = held < G.D_QUICK;
  if (!long && !quick) return 0;
  let s = 0;
  if (long) s += Math.min((n - G.D_LONG_CH) / 5, 1) * G.D_LONG;
  if (quick) s += Math.max(0, 1 - (held - G.D_QFLOOR) / 400) * (n > 3 ? G.D_Q : G.D_QT);
  return Math.min(s, G.D_MAX);
}

/** A held word that swells letter by letter (GrowingWord in LyricLine.kt). */
function growing(index: number, w: Word): Grow {
  const n = w.text.length;
  const held = Math.max(1, w.e - w.s);
  const earned = Math.pow(clamp((held - G.RMIN) / (G.RMAX - G.RMIN)), 3);
  const decay = decayRate(n, held);
  const bloomPace = Math.min(G.BPM, held / G.BP);
  const spread = n <= 3 ? G.BSH : n >= 6 ? G.BLO : 1;
  const base = n <= 3 ? G.BS : G.BL;
  const liftPace = clamp(held / G.LP, G.LF, 1);
  const sc: number[] = [];
  const sh: number[] = [];
  const ri: number[] = [];
  const bl: number[] = [];
  for (let i = 0; i < n; i++) {
    const place = n > 1 ? i / (n - 1) : 0;
    const reach = earned * (1 - place * decay);
    const scale = 1 + base + reach * G.RANGE;
    sc[i] = scale * G.TRIM;
    bl[i] = (G.BF + reach * G.BR) * bloomPace * spread;
    ri[i] = ((scale - 1) / G.CEIL) * liftPace;
    sh[i] = ((i + 0.5) / n - 0.5) * 2 * (scale - 1) * G.SHIFT * G.TRIM;
  }
  return {
    index,
    s: w.s,
    e: w.e,
    restsAt: w.s + held * ((n - 1) * G.STAG + G.SPAN),
    sample(ci, pos, o) {
      const el = pos - w.s - ci * held * G.STAG;
      const ph = clamp(el / (held * G.SPAN));
      const pk = sc[ci];
      if (ph < G.IN) {
        const t = smooth(ph / G.IN);
        o.scale = 1 + (pk - 1) * t; o.shift = sh[ci] * t; o.rise = ri[ci] * t; o.bloom = bl[ci] * t;
      } else if (ph < G.HOLD) {
        o.scale = pk; o.shift = sh[ci]; o.rise = ri[ci]; o.bloom = bl[ci];
      } else if (ph < G.OUT) {
        const t = smooth((ph - G.HOLD) / (G.OUT - G.HOLD));
        o.scale = pk + (1 - pk) * t; o.shift = sh[ci] * (1 - t); o.rise = ri[ci] + (G.REST - ri[ci]) * t; o.bloom = bl[ci] * (1 - t);
      } else {
        o.scale = 1; o.shift = 0; o.rise = G.REST; o.bloom = 0;
      }
    },
  };
}

function revealedChars(L: Line, pos: number) {
  for (let i = 0; i < L.words.length; i++) {
    const w = L.words[i];
    const [a, b] = L.spans[i];
    if (pos < w.s) return a;
    if (pos < w.e) return a + ((pos - w.s) / Math.max(1, w.e - w.s)) * w.text.length;
    const nx = L.words[i + 1];
    if (nx && pos < nx.s) {
      const g = L.spans[i + 1][0];
      return b + ((pos - w.e) / Math.max(1, nx.s - w.e)) * (g - b);
    }
  }
  return L.text.length;
}

function xOn(v: VLine, idx: number) {
  if (idx <= v.start) return 0;
  if (idx >= v.endV) return v.width;
  return v.xs[idx - v.start];
}

function horizontalAt(L: Line, chars: number, v: VLine) {
  const sp = L.spans.find(([a, b]) => chars >= a && chars < b);
  if (sp && sp[0] >= v.start && sp[1] <= v.endV) {
    const f = xOn(v, sp[0]);
    const t = xOn(v, sp[1]);
    return f + ((t - f) * (chars - sp[0])) / (sp[1] - sp[0]);
  }
  const i = clamp(Math.floor(chars), v.start, v.endAll);
  const here = xOn(v, i);
  const next = i + 1 > v.endV ? v.width : xOn(v, i + 1);
  return here + (next - here) * (chars - i);
}

function wordLift(L: Line, i: number, pos: number) {
  const w = L.words[i];
  const riseMs = clamp(w.e - w.s, RISE_MIN_MS, RISE_MS);
  const rising = clamp((pos - w.s) / riseMs);
  const falling = clamp(1 - (pos - w.e) / RISE_MS);
  return liftHeight(w) * smooth(Math.min(rising, falling));
}

function wordFall(L: Line, i: number, pos: number) {
  return liftHeight(L.words[i]) * smooth(clamp(1 - (pos - L.words[i].e) / RISE_MS));
}

const tween = (v: number): Tween => ({ from: v, to: v, t0: 0, dur: 1, ease: LYRIC_EASING, v });
function setT(tw: Tween, to: number, now: number, dur: number, ease: Easing = LYRIC_EASING) {
  if (tw.to === to) return;
  tw.from = tw.v; tw.to = to; tw.t0 = now; tw.dur = dur; tw.ease = ease;
}
function stepT(tw: Tween, now: number) {
  tw.v = tw.from + (tw.to - tw.from) * tw.ease(clamp((now - tw.t0) / tw.dur));
  return tw.v;
}
const LINEAR: Easing = (t) => t;
const fmt = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

export function initLyrics(reduce: boolean, labels: { play: string; pause: string }): () => void {
  const canvas = document.getElementById('lyr') as HTMLCanvasElement | null;
  const app = document.getElementById('app');
  const screen = document.getElementById('live-screen');
  const tA = document.getElementById('t-a');
  const tB = document.getElementById('t-b');
  const prog = document.getElementById('prog');
  const playIco = document.getElementById('b-play-ico');
  const bPlay = document.getElementById('b-play');
  const bPrev = document.getElementById('b-prev');
  const bNext = document.getElementById('b-next');
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx || !app || !screen || !tA || !tB || !prog || !playIco || !bPlay || !bPrev || !bNext) return () => {};

  // next/font renames the family, so read the real name off the CSS variable it sets.
  const family = getComputedStyle(document.documentElement).getPropertyValue('--font-inter-tight').trim() || '"Inter Tight"';
  const FONT = `800 ${FS}px ${family}, "SF Pro Display", -apple-system, sans-serif`;

  const mk = () => {
    const c = document.createElement('canvas');
    return [c, c.getContext('2d')!] as const;
  };
  const [picC, pic] = mk();
  const [litC, lit] = mk();
  const [whiteC, white] = mk();
  const meas = mk()[1];
  let S = 1;
  let rows: Row[] = [];
  let st: { scrollFocus: number; run: Run; rows: RowState[]; drawn: boolean } | null = null;

  function sizeLayers() {
    const k = screen!.clientWidth / 411;
    app!.style.setProperty('--k', String(k));
    S = k * Math.min(window.devicePixelRatio || 1, 2.5);
    canvas!.width = Math.round(411 * S);
    canvas!.height = Math.round(CANVAS_H * S);
    [picC, litC, whiteC].forEach((c) => {
      c.width = Math.ceil(PW * S);
      c.height = Math.ceil(PH * S);
    });
  }

  function buildRows() {
    meas.font = FONT;
    const lines: Line[] = RAW.map((ws) => {
      const words = ws.map(([text, s, e]) => ({ text, s, e }));
      const text = words.map((w) => w.text).join(' ');
      let off = 0;
      const spans = words.map((w) => {
        const a = text.indexOf(w.text, off);
        off = a + w.text.length;
        return [a, a + w.text.length] as [number, number];
      });
      // Wrap greedily, as Compose does at this width.
      const parts: { start: number; endV: number }[] = [];
      let cur = { start: spans[0][0], endV: spans[0][1] };
      for (let i = 1; i < words.length; i++) {
        if (meas.measureText(text.slice(cur.start, spans[i][1])).width > WRAPW) {
          parts.push(cur);
          cur = { start: spans[i][0], endV: spans[i][1] };
        } else cur.endV = spans[i][1];
      }
      parts.push(cur);
      const vls: VLine[] = parts.map((p, k) => {
        const t = text.slice(p.start, p.endV);
        const xs: number[] = [];
        for (let i = 0; i <= t.length; i++) xs.push(meas.measureText(t.slice(0, i)).width);
        return { start: p.start, endV: p.endV, endAll: k < parts.length - 1 ? parts[k + 1].start : text.length, text: t, xs, width: xs[xs.length - 1] };
      });
      const grows = words.map((w, i) => (canGrow(w) ? growing(i, w) : null));
      return {
        gap: false as const, words, text, spans, vls, top: 0,
        time: words[0].s, end: words[words.length - 1].e, h: vls.length * LH, grows,
        untilMs: Math.max(words[words.length - 1].e + RISE_MS, ...grows.filter((g): g is Grow => !!g).map((g) => g.restsAt)),
      };
    });
    const gap: Gap = { gap: true, time: LOOP_FROM, end: lines[0].time, h: GAP_ROW, top: 0 };
    rows = [gap, ...lines];
    let y = 0;
    rows.forEach((r) => {
      r.top = y;
      y += r.h + (r.gap ? GAP_SPACE : ROWGAP);
    });
  }

  function resetState(now: number) {
    st = {
      scrollFocus: 0,
      run: { to: -FOCUS, t0: now, dur: SETTLE, dir: 1, focus: 0 },
      rows: rows.map(() => ({ alpha: tween(1), blur: tween(0), scale: tween(1), glow: tween(0), sFrom: -FOCUS, sNow: -FOCUS })),
      drawn: false,
    };
  }

  // Playback clock and controls.
  let pos = reduce ? 22350 : LOOP_FROM;
  let playing = !reduce;
  let last = performance.now();
  const onPlay = () => {
    playing = !playing;
    playIco!.setAttribute('href', playing ? '#pause' : '#play');
    bPlay!.setAttribute('aria-label', playing ? labels.pause : labels.play);
  };
  const onPrev = () => { pos = LOOP_FROM; };
  const onNext = () => {
    const n = rows.find((r) => !r.gap && r.time > pos + 50);
    pos = n ? n.time : LOOP_FROM;
  };
  const onTap = (e: MouseEvent) => {
    if (!st) return;
    const b = canvas!.getBoundingClientRect();
    const y = ((e.clientY - b.top) / b.height) * CANVAS_H;
    const hit = rows.find((r, i) => {
      const top = r.top - st!.rows[i].sNow;
      return !r.gap && y >= top && y <= top + r.h + ROWGAP;
    });
    if (hit) pos = hit.time;
  };
  bPlay.addEventListener('click', onPlay);
  bPrev.addEventListener('click', onPrev);
  bNext.addEventListener('click', onNext);
  canvas.addEventListener('click', onTap);

  const leadFor = (i: number) => {
    const p = rows[i - 1];
    return p ? clamp(rows[i].time - p.end, LEAD_MIN, LEAD_MAX) : LEAD_MIN;
  };

  function drawGap(r: Gap, y: number, a: number) {
    const run = clamp((pos - r.time) / Math.max(1, r.end - r.time));
    const scale = pos >= r.time && pos < r.end ? 1 : 0.76;
    ctx!.setTransform(S, 0, 0, S, 0, 0);
    ctx!.save();
    ctx!.translate(LEFT, y + GAP_ROW / 2);
    ctx!.scale(scale, scale);
    for (let d = 0; d < GAP_DOTS; d++) {
      const lit = clamp(run * GAP_DOTS - d);
      ctx!.globalAlpha = a * (GAP_REST + (1 - GAP_REST) * lit);
      ctx!.beginPath();
      ctx!.arc(d * (GAP_DOT + GAP_DOT_GAP) + GAP_DOT / 2, 0, (GAP_DOT / 2) * (1 + 0.12 * Math.sin(performance.now() / 260 + d)), 0, Math.PI * 2);
      ctx!.fillStyle = '#fff';
      ctx!.fill();
    }
    ctx!.restore();
  }

  function fillText(c: CanvasRenderingContext2D, L: Line, color: string) {
    c.setTransform(S, 0, 0, S, 0, 0);
    c.font = FONT;
    c.textBaseline = 'middle';
    c.fillStyle = color;
    L.vls.forEach((v, k) => c.fillText(v.text, PADX, PADY + k * LH + LH / 2 + 1));
  }

  const growth: Growth = { scale: 1, shift: 0, rise: 0, bloom: 0 };

  function drawLine(L: Line, y: number, alpha: number, blur: number, scale: number, glow: number) {
    const c = ctx!;
    const pw = picC.width;
    const ph = picC.height;
    const animating = pos >= L.time && pos <= L.untilMs;

    // 1) The finished picture of the line: dim copy plus the lit copy, swept and feathered.
    pic.setTransform(1, 0, 0, 1, 0, 0);
    pic.clearRect(0, 0, pw, ph);
    if (pos >= L.end) fillText(pic, L, '#fff');
    else {
      fillText(pic, L, `rgba(255,255,255,${UNSUNG_ALPHA})`);
      if (pos > L.time) {
        lit.setTransform(1, 0, 0, 1, 0, 0);
        lit.clearRect(0, 0, pw, ph);
        fillText(lit, L, '#fff');
        const rc = revealedChars(L, pos);
        lit.setTransform(S, 0, 0, S, 0, 0);
        L.vls.forEach((v, k) => {
          const top = PADY + k * LH - 6;
          const h = LH + 12;
          if (rc <= v.start) {
            lit.clearRect(0, top, PW, h);
            return;
          }
          if (rc >= v.endAll) return;
          const cut = PADX + horizontalAt(L, rc, v);
          const feather = Math.min(WIPE_FEATHER, cut - PADX);
          lit.save();
          lit.beginPath();
          lit.rect(0, top, PW, h);
          lit.clip();
          lit.globalCompositeOperation = 'destination-in';
          const g = lit.createLinearGradient(cut, 0, cut + Math.max(0.5, feather), 0);
          g.addColorStop(0, '#fff');
          g.addColorStop(1, 'rgba(255,255,255,0)');
          lit.fillStyle = g;
          lit.fillRect(0, top, PW, h);
          lit.restore();
        });
        pic.setTransform(1, 0, 0, 1, 0, 0);
        pic.drawImage(litC, 0, 0);
      }
    }

    // 2) Place it: row alpha, falloff blur, scale about the left edge.
    c.setTransform(S, 0, 0, S, 0, 0);
    c.save();
    c.globalAlpha = alpha;
    if (blur > 0.05) c.filter = `blur(${(blur * S).toFixed(2)}px)`;
    const ox = LEFT - PADX;
    const oy = y - PADY;
    c.translate(LEFT, y + L.h / 2);
    c.scale(scale, scale);
    c.translate(-LEFT, -(y + L.h / 2));

    const slice = (sx: number, sy: number, sw: number, sh: number, dy: number) => {
      if (sw <= 0 || sh <= 0) return;
      c.drawImage(picC, sx * S, sy * S, sw * S, sh * S, ox + sx, oy + sy + dy, sw, sh);
    };
    const lifted = animating && (pos < L.words[L.words.length - 1].e + RISE_MS || L.grows.some((g) => g && pos >= g.s && pos <= g.restsAt));

    if (!lifted) {
      c.drawImage(picC, 0, 0, pw, ph, ox, oy, PW, PH);
    } else {
      // 3) Cut the picture into word slices: the word being sung rises 2dp, held words grow letter by letter.
      if (glow > 0.01) {
        white.setTransform(1, 0, 0, 1, 0, 0);
        white.clearRect(0, 0, pw, ph);
        fillText(white, L, '#fff');
      }
      L.vls.forEach((v, k) => {
        const top = PADY + k * LH;
        const bot = top + LH;
        const bTop = k === 0 ? 0 : top;
        const bH = (k === L.vls.length - 1 ? PH : bot) - bTop;
        let edge = 0;
        L.words.forEach((_, wi) => {
          const [a, b] = L.spans[wi];
          const s0 = Math.max(a, v.start);
          const e0 = Math.min(b, v.endV);
          if (s0 >= e0) return;
          const g = L.grows[wi];
          const held = g && pos >= g.s && pos <= g.restsAt ? g : null;
          const lift = wordLift(L, wi, pos);
          if (!held && lift <= 0.01) return;
          const from = PADX + xOn(v, s0);
          const to = PADX + xOn(v, e0);
          slice(edge, bTop, from - edge, bH, 0);
          if (held) {
            const fall = wordFall(L, wi, pos);
            for (let ch = s0; ch < e0; ch++) {
              held.sample(ch - a, pos, growth);
              const f = PADX + xOn(v, ch);
              const t = PADX + xOn(v, ch + 1);
              const cx = ox + (f + t) / 2 + growth.shift * FS;
              const cy = oy + top + LH / 2 - growth.rise * WORD_RISE * fall;
              const drawLetter = (src: HTMLCanvasElement) => {
                c.save();
                c.translate(cx, cy);
                c.scale(growth.scale, growth.scale);
                c.drawImage(src, f * S, (top - 4) * S, (t - f) * S, (LH + 8) * S, -(t - f) / 2, -LH / 2 - 4, t - f, LH + 8);
                c.restore();
              };
              if (glow > 0.01 && growth.bloom > 0.01) {
                c.save();
                c.globalAlpha = alpha * glow * Math.min(1, growth.bloom);
                c.filter = `blur(${(GLOW_RADIUS * S * 0.5).toFixed(2)}px)`;
                drawLetter(whiteC);
                c.restore();
              }
              drawLetter(picC);
            }
          } else {
            slice(from, bTop, to - from, bH, -lift * WORD_RISE);
          }
          edge = to;
        });
        slice(edge, bTop, PW - edge, bH, 0);
      });
    }
    c.restore();
  }

  function drawLyrics(now: number) {
    if (!rows.length || !st) return;
    const dt = now - last;
    last = now;
    if (playing) pos += dt;
    if (pos >= LOOP_AT) {
      pos = LOOP_FROM;
      resetState(now);
    }
    if (pos < LOOP_FROM) pos = LOOP_FROM;
    const state = st!;
    tA!.textContent = fmt(pos);
    tB!.textContent = `-${fmt(SONG - pos)}`;
    prog!.style.width = `${(pos / SONG) * 100}%`;

    // Which row the panel is heading for: it starts moving one run-up before the line lands.
    let target = 0;
    let active = 0;
    rows.forEach((r, i) => {
      if (i && pos >= r.time - leadFor(i)) target = i;
      if (pos >= r.time) active = i;
    });
    if (target !== state.scrollFocus) {
      state.rows.forEach((s) => { s.sFrom = s.sNow; });
      state.run = { to: rows[target].top - FOCUS, t0: now, dur: leadFor(target), dir: target > state.scrollFocus ? 1 : -1, focus: target };
      state.scrollFocus = target;
    }

    ctx!.setTransform(1, 0, 0, 1, 0, 0);
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    rows.forEach((r, i) => {
      const s = state.rows[i];
      const run = state.run;
      // Stagger: rows behind the one being scrolled to set off a little later.
      const behind = run.dir >= 0 ? i - run.focus : run.focus - i;
      const delay = clamp(behind, 0, STAGGER_STEPS) * STAGGER_FRACTION * run.dur;
      s.sNow = s.sFrom + (run.to - s.sFrom) * LYRIC_EASING(clamp((now - run.t0 - delay) / run.dur));

      const dist = Math.abs(i - active);
      const isActive = i === active;
      if (r.gap) setT(s.alpha, isActive ? 1 : 0, now, SETTLE);
      else {
        setT(s.alpha, isActive ? 1 : FALLOFF_ALPHA[Math.min(dist, FALLOFF_ALPHA.length - 1)], now, SETTLE);
        setT(s.blur, isActive ? 0 : FALLOFF_BLUR[Math.min(dist, FALLOFF_BLUR.length - 1)], now, SETTLE);
        setT(s.scale, isActive ? 1 : INACTIVE_SCALE, now, SETTLE);
        setT(s.glow, isActive ? GLOW_ALPHA : 0, now, GLOW_FADE, LINEAR);
      }
      const a = stepT(s.alpha, now);
      const bl = stepT(s.blur, now);
      const sc = stepT(s.scale, now);
      const gl = stepT(s.glow, now);
      const y = r.top - s.sNow;
      if (a < 0.005 || y > CANVAS_H + 20 || y + r.h < -40) return;
      if (r.gap) drawGap(r, y, a);
      else drawLine(r, y, a, bl, sc, gl);
    });
  }

  let visible = true;
  const io = new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; }));
  io.observe(screen);

  let raf = 0;
  let started = false;
  const due = frameCap();
  const frame = (now: number) => {
    if (rows.length && st && (visible || !st.drawn)) {
      if (due(now)) {
        drawLyrics(now);
        st.drawn = true;
      }
    } else last = now;
    if (!reduce) raf = requestAnimationFrame(frame);
  };
  const onResize = () => { if (rows.length) sizeLayers(); };

  const start = () => {
    if (started) return;
    started = true;
    sizeLayers();
    buildRows();
    resetState(performance.now());
    last = performance.now();
    raf = requestAnimationFrame(frame);
    if (reduce) {
      // Settle the tweens on the still frame.
      requestAnimationFrame((t) => { for (let i = 0; i < 3; i++) drawLyrics(t + 1000 * i); });
    }
  };
  window.addEventListener('resize', onResize);
  const ready = document.fonts?.load ? Promise.race([document.fonts.load(FONT), new Promise((r) => setTimeout(r, 1500))]) : Promise.resolve();
  ready.then(start, start);

  return () => {
    started = true;
    cancelAnimationFrame(raf);
    io.disconnect();
    window.removeEventListener('resize', onResize);
    bPlay.removeEventListener('click', onPlay);
    bPrev.removeEventListener('click', onPrev);
    bNext.removeEventListener('click', onNext);
    canvas.removeEventListener('click', onTap);
  };
}
