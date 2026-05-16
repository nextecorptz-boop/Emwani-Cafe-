# Motion Specification — Emwani M1 Cinematic

## Lenis Scroll Physics
```ts
const lenis = new Lenis({
  lerp: 0.075,          // smooth easing factor
  duration: 1.2,        // scroll animation duration (seconds)
  smoothWheel: true,    // smooth mouse wheel
  wheelMultiplier: 1,   // no acceleration boost
  touchMultiplier: 2,   // touch inertia
  infinite: false,      // no infinite scroll
})
```

**Mobile:** Lenis disabled entirely. Native scroll only.

## Easing Vocabulary (GSAP Ease Strings)
| Use Case | Ease | Character |
|----------|------|-----------|
| Reveals (fade-in, slide-up) | `power3.out` | snappy, confident |
| Transitions (section to section) | `power2.inOut` | controlled, smooth |
| Micro-interactions (hover, pulse) | `elastic.out(1, 0.5)` | playful, bouncy |
| Scrollbar scrubbed (real-time) | `none` | linear, immediate |

## Pin Table (Scroll Locked Sections)
| Section | Pin Duration | Notes |
|---------|--------------|-------|
| #hero | — | No pin (full viewport, natural flow) |
| #origin | — | No pin |
| #harvest | `+=180vh` | Child sections: selection, processing |
| #roasting | `+=200vh` | Roast progression animation |
| #grinding | `+=160vh` | Grind particle reveal |
| #brewing | `+=180vh` | Pour loop + steam |
| #assembly | `+=300vh` | R3F image sequence (0→1 progress) |
| #products | — | No pin |
| #cafe | — | No pin |
| #founder | — | No pin |
| #contact | — | No pin |

**Total pinned scroll budget:** 180 + 200 + 160 + 180 + 300 = **1020vh extra**

## Assembly Beat Map (R3F Progress Timeline)
```
Progress   Frame Range   Visual                              Beat Label
─────────────────────────────────────────────────────────────────────
0.00–0.15   0–7        Ripe cherry cluster floats          HARVEST
0.15–0.30   7–14       Cherry→parchment (skin strips)      PROCESSING
0.30–0.45  14–22       Parchment→roasted bean transition   ROASTING
0.45–0.60  22–29       Roasted crack→ground particles      GRINDING
0.60–0.75  29–36       Grounds in dripper cone             ASSEMBLY
0.75–0.88  36–43       Hot water pour→steam rise           BREWING
0.88–1.00  43–48 + DOM Product lineup reveals (Chioda, Ingoma, Drip) PRODUCTS
```

**Total frames:** 48 (0000–0047)  
**Frame rate logic:** `frameIndex = Math.floor(progress * 47)`

## Section Scroll Order
1. Hero (full viewport, fade-in text)
2. Origin (story, image reveals)
3. Harvest (pinned, +=180vh, shows cherry picking + selection + processing)
4. Roasting (pinned, +=200vh, shows roast progression)
5. Grinding (pinned, +=160vh, shows grind & texture)
6. Brewing (pinned, +=180vh, shows pour & steam)
7. Assembly (pinned, +=300vh, R3F image sequence + DOM overlay)
8. Products (unpinned, product cards slide in)
9. Cafe (story + logo)
10. Founder (image + bio)
11. Contact (form or CTA)
12. Footer (disclaimer required)

## Scroll Progress Calculation
`useScrollProgress` hook returns `0→1` normalized progress for a section:

```ts
const progress = useScrollProgress({
  trigger: '#assembly',
  start: 'top top',
  pinSpacerSize: '+=300%',
})

// progress.current updates in RAF loop (no re-renders)
// Read in useFrame() or via GSAP ticker callback
```

## Color Palette (From tokens.css)
```css
--char-1000: #0A0807    /* charcoal (darkest) */
--char-800: #1A1612
--char-600: #2A2218
--bone-100: #F6EFDD    /* off-white (lightest) */
--bone-50: #FDFBF7
--gold-500: #C9A86A    /* warm gold accent */
--gold-400: #D4AF37
--green-600: #2D5016   /* olive (origin, harvest tint) */
```

## Typography
| Hierarchy | Font | Size | Weight | Line Height |
|-----------|------|------|--------|-------------|
| Display (hero) | Syne | 72px | 700 | 1.1 |
| Heading 1 | Cormorant Garamond | 48px | 600 | 1.2 |
| Heading 2 | Cormorant Garamond | 36px | 400 | 1.3 |
| Body | Manrope | 16px | 400 | 1.6 |
| Caption | Manrope | 12px | 400 | 1.5 |

## Motion Timings (GSAP Animation Durations)
| Animation Type | Duration | Delay |
|----------------|----------|-------|
| Fade-in reveal | 1.2s | 0–0.4s staggered |
| Section transition | 0.8s | — |
| ScrollTrigger scrub (real-time) | 0 (scrub: 1) | — |
| Hover state | 0.3s | — |
| Product reveal (overlay) | 0.6s | staggered |

## Accessibility
- **Reduced motion:** Check `prefers-reduced-motion: reduce`
  - If enabled: snap all animations to `duration: 0`, skip ScrollTrigger
  - Text still appears, layout unchanged, no visual jarring
- **Color contrast:** All text ≥4.5:1 (WCAG AA)
- **Mobile:** No GSAP animations below 768px (Lenis also disabled)
