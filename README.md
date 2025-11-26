# 🔐 ArabicSec - Arabic-First Cybersecurity Education Platform

> **منصة تعليمية عربية متكاملة للأمن السيبراني**  
> Complete Arabic-first bilingual landing page for cybersecurity education

---

## 🌟 Overview

This is a **brand-new bilingual landing page** that completely replaces the existing one. It showcases the integrated **ArabicSec + SASTify / VulnPlayground** ecosystem with:

- ✅ **Arabic as PRIMARY language** (default)
- ✅ **English as SECONDARY language** (toggle available)
- ✅ **Full RTL/LTR support**
- ✅ **Modern dark cybersecurity theme**
- ✅ **Smooth animations** with Framer Motion
- ✅ **Mobile-first responsive design**
- ✅ **Integration of both projects** (ArabicSec Platform + SASTify Backend)

---

## 📚 Content Source

This landing page is built based on the technical features and project information from:

**`/mnt/data/PROJECT_SUMMARY.md`**

All features, statistics, and project descriptions are extracted from this authoritative source document.

---

## 🎨 Design Specifications

### **Color Palette**
```
Background Primary:    #0A0C1C
Background Secondary:  #1A1F36
Primary Accent:        #3A4DFF
Highlight:             #00D4FF
Success:               #20C997
Danger:                #C92032
```

### **Typography**
- **Arabic:** Cairo (primary), Tajawal (fallback)
- **English:** Inter

### **Features**
- Full RTL support for Arabic text
- LTR support for English text
- Language toggle button (Arabic default)
- Smooth scroll animations
- Gradient effects
- Glassmorphism UI elements

---

## 🏗️ Project Structure

```
arabic-sec-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with font config
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles + RTL support
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive navbar with language toggle
│   │   ├── Hero.tsx            # Hero section with stats
│   │   ├── Features.tsx        # 6 key features showcase
│   │   ├── ProjectsShowcase.tsx # ArabicSec + SASTify cards
│   │   ├── HowItWorks.tsx      # 3-step learning process
│   │   ├── CTA.tsx             # Call-to-action section
│   │   └── Footer.tsx          # Footer with links
│   └── contexts/
│       └── LanguageContext.tsx # Language state management
├── public/                     # Static assets
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind + RTL config
├── tsconfig.json               # TypeScript config
└── README.md                   # This file
```

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ or 20+
- npm or yarn

### **Installation**

```bash
# Clone or navigate to the project
cd arabic-sec-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to: http://localhost:3000
```

### **Build for Production**

```bash
# Build optimized version
npm run build

# Start production server
npm start
```

---

## 📦 Dependencies

### **Core**
- `next` 15.1.7 - React framework
- `react` 18.2.0 - UI library
- `typescript` 5.7.3 - Type safety

### **UI & Animations**
- `framer-motion` 12.7.3 - Animations
- `lucide-react` 0.475.0 - Icons
- `tailwindcss` 3.4.17 - Styling

### **Fonts**
- Google Fonts: Cairo (Arabic)
- Google Fonts: Inter (English)

---

## 🌐 Language System

### **Default Language:** Arabic (RTL)

### **Language Toggle:**
- Click the globe icon in navbar
- Switches between Arabic (AR) and English (EN)
- Automatically changes:
  - Text direction (RTL ↔ LTR)
  - Font family
  - Content language

### **Bilingual Content Structure:**

```tsx
// Example from components
const content = {
  ar: {
    title: "عنوان عربي",
    titleEn: "English Title",  // Shows under Arabic
    subtitle: "نص عربي تفصيلي...",
    subtitleEn: "Detailed English text..."
  },
  en: {
    title: "English Title",
    // No duplicate English translation needed
  }
};
```

**When Arabic is selected:**
- Arabic text appears FIRST (larger)
- English translation appears below (smaller, gray)

**When English is selected:**
- English text appears only
- No Arabic shown

---

## 📄 Page Sections

### **1. Hero Section**
- Animated floating icons
- Main title with gradient effect
- Subtitle in both languages
- 2 CTA buttons
- 4 key statistics (7 lessons, 56+ languages, etc.)
- Scroll indicator

### **2. Features Section**
- 6 feature cards with icons
- Bilingual descriptions
- Hover animations
- Color-coded by feature type

### **3. Projects Showcase**
- **Card 1:** ArabicSec (Frontend Platform)
- **Card 2:** SASTify / VulnPlayground (AI Backend)
- Tech stack badges
- GitHub & Demo links
- Integration note

### **4. How It Works**
- 3-step learning process
- Visual flow with arrows
- Color-coded steps
- Final CTA button

### **5. Call To Action**
- Gradient background
- 3 action buttons
- Quick stats (100% Free, 24/7 Available, Open Source)
- Compelling copy

### **6. Footer**
- Brand section with social links
- Quick links column
- Resources column
- Copyright & built-with info
- Bilingual throughout

---

## 🎯 Key Features from PROJECT_SUMMARY.md

This landing page showcases:

### **Educational Platform (ArabicSec)**
- ✅ 7 Interactive Security Lessons
- ✅ SQL Injection, XSS, CSRF, Command Execution, Clickjacking, Directory Traversal, File Upload
- ✅ Quizzes with immediate feedback
- ✅ Prevention techniques & best practices
- ✅ Progress tracking

