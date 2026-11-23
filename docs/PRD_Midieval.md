# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# THE CHRONICLES OF RAIHAN
### Medieval Fantasy — Living Chronicles Portfolio

**Owner:** Muhammad Raihan Nugraha  
**Role:** Software Engineering  
**Platform:** Web Portfolio  
**Framework:** React + Vite  
**Visual Direction:** Dark Medieval Fantasy / Realistic Stylized 3D / Cinematic  
**Primary Language:** English  
**Supporting Language:** Indonesian  

---

# 1. PROJECT OVERVIEW

## 1.1 Project Vision

Develop an immersive personal portfolio website that presents the professional identity, technical capabilities, projects, achievements, education, organizational experience, and personal interests of Muhammad Raihan Nugraha.

The website must combine a professional developer portfolio with an atmospheric medieval fantasy environment.

The experience should feel like exploring a living medieval kingdom containing ancient castles, royal archives, knights, dragons, mythical guardians, ancient libraries, and mysterious architectural structures.

Medieval entities must be presented as decorative environmental characters, not as playable game characters.

The portfolio must remain professional, informative, responsive, and accessible.

## 1.2 Main Concept

**THE CHRONICLES OF RAIHAN**

*An archive of knowledge, creations, achievements, and endeavours.*

Core visual elements:
- Medieval knights in detailed armor.
- Realistic fantasy dragons.
- Gargoyles and mythical creatures.
- Gothic castles and ancient architecture.
- Medieval libraries and royal archives.
- Parchment, ancient manuscripts, and heraldic ornaments.
- Cinematic fog, atmospheric particles, and dynamic lighting.
- Idle character animations and environmental movement.

## 1.3 Design Philosophy

The portfolio must communicate three identities:

1. **The Engineer:** Software development, technical knowledge, problem-solving, and project creation.
2. **The Leader:** Organizational experience, communication, teamwork, and responsibility.
3. **The Endeavourer:** Continuous learning, academic achievements, discipline, and personal development.

Medieval fantasy is the visual storytelling medium, not a replacement for the actual professional information.

---

# 2. VISUAL DESIGN SYSTEM

## 2.1 Color Palette

Use the following exact color values.

| Color | Hex | Purpose |
|---|---|---|
| Obsidian | #151515 | Primary background |
| Ancient Stone | #292927 | Cards and panels |
| Royal Burgundy | #632D35 | Decorative sections |
| Antique Gold | #C5A46D | Borders and highlights |
| Old Parchment | #E7D9B9 | Textured paper and light surfaces |
| Mystic Blue | #536E85 | Moonlight and atmospheric effects |

Additional shades may be derived from these colors, but must not replace the original palette.

## 2.2 Typography

- Cinzel: Main headings and titles.
- Cormorant Garamond: Editorial headings and quotations.
- Inter: Body text and descriptions.
- IBM Plex Mono: Technical labels, timestamps, and project identifiers.

Typography must remain readable. Avoid using decorative medieval fonts for long descriptions.

## 2.3 Art Direction

Required visual style:

**Realistic Stylized 3D Medieval Fantasy.**

Do not use:
- Pixel art.
- Voxel graphics.
- 8-bit or 16-bit sprites.
- Cartoon RPG interfaces.
- Oversaturated fantasy colors.
- Excessive ornamental borders.
- Generic futuristic neon aesthetics.

Characters must have convincing proportions, detailed materials, realistic armor, fabric, scales, stone surfaces, and cinematic lighting.

---

# 3. MEDIEVAL ENTITIES AND ANIMATION REQUIREMENTS

## 3.1 Main Characters

### A. The Knight

A medieval knight in detailed full-body armor.

Placement:
- Hero section, near the castle entrance.
- Optional decorative appearance in the Leadership section.

Idle animation:
- Subtle breathing.
- Small body-weight shifts.
- Slight head movement.
- Natural cape movement.

The character must remain decorative and must not distract from the portfolio content.

### B. The Dragon

A detailed fantasy dragon with realistic wings, scales, and anatomy.

Placement:
- Hero background.
- Distant castle tower.
- Optional transition between major sections.

Idle animation:
- Slow wing movement.
- Subtle breathing.
- Tail movement.
- Head movement.
- Eye blinking.

Flying animation may be used as an occasional background event.

### C. The Gargoyle

A gothic stone creature attached to architectural structures.

Idle animation:
- Slow head movement.
- Occasional eye movement.
- Subtle wing adjustment.

Placement:
- Expertise section.
- Project archive.
- Section decorations.

### D. The Raven

A dark medieval raven.

