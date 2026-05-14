# Phase 6 — Studio AI Video Prompt Pack
**Project:** Emwani Coffee — Cinematic Brand System
**Author:** Nextec Corp · Cinematic Web Art Direction
**Date:** 2026-05-13
**Status:** Spec only — no production assets generated, no code touched.

This document is a prompt + settings pack for generating two cinematic loop videos in Studio AI. It does not modify the website. After clips are exported, a separate Claude Code phase will wire them in (see §8).

---

## 1 · Current Website Motion Context

### Where these chapters sit in the story
The Emwani site is structured as a 10-chapter scroll narrative. The two chapters that need motion are sandwiched between visually rich neighbors:

| # | Chapter | Section ID | Visual today | Motion today |
|---|---|---|---|---|
| 04 | The Mill | `#processing` | Cream BG, full-bleed drying-bed photo | Slow horizontal pan |
| 05 | The Roastery | `#roasting` | Dark BG, roasting basket, animated steam SVG | GSAP pin + CSS steam |
| **06** | **Precision** | **`#grinding`** | **Dark BG, headline only** | **None — placeholder** |
| **07** | **The Pour** | **`#brewing`** | **Coffee BG → cream tween, headline only** | **GSAP pin + bg color scrub** |
| 08 | The Collection | `#products` | Cream BG, three locked product cards | Stagger reveal |

So Chapter 06 sits between the warm pinned roastery and the heroic locked product collection. Chapter 07 is the last sensory beat before the viewer meets the product packs. **These two clips are the bridge from craft → object.**

### Visual rhythm before and after
- **Before (Ch. 04–05):** warm cream tones, raised drying beds, dark roastery with golden SVG steam — texture-rich, slow, contemplative.
- **The two new clips (Ch. 06–07):** must keep that meditative cadence. Grinding = mechanical precision. Pouring = release.
- **After (Ch. 08):** the product cards arrive on cream — bright, still, confident.

Motion must therefore *decelerate into stillness*, not crescendo. The viewer should feel the ritual ending just before they meet the product.

### Why slow, calm, premium
- Brand voice is heritage and ritual ("a ritual of welcome"). Hectic motion breaks the spell.
- Scroll-pinned context: clips will be visible for 1.5–2.5 viewport heights of pinned scroll. Anything kinetic loops awkwardly under user-controlled scroll.
- Field-presentation context: the deck will run on a projector in a quiet room. Snappy motion reads as a TV ad; slow motion reads as a brand film.
- Loop-friendliness: low motion intensity = invisible loop seam.

---

## 2 · Recommended Studio AI Settings

### Clip A — `grinding-assembly-loop`

| Setting | Value |
|---|---|
| **Model** | SeeDance 2.0 (primary) — fall back to Kling 3.0 if mechanical motion warps (see §6) |
| **Director Mode composition** | Right-of-center subject placement, ~⅔ of frame is the grinder body and bean stream; left ⅓ is dark negative space |
| **Lighting** | Single warm key from camera-right at ~30°, deep falloff into espresso shadow on left; subtle leaf-green rim from rear-left |
| **Shot size** | Medium close-up — grinder spout and falling grounds fill ~40% of frame |
| **Lens** | 50mm equivalent, shallow depth of field (f/2.0 look) |
| **Movement** | Locked-off camera. No dolly. No pan. Only the grounds and burr motion live. |
| **Motion intensity** | 2/10 — barely-there |
| **Easing** | Linear inside the loop (so the seam is invisible); no ramp-in / ramp-out |
| **Aspect ratio** | 16:9 |
| **Duration** | 6 s (target loop length) |
| **Resolution — test** | 720p |
| **Resolution — final** | 1080p, then transcode to 1280×720 WebM for delivery |
| **Use uploaded reference image?** | Yes — recommended for color/lighting lock |
| **Reference image to upload** | `assets/story/roasting-basket-premium.webp` (matches the chapter that precedes it — same warm key + dark surround) |

### Clip B — `brewing-pour-loop`