### **AI Engine (SASTify / VulnPlayground)**
- ✅ 56+ Programming Languages supported
- ✅ 3 Difficulty Levels (Easy, Medium, Hard)
- ✅ Groq AI (LLaMA 3.3 70B)
- ✅ Customizable code size & bug count
- ✅ Detailed solution explanations

### **Technical Stack**
- ✅ Next.js 15 + TypeScript
- ✅ Flask + Python
- ✅ Tailwind CSS + Framer Motion
- ✅ React Query
- ✅ RESTful API with Swagger

---

## 🎨 Customization

### **Change Colors**

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    dark: "#0A0C1C",      // Main background
    secondary: "#1A1F36",  // Card backgrounds
    accent: "#3A4DFF",     // Primary blue
    highlight: "#00D4FF",  // Cyan highlights
  },
  success: "#20C997",      // Green
  danger: "#C92032",       // Red
}
```

### **Change Content**

Edit individual component files in `src/components/`:
- Each component has a `content` object with `ar` and `en` keys
- Simply update the text strings

### **Add New Section**

1. Create new component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to page layout

---

## 📱 Responsive Design

### **Breakpoints:**
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### **Mobile Optimizations:**
- Stacked sections
- Hamburger menu
- Larger touch targets
- Optimized font sizes
- Proper RTL alignment maintained

---

## 🔧 Development

### **Available Scripts:**

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

### **Environment Variables:**

None required for basic functionality. Add `.env.local` if needed:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🌍 RTL Support Details

### **Implementation:**

1. **Document Direction:**
   ```tsx
   document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
   ```

2. **Conditional Styling:**
   ```tsx
   className={`absolute ${language === 'ar' ? 'right-8' : 'left-8'}`}
   ```

3. **Icon Rotation:**
   ```tsx
   <ArrowRight className={language === 'ar' ? 'rotate-180' : ''} />
   ```

4. **Tailwind RTL Classes:**
   - Automatically handles margin/padding
   - Use logical properties where possible

---

## 🎓 Educational Purpose

This landing page serves to:

1. **Introduce** the ArabicSec cybersecurity education platform
2. **Showcase** the integration of frontend and backend systems
3. **Explain** the learning methodology ("Learn by Breaking")
4. **Demonstrate** bilingual UI best practices
5. **Attract** developers to use and contribute to the platform

---

## 🔗 Integration with Main Project

This landing page is designed to:

- **Replace** the existing SASTify landing page completely
- **Link** to the actual ArabicSec platform (when deployed)
- **Connect** to the VulnPlayground API backend
- **Serve** as the main entry point for users

### **Connection Points:**

```
Landing Page (ArabicSec)
    ↓
    ├─→ ArabicSec Platform (Frontend)
    │   ├─→ Interactive Lessons
    │   ├─→ Quizzes
    │   └─→ Prevention Guides
    │
    └─→ SASTify VulnPlayground (Backend)
        ├─→ AI Code Generation
        └─→ Solution Explanations
```

---

## 📊 Performance

- **Lighthouse Score Target:** 90+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Bundle Size:** Optimized with Next.js automatic code splitting

---

## 🐛 Troubleshooting

### **Fonts not loading?**
- Check internet connection (Google Fonts CDN)
- Verify `globals.css` imports

### **RTL not working?**
- Ensure `LanguageContext` wraps the app
- Check `document.documentElement.dir` is set

### **Animations lagging?**
- Reduce `motion` complexity
- Check browser hardware acceleration

### **Language toggle not working?**
- Verify `LanguageContext` is properly imported
- Check browser console for errors

---

## 🚀 Deployment

### **Vercel (Recommended):**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Other Platforms:**
- Netlify
- AWS Amplify
- Railway
- Cloudflare Pages

All support Next.js out of the box.

---

## 📝 License

Open for educational use. Built for the Arabic cybersecurity education community.

---

## 🤝 Contributing

Contributions welcome! This landing page can be improved with:

- Additional language support
- More animations
- Performance optimizations
- Accessibility improvements
- Content updates

---

## 📧 Contact

- **GitHub:** [Link to repository]
- **Email:** contact@arabicsec.com
- **Twitter:** @arabicsec

---

## ✨ Credits

- **Design & Development:** ArabicSec Team
- **Content Source:** PROJECT_SUMMARY.md
- **Technology:** Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Fonts:** Google Fonts (Cairo, Inter)
- **Icons:** Lucide React

---

## 🎯 What Makes This Unique?

1. **Arabic-First Approach** - Not a translated afterthought
2. **Bilingual by Design** - Both languages coexist naturally
3. **Full RTL Support** - Proper Arabic text handling
4. **Modern UI** - Cybersecurity-themed dark design
5. **Integrated Projects** - Showcases complete ecosystem
6. **Educational Focus** - Clear learning path explained
7. **Production Ready** - Optimized and deployable

---

**Built with ❤️ for the Arabic developer community**

🔐 **Making cybersecurity education accessible in Arabic**

---

*This landing page fully replaces the previous one and serves as the unified entry point for the ArabicSec + SASTify educational platform.*

"# arabicsec" 
