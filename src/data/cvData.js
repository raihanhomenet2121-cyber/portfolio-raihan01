export const profile = {
  name: 'Muhammad Raihan Nugraha',
  title: 'Software Engineering',
  epithet: 'Foresight & Endeavour Practitioner',
  chronicle: 'THE CHRONICLES OF RAIHAN',
  motto: 'An Endeavour Through Knowledge, Technology & Leadership.',
  principle: 'FORESIGHT IN VISION. ENDEAVOUR IN ACTION.',
  location: 'Bandung, West Java, Indonesia',
  email: 'raihanhornenet@gmail.com',
  linkedin: 'https://linkedin.com/in/muhammad-raihan-nugraha',
  instagram: 'https://instagram.com/raihngrh',
  summary:
    'Fresh graduate majoring in Software Engineering (RPL) from SMKN 1 Cimahi with strong achievements and dedication to technology. Possesses a solid academic track record as a top graduate and overall academic champion, combined with organizational leadership experience as a former student council president (OSIS). Equipped with software development, data analysis, and graphic design skills, and capable of effective communication and teamwork.',
  philosophy:
    'I am a disciplined, fast-learning individual committed to delivering the best results. Ready to work, contribute, and continue growing alongside the company.',
}

export const education = [
  { period: '2024 – 2027', institution: 'SMK Negeri 1 Cimahi', detail: 'Major in Software Engineering (RPL)' },
  { period: '2021 – 2024', institution: 'SMP Negeri 2 Batujajar', detail: 'Junior High School' },
  { period: '2021 – 2024', institution: 'Tsanawi Al-Muhajirin', detail: 'Nonformal Islamic Education' },
  { period: '2018 – 2021', institution: 'Madrasah Al Muhajirin', detail: 'Nonformal Islamic Education' },
  { period: '2015 – 2021', institution: 'SDN Panguaban', detail: 'Elementary School' },
]

export const skillCategories = [
  {
    name: 'Web & Backend Development',
    icon: '⚔️',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Laravel', 'PHP', 'MySQL'],
  },
  {
    name: 'Mobile & Desktop Development',
    icon: '🛡️',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Java', 'C#', '.NET', 'WPF', 'Windows Forms'],
  },
  {
    name: 'IoT & Hardware',
    icon: '🔧',
    skills: ['Arduino UNO', 'C++', 'IoT Development'],
  },
  {
    name: 'Design & Productivity',
    icon: '📜',
    skills: ['Figma', 'Git', 'GitHub', 'Visual Studio Code', 'Android Studio', 'Microsoft Office'],
  },
]

export const proficiency = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'Laravel', level: 85 },
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 85 },
  { name: 'PHP & MySQL', level: 80 },
  { name: 'UI/UX Design', level: 75 },
]

export const generalExperience = [
  'Built CRUD desktop applications using Windows Forms, WPF (.NET & C#), and MySQL.',
  'Developed dynamic full-stack websites using Laravel, React, Next.js, JavaScript, PHP, and MySQL.',
  'Created native and cross-platform Android applications using Android Studio with Java, Kotlin, and Flutter (Dart).',
  'Engineered web-based information systems for data and reporting management.',
  'Programmed IoT devices using Arduino UNO with C++.',
]

