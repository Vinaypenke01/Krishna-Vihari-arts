import SectionHeading from "@/components/SectionHeading";
import galleryCanvas from "@/assets/krishna-vihari.jpeg";
import aboutBanner from "@/assets/krishna-vihari-about-banner.jpeg";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="section-padding relative"
        style={{
          backgroundImage: `url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-narrow relative z-10">
          <SectionHeading
            title="Our Story"
            subtitle="A journey of devotion, culture, and artistic passion"
            className="[&_h2]:text-white [&_p]:text-white/80"
          />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl h-[420px] md:h-[500px]">
              <img
                src={galleryCanvas}
                alt="Artist at work"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Art as Emotion & Spirituality
              </h3>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Krishna Vihari Arts was born from a deep love for Indian art, culture, and spirituality. With a background in fine arts from JNAFAU (Jawaharlal Nehru Architecture and Fine Arts University), our founder set out to bring the timeless beauty of traditional Indian art into modern spaces.
                </p>
                <p>
                  Every brushstroke we create carries the essence of devotion — from the sacred imagery of Lord Krishna and Ganesha to the elegant simplicity of Bapu Bommalu paintings. We don't just paint walls; we infuse them with soul.
                </p>
                <p>
                  Our philosophy is simple: art should evoke emotion, tell a story, and transform the energy of a space. Whether it's a home temple, a café wall, or a child's room, we approach every project with the same reverence and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm">
        <div className="container-narrow">
          <SectionHeading title="Our Philosophy" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Devotion", desc: "Art rooted in spiritual traditions, created with reverence and love for Indian heritage" },
              { title: "Craftsmanship", desc: "Every piece is hand-painted with premium materials, ensuring beauty that lasts generations" },
              { title: "Connection", desc: "We create art that connects people to their spaces, culture, and inner peace" },
            ].map((v) => (
              <div key={v.title} className="bg-background rounded-lg p-8 text-center">
                <h4 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h4>
                <p className="text-muted-foreground font-body text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
