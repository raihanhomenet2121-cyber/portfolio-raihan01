export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
    },
    {
      name: 'images',
      title: 'Foto / Slideshow',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload beberapa foto untuk slideshow',
    },
    {
      name: 'link',
      title: 'Link Proyek (opsional)',
      type: 'url',
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Contoh: React, Node.js, MongoDB',
    },
    {
      name: 'featured',
      title: 'Tampilkan sebagai Featured?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Angka kecil tampil lebih dulu',
    },
  ],
  orderings: [
    {
      title: 'Urutan Tampil',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
}
