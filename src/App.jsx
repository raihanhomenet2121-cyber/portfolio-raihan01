import { createContext, useContext, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './sections/Hero'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import SectionFallback from './components/SectionFallback'
import { useSanity, QUERIES } from './hooks/useSanity'

const About         = lazy(() => import('./sections/About'))
const Expertise     = lazy(() => import('./sections/Expertise'))
const Projects      = lazy(() => import('./sections/Projects'))
const Achievements  = lazy(() => import('./sections/Achievements'))
const Leadership    = lazy(() => import('./sections/Leadership'))
const Interests     = lazy(() => import('./sections/Interests'))
const Contact       = lazy(() => import('./sections/Contact'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

// ---- Data context ----
const SiteDataContext = createContext({ profile: null, loading: true })
export const useSiteData = () => useContext(SiteDataContext)

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
          <Route path="/project/:slug" element={
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
  const [data, loading] = useSanity([
    QUERIES.profile, QUERIES.projects, QUERIES.achievements, QUERIES.organizations,
    QUERIES.education, QUERIES.interests, QUERIES.skillCategories, QUERIES.proficiency,
  ])

  const siteData = {
    profile: data[0],
    projects: data[1] ?? [],
    achievements: data[2] ?? [],
    organizations: data[3] ?? [],
    education: data[4] ?? [],
    interests: data[5] ?? [],
    skillCategories: data[6] ?? [],
    proficiency: data[7] ?? [],
    loading,
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian">
        <AnimatedBackground />
        <div className="flex flex-col items-center gap-5 z-10">
          <div className="w-10 h-10 border-2 border-gold/60 border-t-transparent rounded-full animate-spin" />
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold/60">
            Opening the Chronicles...
          </p>
        </div>
      </div>
    )
  }

  return (
    <SiteDataContext.Provider value={siteData}>
      <BrowserRouter>
        <div className="min-h-screen bg-obsidian relative">
          <AnimatedBackground />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </SiteDataContext.Provider>
  )
}
