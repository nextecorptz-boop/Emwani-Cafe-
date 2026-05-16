import { useRef, useLayoutEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Origin = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Reveal elements outside the GSAP context so StrictMode cleanup cannot revert visibility.
  useLayoutEffect(() => {
    ;[headlineRef, bodyRef, quoteRef, imageRef].forEach(r => {
      if (r.current) r.current.style.visibility = 'visible'
    })
  }, [])

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 769
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const targets = [headlineRef.current, bodyRef.current, quoteRef.current, imageRef.current]

      if (isMobile || prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, x: 0, y: 0 })
        return
      }

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: headlineRef.current, start: 'top 80%', once: true },
        },
      )

      gsap.fromTo(
        bodyRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: bodyRef.current, start: 'top 80%', once: true },
        },
      )

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: quoteRef.current, start: 'top 80%', once: true },
        },
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 75%', once: true },
        },
      )

      console.log('[ORIGIN] ScrollTrigger reveals armed')
    },
    { scope: sectionRef, dependencies: [] },
  )

  return (
    <section
      ref={sectionRef}
      id="origin"
      className="relative w-full min-h-screen bg-char-800 flex items-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2
            ref={headlineRef}
            className="font-editorial text-5xl md:text-6xl text-bone-100 gsap-hidden"
          >
            Our Origin
          </h2>

          <div ref={bodyRef} className="space-y-4 gsap-hidden">
            <p className="font-body text-lg text-bone-100 leading-relaxed">
              Emwani Coffee is born from the volcanic highlands of Tanzania, where altitude, climate,
              and soil combine to produce beans of exceptional character.
            </p>
            <p className="font-body text-lg text-bone-100 leading-relaxed">
              Every cup tells the story of generations of farmers who've refined their craft under
              the shadow of Mount Kilimanjaro, cultivating arabica cherries that carry the terroir
              of East Africa.
            </p>
          </div>

          <div ref={quoteRef} className="border-l-2 border-gold-500 pl-6 gsap-hidden">
            <p className="font-editorial text-xl text-gold-500 italic">
              "Coffee is not just a crop. It is heritage, identity, and the soul of our land."
            </p>
            <p className="font-body text-sm text-bone-100 mt-2">— Leodger Mollel, Founder</p>
          </div>
        </div>

        <div ref={imageRef} className="relative h-96 md:h-[500px] gsap-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-char-1000/40 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-bone-100/30 font-body text-sm">
              [Highland Coffee Farm Image]
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
