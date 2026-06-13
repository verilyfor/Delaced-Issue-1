/* ═══════════════════════════════════════
   DELACED — Issue I
   Interaction & animation
   ═══════════════════════════════════════ */

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  initScrollReveal();
  // initBalletRibbon();   // TODO: section one
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

// function initBalletRibbon() { }
// function initAmbitions() { }
// function initFishCanvas() { }
// function initDebateCeiling() { }
// function initEnvelope() { }
