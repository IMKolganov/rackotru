import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyModal from './components/PrivacyModal'
import { resolveInitialHash } from './utils/scroll'

export default function App() {
  useEffect(() => {
    resolveInitialHash()
  }, [])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow--left" aria-hidden="true" />
      <div className="bg-glow bg-glow--right" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <PrivacyModal />
    </>
  )
}
