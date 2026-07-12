import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import ScrollProgress from '@/components/ui/ScrollProgress'
import TechMarquee from '@/components/ui/TechMarquee'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  const { state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [state])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white dark:focus:bg-zinc-50 dark:focus:text-zinc-950"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
