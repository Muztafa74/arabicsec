# 🚀 Deployment Guide

## Quick Deploy Options

### **Option 1: Vercel (Recommended) ⚡**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

#### **Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Done!** 🎉
   - Your site is live
   - Auto-deploys on every push
   - Free SSL certificate included

---

### **Option 2: Netlify 🌐**

#### **Steps:**

1. **Build Command**
   ```
   npm run build
   ```

2. **Publish Directory**
   ```
   out
   ```

3. **Update `next.config.js`**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true }
   };
   ```

4. **Deploy**
   - Drag & drop `.next` folder to Netlify
   - Or connect GitHub repo

---

### **Option 3: Self-Hosted 🖥️**

#### **Requirements:**
- Node.js 18+
- PM2 (process manager)
- Nginx (optional, for reverse proxy)

#### **Steps:**

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "arabicsec" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx** (Optional)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔧 Environment Variables

### **For Production:**

Create `.env.production`:

```env
# API URLs (if needed)
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags (optional)
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

---

## 📊 Performance Optimization

### **Before Deployment:**

1. **Optimize Images**
   - Use WebP format
   - Compress with tools like TinyPNG
   - Place in `/public` folder

2. **Enable Compression**
   ```javascript
   // next.config.js
   const nextConfig = {
     compress: true,
   };
   ```

3. **Add Caching Headers**
   ```javascript
   // next.config.js
   const nextConfig = {
     headers: async () => [
       {
         source: '/:all*(svg|jpg|png)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
         ],
       },
     ],
   };
   ```

---

## 🌍 Custom Domain

### **Vercel:**

1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records

### **Netlify:**

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### **DNS Records:**

```
Type: A
Name: @
Value: YOUR_SERVER_IP

Type: CNAME
Name: www
Value: yourdomain.com
```

---

## 🔒 Security Headers

Add to `next.config.js`:

```javascript
const nextConfig = {
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],
};
```

---

## 📈 Analytics Integration

### **Google Analytics:**

1. **Install Package**
   ```bash
   npm install @next/third-parties
   ```

2. **Add to Layout**
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>{children}</body>
         <GoogleAnalytics gaId="G-XXXXXXXXXX" />
       </html>
     )
   }
   ```

---

## 🧪 Pre-Deployment Checklist

- [ ] Test all pages work
- [ ] Verify language toggle
- [ ] Check mobile responsiveness
- [ ] Test all links
- [ ] Optimize images
- [ ] Update metadata
- [ ] Add favicon
- [ ] Configure analytics
- [ ] Set up error tracking
- [ ] Test performance (Lighthouse)
- [ ] Verify RTL/LTR switching
- [ ] Check all animations

---

## 🚦 Deployment Status

### **Check Deployment:**

```bash
# Build locally first
npm run build

# Check for errors
npm start

# Test in browser
curl http://localhost:3000
```

### **Monitor Performance:**

- **Lighthouse:** Browser DevTools > Lighthouse
- **WebPageTest:** [webpagetest.org](https://webpagetest.org)
- **GTmetrix:** [gtmetrix.com](https://gtmetrix.com)

---

## 🔄 CI/CD Setup

### **GitHub Actions:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🐛 Troubleshooting Deployment

### **Build Fails:**

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### **504 Gateway Timeout:**

- Increase server timeout
- Optimize build process
- Check for infinite loops

### **Static Export Issues:**

```javascript
// Use static export
const nextConfig = {
  output: 'export',
  trailingSlash: true,
};
```

---

## 📞 Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**Your landing page is ready for the world! 🌍**

