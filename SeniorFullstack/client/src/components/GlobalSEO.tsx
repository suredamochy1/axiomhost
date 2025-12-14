import { useEffect } from "react";
import { useLocation } from "wouter";

// Global SEO component for AxiomHost
export default function GlobalSEO() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://axiomhost.cloud${location}`);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = `https://axiomhost.cloud${location}`;
      document.head.appendChild(link);
    }

    // Add hreflang tags for international SEO
    const hreflangTags = [
      { lang: "en-US", href: `https://axiomhost.cloud${location}` },
      { lang: "en-NG", href: `https://axiomhost.cloud${location}` },
      { lang: "x-default", href: `https://axiomhost.cloud${location}` },
    ];

    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((tag) => tag.remove());

    // Add new hreflang tags
    hreflangTags.forEach(({ lang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = href;
      document.head.appendChild(link);
    });

    // Add organization schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AxiomHost",
      "url": "https://axiomhost.cloud",
      "logo": "https://axiomhost.cloud/logo.png",
      "description": "AxiomHost - Leading web hosting provider in Nigeria. Fast, secure, and affordable hosting solutions.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "support@axiomhost.cloud",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://www.facebook.com/axiomhost",
        "https://www.twitter.com/axiomhost",
        "https://www.linkedin.com/company/axiomhost"
      ]
    };

    // Remove existing organization schema
    const existingOrgSchema = document.querySelector('script[data-schema="organization"]');
    if (existingOrgSchema) {
      existingOrgSchema.remove();
    }

    // Add organization schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.setAttribute("data-schema", "organization");
    orgScript.textContent = JSON.stringify(orgSchema);
    document.head.appendChild(orgScript);

    // Add WebSite schema with search action
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AxiomHost",
      "url": "https://axiomhost.cloud",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://axiomhost.cloud/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const existingWebsiteSchema = document.querySelector('script[data-schema="website"]');
    if (existingWebsiteSchema) {
      existingWebsiteSchema.remove();
    }

    const websiteScript = document.createElement("script");
    websiteScript.type = "application/ld+json";
    websiteScript.setAttribute("data-schema", "website");
    websiteScript.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    return () => {
      // Cleanup is handled by removing and re-adding
    };
  }, [location]);

  return null;
}

