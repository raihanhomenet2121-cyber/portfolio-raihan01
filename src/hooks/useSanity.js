import { useEffect, useState } from 'react'
import { client } from '../lib/sanityClient'

/**
 * Central GROQ queries — single source of truth for all fetches.
 */
export const QUERIES = {
  profile: `*[_type == "profile"][0]{
    name, title, epithet, chronicle, motto, principle, location,
    summary, philosophy, photo, email, linkedin, instagram, cvFile
  }`,
  projects: `*[_type == "project"] | order(order asc){
    _id, title, slug, numeral, year, client, type,
    overview, problem, objectives, role, process,
    images, tech, link, featured, order
  }`,
  achievements: `*[_type == "award"] | order(order asc){
    _id, name, category, year, images, link, order
  }`,
  organizations: `*[_type == "organization"] | order(order asc){
    _id, role, org, period, type, contribution, logo, order
  }`,
  education: `*[_type == "education"] | order(order asc){
    _id, period, institution, detail, order
  }`,
  interests: `*[_type == "interest"] | order(order asc){
    _id, name, icon, order
  }`,
  skillCategories: `*[_type == "skillCategory"] | order(order asc){
    _id, name, icon, skills, order
  }`,
  proficiency: `*[_type == "proficiency"] | order(order asc){
    _id, name, level, order
  }`,
}

/**
 * useSanity — fetch one or many queries in parallel.
 * Returns [data, loading] where data is an array matching query order.
 */
export function useSanity(queries) {
  const [data, setData] = useState(() => queries.map(() => null))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    Promise.all(queries.map(q => client.fetch(q)))
      .then(results => {
        if (!alive) return
        setData(results)
        setLoading(false)
      })
      .catch(err => {
        console.error('Sanity fetch error:', err)
        if (alive) setLoading(false)
      })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, loading]
}
