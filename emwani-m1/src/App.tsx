import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'
import { Hero } from '@/sections/Hero'
import { Origin } from '@/sections/Origin'
import { Harvest } from '@/sections/Harvest'

export default function App() {
  return (
    <SmoothScrollProvider>
      <main className="relative w-full bg-char-1000">
        <Hero />
        <Origin />
        <Harvest />

        <section id="roasting" className="relative min-h-screen flex items-center justify-center bg-char-800">
          <h2 className="text-4xl font-editorial text-bone-100">Roasting</h2>
        </section>

        <section id="grinding" className="relative min-h-screen flex items-center justify-center bg-char-600">
          <h2 className="text-4xl font-editorial text-bone-100">Grinding</h2>
        </section>

        <section id="brewing" className="relative min-h-screen flex items-center justify-center bg-char-800">
          <h2 className="text-4xl font-editorial text-bone-100">Brewing</h2>
        </section>

        <section id="assembly" className="relative min-h-screen flex items-center justify-center bg-char-600">
          <h2 className="text-4xl font-editorial text-bone-100">Assembly (R3F)</h2>
        </section>

        <section id="products" className="relative min-h-screen flex items-center justify-center bg-char-800">
          <h2 className="text-4xl font-editorial text-bone-100">Products</h2>
        </section>

        <section id="contact" className="relative min-h-screen flex items-center justify-center bg-char-600">
          <h2 className="text-4xl font-editorial text-bone-100">Contact</h2>
        </section>

        <footer className="bg-char-1000 text-bone-100 py-8 px-4 text-center">
          <p style={{ fontSize: '0.75rem', color: '#999' }}>
            Unofficial demo concept prepared by Nextec Corp for presentation purposes. Final public deployment requires
            client approval of copy, images, trademarks, and product information.
          </p>
        </footer>
      </main>
    </SmoothScrollProvider>
  )
}
