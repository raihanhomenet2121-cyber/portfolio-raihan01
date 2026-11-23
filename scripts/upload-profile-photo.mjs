/**
 * Upload docs/logocv.png as a Sanity image asset and patch it into profile-main.photo.
 * Usage: node scripts/upload-profile-photo.mjs
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { createClient } from '@sanity/client'

// Minimal .env parser (dotenv is not a dependency)
const env = Object.fromEntries(
  fs.readFileSync(path.resolve('.env'), 'utf8')
    .split(/\r?\n/)
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => {
      const idx = line.indexOf('=')
      return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()]
    })
)

// Prefer the Sanity CLI auth token (project owner) over the Viewer token in .env
let token = env.VITE_SANITY_TOKEN
try {
  const cliConfig = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.config', 'sanity', 'config.json'), 'utf8'))
  if (cliConfig.authToken) token = cliConfig.authToken
} catch { /* fall back to .env token */ }

const client = createClient({
  projectId: env.VITE_SANITY_PROJECT_ID,
  dataset: env.VITE_SANITY_DATASET || 'production',
  apiVersion: env.VITE_SANITY_API_VERSION || '2024-01-01',
  token,
  useCdn: false,
})

const filePath = path.resolve('docs/logocv.png')
if (!fs.existsSync(filePath)) {
  console.error('File not found:', filePath)
  process.exit(1)
}

console.log('Uploading', filePath, `(${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB)...`)

const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
  filename: 'profile-raihan.png',
})

console.log('Asset uploaded:', asset._id)

await client.patch('profile-main').set({ photo: { _type: 'image', asset: { _ref: asset._id } } }).commit()

console.log('profile-main.photo updated.')

const check = await client.fetch('*[_type == "profile"][0]{name, photo{asset->{path, url}}}')
console.log('Verify:', JSON.stringify(check, null, 2))