Idle animation:
- Head rotation.
- Feather movement.
- Occasional wing adjustment.
- Natural perched movement.

Placement:
- About section.
- Library environment.
- Section transitions.

### E. The Griffin

A mythical guardian with a detailed feather and fur appearance.

Placement:
- Achievement section.
- Heraldic decoration.

Use a static or subtle idle animation.

## 3.2 Environmental Animations

Required atmospheric elements:

- Moving fog.
- Floating dust particles.
- Candle flickering.
- Subtle volumetric lighting.
- Moving clouds.
- Moonlight.
- Floating leaves where appropriate.
- Cloth and banner movement.
- Subtle camera parallax.
- Animated environmental lighting.

## 3.3 Animation Principles

All animations must:
- Loop smoothly.
- Avoid abrupt transitions.
- Use natural movement.
- Avoid excessive speed.
- Remain independent from text readability.
- Pause or reduce intensity when the user prefers reduced motion.
- Avoid continuously rendering invisible 3D scenes.

---

# 4. WEBSITE INFORMATION ARCHITECTURE

The website consists of eight primary sections.

## SECTION 01 — THE BEGINNING
### Hero / Introduction

Purpose: Introduce the portfolio owner and establish the medieval atmosphere.

Visual:
- Large medieval castle.
- Knight at the castle entrance.
- Distant dragon.
- Moonlight and moving fog.
- Atmospheric particles.
- Animated heraldic emblem.

Content:

**MUHAMMAD RAIHAN NUGRAHA**

Software Engineering

Foresight & Endeavour Practitioner

Main headline:

"THE CHRONICLES OF RAIHAN"

Supporting statement:

"An Endeavour Through Knowledge, Technology & Leadership."

Buttons:
- Explore Chronicles
- View Selected Projects
- Download CV

The hero must have a clear visual hierarchy. The name and professional identity must remain the focal point.

## SECTION 02 — THE SCRIBE
### About Me / Personal Profile

Purpose: Present the professional background and personal identity.

Visual:
- Medieval library.
- Ancient wooden desk.
- Open parchment manuscript.
- Candlelight.
- Raven near the window.

Content:

Professional Summary:

"Fresh graduate majoring in Software Engineering (RPL) from SMKN 1 Cimahi with strong achievements and dedication to technology. Possesses a solid academic track record as a top graduate and overall academic champion, combined with organizational leadership experience as a former student council president (OSIS). Equipped with software development, data analysis, and graphic design skills, and capable of effective communication and teamwork."

Also include:
- Personal philosophy.
- Education overview.
- Professional focus.
- Personal development.

IMPORTANT: Verify the graduate status before publication. Until graduation, use Software Engineering Student as the public professional designation if appropriate.

## SECTION 03 — THE ARSENAL OF KNOWLEDGE
### Technical Skills & Expertise

Purpose: Display technical capabilities.

Visual:
- Medieval mechanical workshop.
- Ancient astronomical instruments.
- Clockwork machinery.
- Glowing crystals.
- Mechanical diagrams.

Divide skills into four categories.

### Web & Backend Development
- HTML
- CSS
- JavaScript
- React
- Next.js
- Laravel
- PHP
- MySQL

### Mobile & Desktop Development
- Flutter
- Dart
- Kotlin
- Java
- C#
- .NET
- WPF
- Windows Forms

### IoT & Hardware
- Arduino UNO
- C++
- IoT Development

### Design & Productivity
- Figma
- Git
- GitHub
- Visual Studio Code
- Android Studio
- Microsoft Office

### Technical Proficiency

Preserve the CV's original proficiency values:

| Skill | Proficiency |
|---|---:|
| HTML & CSS | 95% |
| Laravel | 85% |
| React | 85% |
| JavaScript | 85% |
| PHP & MySQL | 80% |
| UI/UX Design | 75% |

Display these as understated visual indicators, not as competitive rankings.

## SECTION 04 — THE ROYAL ARCHIVES
### Project Experience

Purpose: Showcase actual software development projects.

Visual:
- Ancient royal archive.
- Large stone shelves.
- Parchment cards.
- Metallic project labels.
- Subtle animated archive transitions.

Create seven project cards.

### PROJECT 01
**Disaster Management & Logistics Information System**

Year: 2026

Client: Dinas Sosial Kota Cimahi

Description:
Developed an integrated web and mobile platform for disaster response and logistics management for the Social Affairs Office of Cimahi City.

Technology:
- Laravel
- React
- Next.js
- Flutter

### PROJECT 02
**Mobile Health Management System**

Year: 2026

Organization: PMR SMKN 1 Cimahi

