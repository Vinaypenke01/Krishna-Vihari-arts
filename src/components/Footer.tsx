import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import logo from "@/assets/Krishna_Vihari_page-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Krishna Vihari Arts" className="h-20 w-auto mb-3 invert" />
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Where walls turn into stories. Custom hand-painted murals, canvas paintings, and spiritual art that transforms spaces into meaningful experiences.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm font-body"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3 text-sm font-body">
              <a href="https://wa.me/917702541407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="https://instagram.com/krishnavihari_arts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                <Instagram size={16} /> Instagram
              </a>
              <a href="mailto:krishnaartist18@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail size={16} /> krishnaartist18@gmail.com
              </a>
              <p className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin size={16} /> Hyderabad, Telangana, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-center">
          <p className="text-primary-foreground/50 text-sm font-body">
            © {new Date().getFullYear()} Krishna Vihari Arts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
