import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './sections/Hero'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import { profile } from './data/cvData'

// Lazy-loaded sections — lighter initial bundle
const About        = lazy(() => import('./sections/About'))
const Expertise    = lazy(() => import('./sections/Expertise'))
const Projects     = lazy(() => import('./sections/Projects'))
const Achievements = lazy(() => import('./sections/Achievements'))
const Leadership   = lazy(() => import('./sections/Leadership'))
const Interests    = lazy(() => import('./sections/Interests'))
const Contact      = lazy(() => import('./sections/Contact'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

function SectionFallback() {
  return (
    <div className="py-24 flex justify-center">
      <div className="w-8 h-8 border-2 border-gold/40 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Expertise />
        <Projects />
        <Achievements />
        <Leadership />
        <Interests />
        <Contact />
      </Suspense>
    </main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={
            <Suspense fallback={<SectionFallback />}>
              <ProjectDetail />
            </Suspense>
          } />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-obsidian relative">
        <AnimatedBackground />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
