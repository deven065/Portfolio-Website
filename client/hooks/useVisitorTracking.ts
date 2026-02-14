import { useEffect } from 'react';

// Bot detection function
function isBot(userAgent: string): boolean {
  const botPatterns = [
    /bot/i, /crawl/i, /spider/i, /slurp/i,
    /google/i, /bing/i, /yahoo/i, /baidu/i,
    /facebook/i, /twitter/i, /linkedin/i,
    /pinterest/i, /whatsapp/i, /telegram/i,
    /lighthouse/i, /pagespeed/i, /gtmetrix/i,
    /uptime/i, /monitor/i, /check/i, /scan/i,
    /curl/i, /wget/i, /python/i, /java/i,
    /axios/i, /node-fetch/i, /got/i,
    /headless/i, /phantom/i, /selenium/i,
    /prerender/i, /preview/i, /vercel/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
}

export function useVisitorTracking() {
  useEffect(() => {
    // Track visitor only once per session
    const hasTracked = sessionStorage.getItem('visitorTracked');
    
    // Skip if already tracked or if it's a bot
    if (hasTracked || isBot(navigator.userAgent)) {
      return;
    }
    
    const trackVisitor = async () => {
      try {
        const visitorData = {
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          location: window.location.pathname,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

          await fetch('/api/track-visitor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitorData),
          });

          // Mark as tracked for this session
          sessionStorage.setItem('visitorTracked', 'true');
        } catch (error) {
          console.error('Failed to track visitor:', error);
        }
      };

    // Track after 2 seconds to ensure page has loaded
    const timer = setTimeout(trackVisitor, 2000);
    return () => clearTimeout(timer);
  }, []);
}
