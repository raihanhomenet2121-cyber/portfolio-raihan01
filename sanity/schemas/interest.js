export default {
  name: 'interest',
  title: 'Interest (Beyond the Kingdom)',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama Hobi / Minat', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'icon', title: 'Emoji Icon', type: 'string', description: 'Contoh: 📚 ⚽ 🎵' },
    { name: 'order', title: 'Urutan Tampil', type: 'number' },
  ],
  orderings: [{ title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'icon' },
  },
}
