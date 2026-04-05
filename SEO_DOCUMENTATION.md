# SEO Configuration and Documentation

## Overview
This document outlines the SEO setup for Krishna Vihari Arts website - a professional artist portfolio featuring paintings, wall arts, murals, and custom artwork.

## SEO Files Created

### 1. **index.html** - Enhanced Meta Tags
- Comprehensive title tags with keywords
- Open Graph tags for social sharing
- Twitter card configuration
- Schema.org structured data (LocalBusiness and CreativeWork)
- Proper viewport and charset configuration

### 2. **sitemap.xml** - Main Sitemap
- Includes all main pages (Home, Gallery, Services, About, Contact)
- Priority levels: 1.0 (Home), 0.9 (Gallery), 0.8 (Services/About), 0.7 (Contact)
- Change frequency indicators for crawl optimization

### 3. **sitemap-images.xml** - Image Sitemap
- Helps Google index and rank images in the gallery
- Includes alt text and captions for each image
- Improves image search visibility

### 4. **robots.txt** - Search Engine Instructions
- Allows indexing of all pages
- Blocks crawler access to admin, private, and config files
- Specifies sitemap locations
- Crawl delay settings for different bots
- Blocks aggressive bot crawlers (Ahrefs, Semrush)

### 5. **manifest.json** - Progressive Web App
- PWA installation support
- App icons and metadata
- Shortcuts to key pages (Gallery, Services, Contact)
- Theme colors and display modes

### 6. **_redirects** - Netlify Redirects
- Redirects from netlify.app to main domain
- Handles old URLs to gallery (paintings, artworks, murals, portfolio)
- SPA fallback for single page application
- Security headers configuration

### 7. **src/config/seo.ts** - SEO Constants
- Centralized SEO configuration
- Page-specific metadata and keywords
- Breadcrumb generation
- Social media descriptions
- Structured data templates

## Keywords by Category

### Traditional Art
- traditional paintings, classical art, Indian art, wall paintings, traditional artwork

### Canvas Art
- canvas paintings, canvas art, painted canvas, canvas artwork, canvas wall art

### Modern Art
- modern art, contemporary paintings, modern wall art, abstract art, contemporary artwork

### Murals
- wall murals, mural painting, interior murals, custom murals, decorative murals

### Services
- art services, custom paintings, commission artwork, interior art design, wall decoration services

## Key SEO Terms Used
- Professional artist
- Krishna Vihari Arts
- Paintings and wall arts
- Handcrafted artwork
- Custom artwork
- Murals and muralists
- Art commission
- Interior art design
- Canvas paintings
- Gallery

## Technical SEO Implementation

### 1. Structured Data
- **LocalBusiness Schema**: Identifies the business as a local art service provider
- **CreativeWork Schema**: Describes artworks in the gallery
- **BreadcrumbList Schema**: Helps with site navigation in search results

### 2. Meta Tags
- **Title Tags**: Keyword-rich, under 60 characters where possible
- **Meta Descriptions**: Compelling summaries under 160 characters
- **Open Graph Tags**: Optimized social media sharing
- **Twitter Cards**: Enhanced Twitter preview appearance

### 3. Image Optimization
- Images in gallery have proper alt text
- Image sitemap helps Google understand image content
- Image captions describe the artwork

### 4. Mobile Optimization
- Responsive viewport configuration
- Mobile-friendly design implementation
- App icon and touch icon setup

### 5. Performance Recommendations
- Lazy load gallery images (already implemented in Gallery.tsx)
- Compress images before upload
- Use modern image formats (WebP with fallbacks)
- Implement CDN for static assets

## Sitemap Submission

Submit these sitemaps to search engines:

### Google Search Console
```
https://www.google.com/webmasters
- Add sitemap: https://krishnavihariarts.in/sitemap.xml
- Add image sitemap: https://krishnavihariarts.in/sitemap-images.xml
```

### Bing Webmaster Tools
```
https://www.bing.com/webmaster
- Submit sitemaps
- Verify site ownership
```

## Best Practices Implemented

✅ Unique, descriptive titles and meta descriptions for each page
✅ Proper heading hierarchy (H1, H2, H3...)
✅ Keyword-rich content without stuffing
✅ Internal linking between related pages
✅ Mobile-responsive design
✅ Fast page load times with lazy loading
✅ Structured data markup
✅ Social media optimization
✅ 404 page with helpful navigation
✅ Security headers in _redirects

## Ongoing SEO Maintenance

1. **Monthly**: Update sitemap-images.xml when adding new gallery items
2. **Quarterly**: Review and update meta descriptions based on performance
3. **Semi-annually**: Audit keywords and competitors
4. **Annually**: Review structured data and update schema versions

## Content Recommendations

To further improve SEO:
1. Add blog section with art-related content
2. Create artist bio page with rich content
3. Add customer testimonials/reviews
4. Create how-to guides for art commissioning
5. Add FAQ section
6. Create local business schema variations for each service area

## Monitoring Tools

Recommended tools to track SEO performance:
- Google Search Console (free)
- Google Analytics (free)
- Bing Webmaster Tools (free)
- Semrush (optional)
- Ahrefs (optional)
- Moz (optional)

## Questions?

Contact the developer for questions about SEO implementation or to request SEO modifications.
