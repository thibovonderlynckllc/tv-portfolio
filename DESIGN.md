# Design

The Proof Sheet: Thibo's work laid out as film strips on a light table, with Spiromni as the frame that got picked. Source of truth for values is `src/styles/global.css`.

## Colour

| Token | Value | Use |
|---|---|---|
| `--table` | `#e6ecee` | Page ground (the light table); also shows through sprocket holes |
| `--table-lit` | `#f6f9fa` | Text on ink buttons |
| `--film` / `--ink` | `#0b0b0c` | Film strips, text, the dark closing section |
| `--film-raised` | `#1b1c1e` | Frame placeholder |
| `--edge` | `#f0c53a` | Amber edge print: frame numbers and captions |
| `--pencil` | `#e3271e` | Grease pencil marks, link underlines, selection, focus |
| `--pencil-ink` | `#bd1b13` | Red text on the table (dates, stamps, hover) |
| `#ff5a4f` | | Red text on film (badges) |
| `--ink-soft` | `#46535a` | Secondary text |
| `--rule` | `#bfcacf` | Hairlines |

Rules: amber stays on film black. Three reds, one per ground, for legibility. Holes show the table.

## Typography

Archivo Variable (self-hosted, width axis) at three widths.

- Display and headings: weight 800, width 125%, uppercase, tracking -0.03em. Name `clamp(2.5rem, 6vw, 5.5rem)` on one line at desktop, two lines under 56rem; section headings `clamp(1.9rem, 4.2vw, 3.5rem)`.
- Body: normal width, 1.0625rem / 1.6. Leads up to 1.375rem / 1.5.
- Edge print (`.edge`): weight 600, width 75%, 0.8125rem, 0.08em tracked caps, tabular numerals. Carries data: frame numbers, captions, dates, labels.
- The email in the close: weight 700, width 75%, `min(7.4vw, 6rem)`, one line.

## Shape, depth, layout

- Corners 2 to 3px. Circles only for testimonial avatars.
- Shadows only on objects lying on the table: the portrait strip and prints.
- 85rem column, gutter `clamp(1.25rem, 4vw, 3.5rem)`. Lists are hairline-ruled rows, not boxes. Breakpoints 40rem, 56rem, 60rem.

## Components

- **Film strip** (`.film`): black band with sprocket holes top and bottom (mask, `round` so strips end on a whole hole). Used once on the home page, full-bleed in the hero, plus the single-frame portrait strip. Thibo found a Work section made of strips too black and too repetitive (2026-10-03): do not repeat strips down the page.
- **Frame** (`Frame.astro`): number line, a 1.85:1 window with the project poster, caption in edge print. Amber outline on hover.
- **Pencil marks** (`Pencil.astro`): a hand-drawn red box around Spiromni in the hero (draws in on load) and a tick on its frame in the sheet. Generated outlines with uneven pressure.
- **Print** (`Print.astro`): a screenshot on a white mount with a soft shadow and an ink caption below (red number, expanded caps name, optional stamp, edge-print meta). The Work section is ten prints on a 12-column grid with spans 12, 7, 5, 5, 7, 4, 4, 4, 6, 6, bottom-aligned, each rotated under 1 degree and straightening on hover. The first (Spiromni) is a feature: large print with the caption beside it and the pencil tick. Also used for "More work" on project pages, and the project page screenshot sits on the same mount.
- **Portrait frame**: a single-frame strip tilted 2 degrees. Open item: `pfp.webp` is a circular crop and shows as a disc; waiting on an uncropped photo.
- **Buttons, links, filters**: ink rectangles with 3px corners; links underlined in pencil red.
- **Header**: sticky bar; hides its name on desktop while the big name is on screen; the nav link of the section on screen is underlined.
- **The close**: the light table switched off. Black section with the email as the one bright element and an amber copy button.

## Interaction

- **Frame hover**: an amber outline only. A magnifying loupe and a hover-scroll of the screenshot were both tried and removed at Thibo's request (2026-10-03); do not bring them back.
- **Filters**: prints that do not match leave the grid and the matching ones move up and re-flow (rows of two at 7/5, 5/7, 6/6), with a per-print view transition where supported: leavers shrink and fade (0.3s), stayers glide to their new place (0.65s), newcomers rise in one after another (70ms apart). Returning to "All" is different on purpose: nothing glides; the current prints fade out and the full grid rises in, in order (45ms apart), so prints do not fly across the page. Thibo asked for this so he does not have to scroll to find the matches (2026-10-03).
- **Hero roll**: the hero strip holds all ten frames and scrolls sideways. With a mouse you drag it and can throw it (momentum); touch and trackpads scroll it natively. Sprocket holes travel with the film. A drag never opens a project; a plain click does.
- **Entrance**: the hero strip advances from the right, then the pencil box draws.
- **Reduced motion**: all of the above settle instantly.
