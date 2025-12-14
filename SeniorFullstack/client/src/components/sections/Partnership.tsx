import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Partnership() {
  useEffect(() => {
    // Add structured data for partnership relationship
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Axiomhost",
      "url": "https://axiomhost.cloud",
      "description": "Professional web hosting platform with Black Friday promotions",
      "partner": [
        {
          "@type": "Organization",
          "name": "Nairahost",
          "description": "Bringing world-class hosting to Africa",
          "areaServed": "NG"
        }
      ],
      "sameAs": [
        "https://nairahost.com"
      ]
    };

    // Check if script already exists to prevent duplicates
    const existingScript = document.querySelector('script[data-partnership="true"]');
    if (existingScript) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-partnership", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  return (
    <section className="py-12 bg-white border-y border-slate-100" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="Axiomhost" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
        >
          <span className="text-sm font-medium text-slate-600">In partnership with</span>
          <div className="flex items-center gap-3">
            <a 
              href="https://nairahost.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-3 py-1 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-[#673DE6]/50 transition-shadow cursor-pointer"
              itemProp="partner"
              itemScope
              itemType="https://schema.org/Organization"
              data-testid="link-nairahost"
            >
              <span className="text-white font-black text-sm tracking-tight" itemProp="name">Nairahost</span>
              <meta itemProp="description" content="Bringing world-class hosting to Africa" />
            </a>
          </div>
          <span className="text-xs text-slate-500">Bringing world-class hosting to Africa</span>
        </motion.div>
      </div>
    </section>
  );
}
