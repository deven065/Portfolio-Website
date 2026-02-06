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
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
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
        <BrowserRouter>
          <AnalyticsWrapper>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/create-invoice" element={<CreateInvoice />} />
              <Route path="/invoices" element={<InvoiceDashboard />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnalyticsWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
