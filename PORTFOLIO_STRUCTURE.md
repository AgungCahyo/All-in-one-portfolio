# 📋 Portfolio Structure & Navigation Guide

## 🏗️ Halaman Layout

Portfolio Anda akan memiliki struktur ini:

```
┌─────────────────────────────────────────────────────┐
│  [AGUNG CAHYO]  About  Journey  Work  Skills Contact│  ← Navigation
├─────────────────────────────────────────────────────┤
│                                                       │
│         🎬 From Code to Cinema                       │
│                                                       │
│  Tagline tentang diri Anda                          │
│  [View Selected Work] ←─ Button                      │
│                                                       │
│                    [HERO IMAGE]                      │
│                                                       │
├─────────────────────────────────────────────────────┤
│ ABOUT ME                         [PROFILE IMAGE]    │
│                                                       │
│ Deskripsi tentang journey                          │
│ dari programmer ke videografer                      │
│                                                       │
├─────────────────────────────────────────────────────┤
│ MY JOURNEY                                          │
│                                                       │
│ Current  │ Videographer & Editor (2024 - Present)  │
│ ────────┼────────────────────────────────────────   │
│          │ + Producing high-quality video           │
│          │ + Advanced color grading                 │
│          │ + Motion graphics & VFX                  │
│                                                       │
│ ────────┼────────────────────────────────────────   │
│ 2022-24 │ Full-Stack Developer                     │
│         │ + Built SkripIn AI                       │
│         │ + Multiple web/mobile apps               │
│                                                       │
├─────────────────────────────────────────────────────┤
│ PROJECTS (Your Videos)                              │
│                                                       │
│ ┌──────────────────────────────────────────────┐   │
│ │          [VIDEO PLAYER/THUMBNAIL]            │   │
│ ├──────────────────────────────────────────────┤   │
│ │ Project Title                                 │   │
│ │ Cinematic / Corporate / Music Video           │   │
│ │ Description...                                │   │
│ │ [Tag1] [Tag2] [Tag3]                          │   │
│ │ [Watch Full Project] ← Link to video         │   │
│ └──────────────────────────────────────────────┘   │
│                                                       │
│ ┌──────────────────────────────────────────────┐   │
│ │          [VIDEO PLAYER/THUMBNAIL]            │   │
│ └──────────────────────────────────────────────┘   │
│       (Repeat untuk setiap project)                 │
│                                                       │
├─────────────────────────────────────────────────────┤
│ SKILLS & TECHNOLOGIES                               │
│                                                       │
│ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│ │Cinematography│ │Post-Production│ │Software&Tools│ │
│ │ • Camera    │  │ • Editing   │  │ • Adobe     │ │
│ │ • Lighting  │  │ • Coloring  │  │ • DaVinci   │ │
│ │ • Framing   │  │ • Motion    │  │ • Final Cut │ │
│ └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                       │
│ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│ │Creative Dir │  │ Production  │  │Dev Mindset  │ │
│ │ • Concept   │  │ • Planning  │  │ • Workflow  │ │
│ │ • Story     │  │ • Direction │  │ • Problem   │ │
│ │ • Narrative │  │ • Equipment │  │   Solving   │ │
│ └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                       │
├─────────────────────────────────────────────────────┤
│ LET'S CREATE SOMETHING AMAZING                      │
│                                                       │
│ Email / Instagram / YouTube / LinkedIn ← Links     │
│                                                       │
├─────────────────────────────────────────────────────┤
│ © 2026 Agung Cahyo Prasetyo                        │
│ Videographer & Editor • Built with Next.js          │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Design System

### Colors
- **Background:** Deep black (#0a0a0a)
- **Text:** White (#ffffff)
- **Accents:** Gray tones (600-900)
- **Borders:** Subtle gray (#1a1a1a to #333333)

### Typography
- **Headings:** Bold sans-serif (22-48px)
- **Body:** Regular sans-serif (16px)
- **Navigation:** Medium sans-serif (14-16px)

### Interactive Elements
```
[Primary Button]        [Secondary Button]
bg-white               border + text-white
text-black             hover: border-white
hover: bg-gray-200
```

---

## 📝 Section Editing Checklist

### 1. Hero Section
**Location:** `app/page.tsx` line ~30-40

**Edit these:**
```tsx
<h1>From Code to Cinema.</h1>  ← Your tagline
<p>I'm Agung Cahyo...narrative...</p>  ← Your intro
<a href="#projects">View Selected Work</a>  ← Button text
```

**Replace this:**
```tsx
<div className="bg-gradient...">
  {/* Hero Image Here */}
</div>
```

---

### 2. About Section
**Location:** `app/page.tsx` line ~65-100

**Edit:**
- Profile image placeholder
- 3 paragraphs of your bio
- Your unique story

---

### 3. Journey Timeline
**Location:** `app/page.tsx` line ~110-155

**Structure:**
```
Current Role     → 2024 - Present
             ┌─ Your videography work
             ├─ Skills & achievements
             └─ Projects you've done

Previous Role    → 2022 - 2024
             ├─ Your programming work
             └─ What you learned

Early Career     → Earlier
             └─ Foundation/backstory
