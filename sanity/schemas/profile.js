export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama Lengkap', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'title', title: 'Profesi / Role', type: 'string', description: 'Contoh: Software Engineering' },
    { name: 'epithet', title: 'Epithet', type: 'string', description: 'Contoh: Foresight & Endeavour Practitioner' },
    { name: 'chronicle', title: 'Judul Chronicle', type: 'string', description: 'Contoh: THE CHRONICLES OF RAIHAN' },
    { name: 'motto', title: 'Motto (Hero)', type: 'text', rows: 2 },
    { name: 'principle', title: 'Principle (Footer)', type: 'string', description: 'Contoh: FORESIGHT IN VISION. ENDEAVOUR IN ACTION.' },
    { name: 'location', title: 'Lokasi', type: 'string' },
    { name: 'summary', title: 'Professional Summary', type: 'text', rows: 5 },
    { name: 'philosophy', title: 'Personal Philosophy', type: 'text', rows: 3 },
    { name: 'photo', title: 'Foto Profil', type: 'image', options: { hotspot: true } },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'linkedin', title: 'URL LinkedIn', type: 'url' },
    { name: 'instagram', title: 'URL Instagram', type: 'url' },
    { name: 'cvFile', title: 'File CV (PDF)', type: 'file', options: { accept: '.pdf' } },
  ],
  preview: {
    select: { title: 'name', subtitle: 'title', media: 'photo' },
  },
}
