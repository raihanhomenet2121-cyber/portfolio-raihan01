import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

// Sanity CLI (sanity dev/deploy) dijalankan di Node.js, sehingga memakai process.env
// Vite (untuk frontend) membaca dari import.meta.env — keduanya dibundle dari file .env
const projectId = process.env.VITE_SANITY_PROJECT_ID || 'ssll9tsi'
const dataset = process.env.VITE_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'raihan-portfolio',
  title: 'Raihan Portfolio CMS',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
