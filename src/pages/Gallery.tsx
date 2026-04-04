// import { useState } from "react";
// import SectionHeading from "@/components/SectionHeading";
// import { X } from "lucide-react";
// import galleryMural from "@/assets/gallery-mural.jpg";
// import galleryCanvas from "@/assets/gallery-canvas.jpg";
// import gallerySpiritual from "@/assets/gallery-spiritual.jpg";
// import galleryBapu from "@/assets/gallery-bapu.jpg";
// import galleryKids from "@/assets/gallery-kids.jpg";
// import heroMural from "@/assets/hero-mural.jpg";
// import galleryBanner from "@/assets/gallery.jpeg";

// type Category = "All" | "Murals" | "Canvas" | "Spiritual" | "Kids" | "Bapu Style";

// const categories: Category[] = ["All", "Murals", "Canvas", "Spiritual", "Kids", "Bapu Style"];

// const galleryItems = [
//   { src: galleryMural, alt: "Cafe mural with elephants and mandalas", category: "Murals" as const },
//   { src: gallerySpiritual, alt: "Ganesha abstract canvas painting", category: "Spiritual" as const },
//   { src: galleryCanvas, alt: "Temple landscape canvas painting", category: "Canvas" as const },
//   { src: galleryKids, alt: "Colorful kids room wall art", category: "Kids" as const },
//   { src: galleryBapu, alt: "Kalamkari Illustration style woman painting", category: "Bapu Style" as const },
//   { src: heroMural, alt: "Krishna wall mural in living room", category: "Murals" as const },
// ];

// const Gallery = () => {
//   const [active, setActive] = useState<Category>("All");
//   const [lightbox, setLightbox] = useState<string | null>(null);

//   const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

//   return (
//     <div className="pt-20">
//       <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">

//         {/* Background Image */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `url(${galleryBanner})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* Overlay (IMPORTANT) */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 z-0" />

//         {/* Content */}
//         <div className="container-narrow relative z-10 text-center">
//           <SectionHeading
//             title="Gallery"
//             subtitle="Browse our handcrafted artworks"
//             className="[&_h2]:text-white [&_p]:text-white/80"
//           />

//           {/* Filters */}
//           <div className="flex flex-wrap justify-center gap-2 mt-6">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${active === cat
//                   ? "bg-gold text-gold-foreground"
//                   : "bg-white/20 backdrop-blur text-white hover:bg-white/30"
//                   }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//       </section>

//       <section className="section-padding bg-background">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
//             {filtered.map((item, i) => (
//               <div
//                 key={i}
//                 onClick={() => setLightbox(item.src)}
//                 className={`relative overflow-hidden rounded-lg cursor-pointer group ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
//                   }`}
//               >
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   loading="lazy"
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lightbox */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
//           onClick={() => setLightbox(null)}
//         >
//           <button
//             onClick={() => setLightbox(null)}
//             className="absolute top-4 right-4 text-background hover:text-gold"
//           >
//             <X size={32} />
//           </button>
//           <img
//             src={lightbox}
//             alt="Gallery preview"
//             className="max-w-full max-h-[90vh] object-contain rounded-lg"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;





"use client";

import { useState, useCallback, useRef, useEffect, memo, useMemo } from "react";
import SectionHeading from "@/components/SectionHeading";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryBanner from "@/assets/gallery.jpeg";
import { Skeleton } from "@/components/ui/skeleton";

// Static imports for hero section
import galleryMural from "@/assets/gallery-mural.jpg";
import galleryCanvas from "@/assets/gallery-canvas.jpg";
import gallerySpiritual from "@/assets/gallery-spiritual.jpg";
import galleryBapu from "@/assets/gallery-bapu.jpg";
import galleryKids from "@/assets/gallery-kids.jpg";
import heroMural from "@/assets/hero-mural.jpg";



type Category = "All" | "Traditional Art" | "Canvas" | "Modern Art" | "Cafes";

const categories: Category[] = ["All", "Traditional Art", "Canvas", "Modern Art", "Cafes"];

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
  placeholder?: string;
}

// Dynamically imported image data organized by category
const getGalleryItems = async (): Promise<GalleryItem[]> => {
  return [
    { src: galleryMural, alt: "Cafe mural with elephants and mandalas", category: "Traditional Art" as const },
    { src: gallerySpiritual, alt: "Ganesha abstract canvas painting", category: "Traditional Art" as const },
    { src: galleryCanvas, alt: "Temple landscape canvas painting", category: "Canvas" as const },
    { src: galleryKids, alt: "Colorful kids room wall art", category: "Cafes" as const },
    { src: galleryBapu, alt: "Kalamkari Illustration style woman painting", category: "Traditional Art" as const },
    { src: heroMural, alt: "Krishna wall mural in living room", category: "Traditional Art" as const },
  ];
};

