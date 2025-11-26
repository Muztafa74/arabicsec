# 📦 Quick Installation Guide

## 🚀 Get Started in 2 Minutes

### **Step 1: Install Dependencies**

```bash
npm install
```

**What gets installed:**
- Next.js 15.1.7
- React 18.2.0
- TypeScript 5.7.3
- Tailwind CSS 3.4.17
- Framer Motion 12.7.3
- Lucide React (icons)

---

### **Step 2: Run Development Server**

```bash
npm run dev
```

**Server starts on:** http://localhost:3000

---

### **Step 3: Open Browser**

Navigate to: **http://localhost:3000**

You should see the **ArabicSec landing page** in Arabic (default).

---

## ✅ Verify Installation

### **Check Language Toggle**
1. Click the **globe icon** (🌐) in the navbar
2. Language should switch between Arabic and English
3. Text direction should change (RTL ↔ LTR)

### **Check Animations**
1. Scroll down the page
2. Sections should animate smoothly
3. Hover over cards for effects

### **Check Responsive Design**
1. Resize browser window
2. Mobile menu should appear on small screens
3. Layout should adapt properly

---

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Run linter
npm run lint
```

---

## 📱 Testing on Mobile

### **Method 1: Network Access**

```bash
# Find your local IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Run dev server
npm run dev

# Access from mobile
http://YOUR_IP:3000
```

### **Method 2: Browser DevTools**

1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Select mobile device
4. Test responsiveness

---

## 🎨 Customization

### **Change Default Language**

Edit `src/contexts/LanguageContext.tsx`:

```typescript
const [language, setLanguage] = useState<Language>('en'); // Change 'ar' to 'en'
```

### **Change Colors**

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    accent: "#YOUR_COLOR",
  }
}
```

### **Change Content**

Each component has a `content` object:

```typescript
const content = {
  ar: {
    title: "Your Arabic Text",
    titleEn: "Your English Text"
  }
};
```

---

## 🐛 Common Issues

### **Port 3000 Already in Use**

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### **Dependencies Not Installing**

```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules

# Reinstall
npm install
```

### **TypeScript Errors**

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run dev
```

---

## 📚 Next Steps

1. ✅ **Customize Content** - Edit component text
2. ✅ **Add Images** - Place in `/public` folder
3. ✅ **Update Links** - Replace `#` hrefs with real URLs
4. ✅ **Configure Analytics** - Add tracking codes
5. ✅ **Deploy** - Push to Vercel/Netlify

---

## 🎯 Project Structure Quick Reference

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ProjectsShowcase.tsx
│   ├── HowItWorks.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── contexts/
    └── LanguageContext.tsx
```

---

## ✨ You're Ready!

The landing page is now running. Customize it to match your needs!

**Need help?** Check the main README.md for detailed documentation.

