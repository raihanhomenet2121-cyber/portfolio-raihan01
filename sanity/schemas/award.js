export default {
  name: 'award',
  title: 'Achievement (Hall of Achievements)',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama Penghargaan', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'category', title: 'Kategori', type: 'string',
      options: {
        list: [
          { title: 'Academic Excellence', value: 'Academic Excellence' },
          { title: 'Competition & Recognition', value: 'Competition & Recognition' },
          { title: 'Religious & Educational', value: 'Religious & Educational' },
          { title: 'Leadership Recognition', value: 'Leadership Recognition' },
        ],
      },
    },
    { name: 'year', title: 'Tahun / Periode', type: 'string', description: 'Contoh: 2024 atau 2021 – 2024' },
    {
      name: 'images', title: 'Foto Dokumentasi', type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    { name: 'link', title: 'Link Event / Referensi (opsional)', type: 'url' },
    { name: 'order', title: 'Urutan Tampil', type: 'number' },
  ],
  orderings: [{ title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'images.0' },
  },
}
