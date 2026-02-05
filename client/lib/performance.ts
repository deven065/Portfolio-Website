/**
 * Performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  LCP: number | null;
  FID: number | null;
  CLS: number | null;
  FCP: number | null;
  TTFB: number | null;
  loadTime: number | null;
}

// Enhanced Performance Monitoring Class
class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    LCP: null,
    FID: null,
    CLS: null,
    FCP: null,
    TTFB: null,
    loadTime: null,
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    // Wait for page load
    if (document.readyState === 'complete') {
      this.measureBasicMetrics();
    } else {
      window.addEventListener('load', () => this.measureBasicMetrics());
    }

    // Measure Core Web Vitals
    this.measureCoreWebVitals();
  }

  private measureBasicMetrics() {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfData) {
      this.metrics.TTFB = perfData.responseStart - perfData.requestStart;
      this.metrics.loadTime = perfData.loadEventEnd - perfData.fetchStart;
    }

    if (import.meta.env.DEV) {
      this.logMetrics();
    }
  }

  private measureCoreWebVitals() {
    // LCP - Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.LCP = lastEntry.renderTime || lastEntry.loadTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // FID - First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          this.metrics.FID = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.CLS = clsValue;
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }

    // FCP - First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.FCP = entry.startTime;
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // FCP not supported
    }
  }

  private logMetrics() {
    console.group('⚡ Performance Metrics');
    console.log('Core Web Vitals:');
    console.log(`  LCP: ${this.formatTime(this.metrics.LCP)} ${this.getGrade('LCP', this.metrics.LCP)}`);
    console.log(`  FID: ${this.formatTime(this.metrics.FID)} ${this.getGrade('FID', this.metrics.FID)}`);
    console.log(`  CLS: ${this.metrics.CLS?.toFixed(3) || 'N/A'} ${this.getGrade('CLS', this.metrics.CLS)}`);
    console.log(`  FCP: ${this.formatTime(this.metrics.FCP)} ${this.getGrade('FCP', this.metrics.FCP)}`);
    console.log('\nOther:');
    console.log(`  TTFB: ${this.formatTime(this.metrics.TTFB)}`);
    console.log(`  Load Time: ${this.formatTime(this.metrics.loadTime)}`);
    console.log(`  Target: Under 3s ${this.isWithinTarget() ? '✅' : '❌'}`);
    console.groupEnd();
  }

  private formatTime(value: number | null): string {
    if (value === null) return 'N/A';
    return value < 1000 ? `${value.toFixed(0)}ms` : `${(value / 1000).toFixed(2)}s`;
  }

  private getGrade(metric: string, value: number | null): string {
    if (value === null) return '';
    const thresholds: Record<string, { good: number; needs: number }> = {
      LCP: { good: 2500, needs: 4000 },
      FID: { good: 100, needs: 300 },
      CLS: { good: 0.1, needs: 0.25 },
      FCP: { good: 1800, needs: 3000 },
    };
    const t = thresholds[metric];
    if (!t) return '';
    if (value <= t.good) return '✅';
    if (value <= t.needs) return '⚠️';
    return '❌';
  }

  public isWithinTarget(): boolean {
    return this.metrics.loadTime !== null && this.metrics.loadTime < 3000;
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

// Initialize performance monitor
export const performanceMonitor = typeof window !== 'undefined' ? new PerformanceMonitor() : null;

// Web Vitals tracking
export function reportWebVitals(metric: any) {
  // Send to analytics endpoint
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Only log in development
  if (import.meta.env.DEV) {
    console.log(metric);
  }
}

// Lazy load images
export function lazyLoadImages() {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement && img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  const resources = [
    { href: '/logo-white.png', as: 'image' },
  ];

  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    document.head.appendChild(link);
  });
}

// Service Worker registration for PWA
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((error) => {
          console.log('SW registration failed: ', error);
        });
    });
  }
}
