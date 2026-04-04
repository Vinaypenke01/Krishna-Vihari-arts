import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { X } from "lucide-react";
import galleryMural from "@/assets/gallery-mural.jpg";
import galleryCanvas from "@/assets/gallery-canvas.jpg";
import gallerySpiritual from "@/assets/gallery-spiritual.jpg";
import galleryBapu from "@/assets/gallery-bapu.jpg";
import galleryKids from "@/assets/gallery-kids.jpg";
import heroMural from "@/assets/hero-mural.jpg";
import galleryBanner from "@/assets/gallery.jpeg";

type Category = "All" | "Murals" | "Canvas" | "Spiritual" | "Kids" | "Bapu Style";

const categories: Category[] = ["All", "Murals", "Canvas", "Spiritual", "Kids", "Bapu Style"];

const galleryItems = [
  { src: galleryMural, alt: "Cafe mural with elephants and mandalas", category: "Murals" as const },
  { src: gallerySpiritual, alt: "Ganesha abstract canvas painting", category: "Spiritual" as const },
  { src: galleryCanvas, alt: "Temple landscape canvas painting", category: "Canvas" as const },
  { src: galleryKids, alt: "Colorful kids room wall art", category: "Kids" as const },
  { src: galleryBapu, alt: "Kalamkari Illustration style woman painting", category: "Bapu Style" as const },
  { src: heroMural, alt: "Krishna wall mural in living room", category: "Murals" as const },
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${galleryBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay (IMPORTANT) */}
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
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${active === cat
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

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                onClick={() => setLightbox(item.src)}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
                  }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-background hover:text-gold"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
