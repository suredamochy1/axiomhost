import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, ArrowUpRight, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ChatBot";

interface PricingPlan {
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  billing: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

const hostingTypes: { [key: string]: { label: string; plans: PricingPlan[] } } = {
  "direct-admin-hosting": {
    label: "Direct Admin Hosting",
    plans: [
      {
        name: "Starter",
        price: 500,
        originalPrice: 500,
        discount: "",
        billing: "/month (₦)",
        description: "Perfect for small websites",
        features: [
          "1 GB SSD storage",
          "Unlimited bandwidth",
          "Support for 2 domains",
          "12 email accounts",
          "12 MySQL databases",
          "Free SSL certificate",
          "DirectAdmin control panel",
          "24/7 Nigerian support",
          "Free website migration",
          "99.9% uptime guarantee",
          "Daily automatic backups",
          "Password protected directories",
        ],
        cta: "Get started",
      },
      {
        name: "Premium",
        price: 1500,
        originalPrice: 1500,
        discount: "",
        billing: "/month (₦)",
        description: "Best for growing businesses",
        popular: true,
        features: [
          "5 GB SSD storage",
          "Unlimited bandwidth",
          "Support for 5 domains",
          "100 email accounts",
          "Unlimited MySQL databases",
          "Free SSL certificate",
          "DirectAdmin control panel",
          "24/7 priority support",
          "Free unlimited migrations",
          "99.9% uptime guarantee",
          "Daily automatic backups",
          "Advanced FTP access",
          "Git version control",
        ],
        cta: "Get started",
      },
      {
        name: "Enterprise",
        price: 4500,
        originalPrice: 4500,
        discount: "",
        billing: "/month (₦)",
        description: "For high-traffic websites",
        features: [
          "Unlimited SSD storage",
          "Unlimited bandwidth",
          "Unlimited domains",
          "Unlimited email accounts",
          "Unlimited MySQL databases",
          "Free SSL certificate",
          "DirectAdmin control panel",
          "24/7 dedicated support",
          "Free unlimited migrations",
          "99.99% uptime SLA",
          "Hourly automatic backups",
          "Advanced FTP & SSH access",
          "API access",
        ],
        cta: "Get started",
      },
    ],
  },
  "cpanel-hosting": {
    label: "cPanel Hosting",
    plans: [
      {
        name: "NH cPanel Lite",
        price: 1500,
        originalPrice: 1500,
        discount: "",
        billing: "/month (₦)",
        description: "Perfect for small websites and blogs",
        features: [
          "5 GB NVMe SSD storage",
          "Unlimited bandwidth",
          "1 primary domain",
          "15 sub-domains",
          "12 email accounts",
          "12 MySQL databases",
          "10,000 inodes",
          "Free SSL certificate",
          "cPanel control panel",
          "Softaculous (400+ apps)",
          "24/7 Nigerian support",
          "Daily automatic backups",
          "99.9% uptime guarantee",
        ],
        cta: "Get started",
      },
      {
        name: "NH cPanel Plus",
        price: 2500,
        originalPrice: 2500,
        discount: "",
        billing: "/month (₦)",
        description: "Best for growing businesses",
        popular: true,
        features: [
          "15 GB SSD storage",
          "Unlimited bandwidth",
          "3 primary domains",
          "12 sub-domains",
          "20 email accounts",
          "100 MySQL databases",
          "Unlimited inodes",
          "Free SSL certificate",
          "cPanel control panel",
          "Softaculous (400+ apps)",
          "24/7 priority support",
          "Daily automatic backups",
          "Free website migration",
          "99.9% uptime guarantee",
        ],
        cta: "Get started",
      },
      {
        name: "NH cPanel Turbo",
        price: 5500,
        originalPrice: 5500,
        discount: "",
        billing: "/month (₦)",
        description: "For high-performance websites",
        features: [
          "Unlimited NVMe SSD storage",
          "Unlimited bandwidth",
          "10 primary domains",
          "30 sub-domains",
          "Unlimited email accounts",
          "Unlimited MySQL databases",
          "Unlimited inodes",
          "Free SSL certificates",
          "cPanel control panel",
          "Softaculous (400+ apps)",
          "24/7 dedicated support",
          "Hourly automatic backups",
          "Free unlimited migrations",
          "99.99% uptime SLA",
        ],
        cta: "Get started",
      },
    ],
  },
  "reseller-hosting": {
    label: "Reseller Hosting",
    plans: [
      {
        name: "Starter Reseller",
        price: 7000,
        originalPrice: 7000,
        discount: "",
        billing: "/month (₦)",
        description: "Perfect for freelancers",
        features: [
          "70 GB SSD storage",
          "Host up to 30 client accounts",
          "100,000 monthly bandwidth",
          "Unlimited email accounts",
          "Free domain",
          "Free SSL certificates",
          "DirectAdmin & cPanel variants",
          "WHMCS billing included",
          "Private nameservers",
          "100% white-label",
          "Overselling enabled",
          "24/7 Nigerian support",
          "99.9% uptime guarantee",
          "DDoS Protection",
        ],
        cta: "Get started",
      },
      {
        name: "Pro Reseller",
        price: 12500,
        originalPrice: 12500,
        discount: "",
        billing: "/month (₦)",
        description: "Best for agencies",
        popular: true,
        features: [
          "200 GB SSD storage",
          "Host up to 100 client accounts",
          "Unlimited monthly bandwidth",
          "Unlimited email accounts",
          "Free domain",
          "Unlimited SSL certificates",
          "DirectAdmin & cPanel variants",
          "WHMCS billing included",
          "Private nameservers",
          "100% white-label solution",
          "Overselling enabled",
          "24/7 priority support",
          "99.9% uptime guarantee",
          "DDoS Protection",
        ],
        cta: "Get started",
      },
      {
        name: "Enterprise Reseller",
        price: 20000,
        originalPrice: 20000,
        discount: "",
        billing: "/month (₦)",
        description: "For large-scale operations",
        features: [
          "300 GB SSD storage",
          "Host up to 200 client accounts",
          "Unlimited monthly bandwidth",
          "Unlimited email accounts",
          "Free domain",
          "Unlimited SSL certificates",
          "DirectAdmin & cPanel variants",
          "WHMCS billing included",
          "Private nameservers",
          "100% white-label solution",
          "Overselling enabled",
          "24/7 dedicated support",
          "99.9% uptime SLA",
          "DDoS Protection",
          "Instant setup (1 minute)",
        ],
        cta: "Get started",
      },
    ],
  },
  "wordpress": {
    label: "WordPress",
    plans: [
      {
        name: "NH WP Basic",
        price: 1000,
        originalPrice: 1000,
        discount: "",
        billing: "/month (₦)",
        description: "Perfect for single WordPress website",
        features: [
          "1 Website",
          "5 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Weekly Backups",
          "One-Click WordPress Installer",
          "24/7 WhatsApp Support",
        ],
        cta: "Get started",
      },
      {
        name: "NH WP Advance",
        price: 2500,
        originalPrice: 2500,
        discount: "",
        billing: "/month (₦)",
        description: "Best for growing WordPress businesses",
        popular: true,
        features: [
          "Host 3 Websites",
          "15 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Daily Backups",
          "Auto WordPress Updates",
          "20 Email Accounts",
          "24/7 WhatsApp Support",
        ],
        cta: "Get started",
      },
      {
        name: "NH WP Turbo",
        price: 6500,
        originalPrice: 6500,
        discount: "",
        billing: "/month (₦)",
        description: "For unlimited WordPress hosting",
        features: [
          "Unlimited Websites",
          "Unlimited SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Premium Support",
          "Free .com.ng Domain (Yearly Plan)",
          "Unlimited Email Accounts",
          "Malware Scan + Security Monitor",
          "24/7 WhatsApp Support",
        ],
        cta: "Get started",
      },
    ],
  },
  "web-development": {
    label: "Web Development",
    plans: [
      {
        name: "Basic Web Development",
        price: 80000,
        originalPrice: 80000,
        discount: "",
        billing: "/project (₦)",
        description: "Responsive starter website",
        features: [
          "Up to 5 Pages",
          "Custom Design",
          "Mobile Friendly",
          "Contact Form",
          "Basic SEO Setup",
          "3-5 Days Delivery",
          "Responsive Design",
          "Cross-browser Compatibility",
          "Free SSL Certificate",
          "30-day post-launch support",
          "Perfect for small businesses & startups",
        ],
        cta: "Get started",
      },
      {
        name: "Standard Web Development",
        price: 150000,
        originalPrice: 150000,
        discount: "",
        billing: "/project (₦)",
        description: "Professional website with dynamic features",
        popular: true,
        features: [
          "Up to 10 Pages",
          "Blog or News Section",
          "Admin Dashboard (Basic CMS)",
          "Fully Responsive Design",
          "Brand-Aligned Styling",
          "SSL Enabled",
          "On-Page SEO + Google Index",
          "5-7 Days Delivery",
          "Content Management System",
          "Unlimited Revisions",
          "Great for growing businesses & bloggers",
        ],
        cta: "Get started",
      },
      {
        name: "Premium Web Development",
        price: 400000,
        originalPrice: 400000,
        discount: "",
        billing: "/project (₦)",
        description: "Full-scale custom solutions",
        features: [
          "Unlimited Pages",
          "E-commerce Store (Shop, Cart, Checkout)",
          "Custom CMS or Admin Panel",
          "Multi-language Support",
          "Advanced SEO Setup",
          "Security Features",
          "WhatsApp Integration",
          "UI/UX Optimized",
          "7-14 Days Delivery",
          "Payment Gateway Integration",
          "Unlimited Revisions",
          "₦20,000 setup fee included",
        ],
        cta: "Get started",
      },
    ],
  },
  "managed-hosting": {
    label: "Managed Hosting",
    plans: [
      {
        name: "Managed Basic",
        price: 32000,
        originalPrice: 32000,
        discount: "",
        billing: "/month (₦)",
        description: "Perfect for growing websites",
        features: [
          "2 CPU vCore",
          "2GB ECC RAM",
          "50GB SSD Storage",
          "500GB Monthly Bandwidth",
          "1 Static IPv4 Address",
          "Ubuntu, Debian, CentOS",
          "Free SSL Certificate",
          "Daily Backups",
          "Free Migration",
          "24/7 Expert Support",
          "7-day money-back guarantee",
        ],
        cta: "Get started",
      },
      {
        name: "Managed Pro",
        price: 62000,
        originalPrice: 62000,
        discount: "",
        billing: "/month (₦)",
        description: "Best for medium businesses",
        popular: true,
        features: [
          "4 CPU vCore",
          "4GB ECC RAM",
          "100GB SSD Storage",
          "1TB Monthly Bandwidth",
          "1 Static IPv4 Address",
          "Ubuntu, Debian, CentOS",
          "Free SSL Certificate",
          "Daily Backups",
          "Free Migration",
          "24/7 Expert Support",
          "Advanced Security (WAF + DDoS)",
          "Performance optimization",
          "7-day money-back guarantee",
        ],
        cta: "Get started",
      },
      {
        name: "Managed Enterprise",
        price: 102000,
        originalPrice: 102000,
        discount: "",
        billing: "/month (₦)",
        description: "For enterprise-scale operations",
        features: [
          "8 CPU vCore",
          "8GB ECC RAM",
          "200GB SSD Storage",
          "2TB Monthly Bandwidth",
          "2 Static IPv4 Addresses",
          "Ubuntu, Debian, CentOS",
          "Free SSL Certificate",
          "Daily & Weekly Backups",
          "Free Migration",
          "24/7 Expert Support",
          "Advanced Security (WAF + DDoS)",
          "Dedicated Account Manager",
          "Performance optimization",
          "7-day money-back guarantee",
        ],
        cta: "Get started",
      },
    ],
  },
  "premium-vpn": {
    label: "Premium VPN",
    plans: [
      {
        name: "Android VPN",
        price: 2300,
        originalPrice: 2300,
        discount: "",
        billing: "/month (₦)",
        description: "Perfect for mobile users",
        features: [
          "Unlimited Bandwidth",
          "2 Device Connections",
          "Fast Gaming Performance",
          "Anti-Tracking Protection",
          "Optimized for Android",
          "WireGuard / OpenVPN",
          "2 Cores CPU Power",
          "4 GB Assigned RAM",
          "USA-based servers",
          "Netflix US access",
          "24-hour money-back guarantee",
        ],
        cta: "Get started",
      },
      {
        name: "iPhone VPN",
        price: 3500,
        originalPrice: 3500,
        discount: "",
        billing: "/month (₦)",
        description: "Best for iOS devices",
        popular: true,
        features: [
          "Unlimited Bandwidth",
          "1 Device Connection",
          "High-Speed Streaming",
          "Military-Grade Encryption",
          "Optimized for iPhone & iPad",
          "WireGuard Protocol",
          "1 Core CPU Power",
          "2 GB Assigned RAM",
          "USA-based servers",
          "4K video streaming",
          "No-logs policy",
          "24-hour money-back guarantee",
        ],
        cta: "Get started",
      },
      {
        name: "PC & Mac VPN",
        price: 8500,
        originalPrice: 8500,
        discount: "",
        billing: "/month (₦)",
        description: "For ultimate protection",
        features: [
          "Unlimited Bandwidth",
          "5 Device Connections",
          "P2P & Torrent Friendly",
          "No-Logs Privacy Protection",
          "Works on Windows & macOS",
          "WireGuard / OpenVPN",
          "3 Cores CPU Power",
          "6 GB Assigned RAM",
          "USA-based servers",
          "Netflix & Disney+ access",
          "Banking app compatible",
          "24-hour money-back guarantee",
        ],
        cta: "Get started",
      },
    ],
  },
};

interface Testimonial {
  author: string;
  title: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Sarah Mitchell",
    title: "Small Business Owner",
    text: "AxiomHost gave us the reliability we needed to scale our business. Customer support is amazing!",
    rating: 5,
  },
  {
    author: "David Chen",
    title: "Web Developer",
    text: "Best hosting platform I've used. Fast, reliable, and the pricing is unbeatable.",
    rating: 5,
  },
  {
    author: "Emma Rodriguez",
    title: "E-commerce Founder",
    text: "Our website performance improved immediately after switching. Highly recommended!",
    rating: 5,
  },
];

