import { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PromoFlyer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the flyer in this session
    const hasSeenFlyer = sessionStorage.getItem("hasSeenPromoFlyer");
    
    if (!hasSeenFlyer) {
      // Show flyer after 1 second
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenPromoFlyer", "true");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Flyer Modal */}
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[101] w-[90%] max-w-2xl animate-in zoom-in-95 fade-in duration-300">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-blue-500/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 bg-slate-800/80 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative p-8 sm:p-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Limited Time Offer</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">
                With Our Digital Solutions
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
              Get a professional website that drives real results. Our clients see an average <strong className="text-white">5x ROI</strong> and break even within <strong className="text-white">3-4 months</strong>.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">40%+</div>
                <div className="text-sm text-slate-300">Higher Conversion</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-1">5-7x</div>
                <div className="text-sm text-slate-300">Average ROI</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400 mb-1">3-4 mo</div>
                <div className="text-sm text-slate-300">Break Even</div>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Special Launch Offer</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Book a free consultation this month and get <strong className="text-blue-400">20% off</strong> your first project + <strong className="text-cyan-400">3 months free maintenance</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" onClick={handleClose} className="flex-1">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 h-12 flex items-center justify-center"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/projects" onClick={handleClose} className="flex-1">
                <Button 
                  size="lg"
                  className="w-full bg-slate-800/80 border border-slate-600/50 hover:bg-slate-700/80 hover:border-slate-500/50 text-white font-semibold rounded-xl h-12 flex items-center justify-center transition-all duration-200"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Small Print */}
            <p className="text-xs text-slate-500 text-center mt-6">
              Offer valid until end of the month. No credit card required for consultation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
