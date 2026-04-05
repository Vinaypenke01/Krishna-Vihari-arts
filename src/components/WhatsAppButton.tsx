import whatsappLogo from "@/assets/whatsapp-logo.jpeg";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917702541407?text=Hi%2C%20I%27m%20interested%20in%20custom%20artwork"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-2 shadow-xl transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-10 h-10 object-contain"
      />
    </a>
  );
};

export default WhatsAppButton;
