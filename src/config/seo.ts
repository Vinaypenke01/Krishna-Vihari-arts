/**
 * SEO Configuration for Krishna Vihari Arts website
 * Contains metadata and keywords for all pages
 */

export const SEO_CONFIG = {
  site: {
    name: "Krishna Vihari Arts",
    description: "Professional artist specializing in traditional paintings, modern wall arts, canvas paintings, murals, and custom artwork",
    baseUrl: "https://krishnavihariarts.in",
    image: "/Krishna_Vihari_page-logo.png",
    twitterHandle: "@krishnavihari",
  },
  
  pages: {
    home: {
      title: "Krishna Vihari Arts - Professional Artist | Paintings, Wall Arts & Murals",
      description: "Discover authentic handcrafted paintings, wall arts, murals, and custom artwork by professional artist Krishna Vihari. Specializing in traditional and modern art.",
      keywords: ["Krishna Vihari Arts", "professional artist", "paintings", "wall arts", "murals", "canvas art", "custom artwork", "art gallery"],
      slug: "/",
    },
    
    gallery: {
      title: "Art Gallery - Krishna Vihari Arts | Traditional, Canvas & Modern Art",
      description: "Explore our extensive gallery featuring traditional paintings, modern wall arts, canvas artwork, and beautiful murals. Browse handcrafted pieces by Krishna Vihari.",
      keywords: ["art gallery", "paintings gallery", "wall arts", "canvas paintings", "traditional art", "modern art", "murals", "artwork collection", "handmade art"],
      slug: "/gallery",
    },
    
    services: {
      title: "Art Services - Krishna Vihari Arts | Custom Paintings & Wall Art",
      description: "Professional art services including custom paintings, wall murals, canvas art, interior design artwork, and personalized creations. Commission your masterpiece today.",
      keywords: ["art services", "custom paintings", "wall murals", "interior art", "commissioned artwork", "custom wall art", "professional artwork", "art commission"],
      slug: "/services",
    },
    
    about: {
      title: "About Krishna Vihari - Professional Artist & Painter",
      description: "Learn about Krishna Vihari, a professional artist with expertise in traditional paintings, modern wall arts, murals, and custom artwork. Discover the story behind the art.",
      keywords: ["about artist", "Krishna Vihari", "professional painter", "artist biography", "art experience", "artistic journey", "custom artist"],
      slug: "/about",
    },
    
    contact: {
      title: "Contact Krishna Vihari Arts - Get in Touch for Custom Artwork",
      description: "Contact Krishna Vihari Arts for custom paintings, wall art commissions, art inquiries, and professional services. Reach out today to discuss your project.",
      keywords: ["contact", "get in touch", "art commission", "custom artwork inquiry", "professional services", "art consultation"],
      slug: "/contact",
    },
  },

  // Rich structured data
  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Krishna Vihari Arts",
      description: "Professional artist specializing in paintings, wall arts, and murals",
      url: "https://krishnavihariarts.in/",
      image: "/Krishna_Vihari_page-logo.png",
      priceRange: "$$",
      sameAs: [
        "https://facebook.com/krishnavihari",
        "https://instagram.com/krishnavihari",
        "https://youtube.com/krishnavihari",
      ],
    },

    creativework: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Krishna Vihari Arts - Gallery",
      description: "Collection of handcrafted paintings, wall arts, and murals",
      creator: {
        "@type": "Person",
        name: "Krishna Vihari",
      },
    },

    breadcrumb: (path: string) => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: generateBreadcrumbs(path),
    }),
  },
};

/**
 * Generate breadcrumb items based on page path
 */
function generateBreadcrumbs(path: string) {
  const pathSegments = path.split("/").filter(Boolean);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://krishnavihariarts.in/",
    },
  ];

  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const pageData = Object.values(SEO_CONFIG.pages).find((p) => p.slug === currentPath);

    if (pageData) {
      breadcrumbs.push({
        "@type": "ListItem",
        position: index + 2,
        name: pageData.title.split(" - ")[0],
        item: `https://krishnavihariarts.in${pageData.slug}`,
      });
    }
  });

  return breadcrumbs;
}

/**
 * SEO keywords by category
 */
export const KEYWORDS_BY_CATEGORY = {
  traditional_art: [
    "traditional paintings",
    "classical art",
    "Indian art",
    "wall paintings",
    "traditional artwork",
  ],
  canvas_art: [
    "canvas paintings",
    "canvas art",
    "painted canvas",
    "canvas artwork",
    "canvas wall art",
  ],
  modern_art: [
    "modern art",
    "contemporary paintings",
    "modern wall art",
    "abstract art",
    "contemporary artwork",
  ],
  murals: [
    "wall murals",
    "mural painting",
    "interior murals",
    "custom murals",
    "decorative murals",
  ],
  services: [
    "art services",
    "custom paintings",
    "commission artwork",
    "interior art design",
    "wall decoration services",
  ],
};

/**
 * Social media descriptions for sharing
 */
export const SOCIAL_DESCRIPTIONS = {
  twitter: "Explore handcrafted paintings and wall arts by professional artist Krishna Vihari. 🎨",
  facebook: "Discover authentic artwork and custom creation services at Krishna Vihari Arts",
  instagram: "Handcrafted paintings, wall arts, and murals. Follow for daily artistic inspiration!",
  linkedin: "Professional artist specializing in traditional and contemporary artwork",
};

/**
 * Get page metadata by slug
 */
export const getPageMeta = (slug: string) => {
  const page = Object.values(SEO_CONFIG.pages).find((p) => p.slug === slug);
  return page || SEO_CONFIG.pages.home;
};