| Setting | Value |
|---|---|
| **Model** | SeeDance 2.0 (primary) — Kling 3.0 if liquid behaves unrealistically |
| **Director Mode composition** | Pour-over kettle and dripper sit right-of-center; bone-cream cup is centered under dripper; left ⅓ is dark negative space for headline overlay |
| **Lighting** | Warm golden side light from camera-right, low; gentle top kicker on the steam plume; deep espresso ambient |
| **Shot size** | Medium — cup base to top of steam plume just inside frame |
| **Lens** | 85mm equivalent, shallow depth of field (background creamy and dark) |
| **Movement** | Locked-off camera. No push-in. Only liquid + steam live. |
| **Motion intensity** | 3/10 — pour stream visible, steam slow, bloom forming |
| **Easing** | Linear inside loop; pour stream is continuous to enable seamless loop |
| **Aspect ratio** | 16:9 |
| **Duration** | 7 s (target loop length) |
| **Resolution — test** | 720p |
| **Resolution — final** | 1080p, then transcode to 1280×720 WebM for delivery |
| **Use uploaded reference image?** | Yes |
| **Reference image to upload** | `assets/story/farmer-cherries-portrait-premium.webp` (for warm-tone palette anchor) OR a hand-picked frame from the existing `cherry-selection-closeup.webp` if available — purpose is palette lock, not subject match |

---

## 3 · Prompt — `grinding-assembly-loop`

```
A cinematic, slow-motion macro shot of premium coffee being ground.
The frame is 16:9. The left third of the frame is intentional negative
space — deep espresso black with the faintest deep-forest green
undertone, soft and out of focus. Right of center, a brushed dark
metal grinder spout releases a fine, even stream of freshly ground
Tanzanian coffee, the grounds rich chocolate brown with golden
highlights catching a warm low side light from camera-right. Single
warm key light at roughly 30 degrees, golden honey color temperature,
falling off rapidly into the espresso shadow. A subtle deep emerald
rim grazes the back-left edge of the grinder, hinting at heritage
green without ever becoming literal. Shallow depth of field, 50mm
lens look, f/2 background separation. The camera is locked off — no
pan, no dolly, no shake. Only the grounds fall and the burr inside
hints at rotation. Texture is hyper-real: every particle distinct,
soft motion blur on the falling stream. The mood is reverent, slow,
ceremonial — Tanzanian coffee heritage rendered as a still life that
breathes. Premium editorial film grain. No text. No logos. No
packaging. No people. No watermark. Loop-ready: the grounds fall
continuously so the loop seam is invisible.
```

**Composition reminders for Director Mode:**
- Subject anchor: right-of-center, lower third
- Negative space: left third, top half
- Color palette anchors: `#0A0807` (espresso black), `#0C2A1C` (Emwani green undertone), `#C9A86A` (warm key highlight), `#5A3621` (coffee brown grounds)

---

## 4 · Prompt — `brewing-pour-loop`

```
A cinematic, slow pour-over coffee brewing scene. 16:9 frame. The
left third is intentional negative space — deep espresso black,
softly graded, completely empty so a headline can sit there. Right
of center, a matte black gooseneck kettle pours a thin continuous
stream of hot water into a ceramic dripper resting on a bone-cream
ceramic cup. The dripper holds Tanzanian coffee grounds that bloom
gently — a slow swelling crema dome rising and breathing. Soft
white steam rises in a thin lazy ribbon, drifting up and slightly
to the right, catching a warm golden side light from camera-right.
The cup is bone cream, matte glaze, no logo, no decoration. Behind
it, a deep espresso background, completely out of focus, with a
faint warm vignette. 85mm lens look, very shallow depth of field,
the cup edge tack-sharp and the background dissolving into shadow.
Camera is locked off — no movement at all. The only motion is the
pour stream, the bloom, and the steam. The mood is meditative,
ritual, generous, premium. A pause before the world begins. No
text. No logos. No fake brand marks on the cup or kettle. No human
faces in frame — if a hand appears, it is only a softly lit
silhouette of fingers on the kettle handle, far from the lens, out
of focus. No watermark. Loop-ready: the pour is continuous and the
liquid level in the cup does not visibly rise so the loop seam is
invisible.
```

