/**
 * Google Tag Manager utilities
 * Provides functions to interact with GTM dataLayer
 */

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export const GTM_ID = import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX';

// Initialize the dataLayer
export const initDataLayer = () => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
};

// Push events to the dataLayer
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  window.dataLayer.push(data);
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  pushToDataLayer({
    event: 'pageview',
    page: url,
    title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  pushToDataLayer({
    event: eventName,
    ...parameters,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
};

// Track link clicks
export const trackLinkClick = (linkText: string, linkUrl: string) => {
  trackEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
  });
};

// Track video interactions
export const trackVideo = (action: 'play' | 'pause' | 'complete', videoName: string) => {
  trackEvent('video_interaction', {
    video_action: action,
    video_name: videoName,
  });
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

// Track search queries
export const trackSearch = (searchTerm: string) => {
  trackEvent('search', {
    search_term: searchTerm,
  });
};

// Track e-commerce events (if applicable)
export const trackPurchase = (transactionId: string, value: number, currency: string = 'INR') => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
  });
};

// Track contact form submissions
export const trackContactFormSubmit = (data: {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  success: boolean;
}) => {
  trackEvent('contact_form_submit', {
    form_type: 'contact',
    success: data.success,
  });
};

// Track quote requests
export const trackQuoteRequest = (serviceType?: string) => {
  trackEvent('quote_request', {
    service_type: serviceType,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
};

// Track service page visits
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
  });
};

// Track case study views
export const trackCaseStudyView = (caseStudyName: string) => {
  trackEvent('case_study_view', {
    case_study_name: caseStudyName,
  });
};

// Enhanced E-commerce tracking for invoice/payment flow
export const trackInvoiceCreated = (invoiceId: string, amount: number) => {
  trackEvent('invoice_created', {
    invoice_id: invoiceId,
    value: amount,
    currency: 'INR',
  });
};

export const trackPaymentInitiated = (invoiceId: string, amount: number, method: string) => {
  trackEvent('payment_initiated', {
    invoice_id: invoiceId,
    value: amount,
    payment_method: method,
    currency: 'INR',
  });
};

export const trackPaymentCompleted = (invoiceId: string, amount: number, method: string) => {
  trackEvent('payment_completed', {
    invoice_id: invoiceId,
    value: amount,
    payment_method: method,
    currency: 'INR',
  });
};

// User engagement metrics
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  trackEvent('time_on_page', {
    duration_seconds: seconds,
    page_path: pagePath,
  });
};

// Track user interactions with ROI calculator
export const trackROICalculation = (result: number) => {
  trackEvent('roi_calculation', {
    calculated_roi: result,
  });
};

// Track newsletter signups
export const trackNewsletterSignup = (email: string) => {
  trackEvent('newsletter_signup', {
    email_provided: !!email,
  });
};

// Initialize GTM on app load
export const initGTM = () => {
  if (typeof window === 'undefined') return;
  
  initDataLayer();
  
  console.log('Google Tag Manager initialized with ID:', GTM_ID);
};