const benefits = [
  { icon: "🔒", title: "Unlimited SSL", desc: "Free security certificates" },
  { icon: "🌐", title: "Free Domain", desc: "Included with annual plans" },
  { icon: "🎨", title: "Templates", desc: "Professionally designed" },
  { icon: "💾", title: "Auto Backups", desc: "Automatic updates included" },
  { icon: "📧", title: "Email", desc: "Unlimited addresses" },
  { icon: "📊", title: "Traffic", desc: "Unlimited bandwidth" },
];

const faqs = [
  {
    q: "How do I register the free domain included with annual hosting plans?",
    a: "To activate the free domain name included with every annual hosting plan, simply log in to your dashboard, click on the Claim domain button, find your perfect domain, and register it.",
  },
  {
    q: "How do I activate the free SSL certificate?",
    a: "You don't need to do anything. We automatically set up your SSL certificate when you sign up, so you can sit back and relax, safe in the knowledge your site is secure.",
  },
  {
    q: "Can I change my plan, if my circumstances change?",
    a: "Yes, you can easily upgrade your plan if your circumstances change. Our scalable options allow you to seamlessly switch without any downtime.",
  },
  {
    q: "Why do different plans cost different amounts?",
    a: "While all our hosting plans include everything you need to get your website online, alongside performance and security you can rely on, each plan is tailored to suit different needs. We offer a variety of plans to ensure you only pay for what you need.",
  },
  {
    q: "Does AxiomHost offer ecommerce hosting?",
    a: "Yes, we offer a variety of ecommerce plans that include everything you need to open your online store and start selling. All our ecommerce plans include inventory management, multiple payment methods, marketing integrations, and 0% transaction fees, so you keep more of what you make.",
  },
  {
    q: "Can I migrate existing websites to AxiomHost?",
    a: "Yes, you can quickly and easily migrate your existing website to AxiomHost - and it's free. We offer unlimited website migrations service that handles everything and ensures you can transfer your site without any hassle, cost, data loss, or downtime.",
  },
  {
    q: "I have a domain name at a different company. Can I transfer it to AxiomHost?",
    a: "Absolutely. You can transfer your domain name to AxiomHost by following our simple domain transfer process. Then you can manage your domain and hosting services all in one place.",
  },
];

