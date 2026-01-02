import { useEffect } from "react";
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
    address: "123 Tech Street",
    city: "Mumbai",
    state: "Maharashtra", 
    zipCode: "400001",
    country: "India",
    phone: "+91-9876543210",
    email: "hello@devendigitallabs.com",
    latitude: 19.0760,
    longitude: 72.8777
  }
}: SEOProps) {
  const location = useLocation();
  const fullTitle = `${title} | Deven Digital Labs - Full-Stack Web Development & Technology Consulting`;
  const url = `https://devendigitallabs.com${location.pathname}`;
  const canonicalUrl = canonical || url;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", businessInfo.name);
    updateMetaTag("name", "business", businessInfo.name);
    updateMetaTag("name", "geo.region", `${businessInfo.country}-${businessInfo.state}`);
    updateMetaTag("name", "geo.placename", businessInfo.city);
    if (businessInfo.latitude && businessInfo.longitude) {
      updateMetaTag("name", "geo.position", `${businessInfo.latitude};${businessInfo.longitude}`);
      updateMetaTag("name", "ICBM", `${businessInfo.latitude}, ${businessInfo.longitude}`);
    }
    
    updateMetaTag("property", "og:title", fullTitle);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", url);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:site_name", businessInfo.name);
    updateMetaTag("property", "og:locale", "en_US");
    
    updateMetaTag("property", "twitter:card", "summary_large_image");
    updateMetaTag("property", "twitter:title", fullTitle);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", ogImage);
    updateMetaTag("property", "twitter:site", "@devendigitallabs");

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Enhanced Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "url": "https://devendigitallabs.com",
      "description": "Full-stack web development and technology consulting services. Specializing in React, Next.js, Node.js, and custom software solutions.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address,
        "addressLocality": businessInfo.city,
        "addressRegion": businessInfo.state,
        "postalCode": businessInfo.zipCode,
        "addressCountry": businessInfo.country
      },
      "telephone": businessInfo.phone,
      "email": businessInfo.email,
      "geo": businessInfo.latitude && businessInfo.longitude ? {
        "@type": "GeoCoordinates",
        "latitude": businessInfo.latitude,
        "longitude": businessInfo.longitude
      } : undefined,
      "sameAs": [
        "https://www.linkedin.com/company/devendigitallabs",
        "https://github.com/devendigitallabs",
        "https://twitter.com/devendigitallabs"
      ],
      "service": {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Full-stack web development, custom software solutions, UI/UX design, and technology consulting"
      }
    };

    // Add both schemas
    if (schema || localBusinessSchema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaScript);
      }
      
      const combinedSchema = schema ? 
        [schema, localBusinessSchema] : 
        localBusinessSchema;
      
      schemaScript.textContent = JSON.stringify(combinedSchema);
    }
  }, [title, description, keywords, url, canonicalUrl, ogImage, schema, fullTitle, businessInfo]);

  return null;
}

function updateMetaTag(attr: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
