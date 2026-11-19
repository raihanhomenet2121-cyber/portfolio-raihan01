export default {
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Penghargaan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'issuer',
      title: 'Pemberi Penghargaan / Institusi',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Tahun',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Foto Dokumentasi / Slideshow',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload beberapa foto dokumentasi penghargaan',
    },
    {
      name: 'link',
      title: 'Link Event / Referensi (opsional)',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
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
      title: 'name',
      subtitle: 'issuer',
      media: 'images.0',
    },
  },
}
