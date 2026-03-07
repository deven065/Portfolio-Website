import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { initGA, trackPageView } from "@/lib/analytics";
import { initGTM, trackPageView as trackGTMPageView } from "@/lib/gtm";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
const Index = lazy(() => import("./pages/Index"));

// Lazy load other non-critical pages to keep initial bundle small
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const AutomateLeadGenerationN8n = lazy(() => import("./pages/blog/AutomateLeadGenerationN8n"));
const PerformanceOptimizationCaseStudy = lazy(() => import("./pages/blog/PerformanceOptimizationCaseStudy"));
const RoiBusinessAutomation = lazy(() => import("./pages/blog/RoiBusinessAutomation"));
const DentalClinicLosingPatients = lazy(() => import("./pages/blog/DentalClinicLosingPatients"));
const LuxuryInteriorDesignPortfolio = lazy(() => import("./pages/blog/LuxuryInteriorDesignPortfolio"));
const N8nAutomation = lazy(() => import("./pages/N8nAutomation"));
const NicheRealEstate = lazy(() => import("./pages/NicheRealEstate"));
const NicheInteriorDesign = lazy(() => import("./pages/NicheInteriorDesign"));
const NicheDentalClinic = lazy(() => import("./pages/NicheDentalClinic"));
const CreateInvoice = lazy(() => import("./pages/CreateInvoice"));
const InvoiceDashboard = lazy(() => import("./pages/InvoiceDashboard"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Analytics wrapper component
function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA and GTM on first load
    initGA();
    initGTM();
  }, []);

  useEffect(() => {
    // Track page views on route changes (both GA and GTM)
    const fullPath = location.pathname + location.search;
    trackPageView(fullPath);
    trackGTMPageView(fullPath, document.title);
  }, [location]);

  // Track visitor email notifications
  useVisitorTracking();

  return <>{children}</>;
}

// Simple loading fallback for Suspense
const LoadingScale = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HelmetProvider>
          <BrowserRouter>
            <AnalyticsWrapper>
              <ScrollToTop />
              <Suspense fallback={<LoadingScale />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/automate-lead-generation-n8n-guide" element={<AutomateLeadGenerationN8n />} />
                  <Route path="/blog/website-performance-optimization-case-study" element={<PerformanceOptimizationCaseStudy />} />
                  <Route path="/blog/roi-business-automation-real-data" element={<RoiBusinessAutomation />} />
                  <Route path="/blog/dental-clinic-losing-patients-website-audit" element={<DentalClinicLosingPatients />} />
                  <Route path="/blog/luxury-interior-design-portfolio-features" element={<LuxuryInteriorDesignPortfolio />} />
                  <Route path="/services/n8n-automation" element={<N8nAutomation />} />
                  <Route path="/services/real-estate-web-development" element={<NicheRealEstate />} />
                  <Route path="/services/interior-design-web-development" element={<NicheInteriorDesign />} />
                  <Route path="/services/dental-clinic-web-development" element={<NicheDentalClinic />} />
                  <Route path="/create-invoice" element={<CreateInvoice />} />
                  <Route path="/invoices" element={<InvoiceDashboard />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AnalyticsWrapper>
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
