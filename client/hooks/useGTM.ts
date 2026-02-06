import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as GTM from '@/lib/gtm';

/**
 * Custom hook for Google Tag Manager tracking
 * Provides easy access to all GTM tracking functions
 */
export const useGTM = () => {
  const location = useLocation();

  // Track page views automatically on route change
  useEffect(() => {
    GTM.trackPageView(location.pathname + location.search);
  }, [location]);

  // Memoized tracking functions
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    GTM.trackEvent(eventName, parameters);
  }, []);

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    GTM.trackButtonClick(buttonName, location);
  }, []);

  const trackFormSubmit = useCallback((formName: string, success: boolean) => {
    GTM.trackFormSubmit(formName, success);
  }, []);

  const trackLinkClick = useCallback((linkText: string, linkUrl: string) => {
    GTM.trackLinkClick(linkText, linkUrl);
  }, []);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    GTM.trackCTAClick(ctaName, location);
  }, []);

  const trackContactFormSubmit = useCallback((data: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    success: boolean;
  }) => {
    GTM.trackContactFormSubmit(data);
  }, []);

  const trackQuoteRequest = useCallback((serviceType?: string) => {
    GTM.trackQuoteRequest(serviceType);
  }, []);

  const trackServiceView = useCallback((serviceName: string) => {
    GTM.trackServiceView(serviceName);
  }, []);

  const trackCaseStudyView = useCallback((caseStudyName: string) => {
    GTM.trackCaseStudyView(caseStudyName);
  }, []);

  const trackInvoiceCreated = useCallback((invoiceId: string, amount: number) => {
    GTM.trackInvoiceCreated(invoiceId, amount);
  }, []);

  const trackPaymentInitiated = useCallback((invoiceId: string, amount: number, method: string) => {
    GTM.trackPaymentInitiated(invoiceId, amount, method);
  }, []);

  const trackPaymentCompleted = useCallback((invoiceId: string, amount: number, method: string) => {
    GTM.trackPaymentCompleted(invoiceId, amount, method);
  }, []);

  const trackROICalculation = useCallback((result: number) => {
    GTM.trackROICalculation(result);
  }, []);

  const trackNewsletterSignup = useCallback((email: string) => {
    GTM.trackNewsletterSignup(email);
  }, []);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    GTM.trackDownload(fileName, fileType);
  }, []);

  const trackSearch = useCallback((searchTerm: string) => {
    GTM.trackSearch(searchTerm);
  }, []);

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmit,
    trackLinkClick,
    trackCTAClick,
    trackContactFormSubmit,
    trackQuoteRequest,
    trackServiceView,
    trackCaseStudyView,
    trackInvoiceCreated,
    trackPaymentInitiated,
    trackPaymentCompleted,
    trackROICalculation,
    trackNewsletterSignup,
    trackDownload,
    trackSearch,
  };
};
