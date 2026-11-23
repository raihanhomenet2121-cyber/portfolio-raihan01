export default {
  name: 'organization',
  title: 'Organization (The Guild)',
  type: 'document',
  fields: [
    { name: 'role', title: 'Posisi / Peran', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'org', title: 'Organisasi / Institusi', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'period', title: 'Periode', type: 'string', description: 'Contoh: 2024 – 2025 atau 2026 – Present' },
    {
      name: 'type', title: 'Tipe Kepemimpinan', type: 'string',
      options: {
        list: [
          { title: 'Founding Leadership', value: 'Founding Leadership' },
          { title: 'Academic Leadership', value: 'Academic Leadership' },
          { title: 'Student Leadership', value: 'Student Leadership' },
          { title: 'Organization Membership', value: 'Organization Membership' },
          { title: 'Peer Education', value: 'Peer Education' },
        ],
      },
    },
    { name: 'contribution', title: 'Kontribusi / Deskripsi', type: 'text', rows: 3 },
    { name: 'logo', title: 'Logo (opsional)', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Urutan Tampil', type: 'number' },
  ],
  orderings: [{ title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'role', subtitle: 'org', media: 'logo' },
  },
}