interface ComparisonRow {
  feature: string;
  axiomhost: string | boolean;
  truehost: string | boolean;
  domainKing: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Basic Hosting (Monthly)", axiomhost: "₦500", truehost: "₦800", domainKing: "₦1,000" },
  { feature: "cPanel Hosting", axiomhost: "₦1,500", truehost: "₦2,000", domainKing: "₦2,500" },
  { feature: "Premium Hosting", axiomhost: "₦2,500", truehost: "₦3,500", domainKing: "₦4,000" },
  { feature: "Free SSL Certificate", axiomhost: true, truehost: true, domainKing: true },
  { feature: "Free Website Migration", axiomhost: true, truehost: false, domainKing: true },
  { feature: "24/7 Nigerian Support", axiomhost: true, truehost: true, domainKing: true },
  { feature: "cPanel/DirectAdmin", axiomhost: "Both", truehost: "cPanel Only", domainKing: "cPanel Only" },
  { feature: "NVMe SSD Storage", axiomhost: true, truehost: false, domainKing: false },
  { feature: "Free Domain (.com.ng)", axiomhost: "Annual Plans", truehost: false, domainKing: false },
  { feature: "WordPress Auto-Installer", axiomhost: true, truehost: true, domainKing: true },
  { feature: "Daily Backups", axiomhost: true, truehost: false, domainKing: false },
  { feature: "WhatsApp Support", axiomhost: true, truehost: false, domainKing: false },
  { feature: "Money-Back Guarantee", axiomhost: "7 Days", truehost: "7 Days", domainKing: "7 Days" },
];