export const projects = [
  {
    id: 'disaster-management-system',
    numeral: 'I',
    title: 'Disaster Management & Logistics Information System',
    year: '2026',
    client: 'Dinas Sosial Kota Cimahi',
    type: 'Web & Mobile Platform',
    overview:
      'An integrated web and mobile platform built for disaster response and logistics management, serving the Social Affairs Office of Cimahi City.',
    problem:
      'Disaster response coordination relied on fragmented manual reporting, making resource tracking and logistics distribution slow and error-prone during critical moments.',
    objectives:
      'Unify disaster reporting, logistics inventory, and response coordination into a single accessible platform for both web and mobile users.',
    role: 'Full-stack developer — architecture, web development, and mobile integration.',
    process:
      'Requirements gathered with the Social Affairs Office, followed by iterative development: database design, REST API layer with Laravel, responsive web dashboard with React/Next.js, and a companion mobile app with Flutter.',
    tech: ['Laravel', 'React', 'Next.js', 'Flutter'],
  },
  {
    id: 'mobile-health-management',
    numeral: 'II',
    title: 'Mobile Health Management System',
    year: '2026',
    client: 'PMR SMKN 1 Cimahi',
    type: 'Mobile Application',
    overview:
      'A dedicated mobile application streamlining health records and medical management for the Youth Red Cross (PMR) at SMKN 1 Cimahi.',
    problem:
      'PMR members tracked health records and medical supplies on paper, causing data loss and slow retrieval during events and check-ups.',
    objectives:
      'Digitize member health records and simplify medical data management for PMR administrators.',
    role: 'Native Android developer — UI design, local storage architecture, and testing.',
    process: 'Designed around PMR workflow, built natively in Kotlin with structured local persistence and form-driven data entry.',
    tech: ['Kotlin'],
  },
  {
    id: 'interactive-chess-game',
    numeral: 'III',
    title: 'Interactive Chess Game Application',
    year: '2026',
    client: null,
    type: 'Mobile Game',
    overview:
      'An interactive mobile chess game featuring responsive gameplay mechanics and complete rule implementation.',
    problem:
      'Exploring game logic implementation — turn management, legal move validation, and check/checkmate detection in a touch-first environment.',
    objectives:
      'Deliver smooth, responsive chess gameplay on mobile with complete standard rules.',
    role: 'Game logic and Android developer — engine design and UI.',
    process: 'Implemented the full chess rule engine in Kotlin, including piece movement validation, and wrapped it in an interactive touch interface.',
    tech: ['Kotlin'],
  },
  {
    id: 'pastry-cafe-pos',
    numeral: 'IV',
    title: 'Pastry Cafe Point of Sale System',
    year: '2025 – 2026',
    client: null,
    type: 'Web & Desktop Application',
    overview:
      'A dual-platform POS solution tailored for bakery and cafe operations, covering sales, inventory, and reporting.',
    problem:
      'Pastry and cafe transactions needed a system that works both at the counter (desktop) and across the business (web dashboard).',
    objectives:
      'Provide reliable order processing, stock tracking, and sales reporting across web and desktop platforms.',
    role: 'Full-stack developer — backend with Laravel, desktop client with WPF (.NET & C#).',
    process: 'Built a shared Laravel backend and API, then delivered two frontends: a web dashboard and a WPF desktop cashier application.',
    tech: ['Laravel', 'PHP', 'WPF', '.NET', 'C#'],
  },
  {
    id: 'school-management-app',
    numeral: 'V',
    title: 'School Management Information System Mobile App',
    year: '2025',
    client: 'SMKN 1 Cimahi',
    type: 'Mobile Application',
    overview:
      'A mobile application digitizing administrative and academic information management for SMKN 1 Cimahi.',
    problem:
      'School administrative and academic data was managed across disconnected manual channels, slowing information distribution to students and staff.',
    objectives:
      'Centralize school information access in one mobile application for students and administration.',
    role: 'Cross-platform mobile developer — app architecture and implementation.',
    process: 'Developed with Flutter (Dart) and JavaScript, structuring academic and administrative modules with clean navigation.',
    tech: ['Flutter', 'Dart', 'JavaScript'],
  },
  {
    id: 'ramen-restaurant-pos',
    numeral: 'VI',
    title: 'Ramen Restaurant Point of Sale System',
    year: '2024 – 2025',
    client: null,
    type: 'Desktop & Web Application',
    overview:
      'A comprehensive desktop and web-based POS application managing restaurant orders, billing, and inventory.',
    problem:
      'Restaurant order flow, billing, and stock were handled manually, creating bottlenecks during peak hours.',
    objectives:
      'Streamline the full restaurant operation cycle: ordering, billing, and inventory control.',
    role: 'Desktop and web developer — Windows Forms client and Laravel backend.',
    process: 'Built the cashier desktop client in C# Windows Forms connected to a Laravel-powered backend for menu, order, and inventory data.',
    tech: ['Windows Forms', 'C#', 'Laravel'],
  },
  {
    id: 'iot-museum-security',
    numeral: 'VII',
    title: 'IoT Museum Painting Security System',
    year: '2024',
    client: null,
    type: 'IoT Prototype',
    overview:
      'A hardware and software security prototype protecting museum paintings from unauthorized access or theft.',
    problem:
      'Museum paintings needed a low-cost, responsive detection system for unauthorized handling.',
    objectives:
      'Detect and alert on unauthorized contact or movement of exhibited paintings.',
    role: 'IoT engineer — sensor integration, C++ programming, and alert logic.',
    process: 'Programmed Arduino UNO sensors in C++ to detect interference and trigger alarm responses in real time.',
    tech: ['IoT Media', 'Arduino UNO', 'C++'],
  },
]

