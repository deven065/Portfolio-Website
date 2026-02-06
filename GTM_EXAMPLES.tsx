/**
 * GTM Tracking Examples
 * Copy and paste these examples into your components
 */

// ========================================
// Example 1: Track Button Clicks in Hero Section
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function HeroSection() {
  const { trackCTAClick } = useGTM();

  return (
    <div className="hero">
      <h1>Welcome to Deven Digital Labs</h1>
      <button 
        onClick={() => {
          trackCTAClick('Get Started', 'Homepage Hero');
          // Navigate to contact page
        }}
        className="cta-button"
      >
        Get Started
      </button>
      
      <button 
        onClick={() => {
          trackCTAClick('View Services', 'Homepage Hero');
          // Navigate to services page
        }}
        className="secondary-button"
      >
        View Services
      </button>
    </div>
  );
}

// ========================================
// Example 2: Track Form Submissions
// ========================================
import { useGTM } from '@/hooks/useGTM';
import { useState } from 'react';

export function ContactForm() {
  const { trackContactFormSubmit } = useGTM();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        trackContactFormSubmit({
          name: formData.name,
          email: formData.email,
          success: true,
        });
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      trackContactFormSubmit({
        success: false,
      });
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}

// ========================================
// Example 3: Track Service Page Views
// ========================================
import { useGTM } from '@/hooks/useGTM';
import { useEffect } from 'react';

export function WebDevelopmentService() {
  const { trackServiceView } = useGTM();

  useEffect(() => {
    // Track when someone views this service
    trackServiceView('Web Development');
  }, [trackServiceView]);

  return (
    <div className="service-page">
      <h1>Web Development Services</h1>
      {/* Service content */}
    </div>
  );
}

// ========================================
// Example 4: Track Link Clicks (External Links)
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function SocialLinks() {
  const { trackLinkClick } = useGTM();

  return (
    <div className="social-links">
      <a
        href="https://github.com/devendigitallabs"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLinkClick('GitHub', 'https://github.com/devendigitallabs')}
      >
        GitHub
      </a>
      
      <a
        href="https://linkedin.com/company/devendigitallabs"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLinkClick('LinkedIn', 'https://linkedin.com/company/devendigitallabs')}
      >
        LinkedIn
      </a>
    </div>
  );
}

// ========================================
// Example 5: Track Quote Requests
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function QuoteRequestButton() {
  const { trackQuoteRequest } = useGTM();

  const handleQuoteClick = (serviceType: string) => {
    trackQuoteRequest(serviceType);
    // Open quote form modal or navigate to quote page
  };

  return (
    <div>
      <button onClick={() => handleQuoteClick('Web Development')}>
        Request Web Dev Quote
      </button>
      <button onClick={() => handleQuoteClick('Mobile App')}>
        Request Mobile App Quote
      </button>
    </div>
  );
}

// ========================================
// Example 6: Track ROI Calculator Usage
// ========================================
import { useGTM } from '@/hooks/useGTM';
import { useState } from 'react';

export function ROICalculator() {
  const { trackROICalculation } = useGTM();
  const [investment, setInvestment] = useState(0);
  const [revenue, setRevenue] = useState(0);

  const calculateROI = () => {
    const roi = ((revenue - investment) / investment) * 100;
    
    // Track the calculation
    trackROICalculation(roi);
    
    return roi;
  };

  return (
    <div className="roi-calculator">
      <input 
        type="number" 
        value={investment} 
        onChange={(e) => setInvestment(Number(e.target.value))}
        placeholder="Investment Amount"
      />
      <input 
        type="number" 
        value={revenue} 
        onChange={(e) => setRevenue(Number(e.target.value))}
        placeholder="Expected Revenue"
      />
      <button onClick={calculateROI}>Calculate ROI</button>
    </div>
  );
}

// ========================================
// Example 7: Track Invoice Creation
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function CreateInvoiceForm() {
  const { trackInvoiceCreated } = useGTM();

  const handleCreateInvoice = async (invoiceData: any) => {
    try {
      const response = await fetch('/api/invoices', {
        method: 'POST',
        body: JSON.stringify(invoiceData),
      });

      const invoice = await response.json();

      if (invoice.id) {
        // Track invoice creation
        trackInvoiceCreated(invoice.id, invoice.amount);
      }
    } catch (error) {
      console.error('Failed to create invoice:', error);
    }
  };

  return (
    <div>
      {/* Invoice form */}
    </div>
  );
}

