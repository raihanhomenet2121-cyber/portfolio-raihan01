export default {
  name: 'education',
  title: 'Education (Academic Record)',
  type: 'document',
  fields: [
    { name: 'period', title: 'Periode', type: 'string', validation: (Rule) => Rule.required(), description: 'Contoh: 2024 – 2027' },
    { name: 'institution', title: 'Institusi', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'detail', title: 'Detail / Jurusan', type: 'string' },
    { name: 'order', title: 'Urutan (baru → lama)', type: 'number' },
  ],
  orderings: [{ title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'institution', subtitle: 'period' },
  },
}
