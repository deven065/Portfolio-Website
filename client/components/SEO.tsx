import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  schema?: object;
}

export default function SEO({
  title,
  description,
  keywords = "",
  ogImage = "https://devendigitallabs.com/og-image.jpg",
  canonical,
  schema,
}: SEOProps) {
  const location = useLocation();
  const fullTitle = `${title} | Deven Digital Labs`;
  const url = `https://devendigitallabs.com${location.pathname}`;
  const canonicalUrl = canonical || url;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("property", "og:title", fullTitle);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", url);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "twitter:title", fullTitle);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Add schema if provided
    if (schema) {
      let schemaScript = document.querySelector('script[data-schema="page"]');
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        schemaScript.setAttribute("data-schema", "page");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, url, canonicalUrl, ogImage, schema, fullTitle]);

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
