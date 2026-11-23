export default {
  name: 'proficiency',
  title: 'Proficiency (Technical Skill Bar)',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama Skill', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'level', title: 'Level (%)', type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    },
    { name: 'order', title: 'Urutan Tampil', type: 'number' },
  ],
  orderings: [{ title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'level' },
  },
}
