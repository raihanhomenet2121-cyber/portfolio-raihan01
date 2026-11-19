export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline / Profesi',
      type: 'string',
      description: 'Contoh: Full Stack Developer',
    },
    {
      name: 'bio',
      title: 'Bio / Deskripsi Diri',
      type: 'text',
      rows: 4,
    },
    {
      name: 'photo',
      title: 'Foto Profil',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'URL LinkedIn',
      type: 'url',
    },
    {
      name: 'github',
      title: 'URL GitHub',
      type: 'url',
    },
    {
      name: 'skills',
      title: 'Tech Stack / Skills',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Contoh: React, Laravel, Tailwind CSS',
    },
    {
      name: 'cvFile',
      title: 'File CV (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    },
  ],
}
