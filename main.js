/* ═══════════════════════════════════════
   DELACED — Issue I
   Interaction & animation
   ═══════════════════════════════════════ */

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  initScrollReveal();
  initBalletRibbon();      // section one
  // initAmbitions();      // TODO: section two
  // initFishCanvas();     // TODO: section three
  // initDebateCeiling();  // TODO: section four
  // initEnvelope();       // TODO: final section
});

/* ─── SCROLL REVEAL ───
   Fades elements in as they enter the viewport.
   Add the `reveal` class in HTML to opt in. */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  els.forEach((el) => obs.observe(el));
}

/* ─── SCROLL PROGRESS HELPER ───
   Returns 0→1 for how far a section has been scrolled through.
   Useful for scroll-driven animations (ribbon, ceiling, fish). */
function sectionProgress(section) {
  const rect = section.getBoundingClientRect();
  const wh = window.innerHeight;
  const sh = section.offsetHeight;
  const scrolled = -rect.top;
  return Math.max(0, Math.min(1, scrolled / (sh - wh + wh * 0.5)));
}

/* ─── SECTION STUBS ───
   Build these one at a time with Claude Code.
   Remember the animation philosophy: drift, float, breathe, unravel.
   Nothing bounces. Nothing pops. */

/* ─── SECTION ONE: BALLET ───
   The satin ribbons fall out of the photographed shoes and unravel as the
   section is scrolled. They are deliberately long: the reveal happens at
   the same rate as a short ribbon would, so the unravelling simply lasts
   longer — the ribbon keeps loosening for most of the section while gravity
   pulls each tail down. */
function initBalletRibbon() {
  const section = document.getElementById('section-ballet');
  const tL  = document.getElementById('tail-left');
  const tR  = document.getElementById('tail-right');
  const tLh = document.getElementById('tail-left-hi');
  const tRh = document.getElementById('tail-right-hi');
  if (!section || !tL) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Anchor points near the photo's lower edge, where the ribbons fall from.
  const anchors = {
    left:  { x: 150, y: 8, dir: -1, phase: 0 },
    right: { x: 210, y: 8, dir:  1, phase: Math.PI },
  };

  const MAX_LEN = 660;   // long ribbon -> a long, slow unravel
  const easeOut = (p) => 1 - Math.pow(1 - p, 3);

  // Build a softly drooping ribbon path from an anchor.
  function buildPath(a, len, sway, t) {
    const segs = 18;
    let d = 'M' + a.x.toFixed(1) + ',' + a.y.toFixed(1);
    for (let i = 1; i <= segs; i++) {
      const u = i / segs;
      const y = a.y + u * len;
      const fall = Math.sin(u * Math.PI * 0.5);          // drift eases in as it falls
      const coil = Math.sin(u * 3.1 + t * 0.7 + a.phase); // gentle living sway
      const x = a.x + sway * u * fall + coil * (5 + u * 7);
      d += ' L' + x.toFixed(1) + ',' + y.toFixed(1);
    }
    return d;
  }

  function setTail(main, hi, a, progress, t) {
    const len   = MAX_LEN * (0.42 + 0.58 * progress);   // lengthens as it unravels
    const sway  = a.dir * (10 + progress * 78);          // loosens outward
    const d = buildPath(a, len, sway, t);
    main.setAttribute('d', d);
    hi.setAttribute('d', d);

    const total  = main.getTotalLength();
    const reveal = easeOut(Math.min(1, progress * 1.05));
    const off    = total * (1 - reveal);
    main.style.strokeDasharray = total;
    main.style.strokeDashoffset = off;
    hi.style.strokeDasharray = total;
    hi.style.strokeDashoffset = off;
  }

  function frame() {
    const p = sectionProgress(section);
    const t = reduce ? 0 : performance.now() / 1000;
    setTail(tL, tLh, anchors.left,  p, t);
    setTail(tR, tRh, anchors.right, p, t);
  }

  if (reduce) {
    // No animation loop: react to scroll only, ribbons settled and still.
    frame();
    window.addEventListener('scroll', frame, { passive: true });
    window.addEventListener('resize', frame);
  } else {
    (function loop() { frame(); requestAnimationFrame(loop); })();
  }
}
// function initAmbitions() { }
// function initFishCanvas() { }
// function initDebateCeiling() { }
// function initEnvelope() { }
