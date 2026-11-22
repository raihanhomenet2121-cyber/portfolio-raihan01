import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
  },
  studioHost: 'raihan-portfolio',
  deployment: {
    appId: 'edocsfm58n8pjilq49ilsojk',
  },
})
