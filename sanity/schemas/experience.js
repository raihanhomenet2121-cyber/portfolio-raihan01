export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Posisi / Jabatan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Perusahaan / Institusi',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo Perusahaan',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'type',
      title: 'Tipe',
      type: 'string',
      options: {
        list: [
          { title: 'Pekerjaan', value: 'work' },
          { title: 'Organisasi', value: 'organization' },
        ],
        layout: 'radio',
      },
      initialValue: 'work',
    },
    {
      name: 'startDate',
      title: 'Tanggal Mulai',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
    },
    {
      name: 'endDate',
      title: 'Tanggal Selesai (kosongkan jika masih aktif)',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
    },
    {
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
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
      title: 'position',
      subtitle: 'company',
      media: 'logo',
    },
  },
}