// Lazy load canvas images
const loadCanvasImages = () =>
  Promise.all([
    import("@/assets/canvas/canvas.jpeg"),
    import("@/assets/canvas/canvas2.jpeg"),
    import("@/assets/canvas/canvas3.jpeg"),
    import("@/assets/canvas/canvas4.jpeg"),
    import("@/assets/canvas/canvas5.jpeg"),
    import("@/assets/canvas/canvas6.jpeg"),
    import("@/assets/canvas/canvas1.jpeg"),
    import("@/assets/canvas/canvas7.jpeg"),
    import("@/assets/canvas/canvas8.jpeg"),
    import("@/assets/canvas/canvas9.jpeg"),
    import("@/assets/canvas/canvas10.jpeg"),
  ]).then((modules) =>
    modules.map((m, i) => ({
      src: (m as any).default,
      alt: `Canvas painting ${i + 1}`,
      category: "Canvas" as const,
    }))
  );

// Lazy load traditional art images
const loadTraditionalImages = () =>
  Promise.all([
    import("@/assets/wallarts/wall-art1.jpeg"),
    import("@/assets/wallarts/wall-art2.jpeg"),
    import("@/assets/wallarts/wall-art3.jpeg"),
    import("@/assets/wallarts/wall-art4.jpeg"),
    import("@/assets/wallarts/wall-art5.jpeg"),
    import("@/assets/wallarts/wall-art6.jpeg"),
    import("@/assets/wallarts/wall-art7.jpeg"),
    import("@/assets/wallarts/wall-art8.jpeg"),
    import("@/assets/wallarts/wall-art9.jpeg"),
    import("@/assets/wallarts/wall-art10.jpeg"),
    import("@/assets/wallarts/wall-art11.jpeg"),
    import("@/assets/wallarts/wall-art12.jpeg"),
    import("@/assets/wallarts/wall-art13.jpeg"),
    import("@/assets/wallarts/wall-art14.jpeg"),
    import("@/assets/wallarts/wall-art15.jpeg"),
  ]).then((modules) =>
    modules.map((m, i) => ({
      src: (m as any).default,
      alt: `Traditional Art ${i + 1}`,
      category: "Traditional Art" as const,
    }))
  );

// Lazy load modern art images
const loadModernImages = () =>
  Promise.all([
    import("@/assets/modern/modern-1.jpeg"),
    import("@/assets/modern/modern-2.jpeg"),
    import("@/assets/modern/modern-3.jpeg"),
    import("@/assets/modern/modern-4.jpeg"),
    import("@/assets/modern/modern-5.jpeg"),
    import("@/assets/modern/modern-6.jpeg"),
    import("@/assets/modern/modern7.jpeg"),
    import("@/assets/modern/modern8.jpeg"),
    import("@/assets/modern/modern9.jpeg"),
    import("@/assets/modern/modern10.jpeg"),
    import("@/assets/modern/modern11.jpeg"),
  ]).then((modules) =>
    modules.map((m, i) => ({
      src: (m as any).default,
      alt: `Modern Art ${i + 1}`,
      category: "Modern Art" as const,
    }))
  );

// Lazy load cafe images
const loadCafeImages = () =>
  Promise.all([
    import("@/assets/Business/business1.jpeg"),
    import("@/assets/Business/business2.jpeg"),
  ]).then((modules) =>
    modules.map((m, i) => ({
      src: (m as any).default,
      alt: `Cafe Art ${i + 1}`,
      category: "Cafes" as const,
    }))
  );

// Lazy loading image hook
const useImageInView = (ref: React.RefObject<HTMLDivElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isInView;
};

// Loading Spinner Component
const LoadingSpinner = memo(() => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-4 border-gray-300" />
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold animate-spin" />
    </div>
  </div>
));

LoadingSpinner.displayName = "LoadingSpinner";

// Memoized gallery item component
interface LazyImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  loading?: boolean;
}

