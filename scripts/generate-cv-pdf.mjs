// One-off script: generates public/cv.pdf (A4) from the CV PNG in docs/.
// Run: node scripts/generate-cv-pdf.mjs
import PDFDocument from 'pdfkit'
import { createWriteStream, existsSync, statSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'docs', '18_XIIRPLA_MuhammadRaihanNugraha_EnglishCV.png')
const out = join(root, 'public', 'cv.pdf')

if (!existsSync(src)) {
  console.error('CV image not found:', src)
  process.exit(1)
}

// A4: 595.28 x 841.89 pt
const A4 = { w: 595.28, h: 841.89 }
const doc = new PDFDocument({ size: 'A4', margin: 0, info: { Title: 'CV - Muhammad Raihan Nugraha', Author: 'Muhammad Raihan Nugraha' } })
doc.pipe(createWriteStream(out))

// Draw the CV image fitted to fill the full A4 page (contain, centered)
doc.image(src, 0, 0, { fit: [A4.w, A4.h], align: 'center', valign: 'center' })
doc.end()

doc.on('end', () => {
  const kb = (statSync(out).size / 1024).toFixed(1)
  console.log(`PDF written: ${out} (${kb} KB)`)
})
