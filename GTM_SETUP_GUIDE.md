# Google Tag Manager Setup Guide

## Overview
Google Tag Manager (GTM) has been successfully integrated into your Deven Digital Labs portfolio website. GTM allows you to manage and deploy marketing tags (including Google Analytics, Facebook Pixel, LinkedIn Insight, etc.) without modifying the codebase.

## 🚀 Quick Setup

### Step 1: Get Your GTM Container ID

1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Sign in with your Google account
3. Create a new account/container if you haven't already:
   - **Account Name**: Deven Digital Labs
   - **Container Name**: Portfolio Website
   - **Target Platform**: Web
4. Once created, you'll see your **Container ID** (format: `GTM-XXXXXXX`)

### Step 2: Configure Environment Variables

Open your `.env` file and update the GTM ID:

```env
VITE_GTM_ID=GTM-XXXXXXX  # Replace with your actual GTM Container ID
```

### Step 3: Update HTML Files

The GTM snippets are already added to `index.html`. Update them with your actual GTM ID:

**In `<head>` section:**
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

**In `<body>` section (immediately after opening `<body>` tag):**
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

Replace `GTM-XXXXXXX` with your actual container ID in both places.

### Step 4: Restart Development Server

```bash
npm run dev
# or
pnpm dev
```

## 📊 Setting Up Tags in GTM

### 1. Google Analytics 4 (GA4)

Since you already have GA4 tracking ID (`G-R66PK3QRLV`), you can move it to GTM:

1. In GTM, go to **Tags** → **New**
2. **Tag Configuration**: Choose **Google Analytics: GA4 Configuration**
3. **Measurement ID**: `G-R66PK3QRLV`
4. **Triggering**: All Pages
5. Save and name it "GA4 - All Pages"

### 2. Page View Tracking

Page views are automatically tracked via the `trackPageView` function in the codebase. You can also set up enhanced pageview tracking in GTM:

1. **Tag Type**: GA4 Event
2. **Event Name**: `page_view`
3. **Configuration Tag**: Your GA4 Configuration tag
4. **Trigger**: All Pages

### 3. Custom Event Tracking

The following events are already implemented in the codebase:

- `button_click` - Button interactions
- `form_submit` - Form submissions
- `contact_form_submit` - Contact form submissions
- `cta_click` - Call-to-action clicks
- `link_click` - External link clicks
- `quote_request` - Quote requests
- `service_view` - Service page views
- `case_study_view` - Case study views
- `invoice_created` - Invoice creation
- `payment_initiated` - Payment start
- `payment_completed` - Payment success
- `roi_calculation` - ROI calculator usage
- `newsletter_signup` - Newsletter subscriptions
- `scroll_depth` - Scroll tracking
- `file_download` - File downloads

To track these in GTM:
1. Create a **Custom Event trigger** for each event name
2. Create corresponding **GA4 Event tags**
3. Link them together

## 💻 Usage in Code

### Using the GTM Hook (Recommended)

```tsx
import { useGTM } from '@/hooks/useGTM';

function MyComponent() {
  const { trackButtonClick, trackFormSubmit, trackCTAClick } = useGTM();

  const handleButtonClick = () => {
    trackButtonClick('Get Started', 'Homepage Hero');
    // Your other logic
  };

  const handleFormSubmit = async () => {
    try {
      // Submit form logic
      trackFormSubmit('Contact Form', true);
    } catch (error) {
      trackFormSubmit('Contact Form', false);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      Get Started
    </button>
  );
}
```

### Using GTM Functions Directly

```tsx
import * as GTM from '@/lib/gtm';

// Track custom event
GTM.trackEvent('custom_event', {
  category: 'engagement',
  label: 'hero_interaction',
  value: 1
});

// Track button click
GTM.trackButtonClick('Download Brochure', '/services');

// Track form submission
GTM.trackContactFormSubmit({
  name: 'John Doe',
  email: 'john@example.com',
  success: true
});

// Track CTA click
GTM.trackCTAClick('Free Consultation', 'Header');

// Track payment events
GTM.trackPaymentInitiated('INV-001', 50000, 'razorpay');
GTM.trackPaymentCompleted('INV-001', 50000, 'razorpay');
```

## 🎯 Example Use Cases

### 1. Track Contact Form Submission

```tsx
// In Contact.tsx
import { useGTM } from '@/hooks/useGTM';

function Contact() {
  const { trackContactFormSubmit } = useGTM();

  const handleSubmit = async (data) => {
    try {
      await sendEmail(data);
      trackContactFormSubmit({
        name: data.name,
        email: data.email,
        success: true
      });
    } catch (error) {
      trackContactFormSubmit({
        success: false
      });
    }
  };
}
```

### 2. Track Service Page Views