const LazyImage = memo(({ src, alt, onClick, loading }: LazyImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useImageInView(ref);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-lg cursor-pointer group bg-gray-100 aspect-square"
    >
      {!loaded && isInView && <LoadingSpinner />}
      <img
        src={isInView ? src : ""}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onClick={onClick}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// Gallery Grid Component with Pagination
const GalleryGrid = memo(
  ({
    items,
    currentPage,
    onImageClick,
    itemsPerPage = 12,
  }: {
    items: GalleryItem[];
    currentPage: number;
    onImageClick: (src: string) => void;
    itemsPerPage?: number;
  }) => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const paginatedItems = items.slice(startIdx, endIdx);

    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {paginatedItems.map((item, i) => (
          <div key={`${item.alt}-${currentPage}-${i}`} className={`${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
            <LazyImage src={item.src} alt={item.alt} onClick={() => onImageClick(item.src)} />
          </div>
        ))}
      </div>
    );
  }
);

GalleryGrid.displayName = "GalleryGrid";

// Pagination Controls Component
const PaginationControls = memo(
  ({
    currentPage,
    totalPages,
    onPageChange,
  }: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            const isActive = pageNum === currentPage;
            const isNear = Math.abs(pageNum - currentPage) <= 2;

            if (!isNear && pageNum !== 1 && pageNum !== totalPages) {
              return null;
            }

            if (!isNear && pageNum === 2) {
              return (
                <span key="ellipsis-start" className="px-2">
                  ...
                </span>
              );
            }

            if (!isNear && pageNum === totalPages - 1) {
              return (
                <span key="ellipsis-end" className="px-2">
                  ...
                </span>
              );
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  isActive
                    ? "bg-gold text-gold-foreground font-semibold"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
                aria-label={`Go to page ${pageNum}`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    );
  }
);

PaginationControls.displayName = "PaginationControls";

const Gallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [allItems, setAllItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const categoryImagesCache = useRef<Record<Category, GalleryItem[] | Promise<GalleryItem[]>>>({} as any);

  const ITEMS_PER_PAGE = 12;

  // Load initial hero images and cache loaders
  useEffect(() => {
    const initializeGallery = async () => {
      const heroItems = await getGalleryItems();
      setAllItems(heroItems);
      
      // Pre-cache image loaders (not their data) to load on demand
      categoryImagesCache.current = {
        "All": heroItems,
        "Canvas": loadCanvasImages(),
        "Traditional Art": loadTraditionalImages(),
        "Modern Art": loadModernImages(),
        "Cafes": loadCafeImages(),
      };
      
      setLoading(false);
    };

    initializeGallery();
  }, []);

  // Load category images when category changes
  useEffect(() => {
    setCurrentPage(1); // Reset to first page when category changes
    
    if (active === "All") {
      const loadAll = async () => {
        setLoading(true);
        const [hero, canvas, traditional, modern, cafes] = await Promise.all([
          getGalleryItems(),
          (categoryImagesCache.current["Canvas"] instanceof Promise
            ? categoryImagesCache.current["Canvas"]
            : loadCanvasImages()) as Promise<GalleryItem[]>,
          (categoryImagesCache.current["Traditional Art"] instanceof Promise
            ? categoryImagesCache.current["Traditional Art"]
            : loadTraditionalImages()) as Promise<GalleryItem[]>,
          (categoryImagesCache.current["Modern Art"] instanceof Promise
            ? categoryImagesCache.current["Modern Art"]
            : loadModernImages()) as Promise<GalleryItem[]>,
          (categoryImagesCache.current["Cafes"] instanceof Promise
            ? categoryImagesCache.current["Cafes"]
            : loadCafeImages()) as Promise<GalleryItem[]>,
        ]);
        setAllItems([...hero, ...canvas, ...traditional, ...modern, ...cafes]);
        setLoading(false);
      };
      loadAll();
    } else {
      const loadCategory = async () => {
        setLoading(true);
        let categoryItems: GalleryItem[] = [];

        if (active === "Canvas") {
          categoryItems = await (categoryImagesCache.current["Canvas"] instanceof Promise
            ? categoryImagesCache.current["Canvas"]
            : loadCanvasImages());
        } else if (active === "Traditional Art") {
          categoryItems = await (categoryImagesCache.current["Traditional Art"] instanceof Promise
            ? categoryImagesCache.current["Traditional Art"]
            : loadTraditionalImages());
        } else if (active === "Modern Art") {
          categoryItems = await (categoryImagesCache.current["Modern Art"] instanceof Promise
            ? categoryImagesCache.current["Modern Art"]
            : loadModernImages());
        } else if (active === "Cafes") {
          categoryItems = await (categoryImagesCache.current["Cafes"] instanceof Promise
            ? categoryImagesCache.current["Cafes"]
            : loadCafeImages());
        }

        setAllItems(categoryItems);
        setLoading(false);
      };
      loadCategory();
    }
  }, [active]);

  const handleFilterClick = useCallback((cat: Category) => {
    setActive(cat);
  }, []);

  const handleImageClick = useCallback((src: string) => {
    setLightbox(src);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setLightbox(null);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to gallery section
    const gallerySection = document.getElementById("gallery-section");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);

  // Memoize banner image styling
  const bannerStyle = useMemo(
    () => ({
      backgroundImage: `url(${galleryBanner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }),
    []
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" style={bannerStyle} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 z-0" />

        {/* Content */}
        <div className="container-narrow relative z-10 text-center">
          <SectionHeading
            title="Gallery"
            subtitle="Browse our handcrafted artworks"
            className="[&_h2]:text-white [&_p]:text-white/80"
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                  active === cat
                    ? "bg-gold text-gold-foreground"
                    : "bg-white/20 backdrop-blur text-white hover:bg-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gray-200 flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              ))}
            </div>
          ) : allItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          ) : (
            <>
              <GalleryGrid
                items={allItems}
                currentPage={currentPage}
                onImageClick={handleImageClick}
                itemsPerPage={ITEMS_PER_PAGE}
              />
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleLightboxClose}
        >
          <button
            onClick={handleLightboxClose}
            className="absolute top-4 right-4 text-background hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-in fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
