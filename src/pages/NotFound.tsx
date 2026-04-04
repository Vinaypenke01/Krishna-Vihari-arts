import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="text-center space-y-8">
            {/* 404 Illustration */}
            <div className="relative mb-8">
              <div className="text-9xl font-bold text-gold/20 select-none">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Palette className="w-24 h-24 text-gold animate-bounce" />
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground">Page Not Found</h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                Oops! The page you're looking for seems to have disappeared like a work in progress.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Requested path: <code className="bg-muted px-2 py-1 rounded text-xs font-mono">{location.pathname}</code>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft size={18} />
                Go Back
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                className="bg-gold hover:bg-gold/90 text-gold-foreground gap-2"
              >
                <Home size={18} />
                Return Home
              </Button>
              <Button
                onClick={() => (window.location.href = "/gallery")}
                variant="secondary"
                className="gap-2"
              >
                <Palette size={18} />
                View Gallery
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md mx-auto text-sm">
                <a href="/" className="text-gold hover:text-gold/80 transition-colors">
                  Home
                </a>
                <a href="/gallery" className="text-gold hover:text-gold/80 transition-colors">
                  Gallery
                </a>
                <a href="/about" className="text-gold hover:text-gold/80 transition-colors">
                  About
                </a>
                <a href="/contact" className="text-gold hover:text-gold/80 transition-colors">
                  Contact
                </a>
                <a href="/services" className="text-gold hover:text-gold/80 transition-colors">
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
