import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up-fade">
      <Link to="/contact">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 group px-8 py-6"
        >
          <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
          Free Strategy Call
        </Button>
      </Link>
    </div>
  );
}
