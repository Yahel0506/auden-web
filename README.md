# Auden — landing page

Next.js (App Router, TypeScript) landing page for [Auden](https://github.com/Yahel0506/Auden), the Android music player forked from [BitChord](https://github.com/kushagrasinghx/BitChord).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Node 20 or newer.

## Layout

| Path | What it is |
| --- | --- |
| `app/layout.tsx` | Fonts (Inter Tight, Geist Mono via `next/font`), metadata, viewport |
| `app/page.tsx` | The page, section by section |
| `app/globals.css` | All styles; color and font tokens are on `:root` at the top |
| `components/*.tsx` | One component per section, plus `Icons` (the SVG sprite) |
| `components/Interactions.tsx` | Client component that starts the animations |
| `lib/scene.ts` | Scroll choreography: hero fan, sticky tour phone, parallax |
| `lib/orb.ts` | The Auden DJ ring on every `canvas[data-orb]` |
| `lib/djSubtitle.ts` | The DJ's typed-out intro |
| `lib/lyrics.ts` | The synced-lyrics panel, rebuilt from the app's `PlayerLyrics.kt` / `LyricLine.kt` constants |
| `public/img/` | App screenshots and the *Nevermind* cover used in the demo |

## Notes

- **Downloads always point at the newest stable release**: `https://github.com/Yahel0506/Auden/releases/latest/download/Auden.apk` (also `Auden_arm64-v8a.apk`, `AudenTV.apk`, `AudenWear.apk`). The repo's Release workflow (`stable-links` job) keeps those fixed-name copies on the latest release.
- **The platforms section is hidden** until TV, Wear OS and Web are tested. Remove `hidden` from the `<section>` in `components/Platforms.tsx` to show it.
- The lyric word timings for *Lounge Act* are hand-placed, not from a lyrics provider. Only the opening four lines are used.
- *Nevermind* artwork and the *Lounge Act* excerpt © Nirvana / DGC, shown as an example of the app in use.
# auden-web
