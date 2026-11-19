import { useEffect, useState } from 'react'
import { client } from './lib/sanityClient'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import AwardsSection from './sections/AwardsSection'
import ContactSection from './sections/ContactSection'

const PROFILE_QUERY = `*[_type == "profile"][0]{
  name, tagline, bio, photo, email, linkedin, github, skills, cvFile
}`

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc){
  _id, title, description, images, link, techStack, order, featured
}`

const EXPERIENCE_QUERY = `*[_type == "experience"] | order(order asc){
  _id, position, company, logo, startDate, endDate, description, type, order
}`

const AWARDS_QUERY = `*[_type == "award"] | order(order asc){
  _id, name, issuer, year, images, link, order
}`

export default function App() {
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])
  const [awards, setAwards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      client.fetch(PROFILE_QUERY),
      client.fetch(PROJECTS_QUERY),
      client.fetch(EXPERIENCE_QUERY),
      client.fetch(AWARDS_QUERY),
    ]).then(([profileData, projectsData, experiencesData, awardsData]) => {
      setProfile(profileData)
      setProjects(projectsData)
      setExperiences(experiencesData)
      setAwards(awardsData)
      setLoading(false)
    }).catch((err) => {
      console.error('Sanity fetch error:', err)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <AwardsSection awards={awards} />
        <ContactSection profile={profile} />
      </main>
      <Footer />
    </div>
  )
}
