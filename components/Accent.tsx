'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Copy } from '@/lib/copy';

/** The app's nine accents, in the order Settings lists them. */
const COLORS = ['#0A84FF', '#30D158', '#BFE04A', '#FFD60A', '#FF9F0A', '#FF453A', '#FF6482', '#E040C8', '#A070FF'];

const TAB_PATHS = [
  'M12 3 3 10.5V21h6.5v-6h5v6H21V10.5z',
  'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  'M9 18V6l10-2v12M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm10-2a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z',
  'M11 4a7 7 0 1 0 4.4 12.4l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 0 0 11 4Z',
];

/**
 * "Your colour, everywhere": the accent picker, working. Choosing a colour tints the open tab of a model of the
 * navigation bar, a switch, a button and the light behind them, as the app's accent does.
 */
export default function Accent({ t }: { t: Copy }) {
  const a = t.accent;
  const [picked, setPicked] = useState(0);
  const accent = COLORS[picked];
  return (
    <section className="accent" style={{ '--accent': accent } as CSSProperties}>
      <div className="accent-glow" aria-hidden="true" />
      <div className="wrap accent-grid">
        <div className="head">
          <h2>{a.h2a} <span className="dim">{a.h2b}</span></h2>
          <p>{a.lede}</p>
        </div>
        <div className="accent-demo" role="group" aria-label={a.label}>
          <div className="bar-model">
            {a.tabs.map((name, i) => (
              <span className={`tab${i === 0 ? ' on' : ''}`} key={name}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d={TAB_PATHS[i]} fill={i === 2 ? 'none' : 'currentColor'} stroke={i === 2 ? 'currentColor' : 'none'} strokeWidth={2} strokeLinejoin="round" /></svg>
                {name}
              </span>
            ))}
          </div>
          <div className="row-model">
            <div><b>{a.row}</b><small>{a.rowText}</small></div>
            <span className="switch on" aria-hidden="true"><i /></span>
          </div>
          <button type="button" className="pill accent-pill">{a.button}</button>
          <div className="dots" role="radiogroup" aria-label={a.hint}>
            {COLORS.map((color, i) => (
              <button
                key={color}
                type="button"
                role="radio"
                aria-checked={i === picked}
                aria-label={a.colors[i]}
                className={`dot${i === picked ? ' on' : ''}`}
                style={{ background: color }}
                onClick={() => setPicked(i)}
              />
            ))}
          </div>
          <p className="hint">{a.hint}</p>
        </div>
      </div>
    </section>
  );
}
