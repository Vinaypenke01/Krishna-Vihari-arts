import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import contactBanner from "@/assets/hanuman ji wallpaper.jpeg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    width: "",
    height: "",
    unit: "ft",
    budget: "",
    message: "",
  });

  // ✅ Validation function
  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error("Enter valid 10-digit phone number");
      return false;
    }

    if (!form.width || !form.height) {
      toast.error("Please enter wall dimensions");
      return false;
    }

    if (isNaN(Number(form.width)) || isNaN(Number(form.height))) {
      toast.error("Dimensions must be numbers");
      return false;
    }

    return true;
  };

  // ✅ Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const msg = encodeURIComponent(
      `Hi, I'm interested in custom artwork!

Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}

Wall Size:
Width: ${form.width} ${form.unit}
Height: ${form.height} ${form.unit}

Budget: ${form.budget}

Details:
${form.message}`
    );

    window.open(`https://wa.me/917702541407?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <div className="pt-20">
      {/* Banner Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${contactBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content (ON TOP) */}
        <div className="relative z-10 text-center ">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Share your wall details and let us create a masterpiece for you
          </p>
        </div>

      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Name *
                  </label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Phone *
                  </label>
                  <Input
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-sm font-body text-foreground mb-1 block">
                  Location
                </label>
                <Input
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  placeholder="City / Area"
                />
              </div>

              {/* Dimensions + Unit */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Width *
                  </label>
                  <Input
                    type="number"
                    value={form.width}
                    onChange={(e) =>
                      setForm({ ...form, width: e.target.value })
                    }
                    placeholder="Width"
                  />
                </div>

                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Height *
                  </label>
                  <Input
                    type="number"
                    value={form.height}
                    onChange={(e) =>
                      setForm({ ...form, height: e.target.value })
                    }
                    placeholder="Height"
                  />
                </div>

                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Unit
                  </label>
                  <select
                    value={form.unit}
                    onChange={(e) =>
                      setForm({ ...form, unit: e.target.value })
                    }
                    className="w-full border rounded-md px-3 py-2 bg-background"
                  >
                    <option value="ft">Feet</option>
                    <option value="in">Inches</option>
                    <option value="cm">Centimeters</option>
                    <option value="m">Meters</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="text-sm font-body text-foreground mb-1 block">
                  Budget
                </label>
                <Input
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  placeholder="Your budget range"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-body text-foreground mb-1 block">
                  Additional Details
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Describe your vision, reference designs, or any specific requirements..."
                  rows={4}
                />
              </div>

              {/* Submit */}
              <Button type="submit" variant="gold" className="w-full">
                Send Enquiry via WhatsApp
              </Button>
            </form>

            {/* CONTACT INFO */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Other Ways to Reach Us
                </h3>

                <div className="space-y-4 font-body">
                  <a
                    href="https://wa.me/917702541407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                  >
                    <MessageCircle size={20} className="text-gold" />
                    WhatsApp: +91 7702541407
                  </a>

                  <a
                    href="https://instagram.com/krishnavihari_arts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                  >
                    <Instagram size={20} className="text-gold" />
                    krishnavihari_arts
                  </a>

                  <a
                    href="mailto:[EMAIL_ADDRESS]"
                    className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                  >
                    <Mail size={20} className="text-gold" />
                    krishnaartist18@gmail.com
                  </a>

                  <p className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={20} className="text-gold" />
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

              {/* Process */}
              <div className="bg-warm rounded-lg p-6">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                  Our Process
                </h4>

                <ol className="space-y-2 font-body text-sm text-muted-foreground list-decimal list-inside">
                  <li>Share your wall dimensions & photos</li>
                  <li>Share your location & reference designs</li>
                  <li>We create a custom design & quotation</li>
                  <li>Approve the design & we begin painting</li>
                  <li>Enjoy your transformed space!</li>
                </ol>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;