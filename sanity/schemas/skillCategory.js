export default {
  name: 'skillCategory',
  title: 'Skill Category (The Arsenal)',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama Kategori', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'icon', title: 'Emoji Icon', type: 'string', description: 'Contoh: ⚔️ 🛡️ 🔧 📜' },
    {
      name: 'skills', title: 'Daftar Skill', type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'order', title: 'Urutan Tampil', type: 'number' },
  ],
  orderings: [{ title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'skills' },
  },
}
