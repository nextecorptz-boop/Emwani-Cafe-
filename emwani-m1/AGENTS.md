# AGENTS.md — Execution Manifest for Claude Code

## Before Touching Any File
1. Read GEMINI.md (rules are immutable)
2. Read docs/motion-spec.md (scroll physics are locked)
3. Review section ownership map below
4. One section = one commit

## File Ownership (One Owner Per File)
```
src/main.tsx                           → ENTRY (register plugins, import styles)
src/App.tsx                            → ORCHESTRATOR (sections only, no logic)
src/styles/tokens.css                  → DESIGN TOKENS (read-only reference)
src/styles/system.css                  → BASE LAYOUT
src/styles/cinematic.css               → ANIMATION HELPERS
src/providers/SmoothScrollProvider.tsx → SCROLL ENGINE (Lenis + ScrollTrigger proxy)
src/providers/GSAPProvider.tsx         → GSAP CONTEXT (if needed)
src/sections/Hero.tsx                  → HERO (+ motion)
src/sections/Origin.tsx                → ORIGIN STORY (+ motion)
src/sections/Harvest.tsx               → HARVEST (pinned, +=180vh)
src/sections/CherrySelection.tsx       → SELECTION (child of Harvest)
src/sections/Processing.tsx            → PROCESSING (child of Harvest)
src/sections/Roasting.tsx              → ROASTING (pinned, +=200vh)
src/sections/Grinding.tsx              → GRINDING (pinned, +=160vh)
src/sections/Brewing.tsx               → BREWING (pinned, +=180vh)
src/sections/Assembly/Assembly.tsx     → ASSEMBLY WRAPPER (lazy-loaded R3F)
src/sections/Assembly/AssemblyCanvas.tsx → R3F ONLY
src/sections/Assembly/ImageSequence.tsx → TEXTURE ENGINE
src/sections/Assembly/ProductOverlay.tsx → DOM OVERLAY
src/sections/Products.tsx              → PRODUCT SHOWCASE
src/sections/Cafe.tsx                  → CAFE (+ logo integration)
src/sections/Founder.tsx               → FOUNDER STORY
src/sections/Contact.tsx               → CONTACT FORM
src/components/Nav.tsx                 → NAVIGATION
src/components/Footer.tsx              → FOOTER (+ disclaimer)
src/hooks/useScrollProgress.ts         → SCROLL PROGRESS (0→1, no re-renders)
src/hooks/useInView.ts                 → INTERSECTION OBSERVER
src/hooks/useMediaQuery.ts             → MEDIA QUERY HOOK
vite.config.ts                         → BUILD CONFIG (locked)
tsconfig.json                          → TS CONFIG (locked)
```

## GSAP Pattern (Copy-Paste Template)
```ts
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const MySection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    // Mobile/reduced motion check
    if (window.innerWidth < 769 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    // Animation code
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        once: true,
      },
    })
  }, { scope: containerRef, dependencies: [] })

  return (
    <section ref={containerRef} className="relative">
      {/* content */}
    </section>
  )
}
```

## Commit Message Format
```
[section-id] verb(noun): detail

Examples:
[hero] animate(fade-reveal): text + image stagger
[assembly] load(textures): frame 0-15 preload + suspense
[footer] add(disclaimer): mandatory legal text
[build] config(vite): code splitting + manualChunks
```

## Roll-Out Order
1. **[entry]** main.tsx + App.tsx (scaffold)
2. **[styles]** tokens.css + system.css + cinematic.css
3. **[providers]** SmoothScrollProvider + GSAPProvider
4. **[nav-footer]** Nav.tsx + Footer.tsx
5. **[hero]** Hero.tsx (first visible section, motion test)
6. **[origin]** Origin.tsx (story, fades)
7. **[harvest]** Harvest.tsx + children (first pinned section, +=180vh)
8. **[roasting]** Roasting.tsx (+=200vh pin)
9. **[grinding]** Grinding.tsx (+=160vh pin)
10. **[brewing]** Brewing.tsx (+=180vh pin)
11. **[assembly]** Assembly.tsx wrapper → R3F engine → texture loading → overlay
12. **[products]** Products.tsx (post-assembly reveal)
13. **[cafe]** Cafe.tsx (logo, story)
14. **[founder]** Founder.tsx (image + bio)
15. **[contact]** Contact.tsx (form or CTA)
16. **[hooks]** useScrollProgress, useInView, useMediaQuery (as needed)

## Testing Checklist Per Section
- [ ] Renders without errors
- [ ] Mobile (<768px) shows no GSAP motion
- [ ] Desktop: motion triggers at scroll
- [ ] ScrollTrigger pins correctly (visual alignment)
- [ ] Console logs appear at progress 0%, 25%, 50%, 75%, 100%
- [ ] Reduced motion: prefers-reduced-motion media query respected
- [ ] Images load (no 404s, check Network tab)
- [ ] No CLS (Cumulative Layout Shift)

## R3F Assembly Blocking
Do NOT build Assembly until:
- [ ] `public/assets/assembly/frame_0000.webp` → `frame_0047.webp` exist
- [ ] `public/assets/products/studio/*-transparent.png` exist
- [ ] `src/hooks/useScrollProgress.ts` complete
- [ ] `src/providers/SmoothScrollProvider.tsx` complete and tested on Brewing section

## Known Issues & Workarounds
| Issue | Workaround |
|-------|-----------|
| React 19 + r3f peer warnings | Add `legacy-peer-deps=true` in .npmrc if needed |
| Lenis interfering with ScrollTrigger | Proxy is in SmoothScrollProvider—test on Harvest first |
| Frame texture flicker | Use `needsUpdate = true` + `invalidate()` only on change |
| Canvas blurry on mobile | Don't render Canvas on mobile; use poster image |
