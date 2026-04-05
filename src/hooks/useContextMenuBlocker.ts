import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useContextMenuBlocker = () => {
  const location = useLocation();

  useEffect(() => {
    // Pages where right-click should be allowed
    const allowedPages = ["/contact", "/services", "/about"];
    
    // Check if current page is in the allowed list
    const isAllowedPage = allowedPages.includes(location.pathname);

    const handleContextMenu = (e: MouseEvent) => {
      if (!isAllowedPage) {
        e.preventDefault();
        return false;
      }
    };

    const handleCopy = (e: ClipboardEvent) => {
      if (!isAllowedPage) {
        e.preventDefault();
        return false;
      }
    };

    const handleCut = (e: ClipboardEvent) => {
      if (!isAllowedPage) {
        e.preventDefault();
        return false;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAllowedPage) {
        // Block F12 (Developer Tools)
        if (e.key === "F12") {
          e.preventDefault();
          return false;
        }
        // Block Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.key === "I") {
          e.preventDefault();
          return false;
        }
        // Block Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.key === "C") {
          e.preventDefault();
          return false;
        }
        // Block Ctrl+S (Save)
        if (e.ctrlKey && e.key === "s") {
          e.preventDefault();
          return false;
        }
      }
    };

    if (!isAllowedPage) {
      document.addEventListener("contextmenu", handleContextMenu);
      document.addEventListener("copy", handleCopy);
      document.addEventListener("cut", handleCut);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname]);
};
