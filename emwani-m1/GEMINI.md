# GEMINI.md — Emwani M1 Execution Rules

## Stack Immutable
- **Build:** Vite 5 + React 18 strict mode + TypeScript strict
- **Motion:** GSAP 3.15 + ScrollTrigger + Lenis 1.3.23
- **3D:** R3F 9.6 + Three.js 0.184 (image sequence only, no postprocessing)
- **CSS:** Tailwind CDN (production: removed; use tokens.css only)
- **Fonts:** Cormorant Garamond (editorial), Manrope (body), Syne (display)

## GSAP Rules (Non-Negotiable)
1. **Import ONLY via @gsap/react:**
   ```ts
   import { useGSAP } from '@gsap/react'
   import gsap from 'gsap'
   ```

2. **Register plugins in main.tsx BEFORE React renders:**
   ```ts
   gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)
   ```

3. **NEVER use gsap inside useEffect()** — always useGSAP hook:
   ```ts
   useGSAP(() => {
     // animation code here
   }, { scope: containerRef, dependencies: [] })
   ```

4. **ScrollTrigger INSIDE gsap.matchMedia()** with mobile guard:
   ```ts
   if (isMobile || isReducedMotion) return
   gsap.matchMedia().add('(min-width: 769px)', () => {
     gsap.to(..., { scrollTrigger: { ... } })
   })
   ```

5. **Animate ONLY these properties:**
   - `transform` (translateX, translateY, scale, rotate)
   - `opacity`
   - `filter` (blur only)
   
   **NEVER animate:** width, height, padding, margin, top, left, position

## Footer (Mandatory)
Every page must include:
```html
<footer>
  <p style="font-size: 0.75rem; color: #999;">
    Unofficial demo concept prepared by Nextec Corp for presentation purposes. 
    Final public deployment requires client approval of copy, images, trademarks, 
    and product information.
  </p>
</footer>
```

## R3F Rules
- `frameloop="demand"` — no continuous render loop
- Call `invalidate()` manually when texture changes
- No bloom, DOF, postprocessing, physics engines
- All texture loading happens in `useTexture()` suspension (let Suspense handle it)
- R3F imports ONLY inside `src/sections/Assembly/AssemblyCanvas.tsx`
- Dynamic import for Assembly section at runtime

## Lenis (Smooth Scroll)
- Desktop (≥769px): enabled, `lerp: 0.075`, `duration: 1.2`
- Mobile (<768px): **disabled entirely**
- All GSAP ScrollTrigger pins: **OFF on mobile**
- `smoothWheel: true`, touch disabled

## Performance Targets
- Initial JS: ≤280KB gzip
- R3F chunk: ≤120KB
- LCP: ≤2.2s
- CLS: <0.05
- Image frames: WebP only, 1280×720, ≤125KB each

## Asset Rules
- **Logos:** `real-emwani-logo.jpg` (nav/footer), `real-emwani-cafe-logo.png` (cafe section)
  - NEVER replace, filter, or transform these files
  - Use as-is, full opacity
- **Product PNGs:** Transparent background, 512×512 minimum
- **Frame sequence:** `/public/assets/assembly/frame_0000.webp` → `frame_0047.webp` (48 total)

## Logging
- Use `console.log('[SECTION_ID]', 'action description')` for motion events
- Log scroll progress updates at 0%, 25%, 50%, 75%, 100%
- Log R3F texture load completion per frame batch

## Accessibility
- All Canvas elements: `aria-hidden="true"`
- Fallback images in `<noscript>` for Assembly
- Reduced motion: check `prefers-reduced-motion` media query, disable all animation
- Color contrast: ≥4.5:1 for body text

## Deployment
- Final build: `npm run build`
- Output: `dist/` folder
- Deploy to Netlify or Vercel (no build step needed, Vite handles it)
- Footer disclaimer must appear on all pages before launch