```

---

### 4. Projects Gallery
**Location:** `app/page.tsx` line ~160-240

**For Each Project:**

```
Title           → Project name
Category        → Cinematic/Corporate/Music/Event
Description     → What you did (2-3 sentences)
Tags            → Relevant skills used
Link            → YouTube/Vimeo/website
Video embed     → iframe or image
```

**Template to Copy & Paste:**

```tsx
<div className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
  <div className="bg-gray-900 aspect-video flex items-center justify-center">
    {/* VIDEO EMBED HERE */}
  </div>
  <div className="p-8">
    <h3 className="text-2xl font-bold mb-2">Your Project Title</h3>
    <p className="text-gray-400 mb-4">Project Category</p>
    <p className="text-gray-300 mb-6">
      Your project description...
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Tag1</span>
      <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Tag2</span>
    </div>
    <a href="#" className="secondary-button">Watch Full Project</a>
  </div>
</div>
```

---

### 5. Skills Section
**Location:** `app/page.tsx` line ~245-320

**6 Skill Categories:**

1. **Cinematography**
   - Camera Operation
   - Lighting Design
   - Composition & Framing
   - Shot Planning
   - Multi-cam Production

2. **Post-Production**
   - Video Editing
   - Color Grading
   - Motion Graphics
   - Audio Design
   - VFX Integration

3. **Software & Tools**
   - Adobe Creative Suite
   - DaVinci Resolve
   - Final Cut Pro
   - Blender
   - Adobe Audition

4. **Creative Direction**
   - Concept Development
   - Storyboarding
   - Visual Storytelling
   - Brand Narrative
   - Creative Problem-Solving

5. **Production**
   - Pre-production Planning
   - On-set Direction
   - Crew Management
   - Equipment Handling
   - Location Scouting

6. **Bonus: Developer Mindset**
   - Workflow Optimization
   - Version Control
   - System Architecture
   - Problem Analysis
   - Quality Assurance

---

### 6. Contact Section
**Location:** `app/page.tsx` line ~330-345

**Update:**
```tsx
<a href="mailto:YOUR_EMAIL@gmail.com">Email Me</a>
<a href="https://instagram.com/YOUR_USERNAME">Instagram</a>
<a href="https://youtube.com/@YOUR_CHANNEL">YouTube</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
```

---

## 🖼️ Image Specifications

### Hero Image
- **Size:** 400x400px - 1200x1200px
- **Format:** PNG or JPG
- **Location:** `/public/hero.png`
- **Usage:** Main hero section

### Profile Image
- **Size:** 400x400px - 600x600px
- **Format:** PNG or JPG
- **Location:** `/public/profile.png`
- **Usage:** About section

### Project Thumbnails
- **Size:** 16:9 aspect ratio (1920x1080px)
- **Format:** PNG or JPG
- **Location:** `/public/projects/`
- **Usage:** Fallback if no video embed

---

## 🔗 File Paths Quick Reference

```
videographer-portfolio/
├── app/
│   ├── layout.tsx         ← Metadata & global setup
│   ├── page.tsx          ← MAIN FILE: Edit portfolio content here
│   └── globals.css       ← Global styles & Tailwind setup
├── public/               ← Create this folder for images
│   ├── hero.png         ← Add your hero image
│   ├── profile.png      ← Add your profile photo
│   └── projects/        ← Add project thumbnails
├── package.json         ← Dependencies (don't edit unless needed)
├── tailwind.config.js   ← Style config (can customize colors)
├── next.config.js       ← Next.js config
├── tsconfig.json        ← TypeScript config
├── postcss.config.js    ← CSS processing
├── README.md            ← Full documentation
├── QUICKSTART.md        ← Step-by-step guide
└── setup.sh            ← Auto setup script
```

---

## 🎯 Priority Edits

**Must Do (untuk portfolio jadi hidup):**
1. ✏️ Update hero section tagline
2. ✏️ Update about me biography
3. 🎬 Add 3-5 video projects
4. 🖼️ Upload hero.png & profile.png
5. ✏️ Update email & social links

**Should Do (untuk hasil terbaik):**
6. ✏️ Customize journey timeline
7. ✏️ Add detailed project descriptions
8. 🎨 Adjust colors di tailwind.config.js (opsional)
9. 🖼️ Add project thumbnail images

**Nice to Have:**
10. 📊 Add Google Analytics
11. 📧 Setup contact form
12. 🔍 SEO optimization
13. ⚡ Performance optimization

---

## 💡 Pro Tips

**Tip 1: Video Embeds**
- YouTube video ID: `https://youtube.com/watch?v=**dQw4w9WgXcQ**`
  Embed: `https://youtube.com/embed/dQw4w9WgXcQ`

- Vimeo video ID: `https://vimeo.com/**123456789**`
  Embed: `https://player.vimeo.com/video/123456789`

**Tip 2: Mobile Testing**
- Always test on mobile before deploying
- Run `npm run dev` and open on phone
- Check that videos play correctly

**Tip 3: Content Order**
- Put your best work first
- Arrange by newest or most impressive
- Keep descriptions concise (2-3 sentences)

**Tip 4: SEO**
- Update metadata in `app/layout.tsx`
- Use keywords in project titles
- Write natural, descriptive text

---

## ✅ Pre-Deployment Checklist

- [ ] All placeholder text replaced
- [ ] Hero image added (/public/hero.png)
- [ ] Profile image added (/public/profile.png)
- [ ] 3+ projects with videos
- [ ] Email link updated
- [ ] Social media links updated
- [ ] Skills customized
- [ ] Tested on mobile device
- [ ] No broken links
- [ ] Build successful: `npm run build`
- [ ] Ready to deploy to Vercel

---

Good luck! Your portfolio is about to shine! 🎬✨
