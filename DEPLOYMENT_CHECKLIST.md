# Pre-Deployment SEO & Setup Checklist

## ✅ SEO Files Created

These files have been created to improve search engine visibility and site performance:

### Core SEO Files
- ✅ **index.html** - Enhanced with comprehensive meta tags, Open Graph, Twitter cards, and Schema.org structured data
- ✅ **public/sitemap.xml** - Main sitemap for all pages with priority levels
- ✅ **public/sitemap-images.xml** - Image sitemap for gallery images
- ✅ **public/robots.txt** - Search engine crawling instructions with sitemap location
- ✅ **public/manifest.json** - PWA manifest with app metadata and shortcuts
- ✅ **public/_redirects** - Netlify redirects for SPA, domain consolidation, and old URL redirects
- ✅ **src/config/seo.ts** - Centralized SEO configuration and constants

### Deployment Configuration
- ✅ **netlify.toml** - Deployment configuration for Netlify with headers, cache rules, and redirects
- ✅ **vercel.json** - Deployment configuration for Vercel with headers and redirects

### Documentation
- ✅ **SEO_DOCUMENTATION.md** - Complete SEO setup and maintenance guide
- ✅ **DEPLOYMENT_CHECKLIST.md** - This file

### UI/UX Improvements
- ✅ **src/pages/NotFound.tsx** - Enhanced 404 page with navigation and quick links
- ✅ **src/components/ScrollToTop.tsx** - Auto-scroll to top on page navigation
- ✅ **src/pages/Gallery.tsx** - Optimized with pagination, lazy loading, and spinners

---

## 📋 Before Hosting

### Domain Setup
- [ ] Register domain (e.g., krishnavihariarts.in)
- [ ] Update domain in `index.html` Open Graph URL tags
- [ ] Update domain in `src/config/seo.ts` baseUrl
- [ ] Update domain in `netlify.toml` and `vercel.json` redirect rules
- [ ] Configure DNS records pointing to hosting provider
- [ ] Set up SSL certificate (automatic on Netlify/Vercel)