// ========================================
// Example 8: Track Payment Flow
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function PaymentComponent() {
  const { trackPaymentInitiated, trackPaymentCompleted } = useGTM();

  const handlePayment = async (invoiceId: string, amount: number) => {
    // Track when payment is initiated
    trackPaymentInitiated(invoiceId, amount, 'razorpay');

    try {
      // Razorpay payment logic
      const options = {
        key: 'your_razorpay_key',
        amount: amount * 100,
        currency: 'INR',
        name: 'Deven Digital Labs',
        description: `Payment for Invoice ${invoiceId}`,
        handler: function (response: any) {
          // Track successful payment
          trackPaymentCompleted(invoiceId, amount, 'razorpay');
          alert('Payment successful!');
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <button onClick={() => handlePayment('INV-001', 50000)}>
      Pay Now
    </button>
  );
}

// ========================================
// Example 9: Track Newsletter Signup
// ========================================
import { useGTM } from '@/hooks/useGTM';
import { useState } from 'react';

export function NewsletterSignup() {
  const { trackNewsletterSignup } = useGTM();
  const [email, setEmail] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        trackNewsletterSignup(email);
        alert('Successfully subscribed!');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter signup failed:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

// ========================================
// Example 10: Track File Downloads
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function DownloadButton() {
  const { trackDownload } = useGTM();

  const handleDownload = (fileName: string, fileUrl: string) => {
    // Track the download
    const fileType = fileName.split('.').pop() || 'unknown';
    trackDownload(fileName, fileType);

    // Trigger download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div>
      <button onClick={() => handleDownload('company-brochure.pdf', '/files/brochure.pdf')}>
        Download Brochure
      </button>
      <button onClick={() => handleDownload('case-study.pdf', '/files/case-study.pdf')}>
        Download Case Study
      </button>
    </div>
  );
}

// ========================================
// Example 11: Track Case Study Views
// ========================================
import { useGTM } from '@/hooks/useGTM';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function CaseStudyDetail() {
  const { trackCaseStudyView } = useGTM();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      trackCaseStudyView(id);
    }
  }, [id, trackCaseStudyView]);

  return (
    <div className="case-study">
      {/* Case study content */}
    </div>
  );
}

// ========================================
// Example 12: Track Search (if you implement search)
// ========================================
import { useGTM } from '@/hooks/useGTM';
import { useState } from 'react';

export function SearchBar() {
  const { trackSearch } = useGTM();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim()) {
      // Track the search
      trackSearch(searchTerm);
      
      // Perform search logic
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

// ========================================
// Example 13: Track Custom Events
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function CustomEventExample() {
  const { trackEvent } = useGTM();

  const trackCustomInteraction = () => {
    trackEvent('custom_interaction', {
      interaction_type: 'tooltip_hover',
      element: 'pricing_card',
      duration: 3,
    });
  };

  return (
    <div 
      onMouseEnter={trackCustomInteraction}
      className="pricing-card"
    >
      {/* Content */}
    </div>
  );
}

// ========================================
// Example 14: Track Scroll Depth
// ========================================
import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/gtm';

export function ScrollTrackingPage() {
  const tracked = useRef({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      if (scrolled >= 25 && !tracked.current[25]) {
        trackScrollDepth(25);
        tracked.current[25] = true;
      }
      if (scrolled >= 50 && !tracked.current[50]) {
        trackScrollDepth(50);
        tracked.current[50] = true;
      }
      if (scrolled >= 75 && !tracked.current[75]) {
        trackScrollDepth(75);
        tracked.current[75] = true;
      }
      if (scrolled >= 100 && !tracked.current[100]) {
        trackScrollDepth(100);
        tracked.current[100] = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="long-page">
      {/* Page content */}
    </div>
  );
}

// ========================================
// Example 15: Track Multiple CTAs on Same Page
// ========================================
import { useGTM } from '@/hooks/useGTM';

export function MultiCTAPage() {
  const { trackCTAClick } = useGTM();

  return (
    <div>
      {/* Hero CTA */}
      <section className="hero">
        <button onClick={() => trackCTAClick('Get Started', 'Hero Section')}>
          Get Started
        </button>
      </section>

      {/* Features CTA */}
      <section className="features">
        <button onClick={() => trackCTAClick('Learn More', 'Features Section')}>
          Learn More
        </button>
      </section>

      {/* Pricing CTA */}
      <section className="pricing">
        <button onClick={() => trackCTAClick('Choose Plan', 'Pricing Section')}>
          Choose Plan
        </button>
      </section>

      {/* Footer CTA */}
      <footer>
        <button onClick={() => trackCTAClick('Contact Us', 'Footer')}>
          Contact Us
        </button>
      </footer>
    </div>
  );
}

/**
 * NOTES:
 * 
 * 1. Always import useGTM from '@/hooks/useGTM'
 * 2. Call tracking functions AFTER successful actions
 * 3. Track both success AND failure states for forms
 * 4. Be specific with event names and parameters
 * 5. Don't over-track - focus on meaningful interactions
 * 6. Test tracking in GTM Preview Mode before deploying
 * 7. Document your custom events for team members
 */
