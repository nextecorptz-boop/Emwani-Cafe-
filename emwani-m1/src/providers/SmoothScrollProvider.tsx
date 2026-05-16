import React, { useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 769

    if (isMobile) {
      console.log('[SCROLL] Mobile detected (<769px). Native scroll enabled.')
      return
    }

    const lenis = new Lenis({
      lerp: 0.075,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // ScrollTrigger proxy — lets GSAP pins work with Lenis virtual scroll
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (typeof value === 'number') {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: 'transform',
    })

    function raf(time: number) {
      lenis.raf(time)
      ScrollTrigger.update()
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)

    // Defer refresh until after React has flushed ALL child effects
    // setTimeout(0) pushes to next macrotask — all useGSAP hooks are done by then
    setTimeout(() => {
      ScrollTrigger.refresh()
      console.log('[SCROLL] ScrollTrigger.refresh() complete — all trigger positions recalculated')
    }, 0)

    console.log('[SCROLL] Lenis initialized. lerp=0.075, duration=1.2s')

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lenis.destroy()
      ScrollTrigger.scrollerProxy(document.documentElement, null as any)
    }
  }, [])

  return <>{children}</>
}