**Composition reminders for Director Mode:**
- Subject anchor: right-of-center; cup base on lower-third line
- Negative space: left third, full height
- Color palette anchors: `#0A0807` (espresso black), `#F6EFDD` (bone cream cup), `#C9A86A` (warm key), `#5E150E` (deep heritage red shadow tint at edges)

---

## 5 · Negative Prompt / Prevention Block (reusable for both clips)

```
no text, no captions, no subtitles, no on-screen typography,
no watermark, no studio logo, no brand marks, no fake product
labels, no fictional packaging, no distorted bottles or bags,
no human faces, no eyes, no mouth, no full bodies, no hands
holding the camera, no messy kitchen, no domestic clutter, no
bright generic Starbucks-style café, no fluorescent lighting,
no daylight window flare, no cartoon style, no anime, no 3D
render look, no plastic CGI sheen, no overdramatic billowing
smoke, no fire, no sparks, no fast cuts, no jump cuts, no
zoom, no dolly, no camera shake, no handheld jitter, no
rolling shutter, no unrealistic physics, no levitating
objects, no exaggerated splashes, no oversaturated colors, no
neon, no rainbow gradients, no AI-generated artifacts, no warped
geometry, no extra fingers, no duplicated objects, no morphing
edges, no flickering frames.
```

Paste this block into the negative prompt field for **both** generations unchanged.

---

## 6 · Coin-Saving Generation Protocol

The brand's restraint applies to spend, too. Treat each generation as expensive.

### Hard rules
1. **One test per clip first.** Never queue two variations on a fresh prompt.
2. **720p only for the test.** Do not commit final-resolution coins until composition + motion is approved by eye.
3. **8 seconds maximum** per generation. Loops should be 6–7 s; 8 s gives one second of trim margin.
4. **Inspect before regenerating.** Open the test in a paused video player, scrub frame-by-frame, and check the failure table below before spending another coin.
5. **Final resolution only after test passes** every check in §6.4.

### 6.1 — Failure type → adjustment table

| Failure observed in test | Likely cause | Prompt adjustment | Setting adjustment |
|---|---|---|---|
| Camera drifts or pushes in | Model assumed cinematic dolly | Add: *"locked-off tripod, zero camera movement, static frame"* | Lower motion intensity by 1; if persists, switch to Kling 3.0 |
| Subject placed center, no negative space | Composition keyword too weak | Add: *"subject occupies right two-thirds of frame, left one-third is empty negative space"* | Use Director Mode composition handles |
| Steam too thick / billowing | Motion intensity too high | Add: *"thin lazy ribbon of steam, barely visible, drifts upward only"* | Drop motion intensity to 2 |
| Pour stream breaks or stutters | Liquid physics weak in current model | Switch to **Kling 3.0** — better fluid sim |
| Color too warm / orange | Key light over-saturated | Add: *"muted golden honey light, not orange, restrained warmth"* | — |
| Color too cool / silver | Reference image not anchoring | Re-upload reference image; add: *"warm tungsten 3200K key"* | — |
| Faces or hands appear despite negative prompt | Negative prompt ignored | Move face/hand bans to **positive** prompt: *"frame contains only objects, no humans visible"* | — |
| Visible loop seam at end | Action has start/end states | Add: *"continuous action, no beginning, no end, mid-action throughout"* | Lower duration to 6 s |
| Text or logo hallucinated on cup/kettle | Surface detail bias | Add to positive: *"matte unmarked surface, completely plain, no decoration"* | — |
| Cartoon / 3D render look | Wrong style bias | Add: *"35mm film, photographic, editorial cinematography, real-world physics"* | — |
| Warped geometry on grinder | Mechanical complexity | Switch to **Kling 3.0** — handles rigid mechanical objects better |

### 6.2 — When to switch from SeeDance 2.0 → Kling 3.0
Switch after **one** failed test, not two, if any of the following appear:
- Liquid stream that breaks, sputters, or floats (brewing clip)
- Mechanical part that warps, melts, or duplicates (grinding clip)
- Persistent camera drift even after locked-off prompt addition

