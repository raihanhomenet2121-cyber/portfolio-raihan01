import { useEffect, useState } from 'react'
import { client } from './lib/sanityClient'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import AwardsSection from './sections/AwardsSection'
import ContactSection from './sections/ContactSection'

const PROFILE_QUERY    = `*[_type == "profile"][0]{ name, tagline, bio, photo, email, linkedin, github, skills, cvFile }`
const PROJECTS_QUERY   = `*[_type == "project"] | order(order asc){ _id, title, description, images, link, techStack, order, featured }`
const EXPERIENCE_QUERY = `*[_type == "experience"] | order(order asc){ _id, position, company, logo, startDate, endDate, description, type, order }`
const AWARDS_QUERY     = `*[_type == "award"] | order(order asc){ _id, name, issuer, year, images, link, order }`

export default function App() {
  const [profile,     setProfile]     = useState(null)
  const [projects,    setProjects]    = useState([])
  const [experiences, setExperiences] = useState([])
  const [awards,      setAwards]      = useState([])
  const [loading,     setLoading]     = useState(true)

  useEffect(() => {
    Promise.all([
      client.fetch(PROFILE_QUERY),
      client.fetch(PROJECTS_QUERY),
      client.fetch(EXPERIENCE_QUERY),
      client.fetch(AWARDS_QUERY),
    ]).then(([p, pr, ex, aw]) => {
      setProfile(p)
      setProjects(pr)
      setExperiences(ex)
      setAwards(aw)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712]">
      <AnimatedBackground />
      <div className="flex flex-col items-center gap-4 z-10">
        <div className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm tracking-wide">Loading portfolio...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#030712] relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection    profile={profile} />
        <AboutSection   profile={profile} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <AwardsSection  awards={awards} />
        <ContactSection profile={profile} />
      </main>
      <Footer />
    </div>
  )
}