```tsx
// In Services.tsx
import { useGTM } from '@/hooks/useGTM';
import { useEffect } from 'react';

function Services() {
  const { trackServiceView } = useGTM();

  useEffect(() => {
    trackServiceView('Web Development');
  }, []);
}
```

### 3. Track CTA Clicks

```tsx
// In any component with CTAs
import { useGTM } from '@/hooks/useGTM';

function Hero() {
  const { trackCTAClick } = useGTM();

  return (
    <button 
      onClick={() => trackCTAClick('Get Quote', 'Homepage Hero')}
    >
      Get Free Quote
    </button>
  );
}
```

### 4. Track Payment Flow

```tsx
// In Payment.tsx
import { useGTM } from '@/hooks/useGTM';

function Payment() {
  const { trackPaymentInitiated, trackPaymentCompleted } = useGTM();

  const handlePayment = async () => {
    trackPaymentInitiated(invoiceId, amount, 'razorpay');
    
    const result = await razorpay.pay();
    
    if (result.success) {
      trackPaymentCompleted(invoiceId, amount, 'razorpay');
    }
  };
}
```

## 🔍 Testing GTM Setup

### Method 1: GTM Preview Mode

1. In GTM, click **Preview** button (top right)
2. Enter your website URL: `http://localhost:8080`
3. Browse your site and verify events are firing
4. Check the **Summary** tab for event details

### Method 2: Browser Console

Open browser DevTools console and check:

```javascript
// Check if dataLayer exists
console.log(window.dataLayer);

// Check recent events
console.log(window.dataLayer.slice(-5));
```

### Method 3: Google Tag Assistant

1. Install [Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Click the extension icon
3. Enable recording
4. Interact with your site
5. Review detected tags and events

## 📈 Recommended GTM Tags to Add

1. **Facebook Pixel** - Track conversions and build audiences
2. **LinkedIn Insight Tag** - Track professional audience
3. **Hotjar** - User behavior analytics
4. **Microsoft Clarity** - Session recordings
5. **Google Optimize** - A/B testing
6. **Conversion Tracking** - Track leads and sales

## 🛠️ Advanced Configuration

### Enhanced E-commerce Tracking

For invoice and payment tracking, set up Enhanced E-commerce in GA4:

1. Enable E-commerce in GA4 property settings
2. Create triggers for:
   - `invoice_created`
   - `payment_initiated`
   - `payment_completed`
3. Map these to GA4 purchase events

### Custom Dimensions

Create custom dimensions in GA4 for:
- Service Type
- Invoice ID
- Payment Method
- User Role (Client/Admin)

### Scroll Depth Tracking

Implement scroll depth tracking:

```tsx
import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/gtm';

let tracked25 = false, tracked50 = false, tracked75 = false, tracked100 = false;

useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent >= 25 && !tracked25) {
      trackScrollDepth(25);
      tracked25 = true;
    }
    // Repeat for 50, 75, 100
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 🐛 Troubleshooting

### GTM Not Loading

1. Check browser console for errors
2. Verify GTM ID is correct in `.env` and `index.html`
3. Check if ad blockers are blocking GTM
4. Ensure environment variable is loaded: `console.log(import.meta.env.VITE_GTM_ID)`

### Events Not Firing

1. Use GTM Preview Mode to debug
2. Check browser console for `window.dataLayer`
3. Verify trigger conditions in GTM
4. Check if events are being pushed: `GTM.pushToDataLayer({ test: 'value' })`

### Duplicate Tracking

If you see duplicate events:
- Ensure you're not calling both GA and GTM tracking for the same event
- Consider migrating fully to GTM and removing direct GA calls
- Or keep GA for pageviews and use GTM for custom events

## 📚 Additional Resources

- [GTM Documentation](https://developers.google.com/tag-manager)
- [GA4 Event Tracking](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GTM Best Practices](https://www.analyticsmania.com/google-tag-manager-best-practices/)
- [DataLayer Documentation](https://developers.google.com/tag-manager/devguide)

## ✅ Deployment Checklist

Before going to production:

- [ ] GTM Container ID updated in `.env`
- [ ] GTM Container ID updated in `index.html`
- [ ] GTM Container published (not just saved as Version)
- [ ] All critical tags added and tested
- [ ] Preview mode tested thoroughly
- [ ] GA4 properly configured in GTM
- [ ] Event tracking tested for key user actions
- [ ] Privacy policy updated to mention tracking cookies
- [ ] Cookie consent banner implemented (if required by GDPR/CCPA)

## 🎓 Training Your Team

Share this guide with team members who need to:
- Add new tracking events
- Configure marketing tags
- Analyze user behavior
- Debug tracking issues

---

**Need Help?** Contact the development team or refer to the GTM community forums.
