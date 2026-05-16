import { useRef, useLayoutEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLParagraphElement>(null)

  // Reveal elements outside the GSAP context so StrictMode cleanup cannot revert visibility.
  useLayoutEffect(() => {
    ;[titleRef, subtitleRef, ctaRef].forEach(r => {
      if (r.current) r.current.style.visibility = 'visible'
    })
  }, [])

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 769
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (isMobile || prefersReducedMotion) {
        gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
          opacity: 1,
          y: 0,
        })
        return
      }

      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' },
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8',
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
          '-=0.6',
        )

      console.log('[HERO] Stagger fired: title → subtitle → cta')
    },
    { scope: containerRef, dependencies: [] },
  )

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-char-1000 overflow-hidden"
    >
      <div className="text-center px-4 max-w-4xl">
        <h1
          ref={titleRef}
          className="font-display text-6xl md:text-7xl lg:text-8xl text-bone-100 mb-6 gsap-hidden"
        >
          Emwani Coffee
        </h1>
        <p
          ref={subtitleRef}
          className="font-editorial text-2xl md:text-3xl text-gold-500 mb-8 gsap-hidden"
        >
          From the Highlands of Tanzania
        </p>
        <p ref={ctaRef} className="font-body text-base md:text-lg text-bone-100 gsap-hidden">
          Scroll to explore the journey
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gold-500/30" />
        <span className="font-body text-xs text-bone-100/50 uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  )
}