### Search Engine Submission
- [ ] Create Google Search Console account (https://search.google.com/search-console)
- [ ] Add property with your domain
- [ ] Upload **sitemap.xml**:
  ```
  https://krishnavihariarts.in/sitemap.xml
  ```
- [ ] Upload **sitemap-images.xml**:
  ```
  https://krishnavihariarts.in/sitemap-images.xml
  ```
- [ ] Verify domain ownership
- [ ] Submit to Bing Webmaster Tools (https://www.bing.com/webmaster)

### Analytics Setup
- [ ] Set up Google Analytics 4
- [ ] Create GA4 property for the domain
- [ ] Add GA tracking code to your site
- [ ] Set up Google Console linking (Google Search Console → Settings → Linked accounts)
- [ ] Set up Bing Analytics
- [ ] Create Google My Business profile (for local business listing)

### Content & Images
- [ ] Ensure all gallery images have descriptive alt text
- [ ] Optimize image sizes (compress images)
- [ ] Use modern image formats (WebP with PNG fallback)
- [ ] Add image captions where appropriate
- [ ] Review all page content for keywords and readability
- [ ] Ensure proper heading hierarchy (H1, H2, H3) on each page

### Performance
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Target scores: Lighthouse score > 90
- [ ] Optimize Core Web Vitals:
  - [ ] Largest Contentful Paint (LCP) < 2.5s
  - [ ] First Input Delay (FID) < 100ms
  - [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Enable compression on server
- [ ] Configure caching headers (already in netlify.toml/vercel.json)

### Security
- [ ] Verify security headers are configured (in deployment config files)
- [ ] Enable HTTPS (automatic on Netlify/Vercel)
- [ ] Configure CSP headers if needed
- [ ] Regular SSL certificate checks

### Links & Redirects
- [ ] Test all internal links work correctly
- [ ] Verify old URL redirects work:
  - `/paintings` → `/gallery`
  - `/artworks` → `/gallery`
  - `/murals` → `/gallery`
  - `/portfolio` → `/gallery`
- [ ] Test that `_redirects` file is deployed correctly
- [ ] Verify SPA 404 redirect works (all unknown routes → index.html)

---

## 🚀 Deploy on Netlify

### Steps:
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Build command: `bun run build`
4. Publish directory: `dist`
5. Deploy will automatically use `netlify.toml` configuration
6. Add custom domain in Netlify settings
7. Enable auto-renewing SSL certificate

### Netlify Environment Variables (if needed):
```
VITE_API_URL = https://api.krishnavihariarts.in
```

---

## 🚀 Deploy on Vercel

### Steps:
1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite project
4. Configure build:
   - Framework: Vite
   - Build Command: `bun run build`
   - Output Directory: `dist`
5. Deploy
6. Add custom domain in project settings
7. Enable SSL certificate

### Vercel Environment Variables:
```
VITE_API_URL=https://api.krishnavihariarts.in
```

---

## ✨ Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Test website on all devices and browsers
- [ ] Verify all links work correctly
- [ ] Check 404 page displays for unknown routes
- [ ] Test form submissions (Contact page)
- [ ] Verify analytics is tracking
- [ ] Monitor server logs for errors

### First Week
- [ ] Google Search Console shows site indexed
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Monitor organic traffic in Google Analytics
- [ ] Review and respond to any errors
- [ ] Test page speed with PageSpeed Insights
- [ ] Submit sitemap to Bing

### First Month
- [ ] Review Google Search Console queries report
- [ ] Analyze user behavior in Google Analytics
- [ ] Check for crawl errors
- [ ] Monitor rankings for target keywords
- [ ] Share website on social media
- [ ] Build backlinks from art-related websites

---

## 📊 SEO Keywords Implemented

### Primary Keywords
- Krishna Vihari Arts
- Professional artist
- Paintings and wall arts
- Custom artwork
- Art gallery

### Long-tail Keywords
- "Professional artist specializing in paintings"
- "Custom wall murals and canvas art"
- "Handcrafted artwork Krishna Vihari"
- "Traditional and modern art gallery"
- "Art commission and custom artwork services"

### Category Keywords
- Traditional paintings, classical art, Indian art
- Canvas paintings, painted canvas
- Modern art, contemporary paintings
- Wall murals, mural painting
- Art services, custom commissions

---

## 📝 Maintenance Checklist

### Monthly
- [ ] Update sitemap-images.xml for new gallery items
- [ ] Review Google Search Console for new errors
- [ ] Check Core Web Vitals scores
- [ ] Monitor organic traffic trends

### Quarterly
- [ ] Audit keyword rankings
- [ ] Review and update meta descriptions based on CTR
- [ ] Check for broken links
- [ ] Update content if needed

### Semi-Annually
- [ ] Comprehensive SEO audit
- [ ] Analyze backlink profile
- [ ] Competitor analysis
- [ ] Update SEO strategy

### Annually
- [ ] Full technical SEO audit
- [ ] Update schema markup versions
- [ ] Review and optimize images
- [ ] Consider new content opportunities

---

## 🎯 Performance Targets

After deployment, aim for:

| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Mobile Score | 90+ |
| Desktop Score | 95+ |
| Core Web Vitals Status | All "Good" |

---

## 📚 Useful Resources

- **Google Search Central**: https://developers.google.com/search
- **Google Analytics**: https://analytics.google.com
- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster Tools**: https://www.bing.com/webmaster
- **Google My Business**: https://business.google.com
- **Page Speed Insights**: https://pagespeed.web.dev
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Schema.org**: https://schema.org

---

## ❓ Questions or Issues?

Refer to **SEO_DOCUMENTATION.md** for detailed information about:
- SEO files and their purposes
- Keywords by category
- Technical implementation details
- Maintenance guidelines
- Content recommendations

---

**Last Updated**: April 4, 2026
**Status**: Ready for Deployment ✅
