import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import galleryMural from "@/assets/custom-wallart.jpeg";
import galleryCanvas from "@/assets/canvas-service-page.jpeg";
import gallerySpiritual from "@/assets/gallery-spiritual.jpg";
import galleryBapu from "@/assets/gallery-bapu.jpg";
import galleryKids from "@/assets/gallery-kids.jpg";
import servicesBanner from "@/assets/Jay sita ram.jpeg";

const services = [
  {
    title: "Custom Wall Murals",
    desc: "Hand-painted wall murals for homes, offices, cafés, restaurants, and commercial spaces. We create large-scale art that transforms entire rooms into immersive visual experiences.",
    image: galleryMural,
    objectPosition: "center center",
  },
  {
    title: "Canvas Paintings",
    desc: "Bespoke canvas art in various sizes and styles — from traditional Indian landscapes to modern abstract compositions. Perfect as statement pieces for your living spaces.",
    image: galleryCanvas,
    objectPosition: "center top",
  },
  {
    title: "Spiritual & Devotional Art",
    desc: "Sacred art depicting deities, mandalas, and spiritual themes. Created with reverence and deep understanding of Indian iconography for temples, prayer rooms, and meditation spaces.",
    image: gallerySpiritual,
    objectPosition: "center center",
  },
  {
    title: "Kalamkari Illustration Style Paintings",
    desc: "Traditional Telugu art style celebrating feminine grace, village life, and Indian culture. Delicate brushwork and soft pastel tones that capture timeless elegance.",
    image: galleryBapu,
    objectPosition: "center center",
  },
  {
    title: "Kids Room & Theme Art",
    desc: "Whimsical, colorful wall paintings for children's rooms. From fairy tales to nature themes, we create magical environments that spark imagination and joy.",
    image: galleryKids,
    objectPosition: "center center",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      <section
        className="section-padding relative"
        style={{
          backgroundImage: `url(${servicesBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-narrow relative z-10">
          <SectionHeading
            title="Our Services"
            subtitle="From sacred murals to playful kids' rooms — we bring your vision to life"
            className="[&_h2]:text-white [&_p]:text-white/80"
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  // className="rounded-xl shadow-xl w-full aspect-[4/3] object-cover"
                  className="rounded-xl shadow-xl w-full h-[420px] object-cover"
                  style={{ objectPosition: service.objectPosition }}
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/contact">
                  <Button variant="gold">Enquire Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
