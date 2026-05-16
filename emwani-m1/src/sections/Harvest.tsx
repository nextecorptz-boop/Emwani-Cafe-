import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Harvest = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const selectionRef = useRef<HTMLDivElement>(null)
  const processingRef = useRef<HTMLDivElement>(null)
  const dryingRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 769
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (isMobile || prefersReducedMotion) {
        gsap.set([selectionRef.current, processingRef.current, dryingRef.current], {
          opacity: 1,
          y: 0,
        })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=180%',
          pin: true,
          scrub: 1,
        },
      })

      // Phase 1: Cherry Selection (0–33%)
      tl.fromTo(selectionRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.3 }, 0)
        .to(selectionRef.current, { opacity: 0, y: -40, duration: 0.2 }, 0.33)

        // Phase 2: Processing (33–66%)
        .fromTo(processingRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.3 }, 0.33)
        .to(processingRef.current, { opacity: 0, y: -40, duration: 0.2 }, 0.66)

        // Phase 3: Drying (66–100%)
        .fromTo(dryingRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.3 }, 0.66)

      console.log('[HARVEST] Pin created: +=180vh, 3 phases (selection → processing → drying)')
    },
    { scope: sectionRef, dependencies: [] },
  )

  return (
    <section ref={sectionRef} id="harvest" className="relative w-full h-screen overflow-hidden">
      {/* Fixed Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-green-600/30 to-char-1000 flex items-center justify-center"
      >
        <div className="text-bone-100/20 font-body text-sm">[Highland Coffee Plantation Background]</div>
      </div>

      {/* Overlay Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Phase 1: Cherry Selection */}
        <div ref={selectionRef} className="absolute inset-0 flex items-center justify-center px-6 opacity-0">
          <div className="max-w-2xl text-center">
            <h3 className="font-editorial text-4xl md:text-5xl text-bone-100 mb-6">Selective Hand Picking</h3>
            <p className="font-body text-lg text-bone-100 leading-relaxed">
              Only ripe, deep-red cherries are harvested. Each picker moves through the rows multiple times per season,
              selecting fruit at peak maturity. This labor-intensive process ensures uniformity and sweetness in the
              final cup.
            </p>
          </div>
        </div>

        {/* Phase 2: Processing */}
        <div ref={processingRef} className="absolute inset-0 flex items-center justify-center px-6 opacity-0">
          <div className="max-w-2xl text-center">
            <h3 className="font-editorial text-4xl md:text-5xl text-bone-100 mb-6">Wet Processing</h3>
            <p className="font-body text-lg text-bone-100 leading-relaxed">
              Within hours of harvest, cherries are pulped to remove the outer skin. The beans, still coated in sticky
              mucilage, ferment in water tanks for 12–36 hours. This critical step develops the bright acidity that
              defines our profile.
            </p>
          </div>
        </div>

        {/* Phase 3: Drying */}
        <div ref={dryingRef} className="absolute inset-0 flex items-center justify-center px-6 opacity-0">
          <div className="max-w-2xl text-center">
            <h3 className="font-editorial text-4xl md:text-5xl text-bone-100 mb-6">Sun Drying</h3>
            <p className="font-body text-lg text-bone-100 leading-relaxed">
              Parchment beans are spread on raised beds under the highland sun. Workers rake them hourly to ensure even
              drying. Over 10–14 days, moisture content drops to 11%, locking in flavor and preparing the beans for
              storage and export.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