Description:
Built a dedicated mobile application to streamline health records and medical management for the Youth Red Cross at SMKN 1 Cimahi.

Technology:
- Kotlin

### PROJECT 03
**Interactive Chess Game Application**

Year: 2026

Description:
Designed and developed an interactive mobile chess game featuring responsive gameplay mechanics.

Technology:
- Kotlin

### PROJECT 04
**Pastry Cafe Point of Sale System**

Year: 2025–2026

Description:
Engineered a dual-platform web and desktop POS solution tailored for bakery and cafe operations.

Technology:
- Laravel
- PHP
- WPF
- .NET
- C#

### PROJECT 05
**School Management Information System Mobile App**

Year: 2025

Organization: SMKN 1 Cimahi

Description:
Created a mobile application to digitize and manage administrative and academic information for SMKN 1 Cimahi.

Technology:
- Flutter
- Dart
- JavaScript

### PROJECT 06
**Ramen Restaurant Point of Sale System**

Year: 2024–2025

Description:
Developed a comprehensive desktop and web-based POS application to manage restaurant orders, billing, and inventory.

Technology:
- Windows Forms
- C#
- Laravel

### PROJECT 07
**IoT Museum Painting Security System**

Year: 2024

Description:
Built an Internet of Things hardware and software security prototype designed to protect museum paintings from unauthorized access or theft.

Technology:
- IoT Media
- Arduino UNO
- C++

### General Technical Experience

Include an additional section describing the broader technical experience:

