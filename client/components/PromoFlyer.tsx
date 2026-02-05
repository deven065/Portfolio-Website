import { useState, useEffect } from "react";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PromoFlyer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    businessType: "",
    name: "",
    contact: "",
  });
  const location = useLocation();

  useEffect(() => {
    // Check if popup has already been shown in this session
    const hasShownInSession = sessionStorage.getItem('promoPopupShown');
    if (hasShownInSession) return;

    // Start the timer only once per session
    const timerStarted = sessionStorage.getItem('promoTimerStarted');
    
    if (!timerStarted) {
      // First time - start the timer
      sessionStorage.setItem('promoTimerStarted', Date.now().toString());
    }

    const startTime = parseInt(sessionStorage.getItem('promoTimerStarted') || '0');
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, 10000 - elapsedTime);

    // Check scroll percentage
    const handleScroll = () => {
      const hasShown = sessionStorage.getItem('promoPopupShown');
      if (hasShown) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 45) {
        sessionStorage.setItem('promoPopupShown', 'true');
        setIsOpen(true);
      }
    };

    // Show popup after remaining time
    const timer = setTimeout(() => {
      const hasShown = sessionStorage.getItem('promoPopupShown');
      if (!hasShown) {
        sessionStorage.setItem('promoPopupShown', 'true');
        setIsOpen(true);
      }
    }, remainingTime);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setStep(1);
      setShowSuccess(false);
      setFormData({ businessType: "", name: "", contact: "" });
    }, 200); // Match animation duration
  };

  const handleNext = () => {
    if (formData.businessType) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (formData.name && formData.contact) {
      setIsSubmitting(true);
      
      // Show success immediately for better UX
      setShowSuccess(true);
      
      // Send email in background
      fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          companyName: formData.businessType,
          email: formData.contact.includes('@') ? formData.contact : 'noemail@provided.com',
          phone: formData.contact.includes('@') ? 'Not provided' : formData.contact,
          budget: 'Free Review Request',
          projectDescription: `Free Enquiry Flow Review Request\n\nBusiness Type: ${formData.businessType}\nName: ${formData.name}\nContact: ${formData.contact}\n\nSource: Popup Form`,
        }),
      }).catch(error => {
        console.error('Error sending email:', error);
      });

      // Auto close after 2.5 seconds
      setTimeout(() => {
        handleClose();
      }, 2500);
    }
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
            {/* Success Message */}
            {showSuccess ? (
              <div className="text-center py-8">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Thank you!</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  We will review your enquiry flow and get back to you soon.
                </p>
                <p className="text-sm text-slate-400 mt-4">
                  This popup will close automatically
                </p>
              </div>
            ) : (
              <>
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight text-white">
                  Get a free enquiry flow review for your business
                </h2>

                {/* Sub-heading */}
                <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                  I'll personally check your website / enquiry setup and share 2–3 quick fixes to help you get more genuine enquiries.
                </p>

                {/* Small line (very important) */}
                <p className="text-xs sm:text-sm text-blue-400 font-semibold mb-6">
                  Takes less than 30 seconds.
                </p>

                {/* Step 1: Business Type */}
                {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-slate-300 mb-2">
                    Your business type
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your business type</option>
                    <option value="Real estate">Real estate</option>
                    <option value="Clinic">Clinic</option>
                    <option value="Agency">Agency</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!formData.businessType}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 h-11 flex items-center justify-center text-base touch-manipulation"
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}

            {/* Step 2: Name and Contact */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone OR Email
                  </label>
                  <input
                    type="text"
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Your phone or email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.contact || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 h-11 flex items-center justify-center text-base touch-manipulation"
                >
                  {isSubmitting ? 'Sending...' : 'Get free review'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>

                {/* WhatsApp Option */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-slate-400 mb-2">
                    Prefer WhatsApp? Get the free review on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919833703389?text=Hi%2C%20I'd%20like%20a%20free%20enquiry%20flow%20review%20for%20my%20business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg h-10 px-6 transition-colors touch-manipulation"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="w-full text-sm text-slate-400 hover:text-slate-300 transition-colors"
                >
                  ← Back
                </button>
              </div>
            )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