const domainComparison: ComparisonRow[] = [
  { feature: ".com.ng Domain (Annual)", axiomhost: "₦6,900", truehost: "₦8,000", domainKing: "₦7,500" },
  { feature: ".ng Domain (Annual)", axiomhost: "₦15,900", truehost: "₦18,000", domainKing: "₦17,500" },
  { feature: ".com Domain (Annual)", axiomhost: "₦15,000", truehost: "₦16,500", domainKing: "₦16,000" },
];

interface WordPressComparisonRow {
  feature: string;
  nairahost: string | boolean;
  bluehost: string | boolean;
  whogohost: string | boolean;
}

const wordpressComparison: WordPressComparisonRow[] = [
  { feature: "Starting Price", nairahost: "₦1,000/mo", bluehost: "₦3,500/mo", whogohost: "₦2,500/mo" },
  { feature: "Pre-installed WordPress", nairahost: true, bluehost: false, whogohost: "Manual" },
  { feature: "Auto Updates", nairahost: "Core + Plugins", bluehost: "Core Only", whogohost: false },
  { feature: "Built-in Caching", nairahost: "Redis + OPcache", bluehost: "Basic", whogohost: "Plugin Required" },
  { feature: "Staging Environment", nairahost: "1-Click", bluehost: "Premium Only", whogohost: false },
  { feature: "Malware Scanning", nairahost: "Daily", bluehost: "Weekly", whogohost: "Manual" },
  { feature: "Backup Frequency", nairahost: "Daily (30 days)", bluehost: "Weekly", whogohost: "Weekly" },
  { feature: "Free Migration", nairahost: true, bluehost: "₦15,000 Fee", whogohost: "₦8,000 Fee" },
  { feature: "SSL Certificate", nairahost: "Free Unlimited", bluehost: "Free", whogohost: "Free" },
  { feature: "WooCommerce Support", nairahost: "Optimized", bluehost: false, whogohost: "Basic" },
  { feature: "Nigerian Support", nairahost: "24/7 WhatsApp + Phone", bluehost: "Email Only", whogohost: "Email + Phone" },
  { feature: "Page Load Time", nairahost: "< 2 seconds", bluehost: "3-4 seconds", whogohost: "2-3 seconds" },
  { feature: "Money-Back Guarantee", nairahost: "7 Days", bluehost: "7 Days", whogohost: "7 Days" },
];

