import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  schema?: object;
  businessInfo?: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
    email: string;
    latitude?: number;
    longitude?: number;
  };
}

export default function SEO({
  title,
  description,
  keywords = "",
  ogImage = "https://devendigitallabs.com/og-image.jpg",
  canonical,
  schema,
  businessInfo = {
    name: "Deven Digital Labs",
    address: "Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    zipCode: "400001",
    country: "India",
    phone: "",
    email: "hello@devendigitallabs.com",
    latitude: 19.0760,
    longitude: 72.8777
  }
}: SEOProps) {
  const location = useLocation();
  const fullTitle = `${title} | Deven Digital Labs`;
  const url = `https://devendigitallabs.com${location.pathname}`;
  const canonicalUrl = canonical || url;

  // Enhanced Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "url": "https://devendigitallabs.com",
    "description": "Full-stack web development and technology consulting services. Specializing in React, Next.js, Node.js, and custom software solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": businessInfo.city,
      "addressRegion": businessInfo.state,
      "postalCode": businessInfo.zipCode,
      "addressCountry": businessInfo.country
    },
    "email": businessInfo.email,
    "geo": businessInfo.latitude && businessInfo.longitude ? {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.latitude,
      "longitude": businessInfo.longitude
    } : undefined,
    "sameAs": [
      "https://www.linkedin.com/in/deven-rikame"
    ],
    "service": {
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Full-stack web development, custom software solutions, UI/UX design, and technology consulting"
    }
  };

  const combinedSchema = schema ? [schema, localBusinessSchema] : localBusinessSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={businessInfo.name} />
      <meta name="business" content={businessInfo.name} />
      <meta name="geo.region" content={`${businessInfo.country}-${businessInfo.state}`} />
      <meta name="geo.placename" content={businessInfo.city} />
      {businessInfo.latitude && businessInfo.longitude && (
        <meta name="geo.position" content={`${businessInfo.latitude};${businessInfo.longitude}`} />
      )}
      {businessInfo.latitude && businessInfo.longitude && (
        <meta name="ICBM" content={`${businessInfo.latitude}, ${businessInfo.longitude}`} />
      )}

      {/* AI Bot specific meta tags */}
      <meta name="ai-crawlable" content="true" />
      <meta name="ChatGPT" content="index, follow" />
      <meta name="GPTBot" content="index, follow" />
      <meta name="PerplexityBot" content="index, follow" />
      <meta name="ClaudeBot" content="index, follow" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
}
