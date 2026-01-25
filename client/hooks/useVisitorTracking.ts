import { useEffect } from 'react';

export function useVisitorTracking() {
  useEffect(() => {
    // Track visitor only once per session
    const hasTracked = sessionStorage.getItem('visitorTracked');
    
    if (!hasTracked) {
      const trackVisitor = async () => {
        try {
          const visitorData = {
            userAgent: navigator.userAgent,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            location: window.location.pathname,
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
    }
  }, []);
}