export default function Pricing() {
  const [selectedType, setSelectedType] = useState("direct-admin-hosting");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState("48");

  const currentPlans = hostingTypes[selectedType]?.plans || [];
  const hostingTypeOptions = Object.entries(hostingTypes).map(([key, value]) => ({
    id: key,
    label: value.label,
  }));

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-NG");
  };

  // Add Schema.org structured data for SEO with Nairahost partnership
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "AxiomHost",
      "description": "Affordable web hosting and domain registration in Nigeria, partnered with Nairahost",
      "areaServed": "NG",
      "priceRange": "₦500-₦4,500",
      "memberOf": {
        "@type": "Organization",
        "name": "Nairahost",
        "url": "https://nairahost.com.ng"
      },
      "partner": {
        "@type": "Organization",
        "name": "Nairahost",
        "url": "https://nairahost.com.ng",
        "description": "Premium web hosting and domain registration provider in Nigeria"
      },
      "sameAs": [
        "https://nairahost.com.ng"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "NGN",
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter Web Hosting",
            "price": "500",
            "priceCurrency": "NGN",
            "description": "1 GB SSD storage, 12 email accounts, 2 domains",
            "provider": {
              "@type": "Organization",
              "name": "AxiomHost",
              "partner": "Nairahost"
            }
          },
          {
            "@type": "Offer",
            "name": "Premium Web Hosting",
            "price": "1500",
            "priceCurrency": "NGN",
            "description": "5 GB SSD storage, 100 email accounts, 3 domains",
            "provider": {
              "@type": "Organization",
              "name": "AxiomHost",
              "partner": "Nairahost"
            }
          },
          {
            "@type": "Offer",
            "name": "Enterprise Web Hosting",
            "price": "4500",
            "priceCurrency": "NGN",
            "description": "Unlimited SSD storage, unlimited email accounts",
            "provider": {
              "@type": "Organization",
              "name": "AxiomHost",
              "partner": "Nairahost"
            }
          }
        ]
      },
      "knows": {
        "@type": "Organization",
        "name": "Nairahost",
        "url": "https://nairahost.com.ng"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Simple, Transparent <span className="text-[#EC1C65]">Pricing</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12">
            Choose the perfect hosting plan for your needs. All plans include 30-day money-back guarantee, 24/7 support, and unlimited cancellation.
          </p>

          {/* Guarantee Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-3 bg-slate-900/50 px-6 py-3 rounded-full border border-slate-800 hover:border-[#673DE6] transition-colors">
              <div className="text-[#00D4AA]">✓</div>
              <span className="text-sm font-medium">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/50 px-6 py-3 rounded-full border border-slate-800 hover:border-[#673DE6] transition-colors">
              <div className="text-[#00D4AA]">✓</div>
              <span className="text-sm font-medium">24/7 support</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/50 px-6 py-3 rounded-full border border-slate-800 hover:border-[#673DE6] transition-colors">
              <div className="text-[#00D4AA]">✓</div>
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
          </motion.div>

          {/* Hosting Type Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {hostingTypeOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedType(option.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedType === option.id
                    ? "bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
                data-testid={`pricing-tab-${option.id}`}
              >
                {option.label}
              </button>
            ))}
          </div>

        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden transition-all hover:scale-105 ${
                plan.popular
                  ? "border-4 border-[#673DE6] bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl md:scale-105"
                  : "border border-slate-800 bg-slate-950 hover:border-[#673DE6]"
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                {/* Discount Badge */}
                {plan.discount && (
                  <div className="inline-block bg-[#EC1C65] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {plan.discount}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">₦{formatPrice(Math.round(plan.price))}</span>
                    <span className="text-slate-400">{plan.billing}</span>
                  </div>
                  {plan.originalPrice !== plan.price && (
                    <p className="text-xs text-slate-500 mt-2">
                      Regular price ₦{formatPrice(Math.round(plan.originalPrice))}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="https://my.axiomhost.cloud/index.php?rp=/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-full font-bold mb-8 transition-all text-center ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#673DE6] to-[#EC1C65] hover:shadow-lg hover:shadow-[#673DE6]/50 text-white"
                      : "border border-[#EC1C65] text-[#EC1C65] hover:bg-[#EC1C65]/10"
                  }`}
                  data-testid={`cta-${plan.name.toLowerCase()}`}
                >
                  {plan.cta}
                </a>

                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check size={18} className="text-[#00D4AA] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          {selectedType !== "wordpress" && (
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose AxiomHost Over Competitors?
            </h2>
          )}
          {selectedType === "wordpress" && (
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose Nairahost for WordPress?
            </h2>
          )}

          {/* Hosting Plans Comparison Table - Old General Comparison */}
          {selectedType !== "wordpress" && selectedType !== "domain-registration" && (
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900">
                  <th className="border border-slate-800 px-6 py-4 text-left font-bold">Features</th>
                  <th className="border border-slate-800 px-6 py-4 text-center font-bold bg-gradient-to-b from-[#673DE6]/20 to-transparent">
                    AxiomHost <br />
                    <span className="text-xs text-[#EC1C65]">Best Value</span>
                  </th>
                  <th className="border border-slate-800 px-6 py-4 text-center font-bold">TrueHost</th>
                  <th className="border border-slate-800 px-6 py-4 text-center font-bold">DomainKing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"}>
                    <td className="border border-slate-800 px-6 py-4 font-medium">{row.feature}</td>
                    <td className="border border-slate-800 px-6 py-4 text-center">
                      {typeof row.axiomhost === "boolean" ? (
                        row.axiomhost ? (
                          <Check size={20} className="mx-auto text-[#00D4AA]" />
                        ) : (
                          <X size={20} className="mx-auto text-slate-500" />
                        )
                      ) : (
                        <span className="font-bold text-[#EC1C65]">{row.axiomhost}</span>
                      )}
                    </td>
                    <td className="border border-slate-800 px-6 py-4 text-center">
                      {typeof row.truehost === "boolean" ? (
                        row.truehost ? (
                          <Check size={20} className="mx-auto text-[#00D4AA]" />
                        ) : (
                          <X size={20} className="mx-auto text-slate-500" />
                        )
                      ) : (
                        <span>{row.truehost}</span>
                      )}
                    </td>
                    <td className="border border-slate-800 px-6 py-4 text-center">
                      {typeof row.domainKing === "boolean" ? (
                        row.domainKing ? (
                          <Check size={20} className="mx-auto text-[#00D4AA]" />
                        ) : (
                          <X size={20} className="mx-auto text-slate-500" />
                        )
                      ) : (
                        <span>{row.domainKing}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}

          {/* Domain Comparison Table - REMOVED */}
          {false && (
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Domain Registration (Annual)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-900">
                      <th className="border border-slate-800 px-6 py-4 text-left font-bold">Domain</th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold bg-gradient-to-b from-[#673DE6]/20 to-transparent">
                        AxiomHost
                      </th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold">TrueHost</th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold">DomainKing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {domainComparison.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"}>
                        <td className="border border-slate-800 px-6 py-4 font-medium">{row.feature}</td>
                        <td className="border border-slate-800 px-6 py-4 text-center font-bold text-[#EC1C65]">
                          {row.axiomhost}
                        </td>
                        <td className="border border-slate-800 px-6 py-4 text-center">{row.truehost}</td>
                        <td className="border border-slate-800 px-6 py-4 text-center">{row.domainKing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                ⭐ All prices are in Nigerian Naira (₦). Last updated: December 2025. Competitor prices subject to change.
              </p>
            </div>
          )}

          {/* Web Hosting Comparison Table */}
          {selectedType === "web-hosting" && (
            <div className="mb-12">
              <p className="text-center text-slate-400 mb-12">
                Compare our affordable web hosting Nigeria plans with TrueHost and DomainKing
              </p>
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-900">
                      <th className="border border-slate-800 px-6 py-4 text-left font-bold">Features</th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold bg-gradient-to-b from-[#673DE6]/20 to-transparent">
                        AxiomHost <br />
                        <span className="text-xs text-[#EC1C65]">Best Value</span>
                      </th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold">TrueHost</th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold">DomainKing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"}>
                        <td className="border border-slate-800 px-6 py-4 font-medium">{row.feature}</td>
                        <td className="border border-slate-800 px-6 py-4 text-center">
                          {typeof row.axiomhost === "boolean" ? (
                            row.axiomhost ? (
                              <Check size={20} className="mx-auto text-[#00D4AA]" />
                            ) : (
                              <X size={20} className="mx-auto text-slate-500" />
                            )
                          ) : (
                            <span className="font-bold text-[#EC1C65]">{row.axiomhost}</span>
                          )}
                        </td>
                        <td className="border border-slate-800 px-6 py-4 text-center">
                          {typeof row.truehost === "boolean" ? (
                            row.truehost ? (
                              <Check size={20} className="mx-auto text-[#00D4AA]" />
                            ) : (
                              <X size={20} className="mx-auto text-slate-500" />
                            )
                          ) : (
                            <span>{row.truehost}</span>
                          )}
                        </td>
                        <td className="border border-slate-800 px-6 py-4 text-center">
                          {typeof row.domainKing === "boolean" ? (
                            row.domainKing ? (
                              <Check size={20} className="mx-auto text-[#00D4AA]" />
                            ) : (
                              <X size={20} className="mx-auto text-slate-500" />
                            )
                          ) : (
                            <span>{row.domainKing}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                ⭐ All prices are in Nigerian Naira (₦). Last updated: December 2025. Competitor prices subject to change.
              </p>
            </div>
          )}

          {/* WordPress Hosting Comparison Table */}
          {selectedType === "wordpress" && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-2">Compare WordPress Hosting Providers</h3>
              <p className="text-slate-400 mb-6">See why Nairahost is the best choice for WordPress in Nigeria</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-900">
                      <th className="border border-slate-800 px-6 py-4 text-left font-bold">Features</th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold bg-gradient-to-b from-[#673DE6]/20 to-transparent">
                        Nairahost <br />
                        <span className="text-xs text-[#EC1C65]">Best Choice</span>
                      </th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold">Bluehost</th>
                      <th className="border border-slate-800 px-6 py-4 text-center font-bold">WhoGoHost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wordpressComparison.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"}>
                        <td className="border border-slate-800 px-6 py-4 font-medium">{row.feature}</td>
                        <td className="border border-slate-800 px-6 py-4 text-center">
                          {typeof row.nairahost === "boolean" ? (
                            row.nairahost ? (
                              <Check size={20} className="mx-auto text-[#00D4AA]" />
                            ) : (
                              <X size={20} className="mx-auto text-slate-500" />
                            )
                          ) : (
                            <span className="font-bold text-[#EC1C65]">{row.nairahost}</span>
                          )}
                        </td>
                        <td className="border border-slate-800 px-6 py-4 text-center">
                          {typeof row.bluehost === "boolean" ? (
                            row.bluehost ? (
                              <Check size={20} className="mx-auto text-[#00D4AA]" />
                            ) : (
                              <X size={20} className="mx-auto text-slate-500" />
                            )
                          ) : (
                            <span>{row.bluehost}</span>
                          )}
                        </td>
                        <td className="border border-slate-800 px-6 py-4 text-center">
                          {typeof row.whogohost === "boolean" ? (
                            row.whogohost ? (
                              <Check size={20} className="mx-auto text-[#00D4AA]" />
                            ) : (
                              <X size={20} className="mx-auto text-slate-500" />
                            )
                          ) : (
                            <span>{row.whogohost}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                ⭐ Prices in Nigerian Naira. Data verified November 2025. Competitor prices subject to change.
              </p>
            </div>
          )}
        </motion.div>

        {/* All Plans Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Enjoy all this. At no extra cost.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl p-6 text-center hover:bg-slate-800 transition-colors"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by millions worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-[#673DE6] transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#EC1C65] text-[#EC1C65]" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              Pricing FAQs
            </h2>
            <p className="text-center text-slate-400">
              Have questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full p-6 flex items-center justify-between text-left"
                  data-testid={`faq-button-${idx}`}
                >
                  <span className="font-bold">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-slate-700 text-slate-300"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}
