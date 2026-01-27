import { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PromoFlyer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show flyer on homepage
    if (location.pathname === "/") {
      // Show flyer after 1 second on every page load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200); // Match animation duration
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 z-[100] transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
        style={{ willChange: 'opacity' }}
      />
      
      {/* Flyer Modal */}
      <div 
        className={`fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[101] w-[90%] sm:w-[80%] max-w-lg max-h-[85vh] transition-all duration-200 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-blue-500/50 rounded-xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 rounded-full p-1.5 bg-slate-800/80 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white touch-manipulation"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Decorative Elements - Simplified for mobile */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Content */}
          <div className="relative p-5 sm:p-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-3 py-1.5 mb-3">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-semibold text-blue-400">Limited Time Offer</span>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">
                With Our Digital Solutions
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-300 mb-3 leading-relaxed">
              Get a professional website that drives real results. Our clients see an average <strong className="text-white">5x ROI</strong> and break even within <strong className="text-white">3-4 months</strong>.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-2">
                <div className="text-lg font-bold text-blue-400 mb-0.5">40%+</div>
                <div className="text-xs text-slate-300">Higher Conversion</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-2">
                <div className="text-lg font-bold text-cyan-400 mb-0.5">5-7x</div>
                <div className="text-xs text-slate-300">Average ROI</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-2">
                <div className="text-lg font-bold text-green-400 mb-0.5">3-4 mo</div>
                <div className="text-xs text-slate-300">Break Even</div>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white mb-1">Special Launch Offer</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Book a free consultation this month and get <strong className="text-blue-400">20% off</strong> your first project + <strong className="text-cyan-400">3 months free maintenance</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Link to="/contact" onClick={handleClose} className="flex-1">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 h-9 flex items-center justify-center text-sm touch-manipulation"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link to="/projects" onClick={handleClose} className="flex-1">
                <Button 
                  className="w-full bg-slate-800/80 border border-slate-600/50 hover:bg-slate-700/80 hover:border-slate-500/50 text-white font-semibold rounded-lg h-9 flex items-center justify-center transition-all duration-200 text-sm touch-manipulation"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Small Print */}
            <p className="text-xs text-slate-500 text-center mt-3">
              Offer valid until end of the month. No credit card required for consultation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
