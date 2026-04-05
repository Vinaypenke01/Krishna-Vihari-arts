import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Paintbrush, Home as HomeIcon, Sparkles, Heart, Clock, CheckCircle, Palette, Image } from "lucide-react";
import heroMural from "@/assets/hero-mural.jpg";
import CanvasPreview from "@/components/CanvasPreview";
import galleryMural from "@/assets/canvas/canvas3.jpg";
import panIndia from "@/assets/pan-india.png";
import gallerySpiritual from "@/assets/wallarts/wall-art1.jpeg";
import galleryCanvas from "@/assets/wallarts/wall-art6.jpeg";
import galleryKids from "@/assets/wallarts/wall-art7.jpeg";
import galleryBapu from "@/assets/Business/business1.jpeg";

const services = [
  { icon: HomeIcon, title: "Custom Wall Murals", desc: "Transform your homes, offices & cafés with stunning hand-painted murals" },
  { icon: Image, title: "Canvas Paintings", desc: "Bespoke canvas art crafted with devotion and artistic excellence" },
  { icon: Sparkles, title: "Spiritual & Devotional Art", desc: "Sacred visual storytelling rooted in Indian culture and spirituality" },
  { icon: Palette, title: "Traditional Illustration Style", desc: "Traditional Telugu art celebrating feminine grace and village life" },
];

const featuredWorks = [
  { src: galleryMural, alt: "Cafe mural with elephants", category: "" },
  { src: gallerySpiritual, alt: "Ganesha canvas painting", category: "" },
  { src: galleryCanvas, alt: "Temple landscape canvas", category: "" },
  { src: galleryKids, alt: "Kids room wall art", category: "" },
  { src: galleryBapu, alt: "Bapu style painting", category: "" },
];

const whyChoose = [
  { icon: CheckCircle, title: "100% Handcrafted", desc: "Every stroke is painted by hand with love" },
  { icon: Sparkles, title: "Fully Customized", desc: "Designs tailored to your space and vision" },
  { icon: Paintbrush, title: "Premium Materials", desc: "Using Asian Paints for lasting beauty" },
  { icon: Clock, title: "Timely Delivery", desc: "Professional execution within committed timelines" },
];

const processSteps = [
  "Share wall dimensions",
  "Upload wall photo",
  "Share location",
  "Provide reference design",
  "Share budget",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroMural} alt="Krishna Vihari Arts wall mural" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-background mb-6 animate-fade-in leading-tight">
            Where Walls Turn<br />Into <span className="text-gold italic">Stories</span>
          </h1>
          <p className="text-background/80 font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Custom hand-painted murals, canvas paintings & spiritual art that transforms spaces into meaningful experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="text-base px-8 py-3 h-auto">
                Get Custom Artwork
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="text-base px-8 py-3 h-auto border-background/50  hover:bg-background/10">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <p className="font-heading text-2xl md:text-3xl text-foreground/80 italic leading-relaxed max-w-3xl mx-auto">
            "Art is not what you see, but what you make others see."
          </p>
          <p className="mt-6 text-muted-foreground font-body max-w-2xl mx-auto">
            At Krishna Vihari Arts, we believe every wall has a story waiting to be told. Founded with a passion for Indian art and spirituality, we bring your spaces to life through handcrafted visual storytelling.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-warm">
        <div className="container-narrow">
          <SectionHeading title="Our Services" subtitle="From sacred murals to playful kids' rooms, we craft art for every space" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <service.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline">Explore All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading title="Featured Artworks" subtitle="A glimpse into our handcrafted creations" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredWorks.map((work, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
              >
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                  <span className="text-background font-body text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {work.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="gold">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Canvas Preview */}
      <CanvasPreview />

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading title="How It Works" subtitle="Getting your custom artwork is simple" />
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0 justify-between relative">
            {processSteps.map((step, i) => (
              <div key={i} className="flex md:flex-col items-center gap-3 md:gap-2 flex-1 text-center relative">
                {/* Connector line — shown between steps, not after last */}
                {i < processSteps.length - 1 && (
                  <>
                    {/* Desktop horizontal line */}
                    <div className="hidden md:block absolute top-5 left-1/2 w-full h-[2px] bg-gradient-to-r from-gold via-gold/40 to-transparent z-0" />
                    {/* Mobile vertical line */}
                    <div className="md:hidden absolute left-5 top-10 w-[2px] h-full bg-gradient-to-b from-gold via-gold/40 to-transparent z-0" />
                  </>
                )}
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-gold-foreground font-heading font-bold text-sm shrink-0 relative z-10 shadow-md">
                  {i + 1}
                </div>
                <p className="text-foreground font-body text-sm relative z-10">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 p-6 bg-background rounded-lg border border-border">
            <p className="font-heading text-xl text-foreground mb-3">✨ We create your custom artwork & quotation</p>
            <Link to="/contact">
              <Button variant="gold">Start Your Project</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding "
        style={{
          background: "linear-gradient(135deg, #fdf6ec 0%, #fbecd6 50%, #fdf6ec 100%)",
        }}>
        <div className="container-narrow">
          <SectionHeading title="Why Choose Us" subtitle="Trusted by hundreds of happy homes and businesses" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center p-6">
                <item.icon size={32} className="mx-auto mb-4 text-gold" />
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage & Budget */}
      {/* Service Coverage & Budget */}
      <section className="section-padding bg-warm">
        <div className="container-narrow">

          <SectionHeading
            title="Serving Across India 🇮🇳"
            subtitle="Bringing handcrafted art to spaces across cities, homes & businesses"
          />

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Krishna Vihari Arts proudly delivers custom murals and paintings across India.
                From cozy homes to vibrant cafés and spiritual spaces, we create artwork that
                connects deeply with your space and story.
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  <p className="text-sm text-foreground">Projects delivered across multiple cities</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  <p className="text-sm text-foreground">Trusted by homes, cafés & studios</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  <p className="text-sm text-foreground">Travel-ready for meaningful projects</p>
                </div>
              </div>

              <p className="mt-6 text-foreground/80 font-body">
                ✨ Every wall we paint becomes a story that lasts for years.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={panIndia} // you can replace with better wide mural image later
                alt="Wall mural across India"
                className="rounded-xl w-full h-[350px] object-cover shadow-lg"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur px-4 py-2 rounded-lg shadow">
                <p className="text-sm font-medium text-foreground">
                  🇮🇳 Pan India Projects
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding bg-background text-center"
      >
        {/* Gold glow accent */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[200px] rounded-full bg-gold/20 blur-3xl" />
        </div>
        <div className="container-narrow relative z-10">
          <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">Let's Create Together</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            Share your wall details and let us create a masterpiece just for you.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="text-base px-10 py-3 h-auto">
              Get Custom Artwork
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
