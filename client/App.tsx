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
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AutomateLeadGenerationN8n from "./pages/blog/AutomateLeadGenerationN8n";
import PerformanceOptimizationCaseStudy from "./pages/blog/PerformanceOptimizationCaseStudy";
import RoiBusinessAutomation from "./pages/blog/RoiBusinessAutomation";
import DentalClinicLosingPatients from "./pages/blog/DentalClinicLosingPatients";
import LuxuryInteriorDesignPortfolio from "./pages/blog/LuxuryInteriorDesignPortfolio";
import N8nAutomation from "./pages/N8nAutomation";
import NicheRealEstate from "./pages/NicheRealEstate";
import NicheInteriorDesign from "./pages/NicheInteriorDesign";
import NicheDentalClinic from "./pages/NicheDentalClinic";
import CreateInvoice from "./pages/CreateInvoice";
import InvoiceDashboard from "./pages/InvoiceDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

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
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnalyticsWrapper>
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
