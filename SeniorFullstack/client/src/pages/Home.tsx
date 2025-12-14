import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import Testimonials from "@/components/sections/Testimonials";
import PricingTable from "@/components/sections/PricingTable";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Partnership from "@/components/sections/Partnership";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ChatBot";
import FloatingCTA from "@/components/FloatingCTA";
import GlobalSEO from "@/components/GlobalSEO";
import SecurityBadges from "@/components/sections/SecurityBadges";
import UseCases from "@/components/sections/UseCases";
import ComparisonTable from "@/components/sections/ComparisonTable";

export default function Home() {
  // Add comprehensive Schema.org structured data for Google, Gemini, ChatGPT and other AI/Search engines
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    // Product/Service Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AxiomHost Web Hosting",
      "description": "Affordable web hosting services in Nigeria partnered with Nairahost",
      "brand": {
        "@type": "Brand",
        "name": "AxiomHost",
        "sameAs": "https://nairahost.com.ng"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter Hosting",
          "price": "500",
          "priceCurrency": "NGN",
          "availability": "https://schema.org/InStock",
          "url": "https://axiomhost.cloud/pricing"
        },
        {
          "@type": "Offer",
          "name": "Premium Hosting",
          "price": "1500",
          "priceCurrency": "NGN",
          "availability": "https://schema.org/InStock",
          "url": "https://axiomhost.cloud/pricing"
        },
        {
          "@type": "Offer",
          "name": "Enterprise Hosting",
          "price": "4500",
          "priceCurrency": "NGN",
          "availability": "https://schema.org/InStock",
          "url": "https://axiomhost.cloud/pricing"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "15000"
      },
      "provider": {
        "@type": "Organization",
        "name": "AxiomHost",
        "partner": "Nairahost"
      }
    };

    // FAQ Schema for rich snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AxiomHost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AxiomHost is an affordable web hosting platform partnered with Nairahost, offering Nigeria's most competitive hosting prices."
          }
        },
        {
          "@type": "Question",
          "name": "How does AxiomHost partnership with Nairahost work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AxiomHost is powered by Nairahost (nairahost.com.ng), combining affordability with enterprise-grade reliability."
          }
        },
        {
          "@type": "Question",
          "name": "What hosting plans are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Starter (₦500/mo), Premium (₦1,500/mo), and Enterprise (₦4,500/mo) plans with free SSL, migrations, and 24/7 support."
          }
        }
      ]
    };

    // Add both schemas to head
    [productSchema, faqSchema].forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup scripts on component unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach((script) => {
        if (script.textContent.includes('"FAQPage"') || script.textContent.includes('"Product"')) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <GlobalSEO />
      <Navbar />
      <main>
        <Hero />
        <Partnership />
        <TrustSignals />
        <SecurityBadges />
        <FeaturesGrid />
        <UseCases />
        <Testimonials />
        <PricingTable />
        <ComparisonTable />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ChatBot />
      <FloatingCTA />
    </div>
  );
}