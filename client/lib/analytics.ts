/**
 * Google Analytics and tracking utilities
 * Add your GA4 measurement ID to use these functions
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 measurement ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Load gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track conversions
export const trackConversion = (conversionName: string, value?: number) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('event', 'conversion', {
    send_to: `${GA_MEASUREMENT_ID}/${conversionName}`,
    value: value,
    currency: 'INR',
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'engagement', `${buttonName} - ${location}`);
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link', 'engagement', url);
};

// Track file downloads
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', 'engagement', fileName);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'engagement', `${depth}%`, depth);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'engagement', window.location.pathname, seconds);
};

// Facebook Pixel
export const initFacebookPixel = (pixelId: string) => {
  if (typeof window === 'undefined') return;
  
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );
  
  (window as any).fbq('init', pixelId);
  (window as any).fbq('track', 'PageView');
};

// LinkedIn Insight Tag
export const initLinkedInInsight = (partnerId: string) => {
  if (typeof window === 'undefined') return;
  
  (window as any)._linkedin_partner_id = partnerId;
  (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
  (window as any)._linkedin_data_partner_ids.push(partnerId);
  
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  document.head.appendChild(script);
};