export const achievements = [
  { id: 1, title: '2nd Place — BPC HIPMI Cimahi City', category: 'Competition & Recognition', year: null },
  { id: 2, title: '2nd Place — Genre Ambassador (Duta Genre) at Vocational High School (SMK)', category: 'Competition & Recognition', year: '2024' },
  { id: 3, title: 'Student Council (OSIS) President in Junior High School', category: 'Leadership Recognition', year: '1 Year Tenure' },
  { id: 4, title: 'Exemplary Student (Santri Teladan Ikhwan), DTA Al-Muhajirin', category: 'Religious & Educational', year: '2023' },
  { id: 5, title: 'Best Graduate of SMP Negeri 2 Batujajar', category: 'Academic Excellence', year: '2024' },
  { id: 6, title: 'Overall General Champion (Juara Umum 1), Grades 7–9', category: 'Academic Excellence', year: '2021 – 2024' },
  { id: 7, title: 'Rank 1 in Junior High School, Grades 7–9', category: 'Academic Excellence', year: '2021 – 2024' },
  { id: 8, title: 'Best Tajweed Award at Madrasah, Grades 5 – Tsanawi Grade 9', category: 'Religious & Educational', year: '2019 – 2024' },
  { id: 9, title: 'Completed TMBB within 6 Months', category: 'Religious & Educational', year: '2023' },
  { id: 10, title: 'Rank 1 at Madrasah Al Muhajirin, Grades 5–6', category: 'Academic Excellence', year: '2020 – 2021' },
  { id: 11, title: 'Highest Arabic Language & Hadith School Exam Score in the Sub-district', category: 'Religious & Educational', year: '2020' },
  { id: 12, title: 'Rank 1 in Elementary School, Grades 1–6', category: 'Academic Excellence', year: '2015 – 2021' },
]

export const organizations = [
  {
    id: 1, period: '2026 – Present', role: 'Deputy Head Founder',
    org: 'FKTP SMKN 1 Cimahi', type: 'Founding Leadership',
    contribution: 'Co-founded the forum and led its early structural development as deputy head.',
  },
  {
    id: 2, period: '2025 – 2026', role: 'Deputy Major Coordinator',
    org: 'Software Engineering Department', type: 'Academic Leadership',
    contribution: 'Coordinated department-level activities and represented the Software Engineering major.',
  },
  {
    id: 3, period: '2024 – 2026', role: 'Member',
    org: 'PIK-R Organization', type: 'Organization Membership',
    contribution: 'Active member contributing to organization programs and peer education.',
  },
  {
    id: 4, period: '2024 – 2025', role: 'Student Council (OSIS) President',
    org: 'SMK Negeri 1 Cimahi', type: 'Student Leadership',
    contribution: 'Led the student council of SMKN 1 Cimahi, directing school-wide programs and initiatives.',
  },
  {
    id: 5, period: '2022 – 2023', role: 'Student Council (OSIS) President',
    org: 'SMP Negeri 2 Batujajar', type: 'Student Leadership',
    contribution: 'Led the student council of SMPN 2 Batujajar during the 2022–2023 term.',
  },
  {
    id: 6, period: '2022 – 2023', role: 'Peer Tutor',
    org: "Qur'an Reading and Tajweed", type: 'Peer Education',
    contribution: 'Tutored peers in Qur\u2019an reading and tajweed recitation.',
  },
  {
    id: 7, period: '2022 – 2023', role: 'Peer Educator',
    org: 'Fiqih & Tarikh Islam Diniyah', type: 'Peer Education',
    contribution: 'Educated peers on Islamic jurisprudence and Islamic history.',
  },
]

export const interests = [
  { name: 'Reading Books', icon: '📚' },
  { name: 'Drawing', icon: '✒️' },
  { name: 'Playing Football', icon: '⚽' },
  { name: 'Cycling', icon: '🚲' },
  { name: 'Cooking', icon: '🍳' },
  { name: 'Listening to Music', icon: '🎵' },
]