1. Built CRUD desktop applications using Windows Forms, WPF (.NET & C#), and MySQL.
2. Developed dynamic full-stack websites using Laravel, React, Next.js, JavaScript, PHP, and MySQL.
3. Created native and cross-platform Android applications using Android Studio with Java, Kotlin, and Flutter (Dart).
4. Engineered web-based information systems for data and reporting management.
5. Programmed IoT devices using Arduino UNO with C++.

### Project Detail Page

Every project must support a detailed presentation containing:

- Project overview.
- Project year.
- Organization or client, when applicable.
- Problem statement.
- Objectives.
- Role and contribution.
- Development process.
- Technology stack.
- Application screenshots.
- Results and outcomes, if documented.

Do not fabricate project metrics, client endorsements, or results.

## SECTION 05 — THE HALL OF ACHIEVEMENTS
### Achievements & Awards

Purpose: Display academic and non-academic achievements.

Visual:
- Grand medieval hall.
- Stone pillars.
- Heraldic banners.
- Golden lighting.
- Decorative medallions.
- Animated achievement timeline.

Include ALL achievements from the CV:

1. 2nd Place — BPC HIPMI Cimahi City.
2. 2nd Place — Genre Ambassador (Duta Genre) at Vocational High School (SMK), 2024.
3. Student Council (OSIS) President in Junior High School for 1 year.
4. Exemplary Student (Santri Teladan Ikhwan), DTA Al-Muhajirin, 2023.
5. Best Graduate of SMP Negeri 2 Batujajar, 2024.
6. Overall General Champion (Juara Umum 1), Grades 7–9, 2021–2024.
7. Rank 1 in Junior High School, Grades 7–9, 2021–2024.
8. Best Tajweed Award at Madrasah Grades 5 – Tsanawi Grade 9, 2019–2024.
9. Completed TMBB within 6 Months, 2023.
10. Rank 1 at Madrasah Al Muhajirin, Grades 5–6, 2020–2021.
11. Highest Arabic Language and Hadith School Exam Score in the sub-district, 2020.
12. Rank 1 in Elementary School, Grades 1–6, 2015–2021.

Organize into:
- Academic Excellence.
- Competition & Recognition.
- Religious & Educational Achievement.
- Leadership Recognition.

Do not remove lower-level achievements merely because newer achievements exist.

## SECTION 06 — THE GUILD & FELLOWSHIP
### Organization & Leadership Experience

Purpose: Demonstrate organizational responsibility, leadership, and interpersonal experience.

Visual:
- Medieval guild hall.
- Round table.
- Ancient map.
- Organizational banners.
- Animated timeline.

Include all seven experiences:

1. 2026–Present: Deputy Head Founder of FKTP SMKN 1 Cimahi.
2. 2025–2026: Deputy Major Coordinator for Software Engineering.
3. 2024–2026: Member of PIK-R Organization.
4. 2024–2025: Student Council (OSIS) President of SMK Negeri 1 Cimahi.
5. 2022–2023: Student Council (OSIS) President of SMP Negeri 2 Batujajar.
6. 2022–2023: Peer Tutor for Qur'an Reading and Tajweed.
7. 2022–2023: Peer Educator for Islamic Jurisprudence (Fiqih) and Islamic History (Tarikh Islam Diniyah).

Use a chronological timeline with responsibilities and contributions.

Do not invent responsibilities that are not documented.

## SECTION 07 — BEYOND THE KINGDOM
### Hobbies & Personal Interests

Purpose: Introduce the personal side of the portfolio owner.

Visual:
- Medieval countryside.
- Forest.
- Castle surroundings.
- Warm sunset.
- Nature-inspired cards.

Include:
1. Reading Books.
2. Drawing.
3. Playing Football.
4. Cycling.
5. Cooking.
6. Listening to Music.

Present each interest using tasteful photography or editorial illustrations.

## SECTION 08 — THE NEXT CHAPTER
### Contact & Closing

Purpose: Provide a clear contact destination.

Visual:
- Castle gates.
- Sunrise.
- Golden atmospheric lighting.
- Slowly moving fog.
- Final animated emblem.

Headline:

"EVERY CHRONICLE HAS A NEXT CHAPTER."

Supporting text:

"The journey of learning, building, and contributing continues."

Include:
- Professional email contact.
- LinkedIn.
- Instagram.
- Download CV.
- Footer and copyright.

For public deployment, use only contact information intentionally approved for public display.

---

# 5. EDUCATION DATA

Display education chronologically from newest to oldest.

1. 2024–2027: SMK Negeri 1 Cimahi — Major in Software Engineering (RPL).
2. 2021–2024: SMP Negeri 2 Batujajar.
3. 2021–2024: Tsanawi Al-Muhajirin (Nonformal).
4. 2018–2021: Madrasah Al Muhajirin (Nonformal).
5. 2015–2021: SDN Panguaban.

Use an educational timeline or manuscript-based academic record.

Preserve the dates and institution names from the CV. Do not silently modify discrepancies.

---

# 6. PERSONAL INFORMATION AND PRIVACY

The source CV includes:
- Full name.
- Place and date of birth.
- Gender.
- Religion.
- Email.
- Telephone number.
- Residential address.
- LinkedIn.
- Instagram.

For the public website:
- Display the professional name.
- Display only approved professional contact channels.
- Use LinkedIn and Instagram only if intended for public professional use.
- Do not publish the complete residential address.
- Do not publish the full date of birth.
- Do not publish unnecessary demographic information.
- Do not expose a personal telephone number by default.

Maintain the complete CV as a separate downloadable document only when the document is intended for a trusted recipient.

---

# 7. TECHNICAL ARCHITECTURE

## 7.1 Core Technology

- React.
- Vite.
- JavaScript or TypeScript.
- Tailwind CSS.
- Motion for React.
- Three.js.
- React Three Fiber.
- Drei.
- Lucide React.

## 7.2 Recommended Directory Structure

```text
src/
├── assets/
│   ├── images/
│   ├── textures/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SectionWrapper.jsx
│   │
│   ├── medieval/
│   │   ├── CastleBackground.jsx
│   │   ├── MedievalParticles.jsx
│   │   ├── FogLayer.jsx
│   │   ├── OrnamentalFrame.jsx
│   │   ├── HeraldicEmblem.jsx
│   │   └── MedievalTransition.jsx
│   │
│   ├── three/
│   │   ├── KnightScene.jsx
│   │   ├── DragonScene.jsx
│   │   ├── GargoyleScene.jsx
│   │   └── FloatingArtifact.jsx
│   │
│   └── ui/
│       ├── ProjectCard.jsx
│       ├── SkillCard.jsx
│       ├── AchievementCard.jsx
│       └── Timeline.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Expertise.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   ├── Leadership.jsx
│   ├── Interests.jsx
│   └── Contact.jsx
│
├── data/
│   ├── profile.js
│   ├── education.js
│   ├── skills.js
│   ├── projects.js
│   ├── achievements.js
│   ├── organizations.js
│   └── interests.js
│
├── hooks/
│   ├── useReducedMotion.js
│   └── useMediaQuery.js
│
├── styles/
│   ├── global.css
│   ├── medieval-theme.css
│   ├── animations.css
│   └── typography.css
│
├── App.jsx
└── main.jsx

public/
├── models/
│   ├── knight.glb
│   ├── dragon.glb
│   └── gargoyle.glb
│
├── textures/
├── backgrounds/
└── cv.pdf
```

## 7.3 Model Asset Requirements

Use GLB/glTF as the preferred 3D delivery format.

All assets must be:
- Locally hosted.
- Optimized for web rendering.
- Properly licensed.
- Separated from application logic.
- Loaded only when necessary.

Use Suspense and loading fallbacks for 3D scenes.

## 7.4 Rendering Strategy

Use:
- React Three Fiber for selected 3D scenes.
- CSS for fog, gradients, subtle particles, and decorative details.
- SVG for ornamental patterns and heraldic frames.
- Motion for React for section transitions.
- Intersection Observer for viewport-triggered animation.

Do not render a full Three.js scene in every section.

Prioritize the Hero scene, then use lighter decorative elements elsewhere.

---

# 8. INTERACTION AND USER EXPERIENCE

Required interactions:

1. Sticky navigation.
2. Smooth scrolling.
3. Scroll progress indicator.
4. Animated section entrances.
5. Project detail navigation.
6. Project card hover effects.
7. Responsive mobile navigation.
8. Download CV functionality.
9. Contact links.
10. Optional dark/light reading mode.

The user must be able to access every section without waiting for decorative 3D assets to finish loading.

Include:
- Loading fallback.
- Reduced-motion support.
- Keyboard navigation.
- Accessible text contrast.
- Responsive image loading.
- Mobile-specific animation simplification.

---

# 9. PERFORMANCE REQUIREMENTS

The website must not sacrifice usability for visual effects.

Recommended targets:
- Keep the initial page lightweight.
- Lazy-load nonessential 3D assets.
- Use compressed GLB models.
- Use WebP/AVIF for raster images.
- Limit particle counts.
- Limit real-time shadows.
- Avoid unnecessary post-processing.
- Avoid multiple simultaneously active 3D canvases.
- Pause offscreen animation where practical.
- Provide a static visual fallback for unsupported devices.

Test desktop, tablet, and mobile.

---

# 10. ACCEPTANCE CRITERIA

The project is considered complete when:

- All eight portfolio sections are implemented.
- All CV project entries are included.
- All education entries are included.
- All 12 achievement entries are included.
- All seven organizational experiences are included.
- All technical skill categories are included.
- All six hobbies are included.
- General technical experience is included.
- Medieval characters use non-pixel 3D models.
- At least one knight or guardian has a working idle animation.
- At least one dragon has a working idle animation.
- Background atmosphere has subtle animation.
- Project information remains readable.
- All navigation works.
- Download CV works.
- Responsive layout works.
- No console-breaking errors.
- Asset licenses are documented.
- Sensitive personal details are excluded from public pages.

---

# 11. DEVELOPMENT PRIORITY

### Phase 1 — Foundation
- Initialize React + Vite.
- Configure styling.
- Create color system.
- Create typography system.
- Build responsive layout.
- Populate CV data.

### Phase 2 — Visual Identity
- Build Hero background.
- Add medieval castle imagery.
- Add ornamental SVG.
- Create parchment cards.
- Implement navigation.

### Phase 3 — Living Medieval Elements
- Integrate knight model.
- Integrate dragon model.
- Implement idle animations.
- Add atmospheric fog.
- Add environmental particles.

### Phase 4 — Portfolio Content
- Implement all eight sections.
- Add projects.
- Add achievements.
- Add leadership experience.
- Add education.
- Add interests.

### Phase 5 — Refinement
- Add cinematic transitions.
- Optimize assets.
- Improve mobile performance.
- Accessibility testing.
- SEO and metadata.
- Production build and deployment.

---

# 12. PROJECT REFERENCES

Starter:
https://github.com/veldig/react-engineer-portfolio

Alternative:
https://github.com/LaurierCS/Build-a-portfolio

3D character:
https://quaternius.itch.io/lowpoly-animated-knight

Dragon:
https://literock-studios.itch.io/ashwing-drake-lite

Additional dragon:
https://www.tyrbo.ai/free-game-assets/quaternius-animated-dragon

3D assets and HDRI:
https://polyhaven.com/

PBR materials:
https://ambientcg.com/

Documentation:
https://vite.dev/guide/
https://r3f.docs.pmnd.rs/
https://drei.docs.pmnd.rs/
https://motion.dev/docs/react
https://threejs.org/docs/

Always verify the individual asset license before distribution.

---

# 13. FINAL DESIGN PRINCIPLE

The Chronicles of Raihan must feel like a living medieval archive, not a game interface.

The visual environment establishes the atmosphere, while the actual portfolio content establishes professional credibility.

Every animation must have a visual purpose.

Every section must tell part of the owner's journey.

Every project must demonstrate real technical work.

Every achievement must preserve its original meaning.

The final experience should communicate:

**FORESIGHT IN VISION. ENDEAVOUR IN ACTION.**