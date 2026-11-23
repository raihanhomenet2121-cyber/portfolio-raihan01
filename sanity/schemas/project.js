export default {
  name: 'project',
  title: 'Project (Royal Archives)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Judul Proyek', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'slug', title: 'Slug (URL)', type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Klik Generate — dipakai untuk halaman detail /project/:slug',
    },
    { name: 'numeral', title: 'Numeral Roman', type: 'string', description: 'Contoh: I, II, III' },
    { name: 'year', title: 'Tahun', type: 'string', description: 'Contoh: 2026 atau 2024 – 2025' },
    { name: 'client', title: 'Client / Organisasi (opsional)', type: 'string' },
    { name: 'type', title: 'Tipe Proyek', type: 'string', description: 'Contoh: Web & Mobile Platform' },
    { name: 'overview', title: 'Overview (ringkas)', type: 'text', rows: 3 },
    { name: 'problem', title: 'Problem Statement', type: 'text', rows: 3 },
    { name: 'objectives', title: 'Objectives', type: 'text', rows: 3 },
    { name: 'role', title: 'Role & Contribution', type: 'text', rows: 3 },
    { name: 'process', title: 'Development Process', type: 'text', rows: 3 },
    {
      name: 'images', title: 'Screenshot / Slideshow', type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'tech', title: 'Technology Stack', type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'link', title: 'Link Proyek (opsional)', type: 'url' },
    { name: 'featured', title: 'Featured (tampil besar di atas)', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Urutan Tampil', type: 'number' },
  ],
  orderings: [{ title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'year', media: 'images.0' },
  },
}
