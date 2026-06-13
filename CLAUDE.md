# DELACED — Issue I

## Project
A single-page interactive editorial built in plain HTML, CSS, and vanilla JS.
No frameworks. No build tools. Open index.html directly in a browser.

## Mood
Luxury independent magazine. Cream paper, lace, ballet, burgundy.
Nostalgia, quiet longing, abandoned ambitions. Feminine without cliché.
The reader should feel like they're walking through abandoned versions of someone.

## Palette
- Background: #f7f2eb (warm cream)
- Secondary: #f2ede4, #e8dece, #c4b8a8
- Accent: #6b1a2a (burgundy), #d4a0a8 (dusty pink), #b8924a (gold)
- Text: #2a2218 (ink), #7a6e62 (muted)

All tokens are defined as CSS variables in style.css under :root.

## Typography
All serif — Cormorant Garamond from Google Fonts (weights 300, 400, 500; italic variants).
No sans-serif anywhere. Large emotional statements use italic.

## Animation rules
- Nothing bounces, pops, or scales aggressively
- Everything: drifts, floats, breathes, unravels, glides
- Use opacity + transform + SVG path animation + clip-path
- Scroll-driven via IntersectionObserver and scroll listeners
  (use the `sectionProgress()` helper already in main.js)
- Target 60fps; requestAnimationFrame for canvas work
- Respect prefers-reduced-motion (handled in style.css)

## Sections (in order)
1. Hero — "I wanted to become everything." / "and somewhere I forgot." Subtle breathing only.
2. Ballet — ankle + pointe shoe (no full ballerina), lace ribbon unravels on scroll via gravity.
3. Ambitions — layered handwritten words (law, dance, medicine, architecture...) faded/rotated/overlapping.
4. Fish — 3 illustrated fish on canvas (butterfly koi glides, ranchu rises slowly, koi arcs). They orbit the text once, leave lace trails, then disperse.
5. Debate — dark section, ornate ceiling SVG, slow 2–3° rotation across scroll. Viewer lying on the floor looking up.
6. Envelope — opens automatically at ~60% viewport. Flap opens, letter rises, "... remember me?" fades in. Then stillness.

## Lace
Lace is the visual language throughout — dividers, corners, overlays, masks, trails.
As the page progresses, lace slowly unravels. Always SVG-drawn, never raster images.

## Progressive undoing
The page becomes more undone as it goes. Beginning: aligned, structured, minimal.
Later: lace unravels, layouts loosen, text drifts, burgundy grows more present.
By the envelope, it should feel like memory has quietly taken over.

## Recurring tagline
"... remember me?" — always dusty pink (#d4a0a8), italic, small. Discovered, not announced.

## Layout
Huge whitespace. Every section is a magazine spread.
One visual, one sentence, one animation, one emotion. Never overcrowd.

## What to avoid
- Generic fade-up animations
- Elastic / bouncy easing
- Excessive scaling, cartoon motion
- Any sans-serif font
- Borders or UI chrome that feels like a generic website

## Build approach
Each section is stubbed in index.html (TODO comments) and main.js (commented init functions).
Build one section at a time. Uncomment its init call in main.js as you complete it.

## Director's note
Don't impress through technical complexity. Move people through restraint.
If forced to choose between spectacle and emotion, always choose emotion.
