# 🎬 Quick Start Guide - Videographer Portfolio

## 5 Langkah Setup & Deploy

### 1️⃣ Setup Local Development (5 menit)

```bash
# Masuk ke folder project
cd videographer-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka browser ke: **http://localhost:3000**

---

### 2️⃣ Customize Content (15-30 menit)

Edit file `app/page.tsx` dan ubah:

**A. Hero Section** (baris ~30-40)
```
I'm Agung Cahyo Prasetyo. A programmer turned videographer...
```
→ Ubah dengan tagline Anda

**B. About Me** (baris ~100-115)
Ganti deskripsi tentang diri Anda

**C. Add Your Projects** (baris ~160-240)
Replace project cards dengan video Anda:

```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  width="100%"
  height="100%"
  frameBorder="0"
  allowFullScreen
></iframe>
```

**D. Update Skills** (baris ~270-320)
Edit tools yang Anda gunakan

**E. Update Contact Links** (baris ~330-345)
```tsx
<a href="mailto:YOUR_EMAIL@gmail.com">
<a href="https://instagram.com/YOUR_USERNAME">
<a href="https://youtube.com/@YOUR_CHANNEL">
```

---

### 3️⃣ Add Images (5 menit)

1. Buat folder `public/` di root directory
2. Copy images ke folder:
   - `hero.png` - Hero image
   - `profile.png` - Profile photo
   - Atau gambar apapun yang Anda ingin display

Untuk menggunakan di `app/page.tsx`:
```tsx
<img src="/hero.png" alt="Hero" />
```

---

### 4️⃣ Build & Test Lokal (2 menit)

```bash
# Build untuk production
npm run build

# Test build
npm start
```

Buka: **http://localhost:3000**

---

### 5️⃣ Deploy ke Vercel (10 menit)

**Option A: GitHub + Vercel (Recommended)**

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/videographer-portfolio.git
   git push -u origin main
   ```

2. **Deploy ke Vercel:**
   - Buka https://vercel.com
   - Login dengan GitHub
   - Klik "New Project"
   - Select repository: `videographer-portfolio`
   - Klik "Deploy"
   - Done! 🎉

3. **Custom Domain (Optional):**
   - Di Vercel dashboard → Settings → Domains
   - Tambah domain Anda
   - Update DNS records
   - Tunggu 24-48 jam propagasi

**Option B: Direct Deploy**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 📝 Content Checklist

- [ ] Update hero section tagline
- [ ] Update about me description
- [ ] Add 3-5 video projects dengan YouTube/Vimeo links
- [ ] Update project descriptions & tags
- [ ] Upload hero.png & profile.png ke public/
- [ ] Update email & social media links
- [ ] Customize skills section
- [ ] Proofread semua text
- [ ] Test di mobile device
- [ ] Deploy ke Vercel

---

## 🎥 Video Embed Snippets

### YouTube
```tsx
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  width="100%"
  height="100%"
  frameBorder="0"
  allowFullScreen
  className="rounded-lg"
></iframe>
```

### Vimeo
```tsx
<iframe
  src="https://player.vimeo.com/video/123456789"
  width="100%"
  height="100%"
  frameBorder="0"
  allow="autoplay; fullscreen"
  className="rounded-lg"
></iframe>
```

### Image + Link
```tsx
<div className="bg-gray-900 aspect-video rounded-lg overflow-hidden">
  <a href="https://your-video-link.com" target="_blank">
    <img src="/thumbnail.jpg" alt="Project" className="w-full h-full object-cover hover:opacity-80 transition" />
  </a>
</div>
```

---

## 🛠️ Useful Commands

```bash
# Development
npm run dev          # Start dev server at :3000

# Production
npm run build        # Build for production
npm start           # Run production build

# Linting
npm run lint        # Check code quality

# Database/API (if needed later)
npx prisma generate # Generate Prisma types
```

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  background: '#0a0a0a',  // Dark background
  foreground: '#ffffff',  // Text color
  muted: '#666666',       // Muted text
}
```

### Change Fonts
Edit `app/globals.css`:
```css
body {
  font-family: 'Your Font Here', sans-serif;
}
```

### Add New Section
Copy template:
```tsx
<section id="section-name" className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="section-title">Section Title</h2>
  {/* Content here */}
</section>
```

---

## 🚀 Next Steps After Deploy

1. **Add Google Analytics:**
   - Get analytics code from Google Analytics
   - Add to `app/layout.tsx` in `<head>`

2. **Setup Email:**
   - Update mailto link ke email Anda
   - Pertimbangkan add contact form (EmailJS, Formspree)

3. **SEO Optimization:**
   - Update `app/layout.tsx` metadata
   - Add canonical tags
   - Setup sitemap

4. **Performance:**
   - Optimize images (WebP format)
   - Enable caching headers
   - Test speed dengan PageSpeed Insights

---

## ❓ FAQ

**Q: Gimana nambah video di portfolio?**
A: Edit `app/page.tsx`, cari section Projects, ganti iframe src dengan YouTube/Vimeo video ID

**Q: Bisa pakai custom domain?**
A: Ya! Di Vercel dashboard, tambah domain di Settings → Domains

**Q: Gimana kalau error saat deploy?**
A: Cek Vercel logs di dashboard, atau run `npm run build` lokal untuk debug

**Q: Bisa nambah contact form?**
A: Ya! Recommend EmailJS atau Formspree (free tier tersedia)

---

## 📞 Support Resources

- **Next.js Help:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **React Docs:** https://react.dev

---

**Happy building! 🎬✨**

Need more help? Check README.md untuk details lebih lengkap.
