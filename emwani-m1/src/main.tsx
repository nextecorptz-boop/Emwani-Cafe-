import React from 'react'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import App from './App'
import '@/styles/tokens.css'
import '@/styles/system.css'
import '@/styles/cinematic.css'

// Register GSAP plugins BEFORE React renders
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)

if (process.env.NODE_ENV === 'development') {
  // ScrollTrigger.defaults({ markers: true })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