Otherwise stay on SeeDance 2.0 — it produces a softer, more editorial frame that matches the brand.

### 6.3 — Approval gate before final resolution
Before spending coins on the 1080p export, the 720p test must pass **all** of:
- [ ] Composition: subject right-of-center, left third empty
- [ ] Camera locked, zero drift
- [ ] Color palette matches reference (warm key, espresso shadow)
- [ ] No text, no faces, no logos
- [ ] Loop seam invisible when played end → start
- [ ] Motion feels meditative, not advertising

### 6.4 — Coin budget
- 2 clips × 1 test (720p, ≤ 8 s) = **2 test generations**
- 2 clips × 1 final (1080p, ≤ 8 s) = **2 final generations**
- Hard ceiling: **6 generations total** (allows 1 retry per clip if test fails). Stop and re-plan if exceeded.

---

## 7 · Final Filename Plan

After approval and transcoding, deliver to disk at exactly:

| Asset | Final path |
|---|---|
| Grinding video | `assets/story/video/grinding-assembly-loop.mp4` |
| Brewing video | `assets/story/video/brewing-pour-loop.mp4` |
| Grinding poster | `assets/story/posters/grinding-assembly-poster.webp` |
| Brewing poster | `assets/story/posters/brewing-pour-poster.webp` |

### Export specs
- **Container:** MP4 (H.264 high profile, faststart moov atom for streaming) — matches `.mp4` filename. *(If you choose `.webm` later, regenerate the Phase 6 motion blueprint reference accordingly.)*
- **Codec:** H.264, CRF 22, no B-frames in keyframe pattern that breaks loop
- **Audio:** none — strip the audio track entirely. Verify with `ffprobe`.
- **Resolution:** 1280 × 720
- **Frame rate:** 24 fps
- **Bitrate target:** ≤ 2.5 MB total file size per clip
- **Posters:** WebP, quality 80, 1280 × 720, ≤ 120 KB each. Pulled from a representative mid-loop frame.

---

## 8 · Implementation Note for Later Claude Code Phase

> **Do not implement now.** This section exists so the next Claude Code session has unambiguous wiring instructions.

After the four files above land on disk, a follow-up Claude Code task should insert the videos into `website.html` per the Phase 6 Motion Blueprint. The wiring contract:

- **Element:** `<video>` inside a `<figure data-cinematic-video>` panel.
- **Required attributes:** `muted`, `loop`, `playsinline`, `preload="metadata"` (override the blueprint's `preload="none"` only if posters need network confirmation; otherwise keep `none`).
- **Fallback:** sibling `<img>` with the matching poster, always present, always loaded with `loading="lazy"`. If the video fails or is suppressed, the poster is what the viewer sees.
- **Playback control:** an IntersectionObserver at threshold ~0.35 calls `play()` when the panel enters view and `pause()` when it leaves. Wrap `play()` in `.catch()` to handle autoplay blocks gracefully.
- **Reduced-motion fallback:** at init, check `matchMedia('(prefers-reduced-motion: reduce)')` — if true, mark the panel `.is-static` and never attach a `src`. CSS `@media (prefers-reduced-motion: reduce) { .cinematic-video__el { display: none !important; } }` is the backstop.
- **Mobile fallback:** at init, check `matchMedia('(max-width: 768px)')` — if true, mark `.is-static`, do not load video bytes. Mobile gets posters only.
- **Insertion points:**
  - `grinding-assembly-loop` → inside `#grinding`, beneath the existing `.reveal` headline div.
  - `brewing-pour-loop` → inside `#brewing`, beneath the existing `.reveal` headline div, *without* removing the existing GSAP pin or background-color tween.
- **Do not touch:** the product section, the footer disclaimer, the navigation, the Café logo placement, or any existing reveal logic.

Refer to `PHASE_6_MOTION_BLUEPRINT.html` for the exact HTML/CSS/JS shape and the QA checklist that wiring must pass.

---

*End of prompt pack. No website files modified by this document.*
